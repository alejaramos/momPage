import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 

export default function App() { 
return ( 
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
	<div style={{ display: 'block', width: 580, padding: 50 }}> 
	<Carousel fade> 
		<Carousel.Item interval={4000}> 
		<img 
			className="d-block w-100 h-100"
src="image2.png"
			alt="Image One"
		/> 
		<Carousel.Caption>
		</Carousel.Caption> 
		</Carousel.Item> 
		<Carousel.Item interval={3000}> 
		<img 
			className="d-block w-100 h-100"
src="image1.png"
			alt="Image Two"
		/> 
		<Carousel.Caption> 
		</Carousel.Caption> 
		</Carousel.Item> 
    <Carousel.Item interval={3000}> 
		<img 
			className="d-block w-100 h-100"
src="image3.png"
			alt="Image One"
		/> 
		<Carousel.Caption> 
		</Carousel.Caption> 
		</Carousel.Item> 
		<Carousel.Item interval={3000}> 
		<img 
			className="d-block w-100 h-100"
src="image4.png"
			alt="Image Two"
		/> 
		<Carousel.Caption> 
		</Carousel.Caption> 
		</Carousel.Item> 
    <Carousel.Item interval={3000}> 
		<img 
			className="d-block w-100 h-100"
src="image5.png"
			alt="Image One"
		/> 
		<Carousel.Caption> 
		</Carousel.Caption> 
		</Carousel.Item> 
		<Carousel.Item interval={3000}> 
		<img 
			className="d-block w-100 h-100"
src="image6.png"
			alt="Image Two"
		/> 
		<Carousel.Caption> 
		</Carousel.Caption> 
		</Carousel.Item> 
	</Carousel> 
	</div> 
  	</div> 
); 
}
