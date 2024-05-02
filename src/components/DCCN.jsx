import Header from "./Header";
import styled from "./DCCN.module.css";

function DCCN() {
  const Fps = [
    {
      img: "./Dccn/Fps1.jpg",
    },
    {
      img: "./Dccn/Fps2.jpg",
    },
    {
      img: "./Dccn/Fps3.jpg",
    },
    {
      img: "./Dccn/Fps4.jpg",
    },
    {
      img: "./Dccn/Fps5.jpg",
    },
    {
      img: "./Dccn/Fps6.jpg",
    },
    {
      img: "./Dccn/Fps7.jpg",
    },
    {
      img: "./Dccn/Fps8.jpg",
    },
    {
      img: "./Dccn/Fps9.jpg",
    },
    {
      img: "./Dccn/Fps10.jpg",
    },
    {
      img: "./Dccn/Fps11.jpg",
    },
    {
      img: "./Dccn/Fps12.jpg",
    },
    {
      img: "./Dccn/Fps13.jpg",
    },
    {
      img: "./Dccn/Fps14.jpg",
    },
    {
      img: "./Dccn/Fps15.jpg",
    },
    {
      img: "./Dccn/Fps16.jpg",
    },
    {
      img: "./Dccn/Fps17.jpg",
    },
    {
      img: "./Dccn/Fps18.jpg",
    },
    {
      img: "./Dccn/Fps19.jpg",
    },
    {
      img: "./Dccn/Fps20.jpg",
    },
    {
      img: "./Dccn/Fps21.jpg",
    },
    {
      img: "./Dccn/Fps22.jpg",
    },
    {
      img: "./Dccn/Fps23.jpg",
    },
    {
      img: "./Dccn/Fps24.jpg",
    },
    {
      img: "./Dccn/Fps25.jpg",
    },
    {
      img: "./Dccn/Fps26.jpg",
    },
    {
      img: "./Dccn/Fps27.jpg",
    },
    {
      img: "./Dccn/Fps28.jpg",
    },
  ];

  return (
    <>
      <Header />
      <div className={styled.container}>
        <p>Data communication and computer network</p>
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
