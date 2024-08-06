import './App.css';
import Navbar from './Components/Navbar';
import Homepro from './Components/Homepro';
// import About from './Components/About';


function App() {
  const style = {
    width: '100vw',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // backgroundColor: 'black',
  }
  return (
    <>
      <div>
        <Navbar/>
        <Homepro style={style}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
