import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle, Leaf, Heart, UtensilsCrossed, Computer, BookOpen, Globe, Music, Users, ArrowRight } from 'lucide-react'

export default function Services({ showAll = false }) {
  const activities = [
    {
      id: 'roda-de-conversas',
      title: 'Roda de Conversas',
      description: 'Espaço de diálogo para famílias se expressarem e aprenderem, promovendo comunicação, autonomia e respeito.',
      icon: MessageCircle,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a55d31ca-b53b-4996-884f-360d0648416d/1764949240865_xm2rk8seh1i_crianca_orando.jpeg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'educacao-ambiental',
      title: 'Educação Ambiental',
      description: 'Cultiva mentalidade ecológica em crianças para enfrentarem desafios ambientais, promovendo consciência e sustentabilidade.',
      icon: Leaf,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a55d31ca-b53b-4996-884f-360d0648416d/1764949238918_rqp32xy3bo_criancas_plnatando_flores.jpeg',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'atendimento-psicossocial',
      title: 'Atendimento Psicossocial',
      description: 'Fortalece laços familiares, avalia violências e transtornos, oferecendo apoio emocional e integração social.',
      icon: Heart,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a55d31ca-b53b-4996-884f-360d0648416d/1764949242400_y7gd4j4y8fd_atividades_com_as_criancas_2.jpg',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'alimentacao',
      title: 'Alimentação',
      description: 'Fornece alimentação saudável com cardápio preparado para garantir boa qualidade de vida a crianças e adolescentes.',
      icon: UtensilsCrossed,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a55d31ca-b53b-4996-884f-360d0648416d/1764949237076_nq61jtoagai_almoco_para_as_criancas.jpeg',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'informatica',
      title: 'Informática',
      description: 'Aulas para desenvolver uso correto do computador, ensinando hardware e software, com foco em segurança cibernética.',
      icon: Computer,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a55d31ca-b53b-4996-884f-360d0648416d/1764949251616_kelat9fz35g_aula_de_informatica_2.jpg',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'reforco-escolar',
      title: 'Reforço Escolar',
      description: 'Aulas de reforço personalizadas para atender necessidades educacionais específicas de cada criança e adolescente.',
      icon: BookOpen,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a55d31ca-b53b-4996-884f-360d0648416d/1764949241576_7lkv2n75929_reforco_escolar.jpeg',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'ingles',
      title: 'Inglês',
      description: 'Ensino incluído com foco em gramática, verbos e conversação diária por meio de exercícios lúdicos e músicas.',
      icon: Globe,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a55d31ca-b53b-4996-884f-360d0648416d/1764949232876_j474jc3fcda_aula_de_musica.jpg',
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'musica',
      title: 'Música',
      description: 'Aulas de violão e bateria que promovem expressão criativa e trabalho em equipe, desenvolvendo habilidades artísticas.',
      icon: Music,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a55d31ca-b53b-4996-884f-360d0648416d/1764949232876_j474jc3fcda_aula_de_musica.jpg',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'danca',
      title: 'Dança',
      description: 'Ensina coreografias, permitindo apresentações das habilidades adquiridas, promovendo expressão cultural e confiança corporal.',
      icon: Users,
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/a55d31ca-b53b-4996-884f-360d0648416d/1764949245368_wek9gtv5qko_atividades_com_as_criancas_5.png',
      color: 'from-yellow-500 to-yellow-600'
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
            NOSSAS ATIVIDADES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Veja Como <span className="text-primary-600">Ajudamos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma variedade de atividades especialmente desenvolvidas para o crescimento 
            integral de crianças e adolescentes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(showAll ? activities : activities.slice(0, 6)).map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/atividades/${activity.id}`} className="block h-full">
                  <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100">
                    <div className="relative h-48">
                      <img 
                        src={activity.image} 
                        alt={activity.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-70`}></div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex-grow">{activity.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4 h-20 overflow-hidden">
                        {activity.description}
                      </p>
                      <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-1 transition-transform duration-300 mt-auto">
                        <span>Saiba Mais</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link to="/atividades" className="btn-primary">
              Ver Todas as Atividades
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  )
}