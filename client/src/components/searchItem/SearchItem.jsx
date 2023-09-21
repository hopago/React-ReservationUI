import './searchItem.css';


const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street</h1>
            <span className="siDistance">500m from station</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Air condition</span>
            <span className="siFeatures">Entire Studio & 1 bathroom & 1 full bed</span>
            <span className="siCancelOp">Free cancel</span>
            <span className="siCancelOpSubtitle">
                You can cancel later
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem
