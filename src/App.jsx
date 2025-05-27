import FormCadastro from "./components/FormCadastro"
import React, { Suspense } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"

const PageCadastro = React.lazy(() => import("./components/FormCadastro.jsx"))
const PageLogin = React.lazy(() => import("./components/FormLogin.jsx"))

function App() {

  return (
    <HashRouter>
      <Suspense fallback={<div>carregando...</div>} >
        <Routes>
          <Route path="/" element={<PageCadastro />} />
          <Route path="/login" element={<PageLogin />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
