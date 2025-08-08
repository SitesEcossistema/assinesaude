import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Check, Star, Heart, Shield } from 'lucide-react'

function Plans() {
  const plans = [
    {
      category: "Saúde Humana",
      color: "green",
      plans: [
        {
          name: "Básico Saúde",
          price: "R$ 89",
          period: "/mês",
          features: [
            "Consultas médicas ilimitadas",
            "Exames básicos inclusos",
            "Rede credenciada nacional",
            "Atendimento 24h",
            "Telemedicina"
          ],
          popular: false
        },
        {
          name: "Premium Saúde",
          price: "R$ 149",
          period: "/mês",
          features: [
            "Tudo do plano Básico",
            "Exames especializados",
            "Cirurgias eletivas",
            "Internação hospitalar",
            "Medicina preventiva",
            "Desconto em medicamentos"
          ],
          popular: true
        },
        {
          name: "Família Saúde",
          price: "R$ 299",
          period: "/mês",
          features: [
            "Tudo do plano Premium",
            "Cobertura para até 4 pessoas",
            "Pediatria especializada",
            "Ginecologia e obstetrícia",
            "Plano odontológico básico incluso"
          ],
          popular: false
        }
      ]
    },
    {
      category: "Odontologia",
      color: "purple",
      plans: [
        {
          name: "Sorriso Básico",
          price: "R$ 39",
          period: "/mês",
          features: [
            "Consultas odontológicas",
            "Limpeza e profilaxia",
            "Radiografias",
            "Tratamento de cáries",
            "Extrações simples"
          ],
          popular: false
        },
        {
          name: "Sorriso Premium",
          price: "R$ 79",
          period: "/mês",
          features: [
            "Tudo do plano Básico",
            "Tratamento de canal",
            "Próteses dentárias",
            "Ortodontia básica",
            "Clareamento dental",
            "Cirurgias orais"
          ],
          popular: true
        }
      ]
    },
    {
      category: "Veterinária",
      color: "orange",
      plans: [
        {
          name: "Pet Care Básico",
          price: "R$ 59",
          period: "/mês",
          features: [
            "Consultas veterinárias",
            "Vacinas anuais",
            "Exames básicos",
            "Atendimento de emergência",
            "Desconto em medicamentos"
          ],
          popular: false
        },
        {
          name: "Pet Care Premium",
          price: "R$ 119",
          period: "/mês",
          features: [
            "Tudo do plano Básico",
            "Cirurgias eletivas",
            "Exames especializados",
            "Internação veterinária",
            "Fisioterapia animal",
            "Cobertura para 2 pets"
          ],
          popular: true
        }
      ]
    }
  ]

  const getColorClasses = (color, variant = 'primary') => {
    const colors = {
      green: {
        primary: 'bg-green-600 hover:bg-green-700',
        light: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-600'
      },
      purple: {
        primary: 'bg-purple-600 hover:bg-purple-700',
        light: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-600'
      },
      orange: {
        primary: 'bg-orange-600 hover:bg-orange-700',
        light: 'bg-orange-50',
        text: 'text-orange-600',
        border: 'border-orange-600'
      }
    }
    return colors[color][variant]
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Planos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para você e sua família. Oferecemos opções flexíveis 
            para todas as necessidades de saúde.
          </p>
        </div>

        {/* Plans Sections */}
        {plans.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${getColorClasses(category.color, 'text')}`}>
                {category.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.plans.map((plan, planIndex) => (
                <div 
                  key={planIndex} 
                  className={`relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                    plan.popular ? `ring-2 ${getColorClasses(category.color, 'border')}` : ''
                  }`}
                >
                  {plan.popular && (
                    <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${getColorClasses(category.color, 'primary')} text-white px-4 py-1 rounded-b-lg text-sm font-medium`}>
                      Mais Popular
                    </div>
                  )}
                  
                  <div className={`${getColorClasses(category.color, 'light')} p-6 text-center`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className={`text-4xl font-bold ${getColorClasses(category.color, 'text')}`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className={`h-5 w-5 ${getColorClasses(category.color, 'text')} mt-0.5 mr-3 flex-shrink-0`} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/cadastro/paciente">
                      <Button 
                        className={`w-full ${getColorClasses(category.color, 'primary')} text-white`}
                      >
                        Assinar Plano
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Dúvidas Frequentes sobre Planos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Como funciona a carência?</h3>
              <p className="text-gray-600">A carência varia de acordo com o tipo de procedimento. Consultas têm carência zero, enquanto cirurgias podem ter até 180 dias.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-600">Sim, você pode cancelar seu plano a qualquer momento sem multas ou taxas adicionais.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Como adicionar dependentes?</h3>
              <p className="text-gray-600">Dependentes podem ser adicionados através do seu painel de controle ou entrando em contato conosco.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Qual a rede credenciada?</h3>
              <p className="text-gray-600">Temos uma ampla rede credenciada em todo o Brasil. Consulte a lista completa em nosso site.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Ver Todas as Perguntas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans

