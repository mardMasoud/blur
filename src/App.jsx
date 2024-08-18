import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [per, setPer] = useState(50);

    // const [tar, setTar] = useState(100);
    useEffect(() => {
        if (per > 0) {
        
            const interval = setInterval(() => setPer(per - 1), 10);
            return () => {
                clearInterval(interval);
            };
            
        }
       
      
    }, [per]);

    return (
        <div>
            <p className="per" onClick={() => setPer(per + 1)} style={{opacity:`${(per/100)-0.01}`}}>
                {100-per}%
            </p>
            <div className="app" style={{ filter: `blur(${per-1}px)` }}></div>
        </div>
    );
}

export default App;
