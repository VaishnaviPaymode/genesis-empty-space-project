
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProfileSidebar from "@/components/ProfileSidebar";
import { toast } from "sonner";

const CompanyProfile = () => {
  const [formData, setFormData] = useState({
    companyName: "Canspirit AI",
    website: "",
    redirectToHome: false,
    address: "",
    postcode: "",
    city: "",
    country: "India",
    email: "",
    phone: "",
    fax: "",
    representedBy: "",
    taxNumber: "",
    registerNumber: "",
    gln: "",
    useGS1: false,
  });

  const handleSave = () => {
    toast.success("Company profile saved successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
              <span>←</span>
              <span>Back</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 wine-gradient rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">🍇</span>
              </div>
              <span className="font-bold text-xl">e-label.eu</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/company-profile" className="text-foreground font-medium">
              Company profile
            </Link>
            <Link to="/e-labels" className="text-muted-foreground hover:text-foreground">
              E-Labels
            </Link>
            <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">
              Trial phase
            </span>
            <Button onClick={handleSave} className="wine-gradient">
              Save
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex">
        <ProfileSidebar />
        
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Update company profile</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-muted-foreground mb-6">General</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company name</label>
                    <p className="text-sm text-muted-foreground mb-2">What is the name of your company?</p>
                    <Input
                      placeholder="Company name*"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="max-w-2xl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Website</label>
                    <Input
                      placeholder="Company website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="max-w-2xl"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="redirect"
                      checked={formData.redirectToHome}
                      onCheckedChange={(checked) => setFormData({ ...formData, redirectToHome: checked as boolean })}
                    />
                    <label htmlFor="redirect" className="text-sm">
                      Redirect to home page when clicking on the logo
                    </label>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Imprint - Company address</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Address*"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Postcode*"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="City*"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Country*" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="India">🇮🇳 India</SelectItem>
                        <SelectItem value="Germany">🇩🇪 Germany</SelectItem>
                        <SelectItem value="France">🇫🇷 France</SelectItem>
                        <SelectItem value="Italy">🇮🇹 Italy</SelectItem>
                        <SelectItem value="Spain">🇪🇸 Spain</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Input
                      placeholder="E-Mail*"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Fax"
                      value={formData.fax}
                      onChange={(e) => setFormData({ ...formData, fax: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Represented by*"
                      value={formData.representedBy}
                      onChange={(e) => setFormData({ ...formData, representedBy: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Tax Number*"
                      value={formData.taxNumber}
                      onChange={(e) => setFormData({ ...formData, taxNumber: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Register Number (e.g. Commercial Register)*"
                      value={formData.registerNumber}
                      onChange={(e) => setFormData({ ...formData, registerNumber: e.target.value })}
                    />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">GS-1 Digital Link</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  GS-1 Digital Link compliant links can be created by entering the GS-1 Global Location Number (GLN).
                </p>
                
                <Input
                  placeholder="Global Location Number (GLN)"
                  value={formData.gln}
                  onChange={(e) => setFormData({ ...formData, gln: e.target.value })}
                  className="max-w-md mb-4"
                />
                
                <p className="text-sm text-muted-foreground mb-4">
                  If you use the GS-1 Digital Link, QR codes and links are output in GS-1 format. If a product does not have a GTIN, the standard URL format is used.
                </p>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="gs1"
                    checked={formData.useGS1}
                    onCheckedChange={(checked) => setFormData({ ...formData, useGS1: checked as boolean })}
                  />
                  <label htmlFor="gs1" className="text-sm">
                    Use GS-1 Digital Link
                  </label>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
