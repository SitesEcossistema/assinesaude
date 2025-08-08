import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Eye, EyeOff, Lock, CheckCircle, AlertCircle } from 'lucide-react'
import assinesaudeLogo from '../../assets/assinesaude_logo.png'

function ResetPassword() {
  const [formData, setFormData] = React.useState({
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isValidToken, setIsValidToken] = React.useState(true) // Simular validação do token

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!')
      return
    }

    if (formData.password.length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres!')
      return
    }

    // Aqui você implementaria a lógica de redefinição de senha
    console.log('Password reset:', formData)
    setIsSubmitted(true)
  }

  // Simular token inválido ou expirado
  if (!isValidToken) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <img src={assinesaudeLogo} alt="AssineSaúde" className="h-12 mx-auto mb-6" />
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Link Inválido
            </h2>
            <p className="text-gray-600 mb-8">
              Este link de redefinição de senha é inválido ou expirou. 
              Solicite um novo link para continuar.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div className="text-center space-y-4">
              <Link to="/esqueci-senha">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Solicitar Novo Link
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  Voltar ao Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
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
              Senha Redefinida!
            </h2>
            <p className="text-gray-600 mb-8">
              Sua senha foi redefinida com sucesso. Agora você pode fazer login com sua nova senha.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Link to="/login">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                Fazer Login
              </Button>
            </Link>
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
            Redefinir Senha
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Digite sua nova senha abaixo
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Nova Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Mínimo 8 caracteres"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                A senha deve ter pelo menos 8 caracteres
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirmar Nova Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Confirme sua nova senha"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Password Strength Indicator */}
            <div className="space-y-2">
              <div className="text-xs text-gray-600">Força da senha:</div>
              <div className="flex space-x-1">
                <div className={`h-1 w-1/4 rounded ${formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                <div className={`h-1 w-1/4 rounded ${formData.password.length >= 8 && /[A-Z]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                <div className={`h-1 w-1/4 rounded ${formData.password.length >= 8 && /[0-9]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                <div className={`h-1 w-1/4 rounded ${formData.password.length >= 8 && /[^A-Za-z0-9]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              </div>
              <div className="text-xs text-gray-500">
                Use pelo menos 8 caracteres com letras maiúsculas, números e símbolos
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium"
              >
                Redefinir Senha
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-green-600 hover:text-green-500">
              Voltar ao Login
            </Link>
          </div>
        </div>

        {/* Security Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-900 mb-2">Dicas de Segurança</h3>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• Use uma senha única que você não usa em outros sites</li>
            <li>• Combine letras maiúsculas e minúsculas, números e símbolos</li>
            <li>• Evite informações pessoais como nome, data de nascimento</li>
            <li>• Considere usar um gerenciador de senhas</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword

