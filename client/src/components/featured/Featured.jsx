import './featured.css';


const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img 
              src="https://images.pexels.com/photos/3859774/pexels-photo-3859774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Featured Img" 
              className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>GangNam</h1>
                <h2>12 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
              src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Featured Img" 
              className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>SinChon</h1>
                <h2>23 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
              src="https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Featured Img" 
              className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>GunDae</h1>
                <h2>34 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
