import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, MessageCircle } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        "recipientEmail": "",
        "token": token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ 
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', 
          isError: false 
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Erro no envio')
      }
    } catch (error) {
      setStatus({ 
        message: 'Erro ao enviar mensagem. Tente novamente.', 
        isError: true 
      })
    } finally {
      recaptchaRef.current?.reset()
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(55) 11992-6163',
      action: 'tel:+5511992-6163'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Trav. Americana S/N São João\nCEP 69.440-000 - Anori, Amazonas',
      action: null
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 8h às 17h\nSábados: 8h às 12h',
      action: null
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ENTRE EM CONTATO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco para saber mais sobre nossas atividades, 
            como ser voluntário ou fazer uma doação
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {

const IconComponent = info.icon

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-primary-100 rounded-lg p-3 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-gray-600 hover:text-primary-600 transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white"
            >
              <div className="text-center">
                <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-3">
                  Precisa de Ajuda Urgente?
                </h3>
                <p className="text-white/90 mb-6">
                  Entre em contato conosco através do telefone para atendimento imediato
                </p>
                <a 
                  href="tel:+5511992-6163"
                  className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Assunto *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Sobre o que você gostaria de falar?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              <ReCAPTCHA 
                ref={recaptchaRef}
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                size="invisible"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </motion.button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.isError 
                      ? 'bg-red-50 text-red-700 border border-red-200' 
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
        >
          <div className="aspect-w-16 aspect-h-9 h-96">
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8234567890123!2d-61.123456789!3d-3.987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTknMTUuNiJTIDYxwrAwNycyNC40Ilc!5e0!3m2!1spt!2sbr!4v1234567890123'
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do CEMEAR"
              className="rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}