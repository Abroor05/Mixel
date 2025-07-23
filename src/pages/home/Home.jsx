import React, { useEffect, useState } from "react";
import "./Home.css";
import Cards from "../../components/cards/Cards";
import Hero from "../../components/hero/Hero";
import { MdArrowRightAlt } from "react-icons/md";
import { getCategoryData, getProdact } from "../../services/App";
import { data } from "react-router-dom";

function Home() {
  const [prodactData, setProdactData] = useState([]);
  const [catigoryData, setCatigoryData] = useState([]);
  useEffect(() => {
    getProdact().then((data) => {
      setProdactData(data.results);
    });
  }, []);

useEffect(() => {
  getCategoryData().then((res) => {
    setCatigoryData(res?.results || []);
  });
}, []);


  

  return (
    <>
      <section>
        <div className="container">
          <div className="hero">
            <Hero />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cardCatigory">
            <div className="cardTitle">
              <h3>Горящие предложения</h3>
              <h4>
                Посмотреть все <MdArrowRightAlt />{" "}
              </h4>
            </div>

            <div className="cards">
              {prodactData?.map((item) => {
                return <Cards item={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="popularCardTitle">
            <h3>Популярные категории</h3>
          </div>
          <div className="popularCards">
            {catigoryData?.map((item) => {
              return (
                <div className="popularCard">
                  <h3>{item?.name}</h3>

                  <span>
                    <img src={item?.image} alt="" />
                  </span>
                </div>
              );
            })}

            <div className="popularCard">
              <h3>Телефоны, планшеты</h3>

              <span>
                <img src="/imgs/kompiyuter.png" alt="" />
              </span>
            </div>
            <div className="popularCard">
              <h3>Ноутбуки</h3>

              <span>
                <img src="/imgs/kompiyuter.png" alt="" />
              </span>
            </div>
            <div className="popularCard">
              <h3>Товары для офиса</h3>

              <span>
                <img src="/imgs/kompiyuter.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container"></div>
      </section>

      <section>
        <div className="container">
          <div className="cardTitle">
            <h3>Горящие </h3>
            <h4>
              Посмотреть все <MdArrowRightAlt />{" "}
            </h4>
          </div>

          <div className="cards">
            {prodactData?.map((item) => {
              return <Cards item={item} key={item?.id} />;
            })}
          </div>
        </div>
      </section>

      <section className="popularSection">
        <div className="container">
          <div className="cardTitle">
            <h3>Горящие предложения</h3>
            <h4>
              Посмотреть все <MdArrowRightAlt />{" "}
            </h4>
          </div>

          <div className="rekomendum">
            <div className="rekLeft">
              <img src="/imgs/rek.png" alt="" />
            </div>

            <div className="rekRight">
              <div className="cards">
                {prodactData?.slice(0, 6).map((item) => {
                  return <Cards item={item} key={item?.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brendsSection">
        <div className="container">
          <div className="brends">
            <div className="brend">
              <span>
                <img src="/imgs/canon.png" alt="" />
              </span>
            </div>
            <div className="brend">
              <span>
                <img src="/imgs/mi.png" alt="" />
              </span>
            </div>
            <div className="brend">
              <span>
                <img src="/imgs/lg.png" alt="" />
              </span>
            </div>
            <div className="brend">
              <span>
                <img src="/imgs/samsung.png" alt="" />
              </span>
            </div>
            <div className="brend">
              <span>
                <img src="/imgs/artel.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
