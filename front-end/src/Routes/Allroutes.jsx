import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home"
import Men from "../Components/Men"

 
 
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
