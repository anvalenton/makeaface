
import React from "react";



const LEyebrow1 = React.forwardRef((props, ref) => {


return (


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324.7 96.2" onClick={props.handleColor}>

    <path d="M324 75l-13-13c-9-8-20-19-31-25-15-10-24-12-48-23L197 2c-24-4-41-1-63 6a925 925 0 00-90 36c-14 9-21 11-31 19-3 3-6 5-11 13 0 2-4 5 0 8 6 6 9 15 24 5 18-12 30-15 48-22 19-4 48-12 68-13 39-3 68 5 106 18l59 24c6 2 21-15 17-21z" id={props.id} ref={ref} fill={props.childCompColor}/>
    
</svg>


)

});

export default LEyebrow1