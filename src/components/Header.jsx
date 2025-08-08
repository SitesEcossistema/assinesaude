import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Search, Heart, User, Menu, X } from 'lucide-react'
import assinesaudeLogo from '../assets/assinesaude_logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={assinesaudeLogo} alt="AssineSaúde Logo" className="h-8" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/home" 
              className={`font-medium transition-colors ${
                isActive('/') || isActive('/home') 
                  ? 'text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/sobre" 
              className={`font-medium transition-colors ${
                isActive('/sobre') 
                  ? 'text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/planos" 
              className={`font-medium transition-colors ${
                isActive('/planos') 
                  ? 'text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Planos
            </Link>
            <Link 
              to="/profissionais" 
              className={`font-medium transition-colors ${
                isActive('/profissionais') 
                  ? 'text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Profissionais
            </Link>
            <Link 
              to="/contato" 
              className={`font-medium transition-colors ${
                isActive('/contato') 
                  ? 'text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </Link>
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
              <Link 
                to="/home" 
                className={`block px-3 py-2 transition-colors ${
                  isActive('/') || isActive('/home') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/sobre" 
                className={`block px-3 py-2 transition-colors ${
                  isActive('/sobre') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/planos" 
                className={`block px-3 py-2 transition-colors ${
                  isActive('/planos') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </Link>
              <Link 
                to="/profissionais" 
                className={`block px-3 py-2 transition-colors ${
                  isActive('/profissionais') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Profissionais
              </Link>
              <Link 
                to="/contato" 
                className={`block px-3 py-2 transition-colors ${
                  isActive('/contato') 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="border-t pt-2">
                <Link 
                  to="/login" 
                  className="block px-3 py-2 text-gray-700 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

