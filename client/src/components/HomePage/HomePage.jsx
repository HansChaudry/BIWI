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
            <img id="banner" src={process.env.PUBLIC_URL + '/Banner.png'} alt=""/>
          </div>
        </div>
      </div>
      <RecentBox/>
      <TrendingBox/>
      <RecommendedBox/>
    </div>
  );
}

function Fork(){
  return(
      <div className="fork-box">
          <div id="buy-fork"><a className="fork-link" href="/buy/all">Buy</a></div>
          <div id="sell-fork"><a className="fork-link" href="/sell">Sell</a></div>
      </div>
  );
}

export default MainSection;