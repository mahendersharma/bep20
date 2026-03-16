import React,{ useState } from "react";
import binance from "../../public/binance.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 text-yellow-400 font-bold text-xl">
            <span className="w-8 h-8 bg-yellow-400 text-black flex items-center justify-center rounded">
              <img src={binance} alt="Binance Logo" className="w-6 h-6" />
            </span>
            <span className="text-xl font-bold leading-7 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 hover:from-yellow-300 hover:via-orange-300 hover:to-amber-400 transition-all duration-200 sm:text-2xl">Binance</span>
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Blockchain</a>
            <a href="#" className="hover:text-white">Tokens</a>
            <a href="#" className="hover:text-white">Validators</a>
            <a href="#" className="hover:text-white">NFTs</a>
            <a href="#" className="hover:text-white">Developers</a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-3 text-gray-300">
          {["Home", "Blockchain", "Tokens", "Validators", "NFTs", "Developers"].map(
            (item) => (
              <a key={item} href="#" className="block hover:text-white">
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}
