import './App.css';
import Navbar from './components/Navbar';
import Inputbox from './components/Inputbox';
import {useState,useEffect} from 'react';
import {uploadUrl} from './api/axios';



function App() {

  const [RecentUrl, setRecentUrl] = useState([])

  useEffect(() => {
    console.log(RecentUrl)
    if (RecentUrl!==null && RecentUrl.length >0){
      console.log("if statement called")
      console.log(RecentUrl)
      localStorage.setItem('recentUrls', JSON.stringify(RecentUrl));

    }
    
  }, [RecentUrl])
  

  useEffect(() => {
    // Retrieve recentUrls from localStorage
    if (RecentUrl!==null || RecentUrl.length()!==0){
      const storedUrls = localStorage.getItem('recentUrls');
      // Parse JSON data
      const parsedUrls = JSON.parse(storedUrls);
      console.log(localStorage);
      // Update state with parsed data
      if (parsedUrls && Array.isArray(parsedUrls)) {
        setRecentUrl(parsedUrls);
      }
    }
// eslint-disable-next-line
  },[] );

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

 const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  alert('Name copied to clipboard!');
};


  let submitUrl=async() =>{
    let name=Name
    let url=Url
    let response=await uploadUrl(name, url)
    
    if (response.status===200){
      setRecentUrl(RecentUrl=>[...RecentUrl,{name,url}]);
      alert("URL successfully generated!")
    }
    else if (response.response.status===400) {
      console.log(response.response.status)
      alert("Please select a unique name");
    }
    
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

      {/* Render recent URLs */}
    <div className=" mt-5 d-flex flex-md-column justify-content-between align-items-center" style={{"height":"200px"}}>
      <h2>Recent URLs:</h2>
      <ul>
        {RecentUrl.map((item, index) => (
          <div className="card m-3 d-flex flex-md-column" style={{"width": "58rem"}} >
          <div className="card-body" >
            <h5 className="card-title">{item.name}</h5>
            <a href={`https://pruneit-backend.onrender.com/${item.name}`} target="_blank" rel="noreferrer">
            <h6 className="card-subtitle mb-2 text-body-secondary">{`https://pruneit-backend.onrender.com/${item.name}`}</h6> </a>
            <p className="card-text " style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{item.url}</p>
            <button type="button" className="btn btn-secondary" onClick={() => copyToClipboard(item.name)}>Copy</button>
          </div>
        </div>
        ))}
      </ul>
    </div>

    </div>
  );
}


export default App;
