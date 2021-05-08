
import React from "react";



const RCheek3 = React.forwardRef((props, ref) => {


return (


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248.64 150.42" onClick={props.handleColor} >

    <path id={props.id}  d="M103.39.51c52.53 3.11 83-2.68 122.69 23.64 6.79 4.5 13.16 10 17.24 17 9.24 15.94 5 36.32-2.48 53.14-7.15 16-17.42 31.12-32.06 40.75-13.21 8.68-29.1 12.36-44.8 14.13-54.34 6.14-112-10.13-151.4-48-5-4.84-9.94-10.3-11.77-17-1.62-6-.64-12.32.62-18.38 2.76-13.19 1.88-26.1 7.29-38.44 2.18-5 9.69-10 13.88-13.48s9.77-5 15.15-6.08C58.17 3.51 87.23-1.58 103.39.51z" ref={ref} fill={props.childCompColor}/>

</svg>


)


});

export default RCheek3