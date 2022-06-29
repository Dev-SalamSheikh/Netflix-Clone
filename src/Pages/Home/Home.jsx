import React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/Navbar/Navbar";

import "./Home.scss";

const Home = ({ image }) => {
  return (
    <div className="home">
      <Navbar />
      <Featured type={"movie"} />
      <List
        image={
          "https://imgs.search.brave.com/T5KK0RTD1nsTweWlLDEoCKW6IY53P9zcReULfQMXfu4/rs:fit:1200:720:1/g:ce/aHR0cDovL2ltYWdl/LnRtZGIub3JnL3Qv/cC9vcmlnaW5hbC9x/YkRQVnFieEZETllm/RldEeHpMSjJVQ2Jm/dmcuanBn"
        }
      />
      <List
        image={
          "https://imgs.search.brave.com/V2BBVhjfjBWnJp1d5ntA7aVhItXd2SKx3iyRoSOWcKM/rs:fit:1200:644:1/g:ce/aHR0cHM6Ly9ibG94/aW1hZ2VzLmNoaWNh/Z28yLnZpcC50b3du/bmV3cy5jb20vYXpk/YWlseXN1bi5jb20v/Y29udGVudC90bmNt/cy9hc3NldHMvdjMv/ZWRpdG9yaWFsL2Mv/YjMvY2IzYTlhZjgt/OTZhZS01YWNmLWIz/ZDAtYjk0NDk1NmI1/NjMzLzYwNmY0MTk3/OGUyNWMuaW1hZ2Uu/anBnP3Jlc2l6ZT0x/MjAwJTJDNjQ0"
        }
      />
      <List
        image={
          "https://imgs.search.brave.com/S_7tu5l32w88i588TWDhDHjSwhaL5tIMRWe3uKLglpA/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9W/QWp3a3lKSWJGby9t/YXhyZXNkZWZhdWx0/LmpwZw"
        }
      />
      <List
        image={
          "https://imgs.search.brave.com/azDvAt2y4fsdpUGYgsK16ziMXh-nXEJEE-Vp30SlzrU/rs:fit:1024:576:1/g:ce/aHR0cHM6Ly93d3cu/Y2luZW1haW5mb3Mu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA5L21heHJl/c2RlZmF1bHQtMTAy/NHg1NzYuanBn"
        }
      />
    </div>
  );
};

export default Home;
