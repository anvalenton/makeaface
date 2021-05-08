import React, {useState, useRef} from "react";
import Draggable from 'react-draggable';
import LCheek1 from './SvgShapes/LCheek1';
import LCheek2 from './SvgShapes/LCheek2';
import LCheek3 from './SvgShapes/LCheek3';
import RCheek1 from './SvgShapes/RCheek1';
import RCheek2 from './SvgShapes/RCheek2';
import RCheek3 from './SvgShapes/RCheek3';
import RCurlyHair from './SvgShapes/RCurlyHair';
import LCurlyHair from './SvgShapes/LCurlyHair';
import RStraightHair from './SvgShapes/RStraightHair';
import LStraightHair from './SvgShapes/LStraightHair';
import Eyes1 from './SvgShapes/Eyes1';
import Eyes2 from './SvgShapes/Eyes2';
import Eyes3 from './SvgShapes/Eyes3';
import Nose1 from './SvgShapes/Nose1';
import Nose2 from './SvgShapes/Nose2';
import Nose3 from './SvgShapes/Nose3';
import Mouth1 from './SvgShapes/Mouth1';
import Mouth2 from './SvgShapes/Mouth2';
import Mouth3 from './SvgShapes/Mouth3';
import LEyebrow1 from './SvgShapes/LEyebrow1';
import LEyebrow2 from './SvgShapes/LEyebrow2';

import REyebrow1 from './SvgShapes/REyebrow1';
import REyebrow2 from './SvgShapes/REyebrow2';

import LFaceLine from './SvgShapes/LFaceLine';
import RFaceLine from './SvgShapes/RFaceLine';
import ColorUpdateForm from './ColorUpdateForm';
import './Canvas.css';
import {v4 as uuid} from 'uuid';
import LastClickedShapeContext from './LastClickedShapeContext'
import OutsideClickListener from "./OutsideClickListener";


const Canvas = () => {


    const [updateFormVisible, setUpdateFormVisibility] = useState(false);
    const [clickedShape, setClickedShape] = useState(null);
    //const [getRef, setRef] = useDynamicRefs();
    const lCheek3Ref = useRef();
    const lCheek2Ref = useRef();
    const lCheek1Ref= useRef();
    const rCheek3Ref = useRef();
    const rCheek2Ref = useRef();
    const rCheek1Ref = useRef();
    const rCurlyHairRef = useRef();
    const lCurlyHairRef = useRef();
    const rStraightHairRef = useRef();
    const lStraightHairRef = useRef();
    const lEyes1Ref = useRef();
    const rEyes1Ref = useRef();
    const lEyes2Ref = useRef();
    const rEyes2Ref = useRef();
    const lEyes3Ref = useRef();
    const rEyes3Ref = useRef();
    const nose1Ref = useRef();
    const nose2Ref = useRef();
    const nose3Ref = useRef();
    const mouth1Ref = useRef();
    const mouth2Ref = useRef();
    const mouth3Ref = useRef();
    const lEyebrow1Ref = useRef();
    const lEyebrow2Ref = useRef();
    const lEyebrow3Ref = useRef();
    const rEyebrow1Ref = useRef();
    const rEyebrow2Ref = useRef();
    const rEyebrow3Ref = useRef();
    const lFaceLineRef = useRef();
    const rFaceLineRef = useRef();
    

    // //shape color states. not used
    // const [lCheek3Color, setLCheek3Color] = useState('#ce6b6b');
    // const [lCheek2Color, setLCheek2Color] = useState('#c40f06')
    // const [lCheek1Color, setLCheek1Color] = useState('#781f0b')

  
    //called when onchange on color update form is clicked
    const setNewColor = (lastClickedShape, newColor) => {
        
        // console.log('inside set new color');
        // console.log(lastClickedShape.current.getClientRects());
        // console.log(lastClickedShape.current.nodeName === 'g');


        if (lastClickedShape.current.nodeName === 'g') {

            lastClickedShape.current.attributes[1].value = newColor

        }

        else {
            lastClickedShape.current.attributes[2].value = newColor
        }

        
        setUpdateFormVisibility(false);
        
        

    }



    //called when shape is clicked
    const colorUpdate = (aRef) => {

 
        setClickedShape(aRef);
      
        setUpdateFormVisibility(true);
        
    }



    // sets array of shapes to be rendered
    const [shapes, setShapes] = useState( () => {

        let startIds = [];



        for (let i=0; i < 5; i++) {
            startIds.push(uuid());
        }

        //to do a draggable, add container div with class linked to draggable
        //handleColor is an onclick

        const initElements = 
        [ {jsx:<OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
            <div id='LCheek3div' className='dragshape' >
            
            <LCheek3 id='LCheek3' className='dragshape' handleColor={() => {
                colorUpdate(lCheek3Ref)}} childCompColor={'#ce6b6b'} ref={lCheek3Ref}  />
            
            </div>
          </Draggable></OutsideClickListener>  },


           {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
           <div id='LCheek2div' className='dragshape'>
           <LCheek2 id='LCheek2' className='dragshape' handleColor={() => {
               colorUpdate(lCheek2Ref)}} childCompColor={'#c40f06'} ref={lCheek2Ref}  />
           </div>
         </Draggable></OutsideClickListener> },


          {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
          <div id='LCheek1div' className='dragshape'>
          <LCheek1 id='LCheek1' className='dragshape' handleColor={() => {
              colorUpdate(lCheek1Ref)}} childCompColor={'#781f0b'} ref={lCheek1Ref}  />
          </div>
        </Draggable></OutsideClickListener>},

        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='RCheek1div' className='dragshape'>
        <RCheek1 id='RCheek1' className='dragshape' handleColor={() => {
            colorUpdate(rCheek1Ref)}} childCompColor={'#781f0b'} ref={rCheek1Ref}  />
        </div>
        </Draggable></OutsideClickListener>},


        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='RCheek2div' className='dragshape'>
        <RCheek2 id='RCheek2' className='dragshape' handleColor={() => {
            colorUpdate(rCheek2Ref)}} childCompColor={'#c40f06'} ref={rCheek2Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='RCheek3div' className='dragshape'>
        <RCheek3 id='RCheek3' className='dragshape' handleColor={() => {
            colorUpdate(rCheek3Ref)}} childCompColor={'#ce6b6b'} ref={rCheek3Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='RCurlyHairdiv' className='dragshape'>
        <RCurlyHair id='RCurlyHair' className='dragshape' handleColor={() => {
            colorUpdate(rCurlyHairRef)}} childCompColor={"#780B04"} ref={rCurlyHairRef}  />
        </div>
        </Draggable></OutsideClickListener> },


        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='LCurlyHairdiv' className='dragshape'>
        <LCurlyHair id='LCurlyHair' className='dragshape' handleColor={() => {
            colorUpdate(lCurlyHairRef)}} childCompColor={"#780B04"} ref={lCurlyHairRef}  />
        </div>
        </Draggable></OutsideClickListener> },


        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='LStraightHairdiv' className='dragshape'>
        <LStraightHair id='LStraightHair' className='dragshape' handleColor={() => {
            colorUpdate(lStraightHairRef)}} childCompColor={"#5c190c"} ref={lStraightHairRef}  />
        </div>
        </Draggable></OutsideClickListener> },


        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='RStraightHairdiv'  className='dragshape'>
        <RStraightHair id='RStraightHair' className='dragshape' handleColor={() => {
            colorUpdate(rStraightHairRef)}} childCompColor={"#5c190c"} ref={rStraightHairRef}  />
        </div>
        </Draggable></OutsideClickListener>},

        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='LEyes1div' className='dragshape'>
        <Eyes1 id='LEyes1' className='dragshape' handleColor={() => {
            colorUpdate(lEyes1Ref)}} childCompColor={"#D99714"} ref={lEyes1Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx:<OutsideClickListener> <Draggable handle=".dragshape" bounds='body'>
        <div id='REyes1div' className='dragshape'>
        <Eyes1 id='REyes1' className='dragshape' handleColor={() => {
            colorUpdate(rEyes1Ref)}} childCompColor={"#D99714"} ref={rEyes1Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx:<OutsideClickListener> <Draggable handle=".dragshape" bounds='body'>
        <div id='LEyes2div' className='dragshape'>
        <Eyes2 id='LEyes2' className='dragshape' handleColor={() => {
            colorUpdate(lEyes2Ref)}} childCompColor={"#4C72E6"} ref={lEyes2Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='REyes2div' className='dragshape'>
        <Eyes2 id='REyes2' className='dragshape' handleColor={() => {
            colorUpdate(rEyes2Ref)}} childCompColor={"#4C72E6"} ref={rEyes2Ref}  />
        </div>
        </Draggable></OutsideClickListener> },


        {jsx:<OutsideClickListener> <Draggable handle=".dragshape" bounds='body'>
        <div id='LEyes3div' className='dragshape'>
        <Eyes3 id='LEyes3'  className='dragshape' handleColor={() => {
            colorUpdate(lEyes3Ref)}} childCompColor={"#031073"} ref={lEyes3Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='REyes3div' className='dragshape'>
        <Eyes3 id='REyes3' className='dragshape' handleColor={() => {
            colorUpdate(rEyes3Ref)}} childCompColor={"#031073"} ref={rEyes3Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx:<OutsideClickListener> <Draggable handle=".dragshape" bounds='body'>
        <div id='Nose1div' className='dragshape'>
        <Nose1 id='Nose1' className='dragshape' handleColor={() => {
            colorUpdate(nose1Ref)}} childCompColor={"#470094"} ref={nose1Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx:<OutsideClickListener> <Draggable handle=".dragshape" bounds='body'>
        <div id='Nose2div' className='dragshape'>
        <Nose2 id='Nose2' className='dragshape' handleColor={() => {
            colorUpdate(nose2Ref)}} childCompColor={"#DE6AAE"} ref={nose2Ref}  />
        </div>
        </Draggable></OutsideClickListener> },


        {jsx:<OutsideClickListener> <Draggable handle=".dragshape" bounds='body'>
        <div id='Nose3div' className='dragshape'>
        <Nose3 id='Nose3' className='dragshape' handleColor={() => {
            colorUpdate(nose3Ref)}} childCompColor={"#DE8100"} ref={nose3Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='Mouth1div' className='dragshape'>
        <Mouth1 id='Mouth1' className='dragshape' handleColor={() => {
            colorUpdate(mouth1Ref)}} childCompColor={"#E65B0B"} ref={mouth1Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='Mouth2div' className='dragshape'>
        <Mouth2 id='Mouth2' className='dragshape' handleColor={() => {
            colorUpdate(mouth2Ref)}} childCompColor={"#005919"} ref={mouth2Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx:<OutsideClickListener> <Draggable handle=".dragshape" bounds='body'>
        <div id='Mouth3div' className='dragshape'>
        <Mouth3 id='Mouth3' className='dragshape' handleColor={() => {
            colorUpdate(mouth3Ref)}} childCompColor={"#661A5E"} ref={mouth3Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx:<OutsideClickListener> <Draggable handle=".dragshape" bounds='body'>
        <div id='LEyebrow1div' className='dragshape'>
        <LEyebrow1 id='LEyebrow1' className='dragshape' handleColor={() => {
            colorUpdate(lEyebrow1Ref)}} childCompColor={"#001E9B"} ref={lEyebrow1Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='LEyebrow2div' className='dragshape'>
        <LEyebrow2 id='LEyebrow2' className='dragshape' handleColor={() => {
            colorUpdate(lEyebrow2Ref)}} childCompColor={"#005919"} ref={lEyebrow2Ref}  />
        </div>
        </Draggable></OutsideClickListener> },


        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='REyebrow1div' className='dragshape'>
        <REyebrow1 id='REyebrow1' className='dragshape' handleColor={() => {
            colorUpdate(rEyebrow1Ref)}} childCompColor={"#001E9B"} ref={rEyebrow1Ref}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx:<OutsideClickListener> <Draggable handle=".dragshape" bounds='body'>
        <div id='REyebrow2div' className='dragshape'>
        <REyebrow2 id='REyebrow2' className='dragshape' handleColor={() => {
            colorUpdate(rEyebrow2Ref)}} childCompColor={"#005919"} ref={rEyebrow2Ref}  />
        </div>
        </Draggable></OutsideClickListener> },


        {jsx:<OutsideClickListener> <Draggable handle=".dragshape" bounds='body'>
        <div id='LFaceLinediv' className='dragshape'>
        <LFaceLine id='LFaceLine' className='dragshape' handleColor={() => {
            colorUpdate(lFaceLineRef)}} childCompColor={"#A12C0E"} ref={lFaceLineRef}  />
        </div>
        </Draggable></OutsideClickListener> },

        {jsx: <OutsideClickListener><Draggable handle=".dragshape" bounds='body'>
        <div id='RFaceLinediv' className='dragshape'>
        <RFaceLine id='RFaceLine' className='dragshape' handleColor={() => {
            colorUpdate(rFaceLineRef)}} childCompColor={"#A12C0E"} ref={rFaceLineRef}  />
        </div>
        </Draggable></OutsideClickListener> }


        
        ];

        
        return initElements

        


        }
    );

    Canvas.handleClickOutside = () => setUpdateFormVisibility(false);
     
    return (

        <>
        
        <LastClickedShapeContext.Provider value={clickedShape}>

        {updateFormVisible? <ColorUpdateForm setColor={setNewColor}/> : null }
        
        <div id='shapescontainerdiv'>
    
        {shapes.map((shapes) => (shapes.jsx))}
       
        </div>

        </LastClickedShapeContext.Provider>
        
        </>
        
    )

}





export default Canvas;