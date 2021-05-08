import React, {useContext, useRef} from "react";
import LastClickedShapeContext from './LastClickedShapeContext'



const ColorUpdateForm = ({setColor}) => {

    // const updateFormRef = useRef();

    
    const lastClickedShape = useContext(LastClickedShapeContext);

    //find location of lastClickedShape

    const lastClickedShapeRects = lastClickedShape.current.getClientRects()
    
    // console.log(lastClickedShapeRects);
    // console.log(window.pageXOffset);
    // console.log(window.pageYOffset);
    // console.log(window.scrollX)
    // console.log(document.documentElement);

    //pageYOffset takes into consideration the scrolled distance from the very top of the document. adding this to the variable below places the color picker in the same level as an item that is beyond the first seen viewport
    const lastClickedShapeTopPaddingMinus20PlusPageYOffset = (lastClickedShapeRects[0].top - 20 + window.pageYOffset) + 'px';

    const lastClickedShapeLeftPaddingPlusWidthAnd20 = (lastClickedShapeRects[0].left + lastClickedShapeRects[0].width + 20) + "px";

  


    //position form near last clicked shape



    return (
       
        
            <form>
            <input id='color' type='color' style={{left: lastClickedShapeLeftPaddingPlusWidthAnd20, top: lastClickedShapeTopPaddingMinus20PlusPageYOffset, position:'absolute'}} onChange={ (e)=> setColor(lastClickedShape, e.target.value)}></input>
            </form>
       
        
    )


}

export default ColorUpdateForm