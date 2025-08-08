# AssineSaúde - Site Oficial

Site oficial da AssineSaúde, uma plataforma que conecta profissionais de saúde com pacientes, facilitando a criação e adesão a programas de benefícios/atendimento personalizados.

## 🎨 Design

O site foi desenvolvido com base no design do Figma fornecido, seguindo fielmente:
- Layout moderno e responsivo
- Cores principais: Verde (#00B894), Roxo (#6C5CE7)
- Tipografia sans-serif
- Componentes de UI consistentes

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/UI** - Componentes de UI
- **Lucide React** - Ícones
- **Framer Motion** - Animações (disponível)

## 📱 Funcionalidades

### Páginas Implementadas
- **Homepage** - Hero section com call-to-action
- **Categorias de Serviços**:
  - Saúde Humana
  - Odontologia
  - Veterinária
- **Seção de Benefícios** - Por que escolher AssineSaúde
- **Call-to-Action** - Cadastro para pacientes e profissionais
- **Footer** - Links e informações legais

### Características
- ✅ Design responsivo (mobile-first)
- ✅ Navegação intuitiva
- ✅ Componentes reutilizáveis
- ✅ Otimizado para performance
- ✅ Acessibilidade básica

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes React
│   └── ui/         # Componentes de UI (shadcn)
├── hooks/          # Custom hooks
├── lib/            # Utilitários e configurações
├── App.jsx         # Componente principal
├── App.css         # Estilos globais
├── index.css       # Estilos base do Tailwind
└── main.jsx        # Ponto de entrada
```

## 🎯 Próximos Passos

Com base no fluxograma detalhado fornecido, as próximas implementações incluem:

### Backend e Funcionalidades Avançadas
- Sistema de autenticação (login/cadastro)
- Dashboard para profissionais
- Dashboard para pacientes
- Sistema de pagamentos
- Biometria facial e assinatura eletrônica
- Gestão de planos e contratos

### Páginas Adicionais
- Página de cadastro de profissionais
- Página de cadastro de pacientes
- Página de busca de profissionais
- Páginas de planos detalhados
- Sistema de verificação de documentos

## 🔧 Configuração de Deploy

O projeto está configurado para deploy em:
- **Vercel** (recomendado para React)
- **Netlify**
- **GitHub Pages**

### Deploy Automático
O repositório está configurado para deploy automático. Qualquer push para a branch `main` irá disparar um novo deploy.

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato através do repositório GitHub.

---

**Desenvolvido com ❤️ para AssineSaúde**

