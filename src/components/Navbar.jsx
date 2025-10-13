'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const menuItems = [
    { href: '/', title: 'Home', icon: '🏠', gradient: 'from-blue-500 to-purple-600' },
    { href: '/tournaments', title: 'Tournaments', icon: '🏆', gradient: 'from-yellow-400 to-orange-500' },
    { href: '/teams', title: 'Teams', icon: '👥', gradient: 'from-green-400 to-blue-500' },
    { href: '/registration', title: 'Registration', icon: '📅', gradient: 'from-pink-400 to-red-500' },
    { href: '/statistics', title: 'Statistics', icon: '📊', gradient: 'from-purple-400 to-indigo-600' },
    { href: '/settings', title: 'Settings', icon: '⚙️', gradient: 'from-gray-400 to-gray-600' },
  ]

  // Detect mobile/tablet
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setHasScrolled(latest > 20)
    })
    return () => unsubscribe()
  }, [scrollY])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: hasScrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
          backdropFilter: hasScrolled ? 'blur(20px)' : 'none',
          boxShadow: hasScrolled ? '0 4px 20px -4px rgba(0, 0, 0, 0.3)' : 'none',
          height: hasScrolled ? '56px' : '64px'
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 text-white z-50 border-b border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-indigo-900/10"></div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-full">
          <div className="flex items-center justify-between h-full py-2">
            
            {/* Logo */}
            <div className="flex items-center min-w-0 flex-shrink-0">
              <a href="/" className="flex items-center group">
                <div className="relative">
                  {!isMobile && (
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-60 group-hover:opacity-80 blur-sm"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  <img
                    className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
                    src="/api/placeholder/36/36"
                    alt="MLBB Logo"
                  />
                </div>
                <div className="ml-2 sm:ml-3 min-w-0">
                  <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent truncate block">
                    <span className="hidden sm:inline">MLBB Tournament</span>
                    <span className="sm:hidden">MLBB</span>
                  </span>
                  <div className="text-xs text-blue-300/70 hidden sm:block truncate">Elite Gaming</div>
                </div>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center flex-1 justify-center max-w-2xl mx-4">
              <div className="flex items-center space-x-1">
                {menuItems.slice(0, 4).map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/8 text-sm font-medium"
                    whileHover={!isMobile ? { y: -1 } : {}}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="relative z-10">{item.title}</span>
                    {!isMobile && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Tablet Nav */}
            <div className="hidden md:flex lg:hidden items-center space-x-1">
              {menuItems.slice(0, 3).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 rounded-lg hover:bg-white/8 text-sm transition-all duration-200"
                >
                  <span className="text-lg">{item.icon}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-200 group flex-shrink-0"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 flex flex-col justify-center items-center">
                <span
                  className={`block w-4 h-0.5 bg-gradient-to-r from-white to-blue-200 mb-0.5 rounded-full transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                />
                <span
                  className={`block w-4 h-0.5 bg-gradient-to-r from-white to-blue-200 mb-0.5 rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-4 h-0.5 bg-gradient-to-r from-white to-blue-200 rounded-full transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-full max-w-xs sm:max-w-sm z-50 shadow-2xl overflow-hidden bg-slate-900/95 backdrop-blur-md"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="p-4 border-b border-white/10">
                    <h2 className="text-lg font-semibold text-white">Menu</h2>
                  </div>
                  <div className="flex-1 overflow-y-auto py-2">
                    {menuItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-4 py-3 text-base text-white/90 hover:bg-white/10 rounded-lg transition-all duration-200"
                      >
                        <span className="mr-3 text-lg">{item.icon}</span>
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-4 border-t border-white/10 text-center text-sm text-white/60">
                  © 2025 MLBB Tournaments
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
