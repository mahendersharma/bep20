import React from 'react'
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter)
import { FaDiscord, FaTelegramPlane } from "react-icons/fa"; // optional

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-gray-400">
        
        <div>
          <h3 className="text-yellow-400 font-bold text-xl mb-3">Binance</h3>
          <p className="text-sm">
            Advanced blockchain security analysis and comprehensive reporting for your cryptocurrency portfolio.
          </p>

          <div className="flex gap-3 mt-4">
            <span className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center"> <FaXTwitter className="text-white" /></span>
            <span className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center"><FaDiscord className="text-white" /></span>
            <span className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center"><FaTelegramPlane className="text-white" /></span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Blockchain</li>
            <li>Tokens</li>
            <li>Validators</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © 2026 Made by Binance. All rights reserved
      </div>
    </footer>
  );
}
