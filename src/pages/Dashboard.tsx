
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 wine-gradient rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">🍇</span>
            </div>
            <span className="font-bold text-xl">e-label.eu</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/company-profile" className="text-muted-foreground hover:text-foreground">
              Company profile
            </Link>
            <Link to="/e-labels" className="text-muted-foreground hover:text-foreground">
              E-Labels
            </Link>
            <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">
              Trial phase
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">E-labels and collective QR codes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link to="/e-labels">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center text-2xl">
                    🍷
                  </div>
                  <CardTitle className="text-3xl font-bold">2</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">No. of E-Labels</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center text-2xl">
                  📱
                </div>
                <CardTitle className="text-3xl font-bold">0</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">No. of collective QR codes</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center text-2xl">
                  ⬆️
                </div>
                <CardTitle className="text-xl font-bold">Upgrade</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Need more E-Labels?</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-orange-200 bg-orange-50" asChild>
              <Link to="/company-profile">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center text-2xl text-orange-600">
                    ⚠️
                  </div>
                  <CardTitle className="text-lg font-bold text-orange-800">Missing information in the imprint</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-orange-700 text-sm">Please complete the company address details</p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Do you have any questions? Or would you like to share your feedback, ideas and wishes with us?</h3>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 mx-auto mb-2 bg-sage-green rounded-full flex items-center justify-center">
                  <span className="text-white">👤</span>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="font-medium mb-2">Do you need assistance?</h3>
                <Button variant="outline" size="sm">
                  Book a free intro
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center text-2xl">
                  ▶️
                </div>
                <CardTitle className="text-lg">Video Tutorials & Webinars</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Here you will find instructions on how to use the IMERO Studio optimally.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center text-2xl">
                  ⭐
                </div>
                <CardTitle className="text-lg">Recommend us to others</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">For every friend you refer, you will receive €50 credit and your friend will receive €20.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
