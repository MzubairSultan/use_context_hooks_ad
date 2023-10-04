
import { createContext } from 'react';
import './App.css';
import CompA from './CompA';
// use context hook hum tb use krty hy jb humny aik component sy dosry component my data transfer krna hota hy

export const NameContext= createContext();
// agar hum koi sy 2 context pass krna ho to
       export const ChanelContext=createContext()

function App() {
  
  return (
    <div className="App">
      <NameContext.Provider value={"Muhammad zubair"}>
        <ChanelContext.Provider value={"my z channel"}>
            <CompA/>
        </ChanelContext.Provider>
      </NameContext.Provider>
    
    </div>
  );
}

export default App;
