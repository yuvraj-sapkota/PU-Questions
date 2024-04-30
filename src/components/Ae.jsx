import Header from "./Header";
import styled from "./DCCN.module.css";

function Ae() {
  const Fps = [
    {
      img: "./Ae/ae1.jpg",
    },
    {
      img: "./Ae/ae2.jpg",
    },
    {
      img: "./Ae/ae3.jpg",
    },
    {
      img: "./Ae/ae4.jpg",
    },
    {
      img: "./Ae/ae5.jpg",
    },
    {
      img: "./Ae/ae6.jpg",
    },
    {
      img: "./Ae/ae7.jpg",
    },
    {
      img: "./Ae/ae8.jpg",
    },
    {
      img: "./Ae/ae9.jpg",
    },
    {
      img: "./Ae/ae10.jpg",
    },
    {
      img: "./Ae/ae11.jpg",
    },
    {
      img: "./Ae/ae12.jpg",
    },
    {
      img: "./Ae/ae13.jpg",
    },
    {
      img: "./Ae/ae14.jpg",
    },
    {
      img: "./Ae/ae15.jpg",
    },
    {
      img: "./Ae/ae16.jpg",
    },
    {
      img: "./Ae/ae17.jpg",
    },
    {
      img: "./Ae/ae18.jpg",
    },
    {
      img: "./Ae/ae19.jpg",
    },
    {
      img: "./Ae/ae20.jpg",
    },
    {
      img: "./Ae/ae21.jpg",
    },
    {
      img: "./Ae/ae22.jpg",
    },
    {
      img: "./Ae/ae23.jpg",
    },
    {
      img: "./Ae/ae24.jpg",
    },
    {
      img: "./Ae/ae25.jpg",
    },
    {
      img: "./Ae/ae26.jpg",
    },
    {
      img: "./Ae/ae27.jpg",
    },
    {
      img: "./Ae/ae28.jpg",
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

export default Ae;
