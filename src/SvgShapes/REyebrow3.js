
import React from "react";



const REyebrow3 = React.forwardRef((props, ref) => {


return (



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331.3 116.3" onClick={props.handleColor}>
    
    <path d="M330 49c4 14-2 24-5 39s-16 29-32 28L17 94c-6 0-13-1-16-7-2-3-1-7 0-11 6-21 6-56 28-62 86-24 164-14 251 7 9 2 40 15 32 11s16 8 18 17z" id={props.id} ref={ref} fill={props.childCompColor}/>

</svg>
)

});

export default REyebrow3