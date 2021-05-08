
import React from "react";



const LEyebrow2 = React.forwardRef((props, ref) => {


return (


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.1 62.8" onClick={props.handleColor}>
    
    <path d="M229 39l-2-1c-10-5-20-11-30-13C154 15 121 3 77 0 60-1 42 1 24 3 18 4 6 2 3 7c-3 4-4 9-2 13 2 5 7 6 12 7l102 16 58 13c12 3 21 4 33 5s15 3 20 0c4-2 13-8 13-13 0-4-6-7-10-9z" id={props.id} ref={ref} fill={props.childCompColor}/>

</svg>
)

});

export default LEyebrow2