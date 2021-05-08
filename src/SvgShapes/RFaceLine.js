
import React from "react";



const RFaceLine = React.forwardRef((props, ref) => {


return (


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.2 297.7" onClick={props.handleColor}>
    
    <path d="M8 267l56-44 6-6 4-3 2-1 12-11 26-23a548 548 0 0047-51l22-27 10-12 2-4h1l5-8c7-10 13-21 18-32 5-12 8-24 14-36 4-7 13-10 22-9l1 1c2-1 10 6 12 7 5 6 4 15 3 23-9 47-23 77-53 118-29 39-68 74-111 103a494 494 0 01-79 44c-10 4-21 0-26-7s-1-16 6-22z" id={props.id} ref={ref} fill={props.childCompColor}/>

</svg>

)

});

export default RFaceLine