import React from "react";

const UserAccount = ({
  src,
  username,
  email,
  usernameColor = "#1D2433",
  emailColor = "#4A505C",
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
      className="user-container"
    >
      <div className="user-picture">
        <img src={src} alt="" />
      </div>
      <div
        style={{
          display: "grid",
          gap: "5px",
          alignItems: "center",
        }}
        className="user-details"
      >
        <p
          style={{
            color: "#1D2433",
            fontSize: "14px",
            fontWeight: "500",
          }}
          className="username"
        >
          {username}
        </p>
        <p
          style={{
            color: "#4A505C",
            fontSize: "12px",
          }}
          className="email"
        >
          {email}
        </p>
      </div>
    </div>
  );
};

export default UserAccount;
