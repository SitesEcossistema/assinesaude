import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log('Form submitted:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 3000-0000",
      description: "Segunda a sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contato@assinesaude.com.br",
      description: "Respondemos em até 24h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Paulista, 1000 - São Paulo, SP",
      description: "CEP: 01310-100"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Segunda a Sexta: 8h às 18h",
      description: "Sábado: 8h às 12h"
    }
  ]

  const subjects = [
    "Dúvidas sobre planos",
    "Problemas técnicos",
    "Agendamento de consultas",
    "Cancelamento",
    "Sugestões",
    "Outros"
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você. Entre em contato conosco através dos canais abaixo 
            ou envie uma mensagem diretamente.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-green-600 font-medium mb-1">{item.info}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="flex items-center mb-6">
              <Send className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Envie uma Mensagem</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Descreva sua dúvida ou solicitação..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Quick Support */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Suporte Rápido</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Precisa de ajuda imediata? Use nossos canais de suporte rápido:
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat Online
                </Button>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h3>
              <p className="text-gray-600 mb-6">
                Antes de entrar em contato, que tal verificar se sua dúvida já foi respondida 
                em nossa seção de perguntas frequentes?
              </p>
              <a href="/faq">
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  Ver FAQ
                </Button>
              </a>
            </div>

            {/* Emergency */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">Emergência Médica?</h3>
              <p className="text-red-700 text-sm mb-4">
                Em caso de emergência médica, ligue imediatamente para:
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-red-900 font-semibold">
                  <Phone className="h-4 w-4 mr-2" />
                  SAMU: 192
                </div>
                <div className="flex items-center text-red-900 font-semibold">
                  <Phone className="h-4 w-4 mr-2" />
                  Bombeiros: 193
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

