
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen vineyard-pattern">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                The fastest and safest way to the{" "}
                <span className="text-sage-green">EU E-Label</span> for wine.
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Developed with legal experts. Create E-Labels for your wines in just a few minutes, 
                without prior knowledge and at fair prices.
              </p>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="wine-gradient text-lg px-8 py-6 rounded-full" asChild>
                <Link to="/register">Try it out now for free</Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                Register for now and get 3 free e-labels.
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-4">
              <span className="text-sm text-muted-foreground">Supported by</span>
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🇪🇺</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl shadow-2xl">
                <div className="absolute inset-4 bg-white rounded-2xl p-6 space-y-6">
                  <div className="text-center">
                    <h3 className="font-bold text-lg">The Winery</h3>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <span className="text-sm">Language:</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">🇬🇧</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-20 bg-amber-800 rounded"></div>
                      <div>
                        <h4 className="font-semibold">Pinot Noir 2023</h4>
                        <p className="text-sm text-muted-foreground">Quantity: 750 ml</p>
                        <p className="text-sm text-muted-foreground">Grape variety: Pinot No...</p>
                        <p className="text-sm text-muted-foreground">Vintage: 2023</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button size="sm" className="wine-gradient">SCAN ME</Button>
                      <div className="w-16 h-16 bg-black rounded flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded grid grid-cols-3 gap-px">
                          {Array.from({length: 9}).map((_, i) => (
                            <div key={i} className={`bg-black ${Math.random() > 0.5 ? '' : 'bg-white'}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm italic">"The leading technology for the wine industry."</p>
                    <div className="mt-2 text-xs text-muted-foreground">information</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 top-32 bg-white rounded-full p-4 shadow-lg">
                <div className="text-center">
                  <div className="w-8 h-8 bg-sage-green rounded-full mx-auto mb-2"></div>
                  <p className="text-xs font-medium">Attractive service packages</p>
                </div>
              </div>
              
              <div className="absolute -left-8 bottom-32 bg-white rounded-2xl p-4 shadow-lg">
                <p className="text-xs font-medium mb-2">Ingredients</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div>100ml</div>
                  <div>Contains alcohol</div>
                  <div>Grapes, SO₂</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
