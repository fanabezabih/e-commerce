export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-3 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
   
        <div>
          <div className="font-bold text-lg mb-2">Exclusive</div>
          <div className="mb-2 text-sm">Subscribe</div>
          <div className="text-xs mb-2">Get 10% off your first order</div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l px-2 py-1 text-black w-full"
            />
            <button className="bg-pink-600 px-3 py-1 rounded-r">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
    
        <div>
          <div className="font-bold mb-2">Support</div>
          <div className="text-xs mb-1">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
          <div className="text-xs mb-1">exclusive@gmail.com</div>
          <div className="text-xs mb-1">+88015-88888-9999</div>
        </div>
    
        <div>
          <div className="font-bold mb-2">Account</div>
          <div className="text-xs mb-1">My Account</div>
          <div className="text-xs mb-1">Login / Register</div>
          <div className="text-xs mb-1">Cart</div>
          <div className="text-xs mb-1">Wishlist</div>
          <div className="text-xs mb-1">Shop</div>
        </div>
      
        <div>
          <div className="font-bold mb-2">Quick Link</div>
          <div className="text-xs mb-1">Privacy Policy</div>
          <div className="text-xs mb-1">Terms Of Use</div>
          <div className="text-xs mb-1">FAQ</div>
          <div className="text-xs mb-1">Contact</div>
        </div>
    
        <div>
          <div className="font-bold mb-2">Download App</div>
          <div className="text-xs mb-1">Save $3 With App New User Only</div>
          <div className="flex space-x-2 my-2">
            <img src="/qr-code.png" alt="QR Code" className="h-14" />
            <div>
              <img src="/playstore.svg" alt="Play Store" className="h-6 mb-1" />
              <img src="/appstore.svg" alt="App Store" className="h-6" />
            </div>
          </div>
          <div className="flex space-x-2 mt-2">
            <img src="/icons/facebook.svg" className="h-5" alt="Facebook" />
            <img src="/icons/twitter.svg" className="h-5" alt="Twitter" />
            <img src="/icons/instagram.svg" className="h-5" alt="Instagram" />
            <img src="/icons/linkedin.svg" className="h-5" alt="LinkedIn" />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-xs text-center text-gray-400">
        © Copyright Rimel 2022. All right reserved 
      </div>
    </footer>
  );
}