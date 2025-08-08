import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Code, 
  Database, 
  Server,
  Globe,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: "Shlok Aher", role: "Full Stack Developer" },
    { name: "Yooshe Ansari", role: "Backend Developer" },
    { name: "Nakul Bhatt", role: "Frontend Developer" }
  ];

  const technologies = [
    { name: "JSP", icon: Code, category: "Frontend" },
    { name: "Servlets", icon: Server, category: "Backend" },
    { name: "HTML5 & CSS3", icon: Globe, category: "Frontend" },
    { name: "MySQL", icon: Database, category: "Database" },
    { name: "Bootstrap", icon: Code, category: "UI Framework" },
    { name: "Apache Tomcat", icon: Server, category: "Server" }
  ];

  const objectives = [
    "Provide a platform for owners to list parking spaces",
    "Enable self-booking for renters",
    "Offer real-time availability of parking spots",
    "Maintain digital records to prevent disputes"
  ];

  const impacts = [
    "Reduces workload & stress for security guards",
    "Increases transparency and accountability in parking",
    "Improves convenience for vehicle owners and renters",
    "Supports eco-friendly practices by reducing paper usage",
    "Lays foundation for future automation (QR-based entry, smart gates)"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            About PARKLINK
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Digitizing parking management for residential societies, offices, and commercial complexes
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="text-primary" size={24} />
                Project Aim & Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">AIM:</h3>
                <p className="text-muted-foreground">
                  To digitize parking management for residential societies, offices, and commercial complexes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">OBJECTIVES:</h3>
                <ul className="space-y-2">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="text-primary" size={24} />
                Problem & Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Urban Parking Problem:</h3>
                <p className="text-muted-foreground">
                  Increasing vehicles but limited parking spaces in cities, with many private spaces remaining unused.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Current System Issues:</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Manual logging & physical record-keeping</li>
                  <li>• No real-time updates, high human dependency</li>
                  <li>• Frequent conflicts in bookings & usage</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Our Solution:</h3>
                <p className="text-muted-foreground">
                  A web application where owners can list vacant parking spots and drivers can search, book, and pay for these spots easily.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Impact */}
        <Card className="card-elevated mb-12">
          <CardHeader>
            <CardTitle className="text-center">Social Impact & Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {impacts.map((impact, index) => (
                <div key={index} className="flex items-start gap-2 p-4 bg-accent/50 rounded-lg">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm">{impact}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card className="card-elevated mb-12">
          <CardHeader>
            <CardTitle className="text-center">Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                  <tech.icon className="text-primary mx-auto mb-2" size={32} />
                  <h3 className="font-semibold">{tech.name}</h3>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {tech.category}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Users className="text-primary" size={24} />
              Development Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center p-6 bg-gradient-subtle rounded-lg">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Flow */}
        <Card className="card-elevated mt-12">
          <CardHeader>
            <CardTitle className="text-center">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-primary">For Drivers:</h3>
                <ol className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span>
                    Sign up & upload Driving License photo
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
                    Admin verifies within 24 hours
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                    Enter destination → View nearby available parking
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">4</span>
                    Book slot for required time
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-primary">For Owners:</h3>
                <ol className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span>
                    List empty parking space with details
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
                    Upload Aadhaar card for verification
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                    Admin manually approves the listing
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">4</span>
                    Set location, availability timings & hourly price
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;