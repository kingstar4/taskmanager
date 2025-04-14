'use client';

import React from 'react';
import { Github, Mail } from 'lucide-react';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';

const Auth = () => {
  const { data: session } = useSession();

  return session ? (
    <div className="flex items-center gap-4 p-4">
      <Image 
        src={session.user?.image ?? ''} 
        alt="Profile" 
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-medium">{session.user?.name}</p>
        <p className="text-sm text-gray-500">{session.user?.email}</p>
      </div>
      <button 
        onClick={() => signOut()}
        className="ml-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h2>
        
        <div className="space-y-4">
          <button onClick={()=>{signIn("github")}} className="w-full flex items-center justify-center gap-3 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
            <Github className="w-5 h-5" />
            Continue with Github
          </button>
          
          <button onClick={()=>{signIn("google")}} className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 py-3 rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-colors">
            <Mail className="w-5 h-5 text-red-500" />
            Continue with Google
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            By continuing, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;