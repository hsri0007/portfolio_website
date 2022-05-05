import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>hsri0007@gmail.com</span>
        <div className="f-icons"  >
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} /> */}
          <Gitub style={{cursor:"pointer"}} color="white" size={"3rem"} onClick={()=>{
            window.open("https://github.com/hsri0007")
          }}   />
        </div>
      </div>
    </div>
  );
};

export default Footer;
