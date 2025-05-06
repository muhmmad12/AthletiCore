import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-0"> {/* Reduced padding from py-10 to py-6 */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
   
        <div>
          <h2 className="text-2xl font-bold">FitZone</h2>
          <p className="text-gray-400 mt-2">
            Your destination for elite training, competitive sports, and personal fitness. Train hard. Play harder.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Plans</a></li>
            <li><a href="#" className="hover:text-white">Games</a></li>
            <li><a href="#" className="hover:text-white">Trainers</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: support@fitzone.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Location: City Sports Complex, YourCity</p>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500">Facebook</a>
            <a href="#" className="hover:text-pink-500">Instagram</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} FitZone. All rights reserved.
      </div>
    </footer>
  );
}
