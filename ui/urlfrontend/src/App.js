import './App.css';
import Navbar from './components/Navbar';
import Inputbox from './components/Inputbox';
import {useState} from 'react';
import {uploadUrl} from './api/axios';

function App() {

  const [Name, setName] = useState("")
 let changename=(e)=>{
  e.preventDefault();
  setName(e.target.value);
  console.log(Name);

 }

 const [Url, setUrl] = useState("")
 let changeurl=(e)=>{
  e.preventDefault();
  setUrl(e.target.value);
  console.log(Url);

 }





  let submitUrl=() =>{
    let name=Name
    let url=Url
    uploadUrl(name, url).then(()=>{
      setName("")
      setUrl("")
    });
    
  }

  


 

  return (
    <div className="container-fluid" style={{"height":"100vw"}}>
      {/* main logo of the page at navbar */}
      <Navbar/>
      {/* input box for adding shortened url */}
      <div className=" mt-5 d-flex flex-md-column justify-content-between align-items-center" style={{"height":"200px"}}>
      <Inputbox placeholder="unique identfier" onChange={changename} value={Name}/>

      {/* input box for adding actual url */}

      <Inputbox placeholder="URL" onChange={changeurl} value={Url}/>

      {/* generate button that valiodates the shortened url entered */}
      <div className="btn btn-primary " onClick={submitUrl}>Generate</div>
      </div>
    </div>
  );
}


export default App;
