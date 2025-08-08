import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#071d31] text-white py-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        <div>
          <img src="/logo.png" alt="Deal Acres" className="w-20 mb-4" />
          <p className="mb-2">
            # 36A & 36B, Ground Floor, Edmonton Shopping Mall, Hotel THE BRISTOL, M.G Road, Gurugram-122002 (Haryana)
          </p>
          <p className="mb-1">📞 +91-9871772717</p>
          <p className="mb-3">📞 +91-9971911131</p>
          <p className="mb-1">
            📧 <a href="mailto:vikas@manchandarealtors.com" className="text-blue-400 hover:underline">vikas@manchandarealtors.com</a>
          </p>
          <p>
            📧 <a href="mailto:aakash@manchandarealtors.com" className="text-blue-400 hover:underline">aakash@manchandarealtors.com</a>
          </p>
        </div>

        
        <div>
          <h3 className="text-3xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400">About us</a></li>
            <li><a href="/commercial" className="hover:text-blue-400">Commercial</a></li>
            <li><a href="/pre-leased" className="hover:text-blue-400">Pre Leased</a></li>
            <li><a href="/residential" className="hover:text-blue-400">Residential</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2">Legals</h3>
          <ul className="space-y-2">
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policies</a></li>
            <li><a href="/terms" className="hover:text-blue-400">Terms & Conditions</a></li>
            <li><a href="/sitemap" className="hover:text-blue-400">Site Map</a></li>
            <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-xl">
            <a href="#"><FaFacebookF className="hover:text-blue-400" /></a>
            <a href="#"><FaYoutube className="hover:text-red-500" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
          </div>
        </div>

      </div>

      
      <div className="text-gray-400 text-xs mt-10 px-4 max-w-6xl mx-auto">
        <p className="mb-4">
          <strong>Disclaimer:</strong> MRPL is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by various Builder(s)/Developer(s) who have advertised their products.
          <p class="mt-3">MRPL is only communicating the offers and not selling or rendering any of those products or services. It neither warrants nor is it making any representations with respect to offer(s) made on the site. MRPL shall neither be responsible nor liable to mediate or resolve any disputes or disagreements between the Customer/Buyer/User and the Seller and both Seller and Customer/Buyer/User shall settle all such disputes without involving MRPL in any manner. All trademarks, logos and names are properties of their respective Builder(s)/Developer(s)..
        </p></p>
        <p className="text-center text-sm text-gray-300">
          © 2025 <strong>Manchanda Realtors Pvt Ltd</strong>. All Rights Reserved by: <strong>MRPL</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
