import Header from './shared-components/Header';
import Footer from './shared-components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="bg-black text-white text-center py-2 text-xs">
        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
        <a href="#" className="underline ml-2">shopNow</a>
        <span className="float-right mr-8">English</span>
      </div>
      <Header />

      <main className="flex-1 bg-white max-w-7xl mx-auto flex px-4">

        <aside className="w-1/5 pt-8 hidden md:block">
          <nav className="space-y-4">
            <div className="font-bold">Woman&#39;s Fashion</div>
            <div>Men&#39;s Fashion</div>
            <div>Electronics</div>
            <div>Home & Lifestyle</div>
            <div>Medicine</div>
            <div>Sports & Outdoor</div>
            <div>Baby&#39;s & Toys</div>
            <div>Groceries & Pets</div>
            <div>Health & Beauty</div>
          </nav>
        </aside>

        <section className="flex-1">

          <div className="bg-black p-7 rounded-lg mt-8 flex items-center justify-between min-h-[360px] md:min-h-[350px]">
            <div>
              <div className="flex items-center mb-2">
                <Image src="/images/ios.svg" alt="iOS" width={36} height={36} className="w-9 h-9" />
                <h2 className="text-base font-bold text-white">iPhone 14 Series</h2>
              </div>
              <p className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                Up to 10% off Voucher
              </p>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold cursor-pointer">Shop Now</span>
                <Image src="/images/arrow.png" alt="arrow" width={20} height={20} className="w-5 h-5" />
              </div>

              <div className="mt-1 flex justify-start" style={{ width: 'fit-content' }}>
                <div className="bg-white h-0.5" style={{ width: '70px' }}></div>
              </div>

              <div className="flex justify-center mt-6 ml-100">
                <Image src="/images/three-dots.png" alt="dots" width={80} height={12} className="w-20 h-3" />
              </div>
            </div>
            <Image src="/images/iphone-14.png" alt="iPhone 14" width={384} height={350} className="w-80 h-auto md:w-96" />
          </div>

          <div className="w-full mt-12">
            <section className="max-w-none">
              <h3 style={{ color: '#DB4444' }} className="font-bold">Today&#39;s</h3>
              <div className="flex items-center justify-start gap-6">
                <h2 className="text-2xl font-bold">Flash Sales</h2>
                <div className="flex pl-125 gap-2 ">
                  <div><span className="font-bold text-xl">03</span> <span className="text-xs">Days</span></div>:
                  <div><span className="font-bold text-xl">23</span> <span className="text-xs">Hours</span></div>:
                  <div><span className="font-bold text-xl">19</span> <span className="text-xs">Minutes</span></div>:
                  <div><span className="font-bold text-xl">56</span> <span className="text-xs">Seconds</span></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div className="p-4 rounded-lg relative bg-gray-100 min-h-[380px]">
                  <span style={{ backgroundColor: '#DB4444' }} className="absolute top-4 left-4 text-white text-xs px-2 rounded">-40%</span>
                  <Image src="/images/game.png" alt="HAVIT HV-G92 Gamepad" width={128} height={128} className="mx-auto h-32" />
                  <div className="mt-4 font-bold">HAVIT HV-G92 Gamepad</div>
                  <div className="mt-1">
                    <span style={{ color: '#DB4444' }} className="font-bold">$120</span>
                    <span className="text-gray-400 line-through ml-2">$160</span>
                  </div>
                  <div className="flex items-center text-yellow-400 text-sm mt-1">★★★★☆ (88)</div>
                </div>
                <div className="p-4 rounded-lg relative bg-gray-100  min-h-[380px]">
                  <span style={{ backgroundColor: '#DB4444' }} className="absolute top-4 left-4 text-white text-xs px-2 rounded">-35%</span>
                  <Image src="/images/keypad.png" alt="AK-900 Wired Keyboard" width={128} height={128} className="h-32 mx-auto" />
                  <div className="mt-4 font-bold">AK-900 Wired Keyboard</div>
                  <div className="mt-1">
                    <span style={{ color: '#DB4444' }} className="font-bold">$960</span>
                    <span className="text-gray-400 line-through ml-2">$1160</span>
                  </div>
                  <button className="bg-black text-white px-4 py-1 rounded text-xs  mt-10 w-full text-center absolute  left-0">
                    Add To Cart
                  </button>
                  <div className="flex items-center text-yellow-400 text-sm mt-1">★★★★★ (75)</div>
                </div>
                <div className="p-4 rounded-lg relative bg-gray-100 min-h-[380px]">
                  <span style={{ backgroundColor: '#DB4444' }} className="absolute top-4 left-4 text-white text-xs px-2 rounded">-30%</span>
                  <Image src="/images/fire.png" alt="IPS LCD Gaming Monitor" width={128} height={128} className="mx-auto h-32" />
                  <div className="mt-4 font-bold">IPS LCD Gaming Monitor</div>
                  <div className="mt-1">
                    <span style={{ color: '#DB4444' }} className="font-bold">$370</span>
                    <span className="text-gray-400 line-through ml-2">$400</span>
                  </div>
                  <div className="flex items-center text-yellow-400 text-sm mt-1">★★★★☆ (99)</div>
                </div>
                <div className="p-4 rounded-lg relative bg-gray-100 min-h-[380px]">
                  <span style={{ backgroundColor: '#DB4444' }} className="absolute top-4 left-4 text-white text-xs px-2 rounded">-25%</span>
                  <Image src="/images/chair.png" alt="S-Series Comfort Chair" width={128} height={128} className="mx-auto h-32" />
                  <div className="mt-4 font-bold">S-Series Comfort Chair</div>
                  <div className="mt-1">
                    <span style={{ color: '#DB4444' }} className="font-bold">$375</span>
                    <span className="text-gray-400 line-through ml-2">$400</span>
                  </div>
                  <div className="flex items-center text-yellow-400 text-sm mt-1">★★★★☆ (99)</div>
                </div>
              </div>
              <button style={{ backgroundColor: '#DB4444' }} className="text-white px-6 py-2 ml-100 rounded mt-4">View All Products</button>
            </section>
          </div>

          <section className="mt-12">
            <h3 style={{ color: '#DB4444' }} className="font-bold">Categories</h3>
            <h2 className="text-2xl font-bold mb-4">Browse By Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="flex flex-col items-center justify-center border rounded-lg p-4">
                <Image src="/images/phone.png" alt="Phones" width={32} height={32} className="h-8 mb-2" />
                <span>Phones</span>
              </div>
              <div className="flex flex-col items-center justify-center border rounded-lg p-4">
                <Image src="/images/computer.png" alt="Computers" width={32} height={32} className="h-8 mb-2" />
                <span>Computers</span>
              </div>
              <div className="flex flex-col items-center justify-center border rounded-lg p-4">
                <Image src="/images/smartwatch.png" alt="SmartWatch" width={32} height={32} className="h-8 mb-2" />
                <span>SmartWatch</span>
              </div>
              <div style={{ color: 'white', backgroundColor: '#DB4444' }} className="flex flex-col items-center justify-center border rounded-lg p-4">
                <Image src="/images/camera.png" alt="Camera" width={32} height={32} className="h-8 mb-2" />
                <span>Camera</span>
              </div>
              <div className="flex flex-col items-center justify-center border rounded-lg p-4">
                <Image src="/images/headphone.png" alt="HeadPhones" width={32} height={32} className="h-8 mb-2" />
                <span>HeadPhones</span>
              </div>
              <div className="flex flex-col items-center justify-center border rounded-lg p-4">
                <Image src="/images/play.png" alt="Gaming" width={32} height={32} className="h-8 mb-2" />
                <span>Gaming</span>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h3 style={{ color: '#DB4444' }} className="font-bold">This Month</h3>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Best Selling Products</h2>
              <button style={{ backgroundColor: '#DB4444' }} className="text-white px-4 py-2 rounded text-sm">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              <div className="bg-gray-100 p-0 rounded-lg relative min-h-[420px] flex flex-col">
                <div className="absolute top-2 right-4 flex flex-col gap-2 z-10">
                  <button className="bg-white rounded-full p-2 flex items-center justify-center shadow">
                    <Image src="/images/heart.png" alt="Favorite" width={20} height={20} className="w-5 h-5" />
                  </button>
                  <button className="bg-white rounded-full p-2 flex items-center justify-center shadow">
                    <Image src="/images/eyes.png" alt="View" width={20} height={20} className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center pt-9 pb-4">
                  <Image src="/images/jacket.png" alt="The north coat" width={160} height={160} className="h-40 object-contain" />
                </div>
                <div className="px-4 pb-4">
                  <div className="font-semibold pt-9">The north coat</div>
                  <div className="flex items-center mb-1">
                    <span className="font-bold" style={{ color: '#DB4444' }}>$260</span>
                    <span className="text-gray-400 line-through ml-2">$360</span>
                  </div>
                  <div className="flex text-yellow-400 text-sm mt-1">★★★★☆ (65)</div>
                </div>
              </div>

              <div className="bg-gray-100 p-0 rounded-lg relative min-h-[420px] flex flex-col">
                <div className="absolute top-2 right-4 flex flex-col gap-2 z-10">
                  <button className="bg-white rounded-full p-2 flex items-center justify-center shadow">
                    <Image src="/images/heart.png" alt="Favorite" width={20} height={20} className="w-5 h-5" />
                  </button>
                  <button className="bg-white rounded-full p-2 flex items-center justify-center shadow">
                    <Image src="/images/eyes.png" alt="View" width={20} height={20} className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center pt-9 pb-4">
                  <Image src="/images/bag.png" alt="Gucci duffle bag" width={160} height={160} className="h-40 object-contain" />
                </div>
                <div className="px-4 pb-4">
                  <div className="font-semibold pt-9">Gucci duffle bag</div>
                  <div className="flex items-center mb-1">
                    <span className="font-bold" style={{ color: '#DB4444' }}>$960</span>
                    <span className="text-gray-400 line-through ml-2">$1160</span>
                  </div>
                  <div className="flex text-yellow-400 text-sm mt-1">★★★★★ (65)</div>
                </div>
              </div>

              <div className="bg-gray-100 p-0 rounded-lg relative min-h-[420px] flex flex-col">
                <div className="absolute top-2 right-4 flex flex-col gap-2 z-10">
                  <button className="bg-white rounded-full p-2 flex items-center justify-center shadow">
                    <Image src="/images/heart.png" alt="Favorite" width={20} height={20} className="w-5 h-5" />
                  </button>
                  <button className="bg-white rounded-full p-2 flex items-center justify-center shadow">
                    <Image src="/images/eyes.png" alt="View" width={20} height={20} className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center pt-9 pb-4">
                  <Image src="/images/speaker.png" alt="RGB liquid CPU Cooler" width={160} height={160} className="h-40 object-contain" />
                </div>
                <div className="px-4 pb-4">
                  <div className="font-semibold pt-9">RGB liquid CPU Cooler</div>
                  <div className="flex items-center mb-1">
                    <span className="font-bold" style={{ color: '#DB4444' }}>$160</span>
                    <span className="text-gray-400 line-through ml-2">$170</span>
                  </div>
                  <div className="flex text-yellow-400 text-sm mt-1">★★★★☆ (65)</div>
                </div>
              </div>

              <div className="bg-gray-100 p-0 rounded-lg relative min-h-[420px] flex flex-col">
                <div className="absolute top-2 right-4 flex flex-col gap-2 z-10">
                  <button className="bg-white rounded-full p-2 flex items-center justify-center shadow">
                    <Image src="/images/heart.png" alt="Favorite" width={20} height={20} className="w-5 h-5" />
                  </button>
                  <button className="bg-white rounded-full p-2 flex items-center justify-center shadow">
                    <Image src="/images/eyes.png" alt="View" width={20} height={20} className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center pt-9 pb-4">
                  <Image src="/images/shelf.png" alt="Small BookSelf" width={160} height={160} className="h-40 object-contain" />
                </div>
                <div className="px-4 pb-4">
                  <div className="font-semibold pt-9">Small BookSelf</div>
                  <div className="flex items-center mb-1">
                    <span className="font-bold" style={{ color: '#DB4444' }}>$360</span>
                  </div>
                  <div className="flex text-yellow-400 text-sm mt-1">★★★★☆ (65)</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <div className="bg-gradient-to-r from-black to-gray-900 text-white rounded-lg flex items-center justify-between px-8 py-10">
              <div>
                <h4 style={{ color: '#DB4444' }} className="font-bold">Categories</h4>
                <h2 className="text-2xl font-bold mb-2">Enhance Your Music Experience</h2>
                <div className="flex gap-2 mb-4 text-sm">
                  <div>23 Hours</div>
                  <div>05 Days</div>
                  <div>59 Minutes</div>
                  <div>35 Seconds</div>
                </div>
                <button className="bg-green-500 px-6 py-2 rounded text-white">Buy Now!</button>
              </div>
              <Image src="/images/loud-speaker.png" alt="Music speaker" width={128} height={128} className="h-32" />
            </div>
          </section>

          <section className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#DB4444] rounded"></div>
                <span style={{ color: '#DB4444' }} className="font-bold text-sm uppercase">Our Products</span>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-8">Explore Our Products</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
            </div>

            <div className="flex justify-center mt-10">
              <button style={{ backgroundColor: '#DB4444' }} className="text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700">
                View All Products
              </button>
            </div>
          </section>

          <section className="mt-16">
            <h3 style={{ color: '#DB4444' }} className="font-bold">Featured</h3>
            <h2 className="text-2xl font-bold mb-6">New Arrival</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black rounded-lg overflow-hidden relative">
                <Image src="/images/all-in-one.png" alt="PlayStation 5" width={600} height={288} className="w-full h-72 object-cover opacity-80" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-2xl font-bold">PlayStation 5</div>
                  <div className="text-sm mb-4">Black and White version of the PS5 coming out on sale.</div>
                  <button className="bg-white text-black px-4 py-2 rounded">Shop Now</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg overflow-hidden relative h-36">
                  <Image src="/images/woman.png" alt="Women&#39;s Collections" fill className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="relative z-10 p-4 text-white">
                    <div className="font-bold">Women&#39;s Collections</div>
                    <div className="text-xs">Featured woman collections that give you another vibe.</div>
                    <button className="mt-2 bg-white text-black px-3 py-1 rounded text-xs">Shop Now</button>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg overflow-hidden relative h-36">
                  <Image src="/images/three-speakers.png" alt="Speakers" fill className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="relative z-10 p-4 text-white">
                    <div className="font-bold">Speakers</div>
                    <div className="text-xs">Amazon wireless speakers</div>
                    <button className="mt-2 bg-white text-black px-3 py-1 rounded text-xs">Shop Now</button>
                  </div>
                </div>
                <div className="bg-black rounded-lg overflow-hidden relative h-36 col-span-2">
                  <Image src="/images/perfume.png" alt="Perfume" fill className="absolute inset-0 w-full h-full object-cover opacity-70" />
                  <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
                    <div>
                      <div className="font-bold">Perfume</div>
                      <div className="text-xs">GUCCI INTENSE OUD EDP</div>
                    </div>
                    <button className="bg-white text-black px-3 py-1 rounded text-xs mt-2 self-start">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-19  mt-16 flex flex-col md:flex-row justify-between items-center text-center gap-6">
            <div className="flex flex-col items-center flex-1">
              <Image src="/images/services.png" alt="Delivery" width={80} height={80} className="h-20 mb-8" />
              <div className="font-bold text-xl">FREE AND FAST DELIVERY</div>
              <div className="text-xs text-gray-500">Free delivery for all orders over $140</div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Image src="/images/verified.png" alt="Customer Service" width={80} height={80} className="h-20 mb-8" />
              <div className="font-bold text-xl">24/7 CUSTOMER SERVICE</div>
              <div className="text-xs text-gray-500">Friendly 24/7 customer support</div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Image src="/images/verified.png" alt="Money Back" width={80} height={80} className="h-20 mb-8" />
              <div className="font-bold text-xl">MONEY BACK GUARANTEE</div>
              <div className="text-xs text-gray-500">We return money within 30 days</div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}