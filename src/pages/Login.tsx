
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Simulate login
    toast.success("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen vineyard-pattern flex">
      <div className="flex-1 hidden lg:block relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0z\" fill=\"%23ffffff\" fill-opacity=\"0.1\"/%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="absolute bottom-0 left-0 right-0 h-2/3">
            <div className="h-full flex items-end justify-center">
              <div className="space-y-4 text-center">
                <div className="text-6xl">🍇</div>
                <h2 className="text-2xl font-bold text-amber-900">Welcome back to your vineyard</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 wine-gradient rounded flex items-center justify-center">
                <span className="text-white font-bold">🍇</span>
              </div>
              <span className="text-2xl font-bold">e-label.eu</span>
            </div>
            <p className="text-sm text-muted-foreground">BY IMERO</p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground">📧</span>
                    <Input
                      type="email"
                      placeholder="handalvaishnavi@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground">🔒</span>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 wine-gradient text-white font-medium">
                  Login with Mail
                </Button>

                <div className="flex justify-between text-sm">
                  <Link to="/register" className="text-sage-green hover:underline">
                    Register
                  </Link>
                  <Link to="/forgot-password" className="text-sage-green hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <div className="text-center">
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center space-x-2">
                    <span>←</span>
                    <span>Back to the start page</span>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
