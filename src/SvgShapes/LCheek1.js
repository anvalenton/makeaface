
import React from "react";



const LCheek1 = React.forwardRef((props, ref) => {


return (




<svg xmlns="http://www.w3.org/2000/svg" onClick={props.handleColor} viewBox="0 0 226.03 214.3">
    
    <path id={props.id} d="M222.67 108.52a96.13 96.13 0 00-7.14-15.45c-21.86-38.51-62-62.7-102-81.78C92.11 1.05 66.85-7.39 46.66 10.11c-10.34 9-16.72 21.63-21.55 34.43-6.27 16.59-12 33.38-18 50.06-6.16 17.28-12.15 38.62-.59 55.08 4.3 6.12 10.54 10.56 16.78 14.69a383.37 383.37 0 0087.91 43.26c14.16 4.84 29.4 8.87 43.94 5.32 12.93-3.17 23.67-11.95 33.59-20.82 24.17-21.55 45.83-49.82 33.93-83.61z" ref={ref} fill={props.childCompColor}/>
    
    
</svg>


)

});

export default LCheek1