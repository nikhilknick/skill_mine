import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BannerOne from '../assets/images/banner_one.jpg';
import BannerTwo from '../assets/images/banner_two.jpg';
import BannerThree from '../assets/images/banner_three.jpg';

const Banner = () => {
	return (
		<div className="relative">
			<div className="absolute left-0 bottom-0 h-32 z-20 w-full bg-gradient-to-t from-gray-500 to-transparent" />
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div className="h-full md:h-96">
					<img src={BannerOne} alt="banner" />
				</div>
				<div  className="h-full md:h-96">
					<img src={BannerTwo} alt="banner" />
				</div>
				<div  className="h-full md:h-96">
					<img src={BannerThree} alt="banner" />
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
