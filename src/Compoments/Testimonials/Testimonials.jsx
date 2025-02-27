import Recat from "react";
import leftArrow from "../../assets/leftArrow.png"
import RightArrow from "../../assets/rightArrow.png"
import { useState } from "react";
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData";
import {motion} from 'framer-motion';
const Testimonils=()=>{
    const transition={type:"spring",duration:3};
    const [selected,SetSelected]=useState(0);
    const tLength=testimonialsData.length;
    return(
    <div className="Testimonials" id="testimonials">
    <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>say about us</span>
        <motion.span
         key={selected} 
         initial={{opacity:0,x:100}}
         transition={transition}
         animate={{opacity:1,x:0}}
         exit={{opacity:0,x:-100}}>
            {testimonialsData[selected].review}
        </motion.span>
        <span>
            <span style={{color:'var(--orange)'}}>
                {testimonialsData[selected].name}
            </span>{" "}
            -{testimonialsData[selected].status}
        </span>
    </div>
    <div className="right-t">
    <motion.div
    initial={{opacity:0,x:-100}}
    transition={{...transition, duration:2}}
    whileInView={{opacity:1,x:0}}
    ></motion.div>
   <motion.div
    initial={{opacity:0,x:100}}
    transition={{...transition, duration:2}}
    whileInView={{opacity:1,x:0}}
    ></motion.div>
    <motion.img 
    key={selected} 
    initial={{opacity:0,x:100}}
    transition={transition}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:-100}}
    src={testimonialsData[selected].image} alt=""/>
    <div className="arrows">
    <img
    onClick={()=>{
        selected==0
        ? SetSelected(tLength-1)
        :SetSelected((prev)=>prev-1);
    }}
    src={leftArrow}
    alt=""
    />
<img
    onClick={()=>{
        selected==tLength-1
        ? SetSelected(0)
        :SetSelected((prev)=>prev+1);

    }}
    src={RightArrow}
    alt=""
    />
    </div>
    </div>
    </div>
    );
};
export default Testimonils;