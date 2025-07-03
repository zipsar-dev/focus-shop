import React from 'react';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 font-body">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h2 className="text-xl font-bold text-gray-900">FOCUS</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Providing CA students with precise, high-quality question banks and reviewers. Dedicated to spreading knowledge and supporting your success.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-15">
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5 text-gray-700 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5 text-gray-700 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5 hover:text-white text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Send className="w-5 h-5 hover:text-white text-gray-700" />
              </a>
            </div>
          </div>

          {/* Explore More Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">EXPLORE MORE</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Educators
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About US
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                FAQS
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">CONTACT US</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                Building No. 1, 3rd Floor, Office No.132, Solitaire Corporate Park, Guru Hargovindji Marg, Chakala, Andheri (East), Mumbai 400093, Maharashtra, India.
              </p>
              <div className="space-y-1">
                <p>Office hours: 10 am to 6.30pm</p>
                <p>Monday to Saturday</p>
              </div>
              <div className="space-y-1">
                <p>9619822135 / 7623822135</p>
                <p>
                  <a href="mailto:info@thevivitsu.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    info@thevivitsu.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-sm text-gray-500">
            Copyright ©2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}