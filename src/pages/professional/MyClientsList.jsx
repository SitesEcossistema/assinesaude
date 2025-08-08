import React from 'react'
import { Button } from '@/components/ui/button.jsx'

function MyClientsList() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">MyClientsList</h1>
        <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Página em Desenvolvimento</h2>
          <p className="text-gray-600 mb-6">Esta página será implementada com a integração das APIs.</p>
          <Button className="bg-green-600 hover:bg-green-700">
            Voltar ao Dashboard
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MyClientsList
