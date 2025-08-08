import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Star, MapPin, Clock, Phone, Heart } from 'lucide-react'

function Professionals() {
  const professionals = [
    {
      id: 1,
      name: "Dr. João Silva",
      specialty: "Cardiologista",
      rating: 4.9,
      reviews: 127,
      location: "São Paulo, SP",
      experience: "15 anos",
      price: "R$ 200",
      image: "/api/placeholder/150/150",
      available: true,
      description: "Especialista em cardiologia preventiva e intervencionista."
    },
    {
      id: 2,
      name: "Dra. Maria Santos",
      specialty: "Pediatra",
      rating: 4.8,
      reviews: 89,
      location: "Rio de Janeiro, RJ",
      experience: "12 anos",
      price: "R$ 180",
      image: "/api/placeholder/150/150",
      available: true,
      description: "Pediatra com foco em desenvolvimento infantil e vacinação."
    },
    {
      id: 3,
      name: "Dr. Carlos Oliveira",
      specialty: "Ortopedista",
      rating: 4.7,
      reviews: 156,
      location: "Belo Horizonte, MG",
      experience: "18 anos",
      price: "R$ 250",
      image: "/api/placeholder/150/150",
      available: false,
      description: "Especialista em cirurgia ortopédica e medicina esportiva."
    },
    {
      id: 4,
      name: "Dra. Ana Costa",
      specialty: "Dermatologista",
      rating: 4.9,
      reviews: 203,
      location: "Salvador, BA",
      experience: "10 anos",
      price: "R$ 220",
      image: "/api/placeholder/150/150",
      available: true,
      description: "Dermatologista clínica e estética, especialista em laser."
    },
    {
      id: 5,
      name: "Dr. Pedro Lima",
      specialty: "Neurologista",
      rating: 4.6,
      reviews: 78,
      location: "Fortaleza, CE",
      experience: "14 anos",
      price: "R$ 280",
      image: "/api/placeholder/150/150",
      available: true,
      description: "Neurologista com foco em doenças neurodegenerativas."
    },
    {
      id: 6,
      name: "Dra. Lucia Ferreira",
      specialty: "Ginecologista",
      rating: 4.8,
      reviews: 142,
      location: "Porto Alegre, RS",
      experience: "16 anos",
      price: "R$ 190",
      image: "/api/placeholder/150/150",
      available: true,
      description: "Ginecologista e obstetra, especialista em saúde da mulher."
    }
  ]

  const specialties = [
    "Todas as Especialidades",
    "Cardiologia",
    "Pediatria",
    "Ortopedia",
    "Dermatologia",
    "Neurologia",
    "Ginecologia",
    "Psiquiatria",
    "Oftalmologia",
    "Endocrinologia"
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Profissionais
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre os melhores profissionais de saúde da sua região. 
            Todos são verificados e altamente qualificados.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Especialidade
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  {specialties.map((specialty, index) => (
                    <option key={index} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Localização
                </label>
                <input
                  type="text"
                  placeholder="Digite sua cidade"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Disponibilidade
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="all">Todos</option>
                  <option value="available">Disponível Hoje</option>
                  <option value="week">Esta Semana</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
                Buscar Profissionais
              </Button>
            </div>
          </div>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {professionals.map((professional) => (
            <div key={professional.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl font-bold text-green-600">
                      {professional.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{professional.name}</h3>
                    <p className="text-green-600 font-medium">{professional.specialty}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {professional.rating} ({professional.reviews} avaliações)
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-gray-600 mt-4 text-sm">{professional.description}</p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {professional.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {professional.experience} de experiência
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      {professional.price}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      professional.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {professional.available ? 'Disponível' : 'Ocupado'}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex space-x-2">
                  <Link to="/login" className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Agendar Consulta
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">É um profissional de saúde?</h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se à nossa rede de profissionais e alcance mais pacientes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cadastro/profissional">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg w-full sm:w-auto">
                Cadastrar como Profissional
              </Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg w-full sm:w-auto">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Professionals

