'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Form Section */}
      <div className="flex flex-1 items-center justify-center">
        <form className="w-80">
          {/* Title - Centered */}
          <h1 className="text-3xl font-bold text-primaryGreen mb-8 text-center">Welcome Back!</h1>

          {/* Email Input */}
          <div className="mb-6">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border-b-2 border-secondaryGreen bg-transparent outline-none py-2 text-base"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              className="w-full border-b-2 border-secondaryGreen bg-transparent outline-none py-2 text-base pr-10"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="mb-6 text-right">
            <a href="#" className="text-sm text-[#3F6634]">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="w-full bg-secondaryGreen text-white py-2 rounded-full hover:bg-primaryGreen">
            Sign In
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-1/2 h-full relative rounded-l-4xl overflow-hidden">
        <Image
          src="/kikicat.gif"
          alt="Chihiro background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default SignInPage;
