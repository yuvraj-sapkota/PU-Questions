import Header from "./Header";
import styled from "./DCCN.module.css";

function Wt() {
  const Fps = [
    {
      img: "../Wt/wt1.jpg",
    },
    {
      img: "../Wt/wt2.jpg",
    },
    {
      img: "../Wt/wt3.jpg",
    },
    {
      img: "../Wt/wt4.jpg",
    },
    {
      img: "../Wt/wt5.jpg",
    },
    {
      img: "../Wt/wt6.jpg",
    },
    {
      img: "../Wt/wt7.jpg",
    },
    {
      img: "../Wt/wt8.jpg",
    },
    {
      img: "../Wt/wt9.jpg",
    },
    {
      img: "../Wt/wt10.jpg",
    },
    {
      img: "../Wt/wt11.jpg",
    },
    {
      img: "../Wt/wt12.jpg",
    },
    {
      img: "../Wt/wt13.jpg",
    },
    {
      img: "../Wt/wt14.jpg",
    },
    {
      img: "../Wt/wt15.jpg",
    },
    {
      img: "../Wt/wt16.jpg",
    },
    {
      img: "../Wt/wt17.jpg",
    },
    {
      img: "../Wt/wt18.jpg",
    },
    {
      img: "../Wt/wt19.jpg",
    },
    {
      img: "../Wt/wt20.jpg",
    },
    {
      img: "../Wt/wt21.jpg",
    },
    {
      img: "../Wt/wt22.jpg",
    },
    {
      img: "../Wt/wt23.jpg",
    },
    {
      img: "../Wt/wt24.jpg",
    },
    {
      img: "../Wt/wt25.jpg",
    },
    {
      img: "../Wt/wt26.jpg",
    },
    {
      img: "../Wt/wt27.jpg",
    },
  ];
  return (
    <>
      <Header />
      <div className={styled.container}>
        <p>Web Technologies II</p>
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

export default Wt;
