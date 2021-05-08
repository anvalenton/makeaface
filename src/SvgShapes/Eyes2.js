

import React from "react";



const Eyes2 = React.forwardRef((props, ref) => {

//244 153.7 - orig svg viewbox size

return (




<svg xmlns="http://www.w3.org/2000/svg" width='30' height='20' viewBox="0 20 260 100" onClick={props.handleColor}>


    <g id={props.id} ref={ref} fill={props.childCompColor}>
        <path d="M144 64a33 33 0 00-12-8 33 33 0 00-28-1 40 40 0 00-13 5c-15 9-22 27-19 44 2 12 11 22 22 27a30 30 0 0011 3l2 1c14 3 26-4 35-14a35 35 0 0011-19 40 40 0 000-9c1-10-1-20-9-29z"/>
        <path d="M234 1c-26 12-52 23-80 31-27 9-56 13-84 8-15-2-23-6-36-14-10-4-29-14-31-7a109 109 0 0053 121c54 27 131 15 163-39 17-28 21-62 25-94 1-6-6-8-10-6zm-20 81a92 92 0 01-56 51c-26 8-54 9-80 0-23-7-41-22-52-43-8-15-15-42-11-59 26 16 59 26 89 25 31-2 61-11 90-23l35-15c-3 22-6 44-15 64z"/>
    </g>
</svg>


)

});

export default Eyes2