import "./App.css";
import Header from "./Header";
import Portrait from "./Portrait";
import PhotoGrid from "./PhotoGrid";
import Footer from "./Footer";
//fonts
import "./fonts/GothicA1-Regular.ttf";
//images
// import IMG_1 from "./images/IMG_1.jpeg";
// import IMG_2 from "./images/IMG_2.jpeg";
// import IMG_3 from "./images/IMG_3.jpeg";
// import IMG_4 from "./images/IMG_4.jpeg";
// import IMG_5 from "./images/IMG_5.jpeg";
// import IMG_6 from "./images/IMG_6.jpeg";

function App() {
	return (
		<>
			<Header />
			<Portrait />
			<PhotoGrid />
			<Footer />
		</>
	);
}

export default App;
