import React from "react";

function FeaturedBox(){
    return(
        <div className="featured">
            <div className="slideshow-container fade">
                <div className="slide">
                    <img src="https://media.slidesgo.com/storage/15671783/online-shopping-sales-infographics1640174373.jpg" width="500px" height="300px" alt=""/>
                </div>
                <div className="slide">
                    <img src="https://www.bumc.bu.edu/orthopaedics/files/2015/08/BMC-Main-Entrance-472x300.jpg" width="500px" height="300px" alt=""/>
                </div>
                <div className="slide">
                    <img src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/brisbane-australia/things-to-do/brisbane-australia-panoramic-view-from-mount-coot-tha-lookout.jpg?$472x300$" width="500px" height="300px" alt=""/>
                </div>
                
                <a className="Back" id="Back-Btn" href="/">&#10094;</a>
                <a className="Forward" id="Forward-Btn" href="/">&#10095;</a>
            </div>
        </div>
    );
}

export default FeaturedBox;