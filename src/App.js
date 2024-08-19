
import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import { GlobalContext } from './context/GlobalContext';

function App() {

  const [lang, setLang] = useState("Eng")
  
  return (
  

<GlobalContext.Provider
value={{lang, setLang}}>
<div className="App">
 
   <Nav/>

   <p>
          {lang === "Eng" ? "Selected Language: " : "Выбранный язык: "} 
          <span style={{ color: 'red' }}>{lang}</span>
        </p>
      
   </div>

  
</GlobalContext.Provider>
    
   );
}

export default App;
