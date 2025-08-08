import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Users, 
  Building, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Eye,
  Download,
  Search
} from 'lucide-react';
import { Input } from "@/components/ui/input";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const stats = {
    totalUsers: 1234,
    totalOwners: 456,
    pendingVerifications: 23,
    activeListings: 189
  };

  const pendingDrivers = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit.sharma@email.com",
      submittedAt: "2024-01-15",
      licenseFile: "license_amit.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@email.com",
      submittedAt: "2024-01-14",
      licenseFile: "license_priya.pdf"
    }
  ];

  const pendingOwners = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      location: "MG Road, Bangalore",
      rate: 50,
      submittedAt: "2024-01-15",
      aadhaarFile: "aadhaar_rajesh.jpg"
    }
  ];

  const reportedUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      reason: "No-show for booking",
      reportedBy: "Owner: Alice Smith",
      reportedAt: "2024-01-14"
    }
  ];

  const handleApprove = (type: 'driver' | 'owner', id: number) => {
    console.log(`Approving ${type} with id:`, id);
  };

  const handleReject = (type: 'driver' | 'owner', id: number) => {
    console.log(`Rejecting ${type} with id:`, id);
  };

  const handleBanUser = (id: number) => {
    console.log('Banning user with id:', id);
  };

  const handleViewDocument = (filename: string) => {
    console.log('Viewing document:', filename);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage user verifications and platform operations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Total Drivers</p>
                  <p className="text-2xl font-bold">{stats.totalUsers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Building className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Total Owners</p>
                  <p className="text-2xl font-bold">{stats.totalOwners}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="text-yellow-500" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Pending Verifications</p>
                  <p className="text-2xl font-bold">{stats.pendingVerifications}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" size={24} />
                <div>
                  <p className="text-sm text-muted-foreground">Active Listings</p>
                  <p className="text-2xl font-bold">{stats.activeListings}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="driver-verification" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="driver-verification">Driver Verification</TabsTrigger>
            <TabsTrigger value="owner-verification">Owner Verification</TabsTrigger>
            <TabsTrigger value="user-management">User Management</TabsTrigger>
          </TabsList>

          {/* Driver Verification */}
          <TabsContent value="driver-verification">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="text-primary" size={24} />
                  Pending Driver Verifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingDrivers.map((driver) => (
                    <div key={driver.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{driver.name}</h3>
                          <p className="text-sm text-muted-foreground">{driver.email}</p>
                          <p className="text-xs text-muted-foreground">
                            Submitted: {driver.submittedAt}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDocument(driver.licenseFile)}
                          >
                            <Eye size={16} className="mr-1" />
                            View License
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-600 hover:bg-green-50"
                            onClick={() => handleApprove('driver', driver.id)}
                          >
                            <CheckCircle size={16} className="mr-1" />
                            Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-600 hover:bg-red-50"
                            onClick={() => handleReject('driver', driver.id)}
                          >
                            <XCircle size={16} className="mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Owner Verification */}
          <TabsContent value="owner-verification">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="text-primary" size={24} />
                  Pending Owner Verifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingOwners.map((owner) => (
                    <div key={owner.id} className="border border-border rounded-lg p-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h3 className="font-semibold">{owner.name}</h3>
                          <p className="text-sm text-muted-foreground">{owner.email}</p>
                          <p className="text-sm">
                            <strong>Location:</strong> {owner.location}
                          </p>
                          <p className="text-sm">
                            <strong>Rate:</strong> ₹{owner.rate}/hour
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Submitted: {owner.submittedAt}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDocument(owner.aadhaarFile)}
                          >
                            <Eye size={16} className="mr-1" />
                            View Aadhaar
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-600 hover:bg-green-50"
                            onClick={() => handleApprove('owner', owner.id)}
                          >
                            <CheckCircle size={16} className="mr-1" />
                            Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-600 hover:bg-red-50"
                            onClick={() => handleReject('owner', owner.id)}
                          >
                            <XCircle size={16} className="mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Management */}
          <TabsContent value="user-management">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="text-yellow-500" size={24} />
                  Reported Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {reportedUsers.map((user) => (
                    <div key={user.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-sm">
                            <strong>Reason:</strong> {user.reason}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Reported by: {user.reportedBy} on {user.reportedAt}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">Reported</Badge>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleBanUser(user.id)}
                          >
                            Ban User
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;