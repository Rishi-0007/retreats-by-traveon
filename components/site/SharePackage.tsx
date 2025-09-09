"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Copy,
  MessageCircle,
  Check,
} from "lucide-react";
import { useState } from "react";
import type { Package } from "@/lib/seed";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";

interface SharePackageProps {
  pkg: Package;
  className?: string;
}

export function SharePackage({ pkg, className = "" }: SharePackageProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Generate the current URL (would be dynamic in real app)
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://yoursite.com/${pkg.category === "Wellness" ? "retreats" : "tours"}/${pkg.category.toLowerCase()}/${pkg.slug}`;

  const shareData = {
    title: pkg.title,
    description: pkg.summary,
    url: currentUrl,
    image: pkg.heroImage,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const shareOptions = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "hover:bg-blue-50 hover:text-blue-600",
      action: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}&quote=${encodeURIComponent(shareData.description)}`;
        window.open(url, "_blank", "width=600,height=400");
      },
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "hover:bg-sky-50 hover:text-sky-600",
      action: () => {
        const text = `${shareData.title} - ${shareData.description}`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareData.url)}`;
        window.open(url, "_blank", "width=600,height=400");
      },
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "hover:bg-blue-50 hover:text-blue-700",
      action: () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`;
        window.open(url, "_blank", "width=600,height=400");
      },
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "hover:bg-green-50 hover:text-green-600",
      action: () => {
        const text = `Check out this amazing ${pkg.category.toLowerCase()} experience: ${shareData.title}\n\n${shareData.description}\n\n${shareData.url}`;
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
      },
    },
    {
      name: "Email",
      icon: Mail,
      color: "hover:bg-gray-50 hover:text-gray-700",
      action: () => {
        const subject = `Check out: ${shareData.title}`;
        const body = `I thought you might be interested in this ${pkg.category.toLowerCase()} experience:\n\n${shareData.title}\n\n${shareData.description}\n\nLearn more: ${shareData.url}`;
        const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = url;
      },
    },
    {
      name: "Copy Link",
      icon: copied ? Check : Copy,
      color: copied
        ? "hover:bg-green-50 hover:text-green-600"
        : "hover:bg-gray-50 hover:text-gray-700",
      action: copyToClipboard,
    },
  ];

  // Native Web Share API fallback
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareData.title,
          text: shareData.description,
          url: shareData.url,
        });
        setIsOpen(false);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  };

  return (
    <div className={className}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-10 w-10 bg-white/80 backdrop-blur-sm hover:bg-white/90"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-80 p-0" align="end">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Share this experience</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {shareData.title}
            </p>
          </div>

          <div className="p-4">
            {/* Native Share Button (mobile) */}
            {typeof navigator !== "undefined" &&
              typeof navigator.share === "function" && (
                <>
                  <Button
                    onClick={handleNativeShare}
                    className="w-full mb-3"
                    variant="outline"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share...
                  </Button>
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">
                        or share via
                      </span>
                    </div>
                  </div>
                </>
              )}

            {/* Share Options Grid */}
            <div className="grid grid-cols-2 gap-2">
              {shareOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.name}
                    onClick={() => {
                      option.action();
                      if (option.name !== "Copy Link") {
                        setIsOpen(false);
                      }
                    }}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${option.color} text-left`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {option.name === "Copy Link" && copied
                        ? "Copied!"
                        : option.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* URL Display */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground truncate">
                  {shareData.url}
                </span>
                <Badge
                  variant={copied ? "default" : "secondary"}
                  className="text-xs"
                >
                  {copied ? "Copied" : "URL"}
                </Badge>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                This package has been shared 127 times
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
