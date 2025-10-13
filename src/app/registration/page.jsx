  "use client";
  import { useState } from 'react';
  import Image from 'next/image';
  import { motion } from 'framer-motion';
  import { Trophy } from 'lucide-react';

  export default function RegistrationPage() {
    const [formData, setFormData] = useState({
      teamName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <main className="h-screen bg-gray-900 flex overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full bg-white grid grid-cols-1 md:grid-cols-2"
        >
          {/* Left Side - Form */}
          <div className="p-8 flex flex-col justify-center overflow-y-auto">
            {/* Logo/Icon */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Tournament</span>
            </div>

            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Register for Tournament
              </h1>
              <p className="text-sm text-gray-600">
                Create your team and join the competition
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Name
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter team name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Create password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Confirm password"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                Register Team
              </button>
            </div>

            <p className="text-xs text-gray-600 text-center mt-4">
              Already registered? <span className="text-orange-500 font-medium cursor-pointer hover:underline">Sign in</span>
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:block relative bg-gray-900">
            <Image
              src="/claude-m6.jpg"
              alt="Tournament"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20" />
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Join Elite Teams
                </h2>
                <p className="text-lg text-gray-200">
                  Compete in tournaments and win amazing prizes
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }