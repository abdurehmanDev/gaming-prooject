import React, { useState } from "react";
import "./App.css";

function App() {
const [cartHover, setCartHover] = useState(false);
  const [cardArray, setCardArray] = useState([
    {id:0,
      img: "https://gameloot.in/wp-content/uploads/2022/12/The-Callisto-Protocol-PS4-1.jpg",
      name: "item item",
      price: "990",
      active:false
    },
    {
      id:1,
      img: "https://gameloot.in/wp-content/uploads/2019/08/Ratchet-and-Clank-quest-for-booty-PS3.jpg",
      name: "game item",
      price: "990",
      active:false
    },
    {id: 2,
      img: "https://gameloot.in/wp-content/uploads/2019/10/WWE-2K20-Xbox-One.jpg",
      name: "gaming item",
      price: "990",
      active:false
    },
    {
      id:3,
      img: "https://gameloot.in/wp-content/uploads/2020/06/Ni-No-Kuni-Wrath-of-the-White-Witch-Remastered-PS4-Pre-owned.jpg",
      name: "playing item",
      price: "990",
      active:false
    },
  ]);

  const close = (id) => {
cardArray[id].active= true;
    const tempArray = cardArray.filter((elem) =>
    elem.name = cardArray[id].name )
setCardArray(tempArray);
  }


  const hoverCart = () => {
    setCartHover(!cartHover);
  }

  return (
    <>
      <div className="btn">
        <button className={cartHover? "" : "active"} onClick={hoverCart}>BUY CART</button>
        <button className={cartHover? "active" : ""} onClick={hoverCart}>SELL CART</button>
        <button className="">RENT CART</button>
      </div>
      <div className="main-card">
      { cardArray.map((item) => (
            <div className={item.active ? "game-item  close" : "game-item"} key={item.id}>
              <img src={item.img} alt="game-img" />
              <div className="item-price">
                {item.name}
                <span> {item.price}</span>
              </div>
              <div className="icon-close" onClick={()=>close(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="#ffffff"
                >
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
              </div>
            </div>
          ))}
        

        <div className="detail-card">
          <h4>
            total : <span>3997</span>
          </h4>

          <h4>
            total : <span>3997</span>
          </h4>

          <h4>
            total : <span>3997</span>
          </h4>
        </div>
        <div className="btns">
          <a href="#" className="btn-primary">
            Apply coupon
          </a>
          <a href="#" className="btn-primary">
            proceed to checkout
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
