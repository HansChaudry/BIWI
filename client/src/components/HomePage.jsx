import React from "react";
import RecentBox from "./homeComponents/RecentBox";
import TrendingBox from "./homeComponents/TrendingBox";
import RecommendedBox from "./homeComponents/RecommendedBox";
import Fork from './mainComponents/Fork';

function MainSection() {
  return(
    <div>
      <Fork/>
      <div className="main">
        <div className="featured-container">
          <div className="featured">
            <div className="slideshow-container fade">
              <div className="slide">
                <img src="https://www.bywaters.co.uk/wp-content/uploads/2021/11/photo-1584987274822-665427e28ac5-472x300.jpg" width="700px" height="400px" alt=""/>
              </div>
              <div className="slide">
                <img src="https://www.bumc.bu.edu/orthopaedics/files/2015/08/BMC-Main-Entrance-472x300.jpg" width="700px" height="400px" alt=""/>
              </div>
              <div className="slide">
                <img src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/brisbane-australia/things-to-do/brisbane-australia-panoramic-view-from-mount-coot-tha-lookout.jpg?$472x300$" width="700px" height="400px" alt=""/>
              </div>
              <a className="Back" id="Back-Btn" href="/">&#10094;</a>
              <a className="Forward" id="Forward-Btn" href="/">&#10095;</a>
            </div>
          </div>
          <RecentBox/>
        </div>
      </div>
      <TrendingBox/>
      <RecommendedBox/>
    </div>
  );
}

export default MainSection;