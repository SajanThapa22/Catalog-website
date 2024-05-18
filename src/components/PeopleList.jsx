import UserAccount from "./UserAccount";

const PeopleList = ({
  amount,
  sendOrReceived,
  src,
  username,
  email,
  color,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <UserAccount src={src} username={username} email={email} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          textAlign: "right",
        }}
        className="send-or-recieved"
      >
        <p style={{ color: color, fontSize: "16px" }}>{amount}</p>
        <p style={{ color: "#4A505C", fontSize: "12px" }}>{sendOrReceived}</p>
      </div>
    </div>
  );
};

export default PeopleList;
