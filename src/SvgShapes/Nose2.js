import React from "react";



const Nose2 = React.forwardRef((props, ref) => {


return (



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.6 195.6" onClick={props.handleColor}>
    
    <path id={props.id}  d="M186 126c-8-24-40-12-53-61-2-10 3-19 3-29-1-9 4-33-7-36-4-1-9 2-10 6C105 80 27 80 2 124c-12 39 37 73 73 72 19-1 31-17 46-27 20-11 42 19 60-11 4-9 7-21 5-32z" ref={ref} fill={props.childCompColor}/>

</svg>



)

});

export default Nose2