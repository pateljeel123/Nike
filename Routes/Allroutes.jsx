import { Route, Routes } from "react-router-dom"
import Home from "../src/Components/Home"
import Men from "../src/Components/Men"

 
 
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/men" element={<Men/>}></Route>
         
      </Routes>
    </div>
  )
}

export default Allroutes
