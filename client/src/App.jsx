import { ShoppingBag, Leaf, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-[#EFE9DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-[#6BAF45]" />
              <span className="text-2xl font-light text-[#2F4F2F] tracking-wide">TeaLeaf</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-[#2F4F2F] hover:text-[#6BAF45] transition-colors font-light">Home</a>
              <a href="#" className="text-[#2F4F2F] hover:text-[#6BAF45] transition-colors font-light">Shop</a>
              <a href="#" className="text-[#2F4F2F] hover:text-[#6BAF45] transition-colors font-light">About</a>
              <a href="#" className="text-[#2F4F2F] hover:text-[#6BAF45] transition-colors font-light">Contact</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-[#2F4F2F] hover:text-[#6BAF45] transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="text-[#2F4F2F] hover:text-[#6BAF45] transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>

            <button
              className="md:hidden text-[#2F4F2F]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#EFE9DD]">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-[#2F4F2F] hover:text-[#6BAF45] transition-colors font-light">Home</a>
              <a href="#" className="block text-[#2F4F2F] hover:text-[#6BAF45] transition-colors font-light">Shop</a>
              <a href="#" className="block text-[#2F4F2F] hover:text-[#6BAF45] transition-colors font-light">About</a>
              <a href="#" className="block text-[#2F4F2F] hover:text-[#6BAF45] transition-colors font-light">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen pt-32 flex items-center overflow-hidden" style={{
        backgroundImage: 'url("https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F9F7]/95 to-[#F9F9F7]/70"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#6BAF45] rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-[#6BAF45] rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="absolute top-32 right-20 w-12 h-12 text-[#6BAF45] opacity-20 animate-bounce" style={{animationDelay: '0s'}}>
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute top-48 right-32 w-8 h-8 text-[#6BAF45] opacity-15 animate-bounce" style={{animationDelay: '0.5s'}}>
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute bottom-40 left-1/3 w-10 h-10 text-[#6BAF45] opacity-20 animate-bounce" style={{animationDelay: '1s'}}>
          <Leaf className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Traditional tea pot"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-8 py-12">
              <div className="space-y-4">
                <p className="text-[#6BAF45] font-light text-base tracking-widest uppercase">
                  100% Natural Organic
                </p>
                <h1 className="text-7xl lg:text-8xl font-light text-[#2F4F2F] leading-none">
                  Green<br />
                  <span className="text-[#6BAF45]">Tea</span>
                </h1>
              </div>

              <p className="text-lg text-[#2F4F2F]/70 font-light leading-relaxed max-w-md">
                Experience the purest essence of nature's finest leaves, carefully sourced from sustainable farms and crafted for your perfect cup.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#6BAF45] text-white px-10 py-4 rounded-full hover:bg-[#5a9c3a] transition-all font-light text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Shop Now
                </button>
                <button className="border-2 border-[#2F4F2F] text-[#2F4F2F] px-10 py-4 rounded-full hover:bg-[#2F4F2F] hover:text-white transition-all font-light text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-[#2F4F2F] mb-4">Featured Collection</h2>
            <p className="text-lg text-[#2F4F2F]/70 font-light">Discover our most beloved organic tea blends</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-[#EFE9DD] h-64">
                <img
                  src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Matcha Green Tea"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs text-[#6BAF45] font-light">
                  Bestseller
                </div>
              </div>
              <h3 className="text-lg font-light text-[#2F4F2F] mb-1">Matcha Green Tea</h3>
              <p className="text-sm text-[#2F4F2F]/60 font-light mb-3">Premium ceremonial</p>
              <div className="flex items-center justify-between">
                <p className="text-lg text-[#6BAF45] font-light">$24.99</p>
                <button className="bg-[#6BAF45] text-white p-2 rounded-full hover:bg-[#5a9c3a] transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-[#EFE9DD] h-64">
                <img
                  src="https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Chamomile Bliss"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-light text-[#2F4F2F] mb-1">Chamomile Bliss</h3>
              <p className="text-sm text-[#2F4F2F]/60 font-light mb-3">Calming herbal blend</p>
              <div className="flex items-center justify-between">
                <p className="text-lg text-[#6BAF45] font-light">$18.99</p>
                <button className="bg-[#6BAF45] text-white p-2 rounded-full hover:bg-[#5a9c3a] transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-[#EFE9DD] h-64">
                <img
                  src="https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Earl Grey Classic"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs text-[#6BAF45] font-light">
                  New
                </div>
              </div>
              <h3 className="text-lg font-light text-[#2F4F2F] mb-1">Earl Grey Classic</h3>
              <p className="text-sm text-[#2F4F2F]/60 font-light mb-3">Bergamot infusion</p>
              <div className="flex items-center justify-between">
                <p className="text-lg text-[#6BAF45] font-light">$21.99</p>
                <button className="bg-[#6BAF45] text-white p-2 rounded-full hover:bg-[#5a9c3a] transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-[#EFE9DD] h-64">
                <img
                  src="https://images.pexels.com/photos/2965579/pexels-photo-2965579.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="White Jasmine"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-light text-[#2F4F2F] mb-1">White Jasmine</h3>
              <p className="text-sm text-[#2F4F2F]/60 font-light mb-3">Delicate floral notes</p>
              <div className="flex items-center justify-between">
                <p className="text-lg text-[#6BAF45] font-light">$22.99</p>
                <button className="bg-[#6BAF45] text-white p-2 rounded-full hover:bg-[#5a9c3a] transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2F4F2F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-10 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#6BAF45] rounded-full mb-2">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-white">100% Organic</h3>
              <p className="text-white/70 font-light">Certified organic ingredients from sustainable farms worldwide</p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#6BAF45] rounded-full mb-2">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-white">Ethically Sourced</h3>
              <p className="text-white/70 font-light">Direct partnerships with farmers ensuring fair trade practices</p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#6BAF45] rounded-full mb-2">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-white">Premium Quality</h3>
              <p className="text-white/70 font-light">Handpicked and carefully processed for maximum freshness</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EFE9DD]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-[#2F4F2F] mb-6">Join Our Tea Community</h2>
          <p className="text-lg text-[#2F4F2F]/70 font-light mb-8 max-w-2xl mx-auto">
            Subscribe to receive exclusive offers, brewing tips, and early access to new collections
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-[#2F4F2F]/20 focus:border-[#6BAF45] focus:outline-none bg-white font-light"
            />
            <button className="bg-[#6BAF45] text-white px-8 py-4 rounded-full hover:bg-[#5a9c3a] transition-all font-light shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#2F4F2F] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-6 h-6 text-[#6BAF45]" />
                <span className="text-xl font-light">TeaLeaf</span>
              </div>
              <p className="text-white/70 font-light text-sm">
                Premium organic tea for a healthier, more mindful lifestyle.
              </p>
            </div>

            <div>
              <h4 className="font-light text-lg mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Green Tea</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Black Tea</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Herbal Tea</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Gift Sets</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-light text-lg mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Our Story</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Sustainability</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Blog</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-light text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">FAQ</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Shipping</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Returns</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#6BAF45] transition-colors font-light">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 font-light text-sm">
              © 2024 TeaLeaf. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
