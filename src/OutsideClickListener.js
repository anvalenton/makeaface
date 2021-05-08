import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Canvas from "./Canvas";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClickHandler(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
     
      
      //color is the id of the input field/color picker
      if (ref.current && !ref.current.contains(event.target) && (event.target.type !== 'color')) {
        
        // alert("You clicked outside of me!");
        Canvas.handleClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef);
  
  return <div ref={wrapperRef}>{props.children}</div>;
}

//checks the kind of prop passed to 
OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideAlerter;


