
import React from "react";



const REyebrow2 = React.forwardRef((props, ref) => {


return (



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.1 62.8" onClick={props.handleColor}>
    
    <path d="M10 39l2-1c10-5 20-11 30-13C85 15 118 3 162 0c18-1 35 1 53 3 6 1 18-1 22 4 2 4 3 9 1 13-2 5-7 6-12 7L124 43 66 56c-12 3-21 4-33 5s-15 3-20 0C9 59 0 53 0 48c0-4 6-7 10-9z" id={props.id} ref={ref} fill={props.childCompColor}/>

</svg>


)

});

export default REyebrow2