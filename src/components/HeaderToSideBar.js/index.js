import React from "react";
import { ImMenu } from "react-icons/im";
import "./HeaderSidebar.css";

let Page = {
  page: "Dashboard",
};

export default function HeaderToSideBar() {
  //   const [sidebarState, setSideBarState] = useState(false);
  //   const [hamburgerState, setHamburgerState] = useState(true);

  //   const handleHamburgerClick = () => {
  //     setSideBarState(true);
  //     setHamburgerState(false);
  //   };

  //   const handleXClick = () => {
  //     setSideBarState(false);
  //     setHamburgerState(true);
  //   };

  return (
    <div>
      <div className="wrapper_mobile">
        <div className="row">
          <div className="col-1">
            <LogoIcon />
          </div>
          <div className="col-2">
            <ContentWellcome PageTitle={Page} className="allItem" />
          </div>
          <duv
            className="col-3"
            style={{
              paddingTop: "8px",
            }}
          >
            <ImMenu
              onMouseOver={({ target }) => (target.style.color = "#33efab")}
              onMouseOut={({ target }) => (target.style.color = "black")}
              size={40}
            ></ImMenu>
          </duv>
        </div>
      </div>
    </div>
  );
}

const LogoIcon = () => {
  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: "#1B1B1B",
        color: "white",
        borderRadius: "50px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          paddingTop: "10px",
          margin: "0 auto",
          fontWeight: "bold",
        }}
      >
        IDEA
      </p>
      <p
        style={{
          borderRadius: "10px",
          backgroundColor: "#33EFAB",
          width: "50px",
          margin: "0 auto",
          fontWeight: "bold",
        }}
      >
        Fly
      </p>
    </div>
  );
};

const ContentWellcome = ({ PageTitle }) => {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <strong style={{ fontSize: "18px" }}>{PageTitle.page}</strong>
        <br />
        <strong>HI, User</strong>. Wellcome Back
      </p>
    </div>
  );
};
