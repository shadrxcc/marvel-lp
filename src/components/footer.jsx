import React from "react";
import logo from "../assets/footer-logo.svg";
import {
  footerbottom,
  footerlink1,
  footerlink2,
  footerlink3,
  footerlink4,
  platfoms,
} from "./data";

const Footer = () => {
  return (
    <div id="footer-wrapper" className="flex flex-col gap-[3em] py-[6em] items-center">
      <div className="flex flex-col items-center lg:items-start justify-center gap-[4em] lg:flex-row">
        <div>
          <img src={logo} className="w-[4em]" alt="marvel logo" />
        </div>

        <div className="flex gap-[4em]">
          <div>
            <ul className="flex flex-col gap-[.5em]">
              {footerlink1.map((items, id) => {
                return (
                  <>
                    <li className="link1 text-[15px]" key={id}>
                      {items.item}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-[.5em]">
              {footerlink2.map((items, id) => {
                return (
                  <>
                    <li className="link1 text-[15px]" key={id}>
                      {items.item}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[4em]">
          <div className="flex flex-col gap-[.9em]">
            {footerlink3.map((item, id) => {
              return (
                <>
                  <div key={id}>
                    <img src={item.image} />
                  </div>
                </>
              );
            })}
          </div>

          <div className="flex flex-col gap-[1em]">
            {footerlink4.map((item, id) => {
              return (
                <>
                  <div key={id}>
                    <h5 className="text-[15px]">{item.title}</h5>
                    <p className="subtext">{item.subtext}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[.6em] items-center">
          <p className="text-[15px]">FOLLOW MARVEL</p>
          <span className="flex gap-5">
            {platfoms.map((icon, id) => {
              return (
                <>
                  <img src={icon.smicon} className="w-[1.1em]" key="id" alt="" />
                </>
              );
            })}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-[2em]">
        {footerbottom.map((link, id) => {
          return (
            <>
              <div className="flex text-[15px] gap-[2em]" key={id}>
                <p>{link.link1}</p>
                <p>{link.link2}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex text-[15px] gap-[2em]">
        <p>Marvel Insider Terms</p>
        <p>©2022 MARVEL</p>{" "}
      </div>
    </div>
  );
};

export default Footer;
