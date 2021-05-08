
import React from "react";



const LFaceLine = React.forwardRef((props, ref) => {


return (



<svg data-name="Cheek Line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.2 297.7" onClick={props.handleColor}>
    
    <path d="M264 267l-55-44-7-6-3-3-2-1-13-11-25-23a545 545 0 01-48-51l-22-27-9-12-3-4-6-8c-7-10-13-21-18-32-5-12-8-24-14-36-3-7-13-10-21-9l-1 1C14 0 6 7 4 8c-5 6-4 15-3 23 9 47 23 77 53 118 29 39 68 74 111 103a494 494 0 0080 44c9 4 20 0 25-7s2-16-6-22z" id={props.id} ref={ref} fill={props.childCompColor}/>
    
</svg>



)

});

export default LFaceLine