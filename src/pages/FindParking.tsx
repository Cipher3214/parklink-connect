import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Clock, DollarSign, User, Navigation, Star } from 'lucide-react';

const FindParking = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  // Mock parking data
  const parkingSpots = [
    {
      id: 1,
      location: "MG Road, Bangalore",
      distance: "0.2 km",
      rate: 50,
      availability: "Available now",
      owner: "Rajesh Kumar",
      rating: 4.8,
      spots: 2,
      description: "Covered parking, 24/7 security",
      timeSlots: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"]
    },
    {
      id: 2,
      location: "Brigade Road, Bangalore",
      distance: "0.5 km",
      rate: 75,
      availability: "Available from 2 PM",
      owner: "Priya Sharma",
      rating: 4.9,
      spots: 1,
      description: "Underground parking, safe and secure",
      timeSlots: ["2:00 PM - 8:00 PM", "8:00 PM - 11:00 PM"]
    },
    {
      id: 3,
      location: "Commercial Street, Bangalore",
      distance: "0.8 km",
      rate: 40,
      availability: "Available now",
      owner: "Mohammed Ali",
      rating: 4.6,
      spots: 3,
      description: "Open parking, easy access",
      timeSlots: ["All day available"]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for parking near:', searchLocation);
  };

  const handleBooking = (spotId: number) => {
    console.log('Booking spot:', spotId);
    // Navigate to booking page
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">
        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                <MapPin className="text-primary" size={28} />
                Find Parking Near You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input
                      type="text"
                      placeholder="Enter your destination (e.g., MG Road, Bangalore)"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button type="submit" className="btn-hero px-8">
                    Search
                  </Button>
                </div>
              </form>

              {/* View Toggle */}
              <div className="flex justify-center mt-6">
                <div className="flex bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    List View
                  </button>
                  <button
                    onClick={() => setViewMode('map')}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      viewMode === 'map' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Map View
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="max-w-6xl mx-auto">
          {viewMode === 'list' ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Available Parking Spots</h2>
                <Badge variant="secondary" className="text-sm">
                  {parkingSpots.length} spots found
                </Badge>
              </div>

              <div className="grid gap-6">
                {parkingSpots.map((spot) => (
                  <Card key={spot.id} className="card-elevated hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Spot Info */}
                        <div className="md:col-span-2 space-y-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">{spot.location}</h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                <span className="flex items-center gap-1">
                                  <Navigation size={14} />
                                  {spot.distance} away
                                </span>
                                <span className="flex items-center gap-1">
                                  <Star size={14} className="text-yellow-500" />
                                  {spot.rating}
                                </span>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              {spot.availability}
                            </Badge>
                          </div>

                          <p className="text-muted-foreground">{spot.description}</p>

                          <div className="flex items-center gap-6 text-sm">
                            <span className="flex items-center gap-1">
                              <User size={14} />
                              Owner: {spot.owner}
                            </span>
                            <span>{spot.spots} spot{spot.spots > 1 ? 's' : ''} available</span>
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm font-medium">Available Time Slots:</p>
                            <div className="flex flex-wrap gap-2">
                              {spot.timeSlots.map((slot, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  <Clock size={12} className="mr-1" />
                                  {slot}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Pricing & Booking */}
                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-1 mb-2">
                              <DollarSign size={20} className="text-primary" />
                              <span className="text-2xl font-bold text-primary">₹{spot.rate}</span>
                              <span className="text-muted-foreground">/hour</span>
                            </div>
                          </div>

                          <Button 
                            onClick={() => handleBooking(spot.id)}
                            className="w-full btn-hero"
                          >
                            Book This Spot
                          </Button>

                          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            /* Map View */
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="text-primary mx-auto" size={48} />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-muted-foreground">
                      Map integration would show parking spots with real-time availability
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Quick Filters */}
        <div className="max-w-6xl mx-auto mt-8">
          <Card className="card-elevated">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-sm font-medium">Quick Filters:</span>
                <Button variant="outline" size="sm" className="text-xs">
                  Available Now
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Under ₹50/hour
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Covered Parking
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  24/7 Access
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FindParking;