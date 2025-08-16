import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="font-extrabold text-2xl">Exclusive</div>
        <nav className="flex gap-8">
          <Link href="/" className="hover:text-pink-600 transition">Home</Link>
          <Link href="/contact" className="hover:text-pink-600 transition">Contact</Link>
          <Link href="/about" className="hover:text-pink-600 transition">About</Link>
          <Link href="/signup" className="hover:text-pink-600 transition">Sign Up</Link>
        </nav>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border rounded px-3 py-1 text-sm"
          />
          <button>
            <Image src="/icons/search.svg" alt="Search" width={20} height={20} className="h-5 w-5" />
          </button>
          <button>
            <Image src="/icons/cart.svg" alt="Cart" width={20} height={20} className="h-5 w-5" />
          </button>
          <button>
            <Image src="/icons/user.svg" alt="User" width={20} height={20} className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}