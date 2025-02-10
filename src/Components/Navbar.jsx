import { Link } from "react-router-dom"
import Home from "./Home"

 
 
const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        
        <div className="row">
            <div className="col-12 col-xxl-12 col-xl-12">
                <div   style={{justifyContent:"space-between",display:"flex",padding:"20px"}}>
                <div className="col-3 col-md-3">
                <img style={{height:"30px",width:"80px"}} src="https://purepng.com/public/uploads/large/purepng.com-nike-logologobrand-logoiconslogos-251519940082eoxxs.png" alt="" />
                
                </div>
               
               <div className="col-6 col-md-3" style={{display:"flex",gap:"20px",color:"black"}}>
                
                <Link className="dark" to={"/home"} from={<Home/> }><h6 className="dark">New & Featured</h6></Link>
                <Link className="dark" to={"/men"}><h6>Men</h6></Link>
                <Link className="dark"><h6>Women</h6></Link>
                <Link className="dark"><h6>Kids</h6></Link>
                <Link className="dark"><h6>Sale</h6></Link>
                <Link className="dark"><h6>SNKRS</h6></Link>
              </div>
               <div style={{display:"flex",gap:"20px"}}> 
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <h4><i className="bi bi-heart"></i></h4>
                <h4><i className="bi bi-bag"></i></h4>
               </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
