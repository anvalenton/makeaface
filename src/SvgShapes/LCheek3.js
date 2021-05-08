
import React from "react";



    const LCheek3 = React.forwardRef((props, ref) => {


    return (


    <svg xmlns="http://www.w3.org/2000/svg" onClick={props.handleColor} viewBox="0 0 248.64 147.58">
        
        <path id={props.id} d="M173.63 1.23C159.36.15 146.86-.19 132.4.1 93.78.87 54.05.34 22.52 21.26c-6.79 4.51-13.15 10-17.24 17-9.24 15.95-5 36.32 2.48 53.15 7.15 16 17.43 31.12 32.07 40.74 13.2 8.69 29.09 12.36 44.79 14.13 54.34 6.14 112-10.13 151.4-48 5-4.84 9.94-10.29 11.77-17.05 1.66-6.11.6-12.62-.71-18.81a196.6 196.6 0 00-12-37.59c-2.23-5.11-4.76-10.35-9.07-13.89s-9.76-5-15.15-6.09c-13.38-2.73-27.9-2.91-37.23-3.62z" ref={ref} fill={props.childCompColor}/>

        

    </svg>)


});

export default LCheek3


