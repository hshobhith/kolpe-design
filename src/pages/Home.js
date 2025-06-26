import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';

export default function Home() {
  return (
    <>
      {/* Carousel section (inside the background image area) */}
      <div className="relative p-8 max-w-3xl mx-auto pt-24">
        <div className="w-full max-w-4xl">
          <Carousel
            autoPlay
            infiniteLoop
            interval={5000}
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            swipeable
          >
            <div>
              <img src={slide1} alt="Slide 1" className="rounded-lg" />
            </div>
            <div>
              <img src={slide2} alt="Slide 2" className="rounded-lg" />
            </div>
            <div>
              <img src={slide3} alt="Slide 3" className="rounded-lg" />
            </div>
          </Carousel>
        </div>
      </div>

     
    </>
  );
}
