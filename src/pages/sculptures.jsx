import { useState, useEffect } from "react";
import Layout from "../components/layout";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";

import "yet-another-react-lightbox/styles.css";

const Sculptures = () => {
  const [index, setIndex] = useState(-1);

  const [imgArray, setImgArray] = useState([]);

  useEffect(() => {
    // update the sculptures image data
    // when the component is rendered for the first time
    get();
  }, []);

  // This function updates the component with the
  // current sculptures images data array stored in the server
  function get() {
    fetch(`${process.env.REACT_APP_BACKEND}api/sculptures?populate=*`)
      .then((res) => res.json())
      .then((sculptures) => {
        setImgArray(sculptures.data[0].attributes.Sculptures.data);
      });
  }

  // this function is to prepare the data in a format required for the thumbnails album below
  const displaySculpturesThumbnail = imgArray.map((img) => ({
    width: img.attributes.formats.small.width,
    height: img.attributes.formats.small.height,
    src:
      process.env.REACT_APP_BACKEND +
      img.attributes.formats.small.url.substring(1),
  }));

  // this function is to prepare the data in a format required for the lightbox below
  const displaySculptures = imgArray.map((img) => ({
    width: img.attributes.formats.small.width,
    height: img.attributes.formats.small.height,
    src:
      process.env.REACT_APP_BACKEND +
      img.attributes.formats.small?.url.substring(1),
  }));

  return (
    <Layout>
      <div className="gallery">
        <PhotoAlbum
          layout="rows"
          spacing={40}
          photos={displaySculpturesThumbnail}
          targetRowHeight={200}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={displaySculptures}
        />
      </div>
    </Layout>
  );
};

export default Sculptures;
