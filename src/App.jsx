import {Routes, Route} from "react-router-dom"
import Welcome from "./assets/Welcome"
import NotFound from "./assets/NotFound"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path= "*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
