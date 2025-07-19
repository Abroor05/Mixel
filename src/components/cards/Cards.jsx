import React from "react";
import "./Cards.css"
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { RiScalesFill } from "react-icons/ri";

function Cards() {
  return (
    <>
      <div className="card">
        <div className="cardImg">
          <div className="img">
            <img src="/imgs/router.png" alt="" />
            <div className="sale">

            </div>
          </div>
        </div>

        <div className="cardInfo">
          <div className="prices">
            <h4>
              <del>1 529 000 сум</del>
            </h4>
            <h4>|</h4>
            <h3>350 000 сум</h3>
          </div>


          <h3 className="title">Умные часы Haylou RT-LS05S</h3>

          <p className="desc">Предложение заканчивается через:</p>

          <div className="countDay">
            <span>
                <h4>27</h4>
                <p>ДНЕЙ</p>
            </span>

            <span>
                
                <p>|</p>
            </span>

            <span>
                <h4>21</h4>
                <p>ЧАСОВ</p>
            </span>

            <span>
                <p>|</p>
            </span>

                <span>
                <h4>32</h4>
                <p>МИНУТ</p>
            </span>

            <span>
                <p>|</p>
            </span>
            <span>
                <h4>05</h4>
                <p>СЕКУНД</p>
            </span>
          </div>

            <div className="shops">
                <span>
                    <LuShoppingCart />
                </span>

                <h4>|</h4>

                <span>
                    <FaRegHeart />
                </span>

                <h4>|</h4>

                <span>
                    <RiScalesFill />
                </span>

            </div>

        </div>
      </div>
    </>
  );
}

export default Cards;
