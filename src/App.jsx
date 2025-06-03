import FormCadastro from "./pages/FormCadastro.jsx"
import React, { Suspense } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"

const PageCadastro = React.lazy(() => import("./pages/FormCadastro.jsx"))
const PageLogin = React.lazy(() => import("./pages/FormLogin.jsx"))
const PageListarUsuarios = React.lazy(() => import("./pages/ListarUsuarios.jsx"))
const PageHome = React.lazy(() => import("./pages/Home.jsx"))
const PageCriarEvento = React.lazy(() => import("./pages/CriarEvento.jsx"))

function App() {

  return (
    <HashRouter>
      <Suspense fallback={<div>carregando...</div>} >
        <Routes>
          <Route path="/" element={<PageCadastro />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/listar-usuarios" element={<PageListarUsuarios />} />
          <Route path="/home" element={<PageHome />} />
          <Route path="/criarevento" element={<PageCriarEvento />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
