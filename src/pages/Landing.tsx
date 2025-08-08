import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Clock, Shield, Car, Building } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              PARKLINK
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connecting Owners with Drivers
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Transform urban parking with our smart platform that connects parking space owners 
              with drivers who need convenient, affordable parking solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/find-parking">
                <Button className="btn-hero text-lg px-8 py-4 min-w-[180px]">
                  <MapPin className="mr-2" size={20} />
                  Find Parking
                </Button>
              </Link>
              <Link to="/owner-signup">
                <Button className="btn-outline-hero text-lg px-8 py-4 min-w-[180px]">
                  <Building className="mr-2" size={20} />
                  List Your Spot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How PARKLINK Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and efficient parking solutions for modern urban life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* For Drivers */}
            <Card className="card-elevated animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4">For Drivers</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Search for parking near your destination</li>
                  <li>• View real-time availability and pricing</li>
                  <li>• Book and pay securely through the app</li>
                  <li>• Get directions to your reserved spot</li>
                </ul>
              </CardContent>
            </Card>

            {/* For Owners */}
            <Card className="card-elevated animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4">For Owners</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• List your unused parking spaces</li>
                  <li>• Set your own hourly rates</li>
                  <li>• Manage availability schedules</li>
                  <li>• Earn passive income from empty spots</li>
                </ul>
              </CardContent>
            </Card>

            {/* Platform Benefits */}
            <Card className="card-elevated animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Secure Platform</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Identity verification for all users</li>
                  <li>• Digital records prevent disputes</li>
                  <li>• 24/7 customer support</li>
                  <li>• Transparent pricing and policies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose PARKLINK?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Making urban parking affordable, accessible, and time-saving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border">
              <Clock className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-sm text-muted-foreground">Live availability and instant booking confirmations</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Smart Location</h3>
              <p className="text-sm text-muted-foreground">Find parking spots near your exact destination</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border">
              <Users className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Verified Community</h3>
              <p className="text-sm text-muted-foreground">All users verified for security and trust</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border">
              <Shield className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Secure Payments</h3>
              <p className="text-sm text-muted-foreground">Direct, secure payments between users</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already discovered smarter parking solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button className="btn-hero text-lg px-8 py-4 min-w-[200px]">
                Join as Driver
              </Button>
            </Link>
            <Link to="/owner-signup">
              <Button className="btn-outline-hero text-lg px-8 py-4 min-w-[200px]">
                Become a Host
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;