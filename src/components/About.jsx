import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Eye, Users, Target, Award, Lightbulb } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Éticos e Morais',
      description: 'Baseados em princípios cristãos sólidos que guiam todas nossas ações'
    },
    {
      icon: Users,
      title: 'Compromisso Integral',
      description: 'Dedicação completa com a cidadania e desenvolvimento social'
    },
    {
      icon: Award,
      title: 'Respeito',
      description: 'Às pessoas e ao meio ambiente em todas as nossas iniciativas'
    },
    {
      icon: Lightbulb,
      title: 'Humildade e Amor',
      description: 'Confiança e amor ao próximo como base de nosso trabalho'
    }
  ]

  const principles = [
    {
      title: 'Integralidade',
      description: 'Cuidamos de cada aspecto do desenvolvimento da criança',
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Inovação',
      description: 'Sempre buscando novas formas de fazer a diferença',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Diversidade',
      description: 'Respeitamos e celebramos as diferenças de cada criança',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Transparência',
      description: 'Clareza em todas nossas ações e prestação de contas',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CONHEÇA NOSSA HISTÓRIA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre o <span className="text-primary-600">CEMEAR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Todos nós precisamos de alguém torcendo por nós. Juntos podemos cuidar e proteger crianças 
            e adolescentes que necessitam do nosso amparo e amor.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Melhorar a vida de crianças e adolescentes por meio do amor e cuidado, 
              oferecendo oportunidades de crescimento e desenvolvimento integral.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Fazer a diferença daqueles que necessitam do nosso apoio, buscando a construção 
              de uma sociedade justa, igualitária e que coloquem crianças e adolescentes como prioridade absoluta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Princípios éticos, morais e cristãos, compromisso integral com a cidadania, 
              respeito às pessoas e ao meio ambiente, humildade, confiança e amor ao próximo.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores em Detalhes</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Os valores que norteiam cada uma de nossas ações e decisões
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-white/90 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Princípios de Atuação
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilares fundamentais que sustentam nossa metodologia de trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${principle.color} rounded-2xl p-6 text-white h-full transition-transform duration-300`}>
                  <h4 className="text-xl font-bold mb-3">{principle.title}</h4>
                  <p className="text-white/90 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-8">
            <Heart className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O Que Fazemos
          </h3>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            O CEMEAR implementa ações voltadas para o crescimento socioeducativo de crianças e adolescentes assistidos. 
            Fornecendo suporte para que possam crescer amparados, com oportunidade de terem uma vida melhor.
          </p>
          
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Juntos podemos cuidar e proteger crianças e adolescentes que necessitam do nosso amparo e amor, 
            construindo um futuro mais esperançoso e repleto de oportunidades.
          </p>
        </motion.div>
      </div>
    </section>
  )
}