import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Search, Heart, User, Menu, X } from 'lucide-react'
import heroImage from './assets/hero-image.png'
import professionalsImage from './assets/professionals.jpg'
import veterinaryImage from './assets/veterinary.jpg'
import assinesaudeLogo from './assets/assinesaude_logo.png' // Importando o logotipo
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={assinesaudeLogo} alt="AssineSaúde Logo" className="h-8" /> {/* Usando o logotipo */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
              <a href="#sobre" className="text-gray-700 hover:text-green-600 font-medium">Sobre Nós</a>
              <a href="#planos" className="text-gray-700 hover:text-green-600 font-medium">Planos</a>
              <a href="#profissionais" className="text-gray-700 hover:text-green-600 font-medium">Profissionais</a>
              <a href="#contato" className="text-gray-700 hover:text-green-600 font-medium">Contato</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</a>
                <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-green-600">Sobre Nós</a>
                <a href="#planos" className="block px-3 py-2 text-gray-700 hover:text-green-600">Planos</a>
                <a href="#profissionais" className="block px-3 py-2 text-gray-700 hover:text-green-600">Profissionais</a>
                <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-green-600">Contato</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  A saúde que você procura, 
                  <span className="text-green-600"> a um clique</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Encontre, compare e assine planos de saúde, odontológicos e veterinários de forma simples e segura.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  BUY NOW
                </Button>
                <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Profissionais de saúde e família" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore nossas categorias
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encontre o plano ideal para você e sua família em diferentes áreas da saúde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Saúde Humana */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={professionalsImage} 
                alt="Profissionais de saúde" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Saúde Humana</h3>
                <p className="text-gray-600 mb-4">
                  Planos médicos completos com rede credenciada de qualidade
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Ver Planos
                </Button>
              </div>
            </div>

            {/* Odontologia */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-6xl">🦷</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Odontologia</h3>
                <p className="text-gray-600 mb-4">
                  Cuidados dentários completos para toda a família
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Ver Planos
                </Button>
              </div>
            </div>

            {/* Veterinária */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={veterinaryImage} 
                alt="Veterinário" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Veterinária</h3>
                <p className="text-gray-600 mb-4">
                  Cuidados especializados para seus pets
                </p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Ver Planos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a AssineSaúde?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Busca Fácil</h3>
              <p className="text-gray-600">Encontre profissionais e planos rapidamente</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cuidado Personalizado</h3>
              <p className="text-gray-600">Planos adaptados às suas necessidades</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Profissionais Verificados</h3>
              <p className="text-gray-600">Todos os profissionais são validados</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔒</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Segurança Total</h3>
              <p className="text-gray-600">Pagamentos seguros e dados protegidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Cadastre-se agora e tenha acesso aos melhores profissionais e planos de saúde
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Sou Paciente
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
              Sou Profissional
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={assinesaudeLogo} alt="AssineSaúde Logo" className="h-8 mb-4" /> {/* Usando o logotipo no footer */}
              <p className="text-gray-400">
                Conectando você aos melhores profissionais de saúde
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Planos Médicos</a></li>
                <li><a href="#" className="hover:text-white">Planos Odontológicos</a></li>
                <li><a href="#" className="hover:text-white">Planos Veterinários</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">LGPD</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AssineSaúde. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

