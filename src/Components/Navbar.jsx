 
 
const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        
        <div className="row">
            <div className="col-12">
                <div className="" style={{justifyContent:"space-between",display:"flex",padding:"10px"}}>
                <div className="col-3">
                <img style={{height:"30px",width:"80px"}} src="https://purepng.com/public/uploads/large/purepng.com-nike-logologobrand-logoiconslogos-251519940082eoxxs.png" alt="" />
                
                </div>
               
               <div className="col-6" style={{display:"flex",gap:"10px"}}>
                
                <h5>New & Featured</h5>
                <h5>Men</h5>
                <h5>Women</h5>
                <h5>Kids</h5>
                <h5>Sale</h5>
                <h5>SNKRS</h5>
              </div>
               <div> 
                <input type="text" placeholder="Search" style={{borderRadius:"50px",border:"none"}}/>
                <i className="bi bi-heart"x></i>

               </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
