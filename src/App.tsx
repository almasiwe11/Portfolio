import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./Components/AppLayout"
import Home from "./Pages/Home/Home"
import Projects from "./Pages/Projects/Projects"

function App() {
  return (
    <div className="font-dm">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
