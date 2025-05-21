import React, { useState } from "react";
import { User, Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Simple validation - replace with actual authentication logic
      if (!email || !password) {
        setIsError(true);
        setErrorMessage("Please enter both email and password");
        setIsLoading(false);
        return;
      }

      // For demo purposes only - would be replaced with actual authentication
      console.log("Login attempt with:", { email, rememberMe });
      setIsLoading(false);

      // Redirect would happen here after successful login
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden">
        {/* Left section - Brand visual */}
        <div className="bg-gradient-to-br from-blue-600 via-yellow-400 to-gray-900 w-full md:w-2/5 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-white text-3xl font-bold">
              Electrical Solution Company
            </h2>
            <p className="text-white mt-2 text-sm">MEP Services since 2016</p>
          </div>

          <div className="hidden md:block">
            {/* SVG illustration for electrical/construction theme */}
            <svg
              className="w-full h-auto"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgba(255,255,255,0.15)"
                d="M39.5,-51.2C50.9,-41.8,59.5,-29.5,64.2,-15.1C68.8,-0.7,69.4,15.8,62.8,28.5C56.1,41.2,42.2,50.1,27.5,56.9C12.9,63.6,-2.4,68.3,-15.6,64.9C-28.8,61.6,-39.8,50.2,-49.1,37.6C-58.3,25,-65.8,11.1,-65.6,-2.8C-65.4,-16.7,-57.6,-30.6,-46.6,-40.1C-35.6,-49.6,-21.4,-54.7,-6.8,-53.7C7.9,-52.6,28.1,-60.6,39.5,-51.2Z"
                transform="translate(100 100)"
              />
              <path
                fill="rgba(255,255,255,0.07)"
                d="M54.9,-57.4C68.2,-46.7,74.2,-27.1,75.1,-8.1C76,10.9,71.7,29.4,60.9,42.1C50,54.8,32.5,61.6,14.4,66.2C-3.8,70.8,-22.7,73.1,-37.5,65.9C-52.3,58.7,-63,42.1,-67,24.9C-71.1,7.8,-68.4,-9.8,-60.5,-24C-52.5,-38.2,-39.1,-49.1,-25,-56.8C-10.9,-64.5,3.9,-69,20.2,-67C36.6,-65,41.6,-68.1,54.9,-57.4Z"
                transform="translate(100 100)"
              />

              {/* Stylized lightbulb */}
              <circle cx="100" cy="80" r="25" fill="rgba(255,255,255,0.9)" />
              <path
                d="M100,105 L100,130"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M90,140 L110,140"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M85,155 L115,155"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* Electric bolt */}
              <path
                d="M85,50 L105,75 L90,85 L115,120"
                stroke="rgba(255,255,0,0.9)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <div className="text-white text-xs mt-4 md:mt-0">
            <p>Building powerful connections since 2016</p>
          </div>
        </div>

        {/* Right section - Login form */}
        <div className="bg-white w-full md:w-3/5 p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1">
              Log in to access your account
            </p>
          </div>

          {isError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center mb-5 text-sm">
              <AlertCircle size={16} className="mr-2 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={16} className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={16} className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center justify-center w-full py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-yellow-500 to-gray-900 hover:from-blue-700 hover:via-yellow-600 hover:to-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Log in <ArrowRight size={16} className="ml-1.5" />
                  </span>
                )}
              </button>
            </div>
          </form>

          <div className="mt-5 text-center">
            <p className="text-sm text-gray-600">
              Don't want to access the dashboard?{" "}
              <a
                href="/"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Home
              </a>
            </p>
          </div>

          <div className="mt-8 pt-3 border-t border-gray-200">
            <p className="text-xs text-center text-gray-500">
              &copy; 2025 Electrical Solution Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
