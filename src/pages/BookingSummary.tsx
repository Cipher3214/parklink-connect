import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  User, 
  Phone, 
  Mail, 
  Calendar,
  CreditCard,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';

const BookingSummary = () => {
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online'>('cash');

  // Mock booking data
  const bookingData = {
    spotId: 1,
    location: "MG Road, Bangalore",
    address: "123 MG Road, Near Metro Station, Bangalore 560001",
    owner: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      email: "rajesh.kumar@email.com",
      rating: 4.8
    },
    booking: {
      date: "2024-01-15",
      timeSlot: "2:00 PM - 6:00 PM",
      duration: 4,
      rate: 50,
      total: 200
    },
    spotDetails: {
      type: "Covered Parking",
      security: "24/7 Security",
      description: "Underground parking with CCTV surveillance"
    }
  };

  const handleConfirmBooking = () => {
    console.log('Booking confirmed with payment method:', paymentMethod);
    // Handle booking confirmation
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/find-parking" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Search
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Parking Spot Info */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="text-primary" size={24} />
                  Parking Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{bookingData.location}</h3>
                  <p className="text-muted-foreground">{bookingData.address}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Parking Type</p>
                    <Badge variant="outline">{bookingData.spotDetails.type}</Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Security</p>
                    <Badge variant="outline">{bookingData.spotDetails.security}</Badge>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-1">Description</p>
                  <p className="text-muted-foreground">{bookingData.spotDetails.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Owner Information */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="text-primary" size={24} />
                  Owner Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{bookingData.owner.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <span>Rating: {bookingData.owner.rating}</span>
                      <span className="text-yellow-500">★</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-muted-foreground" />
                    <span className="text-sm">{bookingData.owner.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-muted-foreground" />
                    <span className="text-sm">{bookingData.owner.email}</span>
                  </div>
                </div>

                <div className="bg-accent/50 border border-accent rounded-lg p-4">
                  <p className="text-sm text-accent-foreground">
                    <strong>Meeting Instructions:</strong> The owner will meet you at the parking entrance. 
                    Please call or message when you arrive.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="text-primary" size={24} />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'cash')}
                      className="text-primary"
                    />
                    <div>
                      <p className="font-medium">Pay in Cash</p>
                      <p className="text-sm text-muted-foreground">Pay directly to the owner at the parking location</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      value="online"
                      checked={paymentMethod === 'online'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'online')}
                      className="text-primary"
                    />
                    <div>
                      <p className="font-medium">Online Payment</p>
                      <p className="text-sm text-muted-foreground">Pay securely through the app (Coming Soon)</p>
                    </div>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-muted-foreground" />
                    <span className="text-sm">{bookingData.booking.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-muted-foreground" />
                    <span className="text-sm">{bookingData.booking.timeSlot}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Duration: {bookingData.booking.duration} hours</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hourly Rate</span>
                    <span>₹{bookingData.booking.rate}/hour</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Duration</span>
                    <span>{bookingData.booking.duration} hours</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total Amount</span>
                    <span className="text-primary">₹{bookingData.booking.total}</span>
                  </div>
                </div>

                <Button 
                  onClick={handleConfirmBooking}
                  className="w-full btn-hero"
                >
                  <CheckCircle className="mr-2" size={18} />
                  Confirm Booking
                </Button>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="space-y-2">
                  <p>• Arrive on time to avoid cancellation</p>
                  <p>• Contact owner if you're running late</p>
                  <p>• Extra charges apply for overstay</p>
                  <p>• Follow parking guidelines</p>
                  <p>• Report any issues immediately</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;