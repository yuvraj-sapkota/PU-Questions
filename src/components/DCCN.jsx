import Header from "./Header";
import styled from "./DCCN.module.css";

function DCCN() {
  const Fps = [
    {
      img: "../images/dccn1.jpg",
    },
    {
      img: "../images/dccn2.jpg",
    },
    {
      img: "../images/dccn3.jpg",
    },
    {
      img: "../images/dccn4.jpg",
    },
    {
      img: "../images/dccn5.jpg",
    },
    {
      img: "../images/dccn6.jpg",
    },
    {
      img: "../images/dccn7.jpg",
    },
    {
      img: "../images/dccn8.jpg",
    },
    {
      img: "../images/dccn9.jpg",
    },
    {
      img: "../images/dccn10.jpg",
    },
    {
      img: "../images/dccn11.jpg",
    },
    {
      img: "../images/dccn12.jpg",
    },
    {
      img: "../images/dccn13.jpg",
    },
    {
      img: "../images/dccn14.jpg",
    },
    {
      img: "../images/dccn15.jpg",
    },
    {
      img: "../images/dccn16.jpg",
    },
    {
      img: "../images/dccn17.jpg",
    },
    {
      img: "../images/dccn18.jpg",
    },
    {
      img: "../images/dccn19.jpg",
    },
    {
      img: "../images/dccn20.jpg",
    },
    {
      img: "../images/dccn21.jpg",
    },
    {
      img: "../images/dccn22.jpg",
    },
    {
      img: "../images/dccn23.jpg",
    },
    {
      img: "../images/dccn24.jpg",
    },
    {
      img: "../images/dccn25.jpg",
    },
    {
      img: "../images/dccn26.jpg",
    },
    {
      img: "../images/dccn27.jpg",
    },
    {
      img: "../images/dccn28.jpg",
    },
    {
      img: "../images/dccn29.jpg",
    },
    {
      img: "../images/dccn30.jpg",
    },
    {
      img: "../images/dccn31.jpg",
    },
    {
      img: "../images/dccn32.jpg",
    },
    {
      img: "../images/dccn33.jpg",
    },
    {
      img: "../images/dccn34.jpg",
    },
    {
      img: "../images/dccn35.jpg",
    },
    {
      img: "../images/dccn36.jpg",
    },
    {
      img: "../images/dccn37.jpg",
    },
    {
      img: "../images/dccn38.jpg",
    },
    {
      img: "../images/dccn39.jpg",
    },
    {
      img: "../images/dccn40.jpg",
    },
    {
      img: "../images/dccn41.jpg",
    },
    {
      img: "../images/dccn42.jpg",
    },
    {
      img: "../images/dccn43.jpg",
    },
    {
      img: "../images/dccn44.jpg",
    },
    {
      img: "../images/dccn45.jpg",
    },
    {
      img: "../images/dccn46.jpg",
    },
    {
      img: "../images/dccn47.jpg",
    },
    {
      img: "../images/dccn48.jpg",
    },
    {
      img: "../images/dccn49.jpg",
    },
  ];
  return (
    <>
      <Header />
      <div className={styled.container}>
        <p>Fundamental of Probability and Statics</p>
        <div className={styled.images}>
          {Fps.map((curElem, index) => {
            const { img } = curElem;
            return <img src={img} alt="" key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default DCCN;
