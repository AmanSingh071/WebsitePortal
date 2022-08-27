 
import { useState ,useEffect} from 'react';
import './App.css';
import Axios from "axios";
import TextEditor from "./Components/TextEditor"
 


function App() {
  const[articlelist,setarticlename]=useState([])
  useEffect(()=>{
    Axios.get('http://localhost:3001/read').then((response)=>{
      setarticlename(response.data)
    });

  },[]);
  const articleNo=articlelist.length
 
  function gettopic(){
    var valuese=document.getElementById("topic").value
     return valuese


    
  }
  function getsubtopic(){
    var valuese=document.getElementById("subtopic").value
     return valuese


    
  }
  function getgs(){
    var valuese=document.getElementById("gs").value
     return valuese


    
  }
  function inserttopic(){
    var select=document.getElementById("topic"),
    txtval=document.getElementById("val").value,
    newoption=document.createElement("OPTION"),
    newoptionval=document.createTextNode(txtval);
    newoption.appendChild(newoptionval);
    select.insertBefore(newoption,select.lastChild);
  }
  function insertsubtopic(){
    var select=document.getElementById("subtopic"),
    txtval=document.getElementById("val1").value,
    newoption=document.createElement("OPTION"),
    newoptionval=document.createTextNode(txtval);
    newoption.appendChild(newoptionval);
    select.insertBefore(newoption,select.lastChild);
  }
 
  const [topic,settopic]=useState("");
  const [title,settitle]=useState("");
  const [subtopic,setsubtopic]=useState("");
  
  const [gs,setgs]=useState("");
  // const [articleNo,setarticleNo]=useState(0);
  const [date,setdate]=useState("");
  const [article,setvalue]=useState('')
  const btton=()=>{
 Axios.post("http://localhost:3001/insert",{
  title:title,
  topic:topic,
  subtopic:subtopic,
  article:article,
 
  gs:gs,
  articleNo:articleNo,
  date:date

 })
  }
  //revise concept question
  const [articleno,setarticleno]=useState("");
  const [question,setquestion]=useState("");
  const [ans,setans]=useState("");

  const btton2=()=>{
    Axios.post("http://localhost:3002/login",{
      articleno:articleno,
      question:question,
      ans:ans,
   
   
    })
     }
     
     
  return (
    
    <div className="App">
  
      <label style={{ fontSize:"24px", marginBottom:"20px"}}> Article No {articlelist.length}</label>
    
      
         
   
    
      {/* <select id="title" onChange={(event)=>{settitle(getme)}} >
        <option value="am">Select Title</option>
        <option value="aus"  >Austr  </option>
     

      </select> */}
        <label> Title</label>
      <input type ="text" onChange={(event)=>{settitle(event.target.value)}}/>
 
      <label> Topic</label>
      <div>
      <select id="topic" onChange={(event)=>{settopic(gettopic)}} >
        <option value="Society ">Society </option>
        <option value="Culture "  >Culture   </option>
        <option value="Modern History"  >Modern History  </option>
        <option value="Post Independence "  >Post Independence   </option>
        <option value="Polity"  >Polity  </option>
        <option value="Governance:"  >Governance:  </option>
      </select> 
   
      <input type="text" id="val"></input>
        <button  onClick={inserttopic} className="butt">Add Topic</button>
      </div>
      

      <label> SubTopic</label>
      <div>
      <select id="subtopic" onChange={(event)=>{setsubtopic(getsubtopic)}} >
        <option value="Salient features of Indian society ">Salient features of Indian society </option>
        <option value="Diversity of India "  > Diversity of India   </option>
        <option value="Poverty and development issues "  > Poverty and development issues  </option>
        <option value="Population and associated issues "  >Population and associated issues   </option>
      </select> 

       <input type="text" id="val1"></input>
        <button  onClick={insertsubtopic} className="butt">Add SubTopic</button>
      </div >
      <label > Article</label>
     
      
     
          <div>
          <TextEditor  setvalue={setvalue}/>
          </div>
       
      
  
       
       
     
      <label> GS</label>
      <select id="gs" onChange={(event)=>{setgs(getgs)}} >
        <option value="GS 1">GS 1</option>
        <option value="GS 2"  > GS 2  </option>
        <option value="GS 3"  > GS 3  </option>
     

      </select> 
      <input type ="date"onChange={(event)=>{setdate(event.target.value)}}/>
     
    
      
      <button onClick={btton} className="butt"> Save</button>

      <h1> revise Concept Questions </h1>
      <label> Article No.</label>
      <input type ="text"onChange={(event)=>{setarticleno(event.target.value)}}/>
      
      <label> Question</label>
      <input type ="text"onChange={(event)=>{setquestion(event.target.value)}}/>

      <label> Answer</label>
      <input type ="text"onChange={(event)=>{setans(event.target.value)}}/>

      <button onClick={btton2} className="butt"> Save question</button>
      {/* {articlelist.map((val,key)=>{
        return <h1>
          {val.title}
        </h1>
      })} */}
         
       
     
    </div>
  );
}

export default App;
