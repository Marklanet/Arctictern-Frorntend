
import './App.css';
import Topbar from "./components/topbar/Topbar"
import Screen from "./components/screen/Screen"
import Whyus from './components/whyus/Whyus';
import Ourservices from './components/ourservices/Ourservices';
import Working from './components/working/Working';
import Guarantee from './components/guarantee/Guarantee';
import Testimonial from './components/testimonials/Testimonial';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Screen />
      <Whyus />
      <Ourservices />
      <Working />
      <Guarantee />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default App;
