import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Heart, Users, Shield, Award } from 'lucide-react'

function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a AssineSaúde
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma plataforma inovadora que conecta pacientes aos melhores profissionais de saúde, 
            facilitando o acesso a cuidados médicos, odontológicos e veterinários de qualidade.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
            <p className="text-lg text-gray-600 mb-6">
              Democratizar o acesso à saúde de qualidade, conectando pessoas aos melhores 
              profissionais e planos de saúde através de uma plataforma digital segura e intuitiva.
            </p>
            <p className="text-lg text-gray-600">
              Acreditamos que todos merecem cuidados de saúde excepcionais, e nossa tecnologia 
              torna isso possível de forma simples e acessível.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">10k+</div>
                <div className="text-gray-600">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Profissionais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Planos Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">99%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cuidado</h3>
              <p className="text-gray-600">Priorizamos o bem-estar e a saúde de cada pessoa</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Conexão</h3>
              <p className="text-gray-600">Conectamos pessoas aos melhores profissionais</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Segurança</h3>
              <p className="text-gray-600">Garantimos proteção total dos seus dados</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excelência</h3>
              <p className="text-gray-600">Buscamos sempre a melhor qualidade em tudo</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Faça parte da nossa comunidade</h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de pessoas que já confiam na AssineSaúde
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cadastro/paciente">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg w-full sm:w-auto">
                Cadastrar como Paciente
              </Button>
            </Link>
            <Link to="/cadastro/profissional">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg w-full sm:w-auto">
                Cadastrar como Profissional
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

