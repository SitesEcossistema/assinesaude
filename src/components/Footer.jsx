import React from 'react'
import { Link } from 'react-router-dom'
import assinesaudeLogo from '../assets/assinesaude_logo.png'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={assinesaudeLogo} alt="AssineSaúde Logo" className="h-8 mb-4 filter brightness-0 invert" />
            <p className="text-gray-400">
              Conectando você aos melhores profissionais de saúde
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/planos" className="hover:text-white transition-colors">Planos Médicos</Link></li>
              <li><Link to="/planos" className="hover:text-white transition-colors">Planos Odontológicos</Link></li>
              <li><Link to="/planos" className="hover:text-white transition-colors">Planos Veterinários</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/faq" className="hover:text-white transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AssineSaúde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

