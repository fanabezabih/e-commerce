import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-3 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">

        <div>
          <div className="font-bold text-lg mb-2">Exclusive</div>
          <div className="mb-2 text-sm">Subscribe</div>
          <div className="text-xs mb-2">Get 10% off your first order</div>
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded px-2 py-1 text-white w-full border border-white bg-transparent pr-8"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
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
          <div className="flex space-x-2 my-2 items-center">
            <Image src="/images/qrcode.png" alt="QR Code" width={56} height={56} className="h-14 w-auto" />
            <div>
              <Image src="/images/googleplay.png" alt="Play Store" width={96} height={24} className="h-6 mb-1 w-auto" />
              <Image src="/images/appstore.png" alt="App Store" width={96} height={24} className="h-6 w-auto" />
            </div>
          </div>
          <div className="flex space-x-2 mt-2">
            <Image src="/images/facebook.png" alt="Facebook" width={20} height={20} className="h-5 w-5" />
            <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} className="h-5 w-5" />
            <Image src="/images/instagram.png" alt="Instagram" width={20} height={20} className="h-5 w-5" />
            <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-xs text-center text-gray-400">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}