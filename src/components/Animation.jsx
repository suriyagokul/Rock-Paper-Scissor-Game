import React, {useState, useEffect} from "react";
import Lottie from 'react-lottie';
import * as animationData from "../assets/successanimation.json"



export default function Animation() {

    const [stopAnimation, setStopAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setStopAnimation(true);
        }, 5000); // Change the timeout duration to your desired length in milliseconds

        return () => clearTimeout(timer);
    }, []);
    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
    
    return(
        <Lottie options={defaultOptions}
            height={400}
            width={400}
            isPaused={stopAnimation}
            style={{ transform: 'translateY(-100%)' }}
        />
    )
}