import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Heart, Users, BookOpen, Phone, HandHeart } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { path: '/', label: 'Início', icon: Heart },
    { path: '/sobre', label: 'Sobre Nós', icon: Users },
    { path: '/atividades', label: 'Atividades', icon: BookOpen },
    { path: '/equipe', label: 'Equipe', icon: Users },
    { path: '/voluntario', label: 'Voluntário', icon: HandHeart },
    { path: '/contato', label: 'Contato', icon: Phone }
  ]

  const HeaderButton = ({ to, children, variant = 'primary' }) => (
    <Link to={to}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={variant === 'primary' ? 'btn-primary text-sm' : 'btn-secondary text-sm'}
      >
        {children}
      </motion.button>
    </Link>
  )

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
            <motion.img
              whileHover={{ rotate: [0, -5, 5, 0] }}
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/a55d31ca-b53b-4996-884f-360d0648416d/logo_1764949266323_0.png"
              alt="CEMEAR Logo"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled || isMenuOpen ? 'text-primary-600' : 'text-white'
              }`}>
                CEMEAR
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled || isMenuOpen ? 'text-secondary-500' : 'text-white/80'
              }`}>
                Esperança, Amor e Resgate
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : `${isScrolled ? 'text-secondary-600' : 'text-white'} hover:text-primary-600 hover:bg-primary-50`
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <HeaderButton to="/doacoes">
              Doe Agora
            </HeaderButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors ${isScrolled || isMenuOpen ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg"
        >
          <div className="px-4 pt-4 pb-8 space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-lg ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
              <HeaderButton to="/voluntario" variant="secondary">
                Seja Voluntário
              </HeaderButton>
              <HeaderButton to="/doacoes">
                Doe Agora
              </HeaderButton>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}