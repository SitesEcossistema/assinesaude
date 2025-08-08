import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'
import assinesaudeLogo from '../../assets/assinesaude_logo.png'

function ForgotPassword() {
  const [email, setEmail] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de recuperação de senha
    console.log('Password reset requested for:', email)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <img src={assinesaudeLogo} alt="AssineSaúde" className="h-12 mx-auto mb-6" />
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Email Enviado!
            </h2>
            <p className="text-gray-600 mb-8">
              Enviamos um link para redefinir sua senha para <strong>{email}</strong>. 
              Verifique sua caixa de entrada e spam.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Não recebeu o email?
              </h3>
              <div className="space-y-3">
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Tentar Novamente
                </Button>
                <Link to="/contato">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Entrar em Contato
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border-t pt-6 text-center">
              <Link to="/login" className="inline-flex items-center text-green-600 hover:text-green-500">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <img src={assinesaudeLogo} alt="AssineSaúde" className="h-12" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Esqueceu sua senha?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Digite seu email e enviaremos um link para redefinir sua senha
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium"
              >
                Enviar Link de Recuperação
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou</span>
              </div>
            </div>

            <div className="mt-6 text-center space-y-4">
              <Link to="/login" className="inline-flex items-center text-green-600 hover:text-green-500">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Login
              </Link>
              
              <div className="text-sm text-gray-600">
                Não tem uma conta?{' '}
                <Link to="/cadastro/paciente" className="font-medium text-green-600 hover:text-green-500">
                  Cadastre-se
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-900 mb-2">Precisa de ajuda?</h3>
          <p className="text-sm text-blue-700 mb-3">
            Se você continuar tendo problemas para acessar sua conta, nossa equipe de suporte está pronta para ajudar.
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

export default ForgotPassword

