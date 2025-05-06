import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-black text-white relative z-50">
    
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-[#a63f1b] p-2 rounded lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="font-bold italic text-xl tracking-wide">FITNESS</span>
      </div>

      
      <div className="hidden lg:flex items-center space-x-6">
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/games" className="hover:text-gray-300">Games</Link></li>
            <li><Link to="/trainer" className="hover:text-gray-300">Trainer</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
        <Search className="cursor-pointer" size={20} />
      </div>

     
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white lg:hidden shadow-md">
          <nav className="flex flex-col items-start px-4 py-2 space-y-2">
            <Link to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/games" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Games</Link>
            <Link to="/trainer" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Trainer</Link>
            <Link to="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
            <button className="mt-2">
              <Search size={20} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
