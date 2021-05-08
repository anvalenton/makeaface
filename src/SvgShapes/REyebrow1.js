
import React from "react";



const REyebrow1 = React.forwardRef((props, ref) => {


return (


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324.7 96.2" onClick={props.handleColor}>

    <path d="M1 75l12-13c10-8 21-19 31-25 16-10 24-12 49-23l35-12c23-4 40-1 63 6a944 944 0 0189 36c15 9 21 11 31 19 4 3 7 5 11 13 1 2 5 5 1 8-6 6-10 15-25 5-18-12-29-15-47-22-20-4-48-12-68-13-40-3-68 5-106 18L17 96C12 98-3 81 1 75z" id={props.id} ref={ref} fill={props.childCompColor}/>
    
</svg>

)

});

export default REyebrow1