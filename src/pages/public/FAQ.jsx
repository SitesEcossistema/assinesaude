import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react'

function FAQ() {
  const [openItems, setOpenItems] = React.useState({})
  const [searchTerm, setSearchTerm] = React.useState('')

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqCategories = [
    {
      title: "Planos e Assinaturas",
      questions: [
        {
          question: "Como funciona a assinatura dos planos?",
          answer: "Nossa assinatura é mensal e pode ser cancelada a qualquer momento. Você tem acesso imediato aos benefícios após a confirmação do pagamento."
        },
        {
          question: "Posso trocar de plano depois de assinar?",
          answer: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento através do seu painel de controle."
        },
        {
          question: "Qual a diferença entre os planos?",
          answer: "Cada plano oferece diferentes níveis de cobertura. O Básico inclui consultas e exames simples, o Premium adiciona procedimentos especializados, e o Família oferece cobertura para múltiplas pessoas."
        },
        {
          question: "Como funciona o período de carência?",
          answer: "Consultas médicas têm carência zero. Exames têm carência de 30 dias, procedimentos especializados 90 dias, e cirurgias eletivas 180 dias."
        }
      ]
    },
    {
      title: "Agendamentos e Consultas",
      questions: [
        {
          question: "Como agendar uma consulta?",
          answer: "Você pode agendar através do nosso site, app ou ligando para nossa central. Basta escolher o profissional, data e horário disponível."
        },
        {
          question: "Posso cancelar ou remarcar consultas?",
          answer: "Sim, você pode cancelar ou remarcar até 2 horas antes do horário agendado sem custos adicionais."
        },
        {
          question: "Como funciona a telemedicina?",
          answer: "A telemedicina está disponível para consultas de acompanhamento e algumas especialidades. A consulta é feita por videochamada através da nossa plataforma."
        },
        {
          question: "E se o profissional atrasar ou faltar?",
          answer: "Em caso de atraso, você será notificado. Se o profissional faltar, reagendaremos automaticamente e você receberá um desconto na próxima consulta."
        }
      ]
    },
    {
      title: "Pagamentos e Faturamento",
      questions: [
        {
          question: "Quais formas de pagamento aceitas?",
          answer: "Aceitamos cartão de crédito, débito, PIX e boleto bancário. O pagamento é processado automaticamente todo mês."
        },
        {
          question: "Como funciona o reembolso?",
          answer: "Para procedimentos fora da rede credenciada, você pode solicitar reembolso apresentando os comprovantes. O valor varia conforme o plano."
        },
        {
          question: "Posso parcelar o pagamento?",
          answer: "Sim, oferecemos parcelamento em até 12x no cartão de crédito para planos anuais."
        },
        {
          question: "Como recebo a nota fiscal?",
          answer: "A nota fiscal é enviada automaticamente por email todo mês. Você também pode baixar pelo seu painel de controle."
        }
      ]
    },
    {
      title: "Rede Credenciada",
      questions: [
        {
          question: "Como encontrar profissionais credenciados?",
          answer: "Use nosso buscador no site ou app. Você pode filtrar por especialidade, localização e disponibilidade."
        },
        {
          question: "Posso usar em qualquer cidade?",
          answer: "Sim, nossa rede credenciada está presente em todo o Brasil. Você pode usar seu plano em qualquer cidade."
        },
        {
          question: "Como são selecionados os profissionais?",
          answer: "Todos os profissionais passam por rigoroso processo de seleção, incluindo verificação de documentos, experiência e avaliações."
        },
        {
          question: "E se não houver profissional da minha especialidade na minha cidade?",
          answer: "Oferecemos telemedicina para muitas especialidades e podemos ajudar a encontrar profissionais em cidades próximas."
        }
      ]
    }
  ]

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços e planos.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar perguntas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = `${categoryIndex}-${itemIndex}`
                  const isOpen = openItems[globalIndex]
                  
                  return (
                    <div key={itemIndex}>
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium text-gray-900 pr-4">
                            {item.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {searchTerm && filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum resultado encontrado
            </h3>
            <p className="text-gray-600">
              Tente buscar com outras palavras-chave ou entre em contato conosco.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <MessageCircle className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Não encontrou sua resposta?</h2>
          <p className="text-lg mb-6 opacity-90">
            Nossa equipe de suporte está pronta para ajudar você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg w-full sm:w-auto">
                Entrar em Contato
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg w-full sm:w-auto">
              Chat Online
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ

