import React, { useEffect, useState } from "react";
import "../styles/Main.css";
import UserAccount from "./UserAccount";
import notification from "../assets/notification.png";
import rhonda from "../assets/rhonda.png";
import weather from "../assets/weather.png";
import crown from "../assets/crown.png";
import visitors from "../assets/visitors.png";
import transactionMetrics from "../assets/transactionMetrics.png";
import cube from "../assets/cube.png";
import revenue from "../assets/revenue.png";
import moneyReceive from "../assets/moneyReceive.png";
import moneySend from "../assets/moneySend.png";
import totalLeads from "../assets/totalLeads.png";
import calendar from "../assets/calendar.png";
import graph from "../assets/graph.png";
import menu from "../assets/menu.png";

import PeopleList from "./PeopleList";

const userDetails = [
  {
    id: 1,
    username: "Raihan Lewis",
    email: "raihanlewis@cnrb",
    src: rhonda,
    color: "#08875d",
    amount: "+$1000",
    sendOrReceived: "Received",
  },
  {
    id: 2,
    username: "Tobias Farrell",
    email: "cashlessconsumer@cnrb",
    src: rhonda,
    color: "#e02d3c",
    amount: "-$3560",
    sendOrReceived: "send",
  },
  {
    id: 3,
    username: "Keeley Galvan",
    email: "cashlessconsumer@cnrb",
    src: rhonda,
    amount: "+$100",
    sendOrReceived: "received",
  },
  {
    id: 4,
    username: "Kaylee Mcdonald",
    email: "cashlessconsumer@cnrb",
    src: rhonda,
    color: "#e02d3c",
    amount: "-$450",
    sendOrReceived: "send",
  },
];

const tableDetails = [
  { page: "home page", totalUsers: 123, time: "10 min", date: "30/09/2023" },
  { page: "product page", totalUsers: 50, time: "10 min", date: "30/09/2023" },
  { page: "product page", totalUsers: 58, time: "10 min", date: "30/09/2023" },
  { page: "product page", totalUsers: 23, time: "10 min", date: "30/09/2023" },
  { page: "product page", totalUsers: 101, time: "10 min", date: "30/09/2023" },
  { page: "product page", totalUsers: 223, time: "10 min", date: "30/09/2023" },
];

const Main = () => {
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <div className="main">
      <div className="search-notification">
        <div className="search">
          <input placeholder="Search" type="text" />
        </div>

        <div className="notification">
          <div className="notification-bell">
            <img src={notification} alt="" />
          </div>

          <UserAccount
            src={rhonda}
            username="Rhona Asg"
            email="rhona.asg@gmail.com"
          />
        </div>
      </div>

      <div className="main-2nd">
        <div className="greet">
          <img src={weather} alt="" />
          <div className="good-morning">
            <p className="good-morning-text">good morning</p>
            <p className="city-name">Herbert Washington</p>
          </div>
        </div>

        <div className="upgrade-account">
          <img src={crown} alt="" className="upgrade-icon" />
          <p className="upgrade-text">upgrade account</p>
        </div>
      </div>

      <div
        className="main-3rd"
        style={{
          flexDirection: width < 1340 ? "column" : "row",
        }}
      >
        <div className="metrics-card">
          <div className="icon-box-1">
            <img src={revenue} alt="" />
          </div>
          <div className="metrics-frame">
            <div className="totals">
              <p className="money">$612,839</p>
              <p className="total-text">total</p>
            </div>
            <div className="metrics-badge">+16%</div>
          </div>
        </div>

        <div className="metrics-card">
          <div className="icon-box-2">
            <img src={visitors} alt="" />
          </div>
          <div className="metrics-frame">
            <div className="totals">
              <p className="money">$513,456</p>
              <p className="total-text">total</p>
            </div>
            <div className="metrics-badge-visitors">-0.4%</div>
          </div>
        </div>

        <div className="metrics-card">
          <div className="icon-box-3">
            <img src={transactionMetrics} alt="" />
          </div>
          <div className="metrics-frame">
            <div className="totals">
              <p className="money">$637,902</p>
              <p className="total-text">total</p>
            </div>
            <div className="metrics-badge">+8%</div>
          </div>
        </div>

        <div className="metrics-card">
          <div className="icon-box-4">
            <img src={cube} alt="" />
          </div>
          <div className="metrics-frame">
            <div className="totals">
              <p className="money">$256,600</p>
              <p className="total-text">total</p>
            </div>
            <div className="metrics-badge">+2%</div>
          </div>
        </div>
      </div>

      <div className="main-4th">
        <div className="revenue-graph-container">
          <div className="total-sales-container">
            <div className="sales-left">
              <div className="sales-amount">546,123</div>

              <div className="sales-text">Total sales with beginning</div>
            </div>

            <div className="sales-right">
              <div className="sales-time-container">
                <div className="sales-time">1h</div>
                <div className="sales-time">1d</div>
                <div className="sales-time-1w">1w</div>
                <div className="sales-time">1m</div>
                <div className="sales-time">1y</div>
              </div>

              <div className="select-range">
                <img src={calendar} alt="" />
                <p>Select Range</p>
              </div>
            </div>
          </div>

          <div className="sales-graph">
            <img src={graph} alt="" />
          </div>
        </div>

        <div className="total-leads-container">
          <div className="total-leads-text">total leads</div>

          <div className="dollar-card-container">
            <div className="dollar-card-1">
              <div className="dollar-card-icon">
                <img src={moneyReceive} alt="" />
              </div>
              <div className="money-send-receive">4656</div>
            </div>

            <div className="dollar-card-2">
              <div className="dollar-card-icon">
                <img src={moneySend} alt="" />
              </div>
              <div className="money-send-receive">512</div>
            </div>
          </div>
          <img className="total-leads-image" src={totalLeads} />
        </div>
      </div>

      <div className="main-last">
        <div className="people-container">
          <div className="send-receive">
            <div className="received">
              <p className="received-text">Received:</p>
              <p className="received-amount"> $546,123</p>
            </div>
            <div className="send">
              <p className="send-text">Send:</p>
              <p className="send-amount"> $546,123</p>
            </div>
            <div className="view-all">View all</div>
          </div>

          <div className="people-list">
            {userDetails.map((u) => (
              <PeopleList
                key={u.id}
                username={u.username}
                email={u.email}
                color={u.color}
                src={u.src}
                amount={u.amount}
                sendOrReceived={u.sendOrReceived}
              />
            ))}
          </div>
        </div>

        <div className="site-visitors-container">
          <div className="site-visitors-top">
            <div className="site-visitors-text">site-visitors</div>

            <div className="view-all">View all</div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>page name</th>
                  <th>total users</th>
                  <th>spend time</th>
                  <th>date</th>
                </tr>
              </thead>

              <tbody>
                {tableDetails.map((t) => (
                  <tr key={t.totalUsers}>
                    <td> {t.page} </td>
                    <td> {t.totalUsers} </td>
                    <td> {t.time} </td>
                    <td> {t.date} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
