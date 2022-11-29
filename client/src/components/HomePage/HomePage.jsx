import React from "react";
import RecentBox from "./RecentBox";
import TrendingBox from "./TrendingBox";
import RecommendedBox from "./RecommendedBox";

function MainSection() {
  return(
    <div>
      <Fork/>
      <div className="featured-box">
        <div className="featured">
              <div className="slideshow-container fade">
                  <div className="slide">
                      <img src="https://media.slidesgo.com/storage/15671783/online-shopping-sales-infographics1640174373.jpg" width="1000px" height="400px" alt=""/>
                  </div>
              </div>
          </div>
          <RecentBox/>
      </div>
      <TrendingBox/>
      <RecommendedBox/>
    </div>
  );
}

function Fork(){
  return(
      <div className="fork-box">
          <div><a className="fork-link" href="/buy/all">Buy</a></div>
          <div><a className="fork-link" href="/sell">Sell</a></div>
      </div>
  );
}

export default MainSection;