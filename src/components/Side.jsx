import React, { useEffect, useRef, useState } from "react";
import "../styles/Side.css";
import menu from "../assets/menu.png";
import logo from "../assets/Logomark.png";
import logoType from "../assets/Logotype.png";
import overview from "../assets/overview.png";
import product from "../assets/product.png";
import transaction from "../assets/transaction.png";
import customer from "../assets/customers.svg";
import analytics from "../assets/analytics.png";
import activityLog from "../assets/activityLog.png";
import campaign from "../assets/campaign.png";
import setting from "../assets/setting.png";
import help from "../assets/Help.png";
import moon from "../assets/moon.png";
import logout from "../assets/logout.png";

const navigate = [
  { icon: overview, text: "Overview" },
  { icon: product, text: "Product" },
  { icon: customer, text: "Customer" },
  { icon: transaction, text: "transaction" },
  { icon: analytics, text: "analytics" },
  { icon: campaign, text: "campaign" },
  { icon: activityLog, text: "activity Log" },
];
const support = [
  { icon: setting, text: "setting" },
  { icon: help, text: "help" },
  { icon: moon, text: "moon" },
];

const Side = () => {
  const ref = useRef();

  const [width, setWidth] = useState(window.innerWidth);

  const [isToggled, setIsToggled] = useState(true);

  // useEffect(() => )

  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      setIsToggled(true);
      console.log(isToggled);
    }
    if (window.innerHeight < 640) {
      setIsToggled(false);
    }
  });

  const handleToggle = () => {
    setIsToggled(!isToggled);
    ref.current.style.width = "260px";
  };

  return (
    <>
      <div
        style={{
          position: isToggled ? "fixed" : "absolute",
        }}
        onClick={handleToggle}
        className="menu"
      >
        <img src={menu} alt="" />
      </div>
      <div
        ref={ref}
        style={{
          width: isToggled ? "260px" : "0px",
        }}
        className="side"
      >
        <div className="top">
          <div className="logo">
            <div className="logo-img">
              <img src={logo} alt="" />
            </div>
            <img src={logoType} alt="" />
          </div>
        </div>

        <div className="side-panel">
          <div className="navigate">
            {navigate.map((n) => (
              <div key={n.text} className="navigate-options">
                <div className="n-logo">
                  <img src={n.icon} alt="" />
                </div>
                <p className="n-text">{n.text}</p>
              </div>
            ))}
          </div>

          <div className="separator"></div>

          <div className="support">
            <p className="support-text">support</p>
            <div className="support-container">
              <div className="navigate-options">
                <img src={setting} alt="" />
                <p>setting</p>
              </div>
              <div className="navigate-options">
                <img src={help} alt="" />
                <p>help</p>
              </div>
              <div className="navigate-options">
                <div className="switch-theme">
                  <img src={moon} alt="" />
                  <p>dark mode</p>
                </div>
                <div className="dark-mode">
                  <div className="switch"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="logout">
            <img src={logout} alt="" />
            <p>Log out</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Side;
