import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Phone, MapPin, Instagram, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/atividades', label: 'Atividades' },
    { path: '/equipe', label: 'Equipe' }
  ]

  const supportLinks = [
    { path: '/voluntario', label: 'Seja Voluntário' },
    { path: '/doacoes', label: 'Faça uma Doação' },
    { path: '/contato', label: 'Entre em Contato' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 border-b border-gray-800">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/a55d31ca-b53b-4996-884f-360d0648416d/logo_1764949266323_0.png"
                  alt="CEMEAR Logo"
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">CEMEAR</h3>
                  <p className="text-sm text-gray-400">Esperança, Amor e Resgate</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Centro educacional missionário que transforma vidas através do amor e educação, 
                oferecendo esperança e oportunidades para crianças e adolescentes em Anori, Amazonas.
              </p>
              
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/cemear.anori"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-primary-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:w-3 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-6">Como Ajudar</h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:w-3 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm leading-relaxed">
                    Trav. Americana S/N São João<br />
                    CEP 69.440-000<br />
                    Anori - Amazonas
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <a 
                    href="tel:+5511992-6163"
                    className="text-gray-300 text-sm hover:text-primary-400 transition-colors"
                  >
                    (55) 11992-6163
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0"
          >
            <Heart className="w-4 h-4 text-primary-500" />
            <span>© 2024 CEMEAR. Todos os direitos reservados.</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-sm"
          >
            Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">Papum</a></em>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  )
}