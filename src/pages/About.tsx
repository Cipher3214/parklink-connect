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
    { name: "Shlok Aher" },
    { name: "Nakul Bhatt" },
    { name: "Yooshe Ansari" }
  ];

  const technologies = [
    { name: "React", icon: Code, category: "Frontend" },
    { name: "TypeScript", icon: Code, category: "Language" },
    { name: "JavaScript", icon: Code, category: "Language" },
    { name: "Tailwind CSS", icon: Globe, category: "Styling" },
    { name: "Vite", icon: Server, category: "Build Tool" },
    { name: "Node.js", icon: Server, category: "Runtime" },
    { name: "JSP", icon: Code, category: "Backend (Planned)" },
    { name: "Servlets", icon: Server, category: "Backend (Planned)" },
    { name: "MySQL", icon: Database, category: "Database (Planned)" },
    { name: "Apache Tomcat", icon: Server, category: "Server (Planned)" }
  ];

  const objectives = [
    "Provide a platform for owners to list parking spaces",
    "Enable self-booking for renters",
    "Offer real-time availability of parking spots",
    "Maintain digital records to prevent disputes"
  ];

  const impacts = [
    {
      title: "🚗 Reduces Urban Traffic Congestion",
      description: "In crowded cities, 20–30% of traffic is caused by drivers searching for parking. PARKLINK allows users to pre-book spots, leading to faster parking, less road circling, and smoother traffic flow near malls, stations, and societies."
    },
    {
      title: "📈 Improves Personal & Local Economy", 
      description: "Parking owners can earn passive income by renting out unused spots. Especially helpful for middle-class families in urban housing societies and small shop owners with idle parking space. Turns an underused space into a micro-rental business model."
    },
    {
      title: "🔄 Creates a Circular Economy in Urban Spaces",
      description: "Rather than building more parking lots (which costs money & land), PARKLINK reuses already existing spaces, promotes shared urban infrastructure, and reduces environmental footprint."
    },
    {
      title: "💰 Brings Financial Inclusion to Ordinary People",
      description: "Even without technical knowledge or high investment, any verified person can start earning. PARKLINK acts as a gateway to digital finance for people who would otherwise not benefit from tech platforms."
    },
    {
      title: "🧠 Reduces Stress & Decision Fatigue",
      description: "Drivers often experience frustration and mental fatigue trying to find parking. PARKLINK's system minimizes uncertainty, offers clarity on availability, price, and location in advance, making urban travel more predictable and calm."
    },
    {
      title: "🔒 Increases Safety & Accountability",
      description: "Verified users (via Aadhaar and License uploads) and digital logs of bookings, payments, and user behavior reduce chances of unauthorized parking, parking fights, and damage to vehicles due to unclear parking arrangements."
    },
    {
      title: "🌱 Supports Environmental Sustainability",
      description: "Less time on roads = Less fuel waste = Lower carbon emissions. Digital logs mean no paper slips, registers, or manual lists."
    },
    {
      title: "🧾 Supports Government Goals & Smart Cities",
      description: "Aligned with India's Digital India, Smart Cities Mission, and Startup India goals. Can easily integrate with QR-based gates, IoT systems, and e-Governance APIs."
    }
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
            <div className="grid lg:grid-cols-2 gap-6">
              {impacts.map((impact, index) => (
                <div key={index} className="p-6 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                  <h3 className="font-semibold text-lg mb-3 text-primary">{impact.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{impact.description}</p>
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