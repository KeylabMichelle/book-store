'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="flex h-screen">
      {/* Form Section */}
      <div className="flex flex-1 items-center justify-center">
        <form className="w-80">
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
            <a href="#" className="text-sm text-[#6E947C] hover:text-[#3F6634]">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="w-full bg-secondaryGreen text-white py-2 rounded-full hover:bg-primaryGreen mb-4">
            Sign In
          </button>

          {/* Sign In with Google Button */}
          <button
            type="button"
            className="w-full py-2 rounded-full flex items-center justify-center mb-4 border-2"
            style={{
              backgroundColor: 'white',
              borderColor: '#6E947C',
              color: '#3F6634',
            }}>

            {/* Google Sign In Icon */}
            <span className="w-5 h-5 mr-2 font-bold text-lg" style={{ color: '#4285F4' }}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ display: 'block' }}
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </span>
            Sign in with Google
          </button>

          {/* Go back to home */}
          <div className="mb-6 text-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.push('/');
              }}
              className="flex items-center justify-center text-sm text-[#6E947C] hover:text-[#3F6634]"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back
            </a>
          </div>
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
