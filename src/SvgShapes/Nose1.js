
import React from "react";



const Nose1 = React.forwardRef((props, ref) => {


return (


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241 251" onClick={props.handleColor}>
    
    <path id={props.id} d="M237 164c-45-37-66-92-94-142-6-18-11-18-29-22-9 0-19 5-24 6-3 1-8 12-9 15-9 30-15 51-28 75-10 25-26 33-44 51-16 18-10 42 13 51 10 5 18 4 29 6l13 7 8 9c11 14 20 30 39 31 30 2 35-22 53-36 15-8 35 1 51-6 18-6 34-27 22-45z" ref={ref} fill={props.childCompColor}/>
</svg>

)

});

export default Nose1