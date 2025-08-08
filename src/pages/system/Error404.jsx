import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react'

function Error404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-green-600 mb-4">404</div>
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-6">
            <div className="text-4xl">🏥</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Página Não Encontrada
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Ops! A página que você está procurando não existe ou foi movida para outro local.
          </p>
          <p className="text-sm text-gray-500">
            Verifique se o endereço está correto ou use os links abaixo para navegar.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <Link to="/">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
              <Home className="h-5 w-5 mr-2" />
              Voltar ao Início
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Página Anterior
            </Button>
            
            <Link to="/profissionais">
              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                <Search className="h-4 w-4 mr-2" />
                Buscar Profissionais
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Links Úteis</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link to="/planos" className="text-green-600 hover:text-green-500 hover:underline">
              Nossos Planos
            </Link>
            <Link to="/profissionais" className="text-green-600 hover:text-green-500 hover:underline">
              Profissionais
            </Link>
            <Link to="/sobre" className="text-green-600 hover:text-green-500 hover:underline">
              Sobre Nós
            </Link>
            <Link to="/contato" className="text-green-600 hover:text-green-500 hover:underline">
              Contato
            </Link>
            <Link to="/faq" className="text-green-600 hover:text-green-500 hover:underline">
              FAQ
            </Link>
            <Link to="/login" className="text-green-600 hover:text-green-500 hover:underline">
              Login
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-center mb-2">
            <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
            <h4 className="text-sm font-medium text-blue-900">Precisa de Ajuda?</h4>
          </div>
          <p className="text-sm text-blue-700 mb-3">
            Se você continuar tendo problemas, nossa equipe de suporte está pronta para ajudar.
          </p>
          <Link to="/contato">
            <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100">
              Entrar em Contato
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error404

