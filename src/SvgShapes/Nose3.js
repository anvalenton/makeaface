
import React from "react";



const Nose3 = React.forwardRef((props, ref) => {


return (



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.5 138.5"  onClick={props.handleColor}>
    
    <path id={props.id} d="M102 2C88 3 75 4 71 6c-11 6-20 38-31 45C24 61-1 70 0 90c1 13 11 25 24 31s29-2 43 0c22 2 28 18 63 17 33 0 39-18 62-22 21-3 36 2 48-15 9-14-1-32-14-43s-20-9-31-21c-6-7-10-32-18-36-6-2-14 0-21 0-18 0-38-1-54 1z" ref={ref} fill={props.childCompColor}/>
    
    
</svg>


)

});

export default Nose3