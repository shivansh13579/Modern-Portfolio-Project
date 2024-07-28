import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

function Footer() {
  return (
    <footer className="h-64  pt-10 bg-blac">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Shivam Singh
          </p>
          <p className="font-playfair text-md text-yellow">
            @2024 Shivam. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
