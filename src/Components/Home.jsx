import Slider from "../Pages/Slider"
import Slider2 from "../Pages/Slider2"

 
const Home = () => {
  return (
    <div>
       <div className="container">
        <div className="row">
          <div className="col-12">
            <h6 style={{textAlign:"center"}}>New Styles On Sale: Up To 40% Off</h6>
            <a className="dark"  href=""> <p style={{textAlign:"center"}}>Shop All Our New Markdowns</p></a>
          </div>
        </div>
       </div>
      

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 m-auto text-center">
            <div style={{}}>
            <h4 style={{marginLeft:"190px"}}>Trending</h4>
            <div className="col-12 treding d-flex col-sm-12 col-md-12 align-item-center" style={{gap:"20px",overflow:"scroll",overflowY:"hidden"}}>
             <a className="text-decoration-none" href=""> <img  className="trending"  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_693,c_limit/6e9794ea-1e83-4673-8419-50ec3937e6a2/image.png" alt="" /><h3  className="dark text-decoration-none" >Nike 24.7 Collection
             </h3></a>
             <a className="text-decoration-none" href=""> <img className="trending " src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_693,c_limit/a1203ad3-3de5-4010-b0ef-d0496846eb0c/image.png" alt="" /><h3 style={{color:"black",textDecoration:"none"}}>Air Max Dn
             </h3></a>
             <a className="text-decoration-none" href=""> <img className="trending " src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_693,c_limit/d1f4b12f-c2b8-45af-b71c-85844f68e4a1/image.png" alt="" /><h3 style={{color:"black"}}>Cosmic Runner
             </h3></a>
            </div>
          
          </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 pb-5">
  <div className="row">
    <div className="col-12">
      <div className="text-md-start text-center mb-4">
        <h2 className="ms-md-5">Classics Spotlight</h2>
      </div>
      <div className="d-flex justify-content-center">
        <Slider />
      </div>
    </div>
  </div>
</div>



    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-11 m-auto">
          <div>
            <h2>Don't Miss</h2>
          </div>
          <img className="Miss" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_2437,c_limit/e2140497-f009-405f-ab20-fec145c0c9dd/nike-just-do-it.jpg" alt="" />
        </div>
      </div>
    </div>




    <div className="container-fluid">
      <div className="row">
        <div className="col-8 m-auto">
          <h1>Shop By Sport</h1>
        </div>
<div className="col-10 m-auto">
      <Slider2/>
      </div>
        
      </div>
    </div>

    </div>
  )
}

export default Home
