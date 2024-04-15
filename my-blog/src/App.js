import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header.js"
import Carousel from "./Carousel.js"
import Banner from "./Banner.js"
import Body from "./Body.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Banner />
      <Body />
    </div>
  );
}

export default App;
