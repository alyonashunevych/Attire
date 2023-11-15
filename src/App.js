import CCC from "./components/CCC";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RPD from "./components/RPD";
import WK_Video from "./components/W&K_video";

function App() {
  return (
    <div className="App">

      <WK_Video/>
      <div className="box">
        <RPD/> 
        <CCC/>
      </div>
      <Footer/>
      <Header/>
    </div>
  );
}

export default App;
