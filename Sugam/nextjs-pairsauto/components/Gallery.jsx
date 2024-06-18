import React from "react";

function Gallery() {
  return (
    <>
      <div className="gallery-container">
        <div className="box">
          <img src="/assets/img/galleryimg1.png" alt="Gallery 1" />
          <span>Garage</span>
        </div>
        <div className="box">
          <img src="/assets/img/galleryimg2.png" alt="Gallery 2" />
          <span>Front Office</span>
        </div>
        <div className="box">
          <img src="/assets/img/galleryimg3.png" alt="Gallery 3" />
          <span>Warehouse</span>
        </div>
        <div className="box">
          <img src="/assets/img/galleryimg4.png" alt="Gallery 4" />
          <span>Maintenance</span>
        </div>
      </div>
    </>
  );
}

export default Gallery;
