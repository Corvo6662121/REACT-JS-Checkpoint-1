
import './App.css';
import ImgComp from './ImgComp';
import NavComponent from './NavComponent';
function App() {
  return (
    
    <div>
    <NavComponent />
      <h1 id='title1'>Welcome</h1>
      <h2 className='body1' style={{backgroundColor:"black"}}> This is Dante's personal Portfolio</h2>
      <ImgComp />
    </div>
  );
}

export default App;
