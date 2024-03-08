import {UseDesktop, UseMobile} from "./hooks/useEffectWidth";
import { useEffect, useState } from "react";
import './styles/mobile.css';

function App() {
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
    const checkIfMobile = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
        window.removeEventListener("resize", checkIfMobile);
    };
}, []);

  return (
   <>
   {isMobile ? (
    <UseMobile />
   ):(    <UseDesktop />
   )}
   </>
  )
}

export default App;
