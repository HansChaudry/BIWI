import React from "react";
import RecentBox from "./homeComponents/RecentBox";
import TrendingBox from "./homeComponents/TrendingBox";
import RecommendedBox from "./homeComponents/RecommendedBox";
import Fork from './mainComponents/Fork';

function MainSection() {
  return(
    <div>
      <Fork/>
      <div className="featured-box">
        <div className="featured" />
        <RecentBox/>
      </div>
      <TrendingBox/>
      <RecommendedBox/>
    </div>
  );
}

export default MainSection;