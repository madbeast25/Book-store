import aboutIMG from '../../images/about.jpg';
import '../../home.css';
import Header from '../Header/Header';
import Footer from '../footer/Footer';

const About = () => {
  return (
    <>
      <Header />
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>Welcome to Your Favorite Bookstore</h1>
            <p>
              At  The book cornors, we are passionate about books and the readers who love them. Our bookstore is a haven for book lovers, offering a curated selection of titles across a wide range of genres. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, we have something for everyone.
              <br/><br/>
              Our mission is to connect readers with the books they love while providing a welcoming and inclusive space for all. We believe in the power of books to inspire, educate, and entertain, and we're committed to offering an exceptional shopping experience, both in-store and online.
              <br/><br/>
              In addition to our extensive collection of books, we also host author events, book signings, and community gatherings. Our knowledgeable staff is always on hand to offer recommendations and help you discover your next great read.
              <br/><br/>
              We are proud of our role in the community, and we're dedicated to supporting local authors, schools, and literacy programs. Thank you for choosing [Bookstore Name] as your destination for all things books. We look forward to serving you!
            </p>
            <a href="" className="home-btn red-btn">EXPLORE NOW</a>
          </div>
          <div className="about-col">
            <img src={aboutIMG} alt="About our bookstore" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
