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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/a55d31ca-b53b-4996-884f-360d0648416d/logo_1764949266323_0.png"
              alt="CEMEAR Logo"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}>
                CEMEAR
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-secondary-500' : 'text-white/80'
              }`}>
                Esperança, Amor e Resgate
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => {
              const IconComponent = item.icon

const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
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