import './featuredReview.css';


const FeaturedReview = () => {
  return (
    <div className="fReview">
      <div className="frItem">
        <img 
          src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" 
          className="frImg" 
        />
        <span className="frName">Cozy Hotel</span>
        <span className="frCity">Seoul</span>
        <span className="frPrice">$ 100,000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Cozy Place</span>
        </div>
      </div>
      <div className="frItem">
        <img 
          src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" 
          className="frImg" 
        />
        <span className="frName">Fire Store</span>
        <span className="frCity">Seoul</span>
        <span className="frPrice">$ 100,000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Cozy Place</span>
        </div>
      </div>
      <div className="frItem">
        <img 
          src="https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" 
          className="frImg" 
        />
        <span className="frName">Fire Base</span>
        <span className="frCity">Seoul</span>
        <span className="frPrice">$ 100,000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Cozy Place</span>
        </div>
      </div>
      <div className="frItem">
        <img 
          src="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" 
          className="frImg" 
        />
        <span className="frName">WareHouse</span>
        <span className="frCity">Seoul</span>
        <span className="frPrice">$ 100,000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Cozy Place</span>
        </div>
      </div>
      <div className="frItem">
        <img 
          src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" 
          className="frImg" 
        />
        <span className="frName">CrossCounter</span>
        <span className="frCity">Seoul</span>
        <span className="frPrice">$ 100,000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Cozy Place</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedReview
