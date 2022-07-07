import React from "react";
import facebook from "../../assets/facebook-brands.svg";
const NavbarTop = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div>
          <h2>Get Custom Proposal</h2>
        </div>
        <div>
          <a href="">
            <img className=" w-4 ml-2 hover:bg-sky-700" src={facebook} alt="" />
          </a>
          <a href="">
            <img className=" w-4 ml-2" src={facebook} alt="" />
          </a>
          <a href="">
            <img className=" w-4 ml-2" src={facebook} alt="" />
          </a>
          <a href="">
            <img className=" w-4 ml-2" src={facebook} alt="" />
          </a>
          <a href="">
            <img className=" w-4 ml-2" src={facebook} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
