import Header from "./Header";
import styled from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={styled.home}>
        <Header />

        <div className={styled.hero}>
          <div className={styled.heroTitle}>
            <p>
              Old Is Gold question set of BCA 6th Semester, get all subject
              questions model.
            </p>
          </div>

          <div className={styled.image}>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW2qtqE4nW8Bb3N0HI96bxGjFC9NJnhTXGJ8ba6guTIp_dxsA3aJtfl0mFKkSD9BO9Dd-o63N3jdO9o5Hz5pek3wEYJHRuog_sQ3Lj18SIYgxNzCd1ENWYjDeSlnwq9WmgIvLtPEEuANU/w1200-h630-p-k-no-nu/Question+Bank.png"
              alt=""
            />
          </div>
          <div className={styled.btn}>
            <Link to="click">
              <button>Enter</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
