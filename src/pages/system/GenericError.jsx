import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { RefreshCw, Home, AlertTriangle, MessageCircle } from 'lucide-react'

function GenericError() {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Algo deu errado
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
          </p>
          <p className="text-sm text-gray-500">
            Tente recarregar a página ou volte mais tarde.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <Button 
            onClick={handleRefresh}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Tentar Novamente
          </Button>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link to="/">
              <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                <Home className="h-4 w-4 mr-2" />
                Página Inicial
              </Button>
            </Link>
            
            <Link to="/contato">
              <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                <MessageCircle className="h-4 w-4 mr-2" />
                Reportar Problema
              </Button>
            </Link>
          </div>
        </div>

        {/* Error Details (for development) */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalhes do Erro</h3>
          <div className="text-left bg-gray-50 rounded p-4">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Código:</strong> ERR_GENERIC_500
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Timestamp:</strong> {new Date().toLocaleString('pt-BR')}
            </p>
            <p className="text-sm text-gray-600">
              <strong>ID da Sessão:</strong> {Math.random().toString(36).substr(2, 9)}
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Inclua essas informações ao reportar o problema para nossa equipe de suporte.
          </p>
        </div>

        {/* Status and Help */}
        <div className="space-y-4">
          {/* Status */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-green-900 mb-2">Status do Sistema</h4>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-green-700">Todos os serviços operacionais</span>
            </div>
            <p className="text-xs text-green-600 mt-1">
              Última verificação: {new Date().toLocaleTimeString('pt-BR')}
            </p>
          </div>

          {/* Help */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-blue-900 mb-2">Precisa de Ajuda Imediata?</h4>
            <p className="text-sm text-blue-700 mb-3">
              Nossa equipe de suporte está disponível 24/7 para ajudar você.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-blue-700">
                📞 <strong>Telefone:</strong> (11) 3000-0000
              </div>
              <div className="text-sm text-blue-700">
                📧 <strong>Email:</strong> suporte@assinesaude.com.br
              </div>
              <div className="text-sm text-blue-700">
                💬 <strong>Chat:</strong> Disponível no site
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenericError

