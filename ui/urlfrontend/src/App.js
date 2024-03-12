import './App.css';
import Navbar from './components/Navbar';
import Inputbox from './components/Inputbox';
function App() {
  return (
    <div className="container-fluid" style={{"height":"100vw"}}>
      {/* main logo of the page at navbar */}
      <Navbar/>
      {/* input box for adding shortened url */}
      <div className=" mt-5 d-flex flex-md-column justify-content-between align-items-center" style={{"height":"200px"}}>
      <Inputbox placeholder="unique identfier"/>

      {/* input box for adding actual url */}

      <Inputbox placeholder="URL"/>

      {/* generate button that valiodates the shortened url entered */}
      <button className="btn btn-primary " type="submit">Generate</button>
      </div>
      

      

      


    </div>
  );
}

export default App;
