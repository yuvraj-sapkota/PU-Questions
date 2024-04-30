import Header from "./Header";
import styled from "./AllSubject.module.css";

import { Link } from "react-router-dom";
function AllSubject() {
  const subName = [
    {
      id: 1,
      path: "/dccn",
      name: "Data Communication and Network",
    },
    {
      id: 2,
      path: "/fps",
      name: "Fundamentals of probability and Statistics",
    },
    {
      id: 3,
      path: "/ae",
      name: "Applied Economics",
    },
    {
      id: 4,
      path: "/om",
      name: "Organization and Management",
    },
    {
      id: 5,
      path: "/wt",
      name: "web Technologies II",
    },
    {
      id: 6,
      name: "Project III",
    },
  ];

  return (
    <>
      <div className={styled.allSubject}>
        <Header />
        <div className={styled.subjects}>
          {subName.map((curElem) => {
            return (
              <div className={styled.dccn} key={curElem.id}>
                <p>{curElem.name}</p>
                <Link to={curElem.path}>
                  <button>Enter</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllSubject;
