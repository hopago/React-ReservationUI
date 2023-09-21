import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      src: "https://images.pexels.com/photos/1441058/pexels-photo-1441058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      src: "https://images.pexels.com/photos/6434631/pexels-photo-6434631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction === "left") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div className="hotel">
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open &&
        <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("left")} />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("right")} />
        </div>
        }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <div className="hotelTitle">Grand Hotel</div>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 123</span>
          </div>
          <span className="hotelDistance">
            Excellent location
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImageWrapper">
                <img onClick={() => handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">
                Stay in the cozy
              </h1>
              <div className="hotelDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam illum sunt architecto totam laboriosam iure sapiente fugit vero accusamus voluptatem, repellendus quibusdam expedita amet reiciendis facilis optio veniam dolore eos!
              </div>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 10 days</h1>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, culpa.
              </span>
              <h2>
                <b>$987</b> (10 nights)
              </h2>
              <button>Reserve or Book</button>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Hotel
