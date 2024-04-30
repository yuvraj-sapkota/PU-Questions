import Header from "./Header";
import styled from "./DCCN.module.css";

function Om() {
  const Fps = [
    {
      img: "./Om/om1.jpg",
    },
    {
      img: "./Om/om2.jpg",
    },
    {
      img: "./Om/om3.jpg",
    },
    {
      img: "./Om/om4.jpg",
    },
    {
      img: "./Om/om5.jpg",
    },
    {
      img: "./Om/om6.jpg",
    },
    {
      img: "./Om/om7.jpg",
    },
    {
      img: "./Om/om8.jpg",
    },
    {
      img: "./Om/om9.jpg",
    },
    {
      img: "./Om/om10.jpg",
    },
    {
      img: "./Om/om11.jpg",
    },
    {
      img: "./Om/om12.jpg",
    },
    {
      img: "./Om/om13.jpg",
    },
    {
      img: "./Om/om14.jpg",
    },
    {
      img: "./Om/om15.jpg",
    },
    {
      img: "./Om/om16.jpg",
    },
    {
      img: "./Om/om17.jpg",
    },
    {
      img: "./Om/om18.jpg",
    },
    {
      img: "./Om/om19.jpg",
    },
    {
      img: "./Om/om20.jpg",
    },
    {
      img: "./Om/om21.jpg",
    },
    {
      img: "./Om/om22.jpg",
    },
    {
      img: "./Om/om23.jpg",
    },
    {
      img: "./Om/om24.jpg",
    },
    {
      img: "./Om/om25.jpg",
    },
    {
      img: "./Om/om26.jpg",
    },
    {
      img: "./Om/om27.jpg",
    },
    {
      img: "./Om/om28.jpg",
    },
    {
      img: "./Om/om29.jpg",
    },
    {
      img: "./Om/om30.jpg",
    },
    {
      img: "./Om/om31.jpg",
    },
    {
      img: "./Om/om32.jpg",
    },
  ];
  return (
    <>
      <Header />
      <div className={styled.container}>
        <p>Organization Management</p>
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

export default Om;
