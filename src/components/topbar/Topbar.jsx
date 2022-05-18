import { Search } from "@mui/icons-material";
import React from "react";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Real SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input
            type="text"
            className="serchInput"
            placeholder="探し物は何ですか？"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">1</div>
        <div className="topbarIconItem">2</div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImage" />
    </div>
  );
}

export default Topbar;
