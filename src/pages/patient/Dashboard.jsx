import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, Heart, User, CreditCard, Users, Bell, Clock, MapPin, Phone } from 'lucide-react'

function PatientDashboard() {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. João Silva",
      specialty: "Cardiologista",
      date: "2024-08-15",
      time: "14:30",
      location: "Clínica São Paulo",
      type: "Consulta de Rotina"
    },
    {
      id: 2,
      doctor: "Dra. Maria Santos",
      specialty: "Dermatologista",
      date: "2024-08-20",
      time: "10:00",
      location: "Hospital Central",
      type: "Retorno"
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: "appointment",
      title: "Consulta realizada",
      description: "Dr. Carlos Oliveira - Ortopedista",
      date: "2024-08-05",
      time: "15:30"
    },
    {
      id: 2,
      type: "payment",
      title: "Pagamento processado",
      description: "Plano Premium Saúde - R$ 149,00",
      date: "2024-08-01",
      time: "09:15"
    },
    {
      id: 3,
      type: "document",
      title: "Exame disponível",
      description: "Hemograma completo",
      date: "2024-07-28",
      time: "16:45"
    }
  ]

  const quickActions = [
    {
      title: "Agendar Consulta",
      description: "Encontre e agende com profissionais",
      icon: Calendar,
      link: "/profissionais",
      color: "green"
    },
    {
      title: "Meus Planos",
      description: "Gerencie seus planos de saúde",
      icon: Heart,
      link: "/paciente/meus-planos",
      color: "blue"
    },
    {
      title: "Dependentes",
      description: "Adicione e gerencie dependentes",
      icon: Users,
      link: "/paciente/dependentes",
      color: "purple"
    },
    {
      title: "Faturamento",
      description: "Visualize faturas e pagamentos",
      icon: CreditCard,
      link: "/paciente/faturamento",
      color: "orange"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    }
    return colors[color] || colors.green
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard do Paciente</h1>
          <p className="text-gray-600">Bem-vindo de volta! Aqui está um resumo da sua saúde.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Próximas Consultas</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Planos Ativos</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Dependentes</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Fatura Atual</p>
                <p className="text-2xl font-bold text-gray-900">R$ 149</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Ações Rápidas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.link}>
                    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-start">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(action.color)}`}>
                          <action.icon className="h-5 w-5" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-gray-900">{action.title}</h3>
                          <p className="text-xs text-gray-600">{action.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Próximas Consultas</h2>
                <Link to="/profissionais">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Agendar Nova
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-medium text-gray-900">{appointment.doctor}</h3>
                          <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            {appointment.specialty}
                          </span>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(appointment.date).toLocaleDateString('pt-BR')} às {appointment.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {appointment.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {appointment.type}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Remarcar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Summary */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">João Silva</h3>
                  <p className="text-sm text-gray-600">Plano Premium Ativo</p>
                </div>
              </div>
              <Link to="/paciente/perfil">
                <Button variant="outline" className="w-full">
                  Ver Perfil Completo
                </Button>
              </Link>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Atividade Recente</h3>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(activity.date).toLocaleDateString('pt-BR')} às {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Tips */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Dica de Saúde</h3>
              <p className="text-sm text-gray-700 mb-4">
                Mantenha-se hidratado! Beba pelo menos 2 litros de água por dia para manter seu corpo funcionando adequadamente.
              </p>
              <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                Ver Mais Dicas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard

