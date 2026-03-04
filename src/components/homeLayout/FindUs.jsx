import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold my-5">Find Us On</h1>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item"><FaFacebook size={24}/>Facebook</button>
          <button className="btn bg-base-100 justify-start join-item"><FaTwitter size={24}></FaTwitter>Twitter</button>
          <button className="btn bg-base-100 justify-start join-item"><FaInstagram size={24}></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
