import ReactMarkdown from 'react-markdown'
import Layout from "../components/layout"
import { useState, useEffect } from "react";

const About = ()=>{


      const [aboutData, setAboutData] = useState({Biography:'', Info:''});
      const [imgData, setImgData] = useState({alternativeText:'', url:''});

    
      useEffect(() => {
        // update the about data
        // when the component is rendered for the first time
        get();
      }, []);
    
      // This function updates the component with the
      // current about data stored in the server
      function get() {
        fetch(`${process.env.REACT_APP_BACKEND}api/abouts?populate=*`)
          .then(res => res.json())
          .then(about => {
           setAboutData(about.data[0].attributes);
setImgData(about.data[0].attributes.Peti.data.attributes)

          })
      }

  
      const bio = aboutData.Biography
      const info = aboutData.Info
      const alternativeText = imgData.alternativeText


return <Layout>
 <section className="about" id="about">
    <div className="wrapper">
    <p>{bio}</p>   
  <button><a href="/contact">Contact Me</a></button>
    </div>
    <div className="image">
      <img src={process.env.REACT_APP_BACKEND + imgData?.url.substring(1)} alt={alternativeText} id="peti"/>
      <div className="card-text">
        <ReactMarkdown>{info}</ReactMarkdown>
       
      </div>
    </div>
  </section>
  </Layout>
}

export default About
