import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [per, setPer] = useState(100);
 
    // if (per > 1) {
    //    const  interval = setInterval(() => setPer((per) - 1), 50);
    // if(per===0)
    //         clearInterval(interval);
      

    // const [tar, setTar] = useState(100);
    // useEffect(() => {
    //     console.log(per)
    //     if (per > 1) {
    //         // const interval = 
    //         setTimeout(() => setPer((per) - 1), 50);
    //         // return () => {
    //         //     clearInterval(interval);
    //         // };
    //     }
    // });
    if (per > 1) 
    setTimeout(() => setPer((per) - 1), 10);
console.log(per)
    return (
        <div>
            <p
                className="per"
                
                style={{ opacity: `${per / 100 }` }}
            >
                {100 - (per)}%
            </p>
            <div className="app" style={{ filter: `blur(${(per/10)*3}px)` }}></div>
        </div>
    );
}

export default App;
