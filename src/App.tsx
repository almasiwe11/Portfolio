import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./Components/AppLayout"
import Home from "./Pages/Home/Home"
import Projects from "./Pages/Projects/Projects"

function App() {
  const [animate, setAnimate] = useState(true)
  return (
    <div className="font-dm">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route
              index
              element={<Home animate={animate} setAnimate={setAnimate} />}
            ></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
