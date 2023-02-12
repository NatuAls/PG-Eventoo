import React, { useState } from "react";
import style from "./BuyButton.module.css";

const BuyButton = () => {
  const price = 150;
  const [tickets, setTickets] = useState(1);
  const totalPrice = price * tickets;

  function handleButtonSubtraction(){
    setTickets(tickets - 1);
  }

  function handleButtonAddition(){
    setTickets(tickets + 1);
  }

  function handleOnClick(event){
    event.preventDefault();
  }

  return (
    <div className={style.containerbottomright}>
      <div className={style.buycontainer}>
        <div className={style.container_text_and_tickets}>
            <div className={style.divtext}>
                <p>
                    <b>Advance Tickets</b>
                </p>
                <p className={style.price}>{"$" + price}</p>
            </div>
            <div className={style.containertickets}>
                <button onClick={handleButtonSubtraction} disabled={tickets === 1 ? true : false}><span>−</span></button>
                <span><b>{tickets}</b></span>
                <button onClick={handleButtonAddition} disabled={tickets === 10 ? true : false}><span>+</span></button>
            </div>
        </div>
        <div>
          <a className={`btnprimario ${style.buybutton}`} href="" onClick={handleOnClick}>
            <span>{`Buy by $${totalPrice}`}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyButton;