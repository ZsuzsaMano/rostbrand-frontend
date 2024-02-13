import { useState, useEffect } from "react";
import Layout from "../components/layout"


const Contact = ()=>{

      const [email, setEmail] = useState("");
      // from the image data I will use only the url and the alt text
      const [imgData, setImgData] = useState({alternativeText:'', url:''});

     
    
      useEffect(() => {
        // update the contact data
        // when the component is rendered for the first time
        get();
      }, []);
    
      // This function updates the component with the
      // current contact data stored in the server
      function get() {
        fetch(`${process.env.REACT_APP_BACKEND}api/contacts?populate=*`)
          .then(res => res.json())
          .then(contact => {
            setEmail(contact.data[0].attributes.Email);
          //I save the image data separatly as it is on a deeper level
            setImgData(contact.data[0].attributes.Image.data.attributes)
          })
      }

const alternativeText = imgData.alternativeText

//the base url ends with '/' and the url of the img starts with one, so I have to remove one of them
const url = process.env.REACT_APP_BACKEND + imgData?.url.substring(1)

return <Layout>
  <section className="contact">
    <div className="wrapper">
  <form action="https://formspree.io/myynvoaj" method="POST" className="form">
    <input type="text" id="name" name="name"  placeholder="Name" required/>
    <input type="email" id="email" name="name" placeholder="Email" required/>
    <textarea name="message" id="message" placeholder="Message" required></textarea>
    <input type="submit" className="submit" value="SEND"/>
    </form>
    <span className="or">or</span>
    <p className="email">{email}</p>
      </div>
      <div className="image">
        <img src={url} alt={alternativeText} />
      </div>
  </section>
  </Layout>
}

export default Contact
