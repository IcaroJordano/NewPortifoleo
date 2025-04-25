import { Header } from "./Components/Header/Header"
import { Rotas } from "./Components/Rotas/Rotas"
import { Footer } from "./Components/Footer"

import 'swiper/css'

import { BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./Components/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="  bg-zinc-950 dark:bg-slate-200 custom-scrollbar  w-dvh flex justify-center  overflow-hidden">
      <div className="bg-zinc-900  transition-all duration-500 dark:bg-zinc-100 p-0 m-0 lg:overflow-visible overflow-hidden h-full w-auto lg:w-11/12 ">
        <Router className="bg-neutral-200 h-screen p-0 m-0">
          {/* <Header></Header> */}
          {/* <Rotas></Rotas> */}
          <HomePage/>
          <Footer></Footer>
        </Router>
      </div>
    </div>
  )
}

export default App
