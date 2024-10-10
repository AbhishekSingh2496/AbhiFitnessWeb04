import React from "react";
// import emailjs from '@emailjs/browser';
import "./Join.css"
const Join =()=>{
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_8jc3sfo', 'template_ufhdhj6', form.current, {
  //       publicKey:'rxYx0Kd5JQH05ZjX0',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };
    return(
        <div className="Join" id="Join-us">
        <div className="left-j">
            <hr/>
        <div>
            <span className="stroke-text">READY TO</span>
            <span> LEVEL UP</span>
        </div>
        <div>
            <span className="stroke-text">YOUR BODY</span>
            <span> WITH US?</span>
        </div>
        </div>
        <div className="right-j">
        {/* ref={form}  onSubmit={sendEmail} */}
        <form  action="" className="email-container" >
         <input type="email" name="user_email" placeholder="Enter your email address"/>
         <button type="submit" className="btn btn-j">Join Now</button>
        </form>
        </div>
        </div>
    )
}
export default Join;