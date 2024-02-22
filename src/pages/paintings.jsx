import { useState, useEffect } from "react";

import Layout from "../components/layout";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const Paintings = () => {
  const [index, setIndex] = useState(-1);

  const [imgArray, setImgArray] = useState([]);

  useEffect(() => {
    // update the paintings image data
    // when the component is rendered for the first time
    get();
  }, []);

  // This function updates the component with the
  // current paintings images data array stored in the server
  function get() {
    fetch(`${process.env.REACT_APP_BACKEND}api/paintings?populate=*`)
      .then((res) => res.json())
      .then((paintings) => {
        setImgArray(paintings.data[0].attributes.Paintings.data);
      });
  }

  // this function is to prepare the data in a format required for the thumbnails album below
  const displayPaintingsThumbnail = imgArray.map((img) => ({
    width: img.attributes.formats.small.width,
    height: img.attributes.formats.small.height,
    src: img.attributes.formats.small.url,
  }));

  // this function is to prepare the data in a format required for the lightbox below
  const displayPaintings = imgArray.map((img) => ({
    width: img.attributes.formats.small.width,
    height: img.attributes.formats.small.height,
    src: img.attributes.formats.small?.url,
    description: img.attributes.caption,
  }));
  return (
    <Layout>
      <div className="gallery">
        <PhotoAlbum
          layout="rows"
          spacing={40}
          photos={displayPaintingsThumbnail}
          targetRowHeight={200}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={displayPaintings}
          plugins={[Captions]}
          captions={{ descriptionTextAlign: "center", descriptionMaxLines: 3 }}
        />
      </div>
    </Layout>
  );
};

export default Paintings;
