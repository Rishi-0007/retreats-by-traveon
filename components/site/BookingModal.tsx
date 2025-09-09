"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  IndianRupee,
} from "lucide-react";
import type { Package, Departure } from "@/lib/seed";

interface BookingModalProps {
  pkg: Package;
  children: React.ReactNode;
}

export function BookingModal({ pkg, children }: BookingModalProps) {
  const [selectedDeparture, setSelectedDeparture] = useState<Departure | null>(
    null
  );
  const [travelers, setTravelers] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const formatPrice = (price: number, currency = "INR") => {
    if (currency === "INR") {
      return `₹${price.toLocaleString("en-IN")}`;
    }
    return `${currency} ${price.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const calculateTotal = () => {
    const basePrice = selectedDeparture?.price || pkg.basePrice;
    return basePrice * travelers;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission here
    console.log("Booking submitted:", {
      package: pkg.id,
      departure: selectedDeparture,
      travelers,
      ...formData,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Experience</DialogTitle>
          <DialogDescription>
            Complete your booking for {pkg.title}
          </DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Booking Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Package Summary */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{pkg.duration} days</span>
                  </div>
                </CardContent>
              </Card>

              {/* Select Departure Date */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">
                  Select Your Travel Date
                </Label>
                <div className="space-y-3">
                  {pkg.departures.map((departure, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedDeparture === departure
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      } ${departure.availability === "Sold Out" ? "opacity-50 cursor-not-allowed" : ""}`}
                      onClick={() => {
                        if (departure.availability !== "Sold Out") {
                          setSelectedDeparture(departure);
                        }
                      }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {formatDate(departure.startDate)} -{" "}
                            {formatDate(departure.endDate)}
                          </div>
                          {departure.price && (
                            <div className="text-sm text-muted-foreground mt-1">
                              {formatPrice(departure.price, pkg.currency)} per
                              person
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <Badge
                            variant={
                              departure.availability === "Available"
                                ? "default"
                                : departure.availability === "Limited"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className="text-xs"
                          >
                            {departure.availability}
                          </Badge>
                          {departure.isFeatured && (
                            <Badge className="text-xs bg-yellow-500 text-black">
                              {departure.ctaLabel || "Special Offer"}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Number of Travelers */}
              <div className="space-y-3">
                <Label htmlFor="travelers" className="text-base font-semibold">
                  Number of Travelers
                </Label>
                <Select
                  value={travelers.toString()}
                  onValueChange={(value) => setTravelers(parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {num} {num === 1 ? "Traveler" : "Travelers"}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>

                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Special Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                      value={formData.requirements}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requirements: e.target.value,
                        })
                      }
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="space-y-6">
            {/* Price Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IndianRupee className="h-5 w-5" />
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Package Price</span>
                    <span>
                      {formatPrice(
                        selectedDeparture?.price || pkg.basePrice,
                        pkg.currency
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers</span>
                    <span>x {travelers}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">
                      {formatPrice(calculateTotal(), pkg.currency)}
                    </span>
                  </div>
                </div>

                {selectedDeparture && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm">
                      <div className="font-semibold">Selected Date:</div>
                      <div>
                        {formatDate(selectedDeparture.startDate)} -{" "}
                        {formatDate(selectedDeparture.endDate)}
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  className="w-full"
                  size="lg"
                  disabled={!selectedDeparture}
                  type="submit"
                  form="booking-form"
                >
                  {selectedDeparture ? "Confirm Booking" : "Select a Date"}
                </Button>

                <div className="text-xs text-muted-foreground text-center">
                  By booking, you agree to our terms and conditions
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pkg.amenities.slice(0, 4).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                  {pkg.amenities.length > 4 && (
                    <div className="text-sm text-muted-foreground">
                      +{pkg.amenities.length - 4} more inclusions
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Need Help?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span>bookings@example.com</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  Chat with Expert
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
