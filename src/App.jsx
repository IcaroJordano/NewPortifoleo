import { Header } from "./Components/Header/Header"
import { Rotas } from "./Components/Rotas/Rotas"
import { Footer } from "./Components/Footer"

import 'swiper/css'

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="  bg-zinc-950 dark:bg-zinc-100 custom-scrollbar  w-dvh flex justify-center  overflow-hidden">
      <div className="bg-zinc-900 border-x border-neutral-600/10 dark:bg-slate-50 lg:overflow-visible overflow-hidden h-full w-auto lg:w-11/12 ">
        <Router className="bg-neutral-50 h-screen">
          <Header></Header>
          <Rotas></Rotas>
          <Footer></Footer>
        </Router>
      </div>
    </div>
  )
}

export default App
