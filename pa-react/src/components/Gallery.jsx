import React from 'react'
import GalImg1 from '../images/galleryimg1.png';
import GalImg2 from '../images/galleryimg2.png';
import GalImg3 from '../images/galleryimg3.png';
import GalImg4 from '../images/galleryimg4.png';

function Gallery() {
    return (
        <>
            <div className="gallery-container">
                <div className="box">
                    <img src={GalImg1} alt="Gallery 1" />
                    <span>Garage</span>
                </div>
                <div className="box">
                    <img src={GalImg2} alt="Gallery 2" />
                    <span>Front Office</span>
                </div>
                <div className="box">
                    <img src={GalImg3} alt="Gallery 3" />
                    <span>Warehouse</span>
                </div>
                <div className="box">
                    <img src={GalImg4} alt="Gallery 4" />
                    <span>Maintenance</span>
                </div>
            </div>
        </>
    )
}

export default Gallery