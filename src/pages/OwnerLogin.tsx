import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Lock, Building, MapPin, DollarSign, Clock, ArrowLeft, CreditCard } from 'lucide-react';

const OwnerLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    aadhaarCard: null as File | null,
    location: '',
    description: '',
    availability: '',
    hourlyRate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, aadhaarCard: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Owner form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <Card className="card-elevated animate-scale-in">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
              <Building className="text-primary-foreground" size={28} />
            </div>
            <CardTitle className="text-2xl font-bold">
              {isLogin ? 'Owner Login' : 'Owner Registration'}
            </CardTitle>
            <p className="text-muted-foreground">
              {isLogin 
                ? 'Welcome back! Manage your parking spaces.' 
                : 'Start earning by listing your unused parking spaces.'
              }
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aadhaarCard">Aadhaar Card</Label>
                    <Input
                      id="aadhaarCard"
                      name="aadhaarCard"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-primary-foreground file:font-medium hover:file:bg-primary-dark"
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      Upload a clear photo or PDF of your Aadhaar card for identity verification
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Parking Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Input
                          id="location"
                          name="location"
                          type="text"
                          placeholder="Enter full address"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hourlyRate">Hourly Rate (₹)</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Input
                          id="hourlyRate"
                          name="hourlyRate"
                          type="number"
                          placeholder="Enter rate per hour"
                          value={formData.hourlyRate}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                          min="1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability Timings</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        id="availability"
                        name="availability"
                        type="text"
                        placeholder="e.g., Mon-Fri 9:00 AM - 6:00 PM"
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Parking Space Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Describe your parking space (size, type, special instructions, etc.)"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="bg-accent/50 border border-accent rounded-lg p-4">
                    <h4 className="font-medium text-accent-foreground mb-2">Verification & Approval</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Admin will manually verify your Aadhaar card</li>
                      <li>• Your parking listing will be reviewed for accuracy</li>
                      <li>• Approval process typically takes 24-48 hours</li>
                      <li>• You'll receive email updates on the status</li>
                    </ul>
                  </div>
                </>
              )}

              <Button type="submit" className="w-full btn-hero">
                {isLogin ? 'Sign In' : 'Register as Owner'}
              </Button>
            </form>

            <div className="text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary-light transition-colors font-medium"
              >
                {isLogin 
                  ? "New owner? Register here" 
                  : "Already registered? Sign in"
                }
              </button>
            </div>

            <div className="text-center">
              <Link 
                to="/login" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Looking for parking? Driver login here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OwnerLogin;