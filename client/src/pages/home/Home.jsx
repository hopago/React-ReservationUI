import Featured from '../../components/featured/Featured';
import FeaturedReview from '../../components/featuredReview/FeaturedReview';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import './home.css';


const Home = () => {
  return (
    <div className="home">
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests reviews</h1>
          <FeaturedReview />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home
