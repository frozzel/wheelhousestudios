import React, { useState, useEffect } from 'react'
import SimpleReactValidator from 'simple-react-validator';
// import HoneyBookWidget from '../HoneyBookWidget/HoneyBookWedget';
// import { ScriptLoader } from 'react-use-scripts';





const ContactForm = () => {
        
 
            
    // const [forms, setForms] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     phone: '',
    //     message: ''
    // });
    // const [validator] = useState(new SimpleReactValidator({
    //     className: 'errorMessage'
    // }));
    // const changeHandler = e => {
    //     setForms({ ...forms, [e.target.name]: e.target.value })
    //     if (validator.allValid()) {
    //         validator.hideMessages();
    //     } else {
    //         validator.showMessages();
    //     }
    // };

    // const submitHandler = e => {
    //     e.preventDefault();
    //     if (validator.allValid()) {
    //         validator.hideMessages();
    //         setForms({
    //             name: '',
    //             email: '',
    //             subject: '',
    //             phone: '',
    //             message: ''
    //         })
    //     } else {
    //         validator.showMessages();
    //     }
    // };

    return (<>
    {/* <ScriptLoader
    id="63c87e713ebfde0006dc9ba7"
    src="https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js"
    onReady={() =>  console.log('ready!'
    )}
    onError={(error) => console.log('error!', error)}
    fallback={(error) => (
            <span>This has errored! {JSON.stringify(error)}</span>
    )}
    /> */}
      

   

    <div className="hb-p-63c87e713ebfde0006dc9ba7-1"></div>
    <img height="1" width="1" style={{display: "none"}} src="https://www.honeybook.com/p.png?pid=63c87e713ebfde0006dc9ba7"/>
        
    

        {/* // <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
        //     <div className="row">
        //         <div className="col col-lg-6 col-12">
        //             <div className="form-field">
        //                 <input
        //                     value={forms.name}
        //                     type="text"
        //                     name="name"
        //                     onBlur={(e) => changeHandler(e)}
        //                     onChange={(e) => changeHandler(e)}
        //                     placeholder="Your Name" />
        //                 {validator.message('name', forms.name, 'required|alpha_space')}
        //             </div>
        //         </div>
        //         <div className="col col-lg-6 col-12">
        //             <div className="form-field">
        //                 <input
        //                     value={forms.email}
        //                     type="email"
        //                     name="email"
        //                     onBlur={(e) => changeHandler(e)}
        //                     onChange={(e) => changeHandler(e)}
        //                     placeholder="Your Email" />
        //                 {validator.message('email', forms.email, 'required|email')}
        //             </div>
        //         </div>
        //         <div className="col col-lg-6 col-12">
        //             <div className="form-field">
        //                 <input
        //                     value={forms.phone}
        //                     type="phone"
        //                     name="phone"
        //                     onBlur={(e) => changeHandler(e)}
        //                     onChange={(e) => changeHandler(e)}
        //                     placeholder="Your phone" />
        //                 {validator.message('phone', forms.phone, 'required|phone')}
        //             </div>
        //         </div>
        //         <div className="col col-lg-6 col-12">
        //             <div className="form-field">
        //                 <select
        //                     onBlur={(e) => changeHandler(e)}
        //                     onChange={(e) => changeHandler(e)}
        //                     value={forms.subject}
        //                     type="text"
        //                     name="subject">
        //                     <option>Photography</option>
        //                     <option>The Rehearsal Dinner</option>
        //                     <option>The Afterparty</option>
        //                     <option>Videographers</option>
        //                     <option>Perfect Cake</option>
        //                     <option>All Of The Above</option>
        //                 </select>
        //                 {validator.message('subject', forms.subject, 'required')}
        //             </div>
        //         </div>
        //         <div className="col col-lg-12 col-12">
        //             <textarea
        //                 onBlur={(e) => changeHandler(e)}
        //                 onChange={(e) => changeHandler(e)}
        //                 value={forms.message}
        //                 type="text"
        //                 name="message"
        //                 placeholder="Message">
        //             </textarea>
        //             {validator.message('message', forms.message, 'required')}
        //         </div>
        //     </div>
        //     <div className="submit-area">
        //         <button type="submit" className="theme-btn"> Submit Now</button>
        //     </div>
        // </form > */}
        
     
        {/* <HoneyBookWidget/> */}
        
       
</>)
}

export default ContactForm;