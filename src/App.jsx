import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Páginas Públicas
import Homepage from './pages/public/Homepage'
import Plans from './pages/public/Plans'
import Professionals from './pages/public/Professionals'
import FAQ from './pages/public/FAQ'
import Contact from './pages/public/Contact'
import About from './pages/public/About'

// Páginas de Autenticação
import Login from './pages/auth/Login'
import RegisterPatient from './pages/auth/RegisterPatient'
import RegisterProfessional from './pages/auth/RegisterProfessional'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'

// Painéis do Paciente
import PatientDashboard from './pages/patient/Dashboard'
import PatientMyPlans from './pages/patient/MyPlans'
import PatientDependents from './pages/patient/Dependents'
import PatientBilling from './pages/patient/Billing'
import PatientProfileSettings from './pages/patient/ProfileSettings'

// Painéis do Profissional
import ProfessionalDashboard from './pages/professional/Dashboard'
import ProfessionalMyPlans from './pages/professional/MyPlans'
import ProfessionalClientDetails from './pages/professional/ClientDetails'
import ProfessionalMyClientsList from './pages/professional/MyClientsList'
import ProfessionalFinancials from './pages/professional/Financials'
import ProfessionalPlanCreator from './pages/professional/PlanCreator'
import ProfessionalProfileSettings from './pages/professional/ProfileSettings'
import ProfessionalCoupons from './pages/professional/Coupons'
import ProfessionalNotifications from './pages/professional/Notifications'
import ProfessionalAppointments from './pages/professional/Appointments'
import ProfessionalChat from './pages/professional/Chat'

// Páginas de Sistema
import Error404 from './pages/system/Error404'
import GenericError from './pages/system/GenericError'

import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            {/* Páginas Públicas */}
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/profissionais" element={<Professionals />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contact />} />

            {/* Páginas de Autenticação */}
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro/paciente" element={<RegisterPatient />} />
            <Route path="/cadastro/profissional" element={<RegisterProfessional />} />
            <Route path="/esqueci-senha" element={<ForgotPassword />} />
            <Route path="/redefinir-senha" element={<ResetPassword />} />

            {/* Painéis do Paciente */}
            <Route path="/paciente/dashboard" element={<PatientDashboard />} />
            <Route path="/paciente/meus-planos" element={<PatientMyPlans />} />
            <Route path="/paciente/dependentes" element={<PatientDependents />} />
            <Route path="/paciente/faturamento" element={<PatientBilling />} />
            <Route path="/paciente/perfil" element={<PatientProfileSettings />} />

            {/* Painéis do Profissional */}
            <Route path="/profissional/dashboard" element={<ProfessionalDashboard />} />
            <Route path="/profissional/meus-planos" element={<ProfessionalMyPlans />} />
            <Route path="/profissional/cliente/:id" element={<ProfessionalClientDetails />} />
            <Route path="/profissional/clientes" element={<ProfessionalMyClientsList />} />
            <Route path="/profissional/financeiro" element={<ProfessionalFinancials />} />
            <Route path="/profissional/criar-plano" element={<ProfessionalPlanCreator />} />
            <Route path="/profissional/perfil" element={<ProfessionalProfileSettings />} />
            <Route path="/profissional/cupons" element={<ProfessionalCoupons />} />
            <Route path="/profissional/notificacoes" element={<ProfessionalNotifications />} />
            <Route path="/profissional/agendamentos" element={<ProfessionalAppointments />} />
            <Route path="/profissional/chat" element={<ProfessionalChat />} />

            {/* Páginas de Sistema */}
            <Route path="/erro" element={<GenericError />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

