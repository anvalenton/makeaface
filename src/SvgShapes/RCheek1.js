
import React from "react";



const RCheek1 = React.forwardRef((props, ref) => {


return (


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226.03 214.3" onClick={props.handleColor}>

    <path id={props.id}  d="M3.37 108.52a95.63 95.63 0 017.14-15.44c21.85-38.52 62-62.7 102-81.79 21.42-10.23 46.68-18.68 66.86-1.17 10.34 9 16.73 21.63 21.56 34.43 6.26 16.59 12 33.37 18 50.06 6.15 17.27 12.14 38.61.58 55.07-4.3 6.12-10.54 10.56-16.77 14.7a383.78 383.78 0 01-87.91 43.26c-14.16 4.83-29.41 8.86-43.94 5.31-12.93-3.16-23.67-11.94-33.6-20.82-24.15-21.55-45.82-49.81-33.92-83.61z" ref={ref} fill={props.childCompColor}/>
    
</svg>


)

});

export default RCheek1