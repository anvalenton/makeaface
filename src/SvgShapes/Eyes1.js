

import React from "react";



const Eyes1 = React.forwardRef((props, ref) => {


return (



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.2 107.8" onClick={props.handleColor}>

    <g id={props.id} ref={ref} fill={props.childCompColor}><path d="M232 45C165-5 52-29 4 57c-19 20 39 38 53 42 21 6 44 10 66 9 30-1 144-14 109-63zm-19 19C160 93 74 93 23 60c47-65 137-38 193 1a35 35 0 01-3 3z"/><path d="M129 23C99 12 59 42 89 70c8 7 14 17 26 14 34-1 52-49 14-61z"/>
    
    </g>
    
</svg>

)

});

export default Eyes1

// viewBox="0 0 238.2 107.8"

//"-10 0 260 100" 