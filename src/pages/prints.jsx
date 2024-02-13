import { useState, useEffect } from "react";
import Layout from "../components/layout";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import PhotoAlbum from "react-photo-album";


const Prints = () => {
  const [index, setIndex] = useState(-1);

  const [imgArray, setImgArray] = useState([]);

  useEffect(() => {
    // update the prints image data
    // when the component is rendered for the first time
    get();
  }, []);

  // This function updates the component with the
  // current prints images data stored in the server
  function get() {
    fetch(`${process.env.REACT_APP_BACKEND}api/prints?populate=*`)
      .then((res) => res.json())
      .then((prints) => {
        setImgArray(prints.data[0].attributes.Prints.data);
      });
  }

  // this function is to prepare the data in a format required for the thumbnails album below
  const displayPrintsThumbnail = imgArray.map((img) => ({
    width: img.attributes.formats.small.width,
    height: img.attributes.formats.small.height,
    src:
      process.env.REACT_APP_BACKEND +
      img.attributes.formats.small.url.substring(1),
  }));

  // this function is to prepare the data in a format required for the lightbox below
  const displayPrints = imgArray.map((img) => ({
    width: img.attributes.formats.medium.width,
    height: img.attributes.formats.medium.height,
    src:
      process.env.REACT_APP_BACKEND +
      img.attributes.formats.medium.url.substring(1),
    title: "Slide title",
    description: "Slide description",
  }));

  return (
    <Layout>
      <div className="gallery">
        <PhotoAlbum
          layout="rows"
          spacing={40}
          photos={displayPrintsThumbnail}
          targetRowHeight={300}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={displayPrints}
          plugins={[Captions]}
        />
      </div>
    </Layout>
  );
}

export default Prints;
