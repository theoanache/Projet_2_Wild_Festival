import React from "react";
import PropTypes from "prop-types";

import "./Inforesa.css";

const Inforesa = ({ selectedFestival }) => {
  const [counter, setCounter] = React.useState(1);
  const [counterPass, setCounterPass] = React.useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  const increasePass = () => {
    setCounterPass(counterPass + 1);
  };
  const decreasePass = () => {
    setCounterPass(counterPass - 1);
  };

  const pricePlace = 100;
  const totalPlace = pricePlace * counter;
  const pricePass = 250;
  const totalPass = pricePass * counterPass;
  const total = totalPlace + totalPass;

  return (
    <div className="infoResa">
      <img src={selectedFestival.image1} alt="ef" />
      <div>
        <h1>Réservation</h1>
      </div>
      <hr />
      <div className="infoFestival">
        <h4>Tickets:</h4>
        <p>
          {selectedFestival.name} - {selectedFestival.city},{" "}
          {selectedFestival.country}{" "}
        </p>
        <p>{selectedFestival.startDate}</p>
      </div>
      <div className="tickets">
        <h4>Nombre de places:</h4>
        <div className="numberTickets">
          <ion-icon name="remove-circle-outline" onClick={decrease} />
          <p>{counter}</p>
          <ion-icon name="add-circle-outline" onClick={increase} />
        </div>
      </div>
      <div className="tickets">
        <p>Prix : {pricePlace} €</p>
        <p>Total : {totalPlace} €</p>
      </div>
      <div className="tickets">
        <h4>Pass VIP:</h4>
        <div className="numberTickets">
          <ion-icon name="remove-circle-outline" onClick={decreasePass} />
          <p>{counterPass}</p>
          <ion-icon name="add-circle-outline" onClick={increasePass} />
        </div>
      </div>
      <div className="tickets">
        <p>Prix : {pricePass} €</p>
        <p>Total : {totalPass} €</p>
      </div>
      <div className="tickets">
        <h4>Total : </h4>
        <div className=" totalTickets">
          <h4 className="total">{total} €</h4>
        </div>
      </div>
    </div>
  );
};

Inforesa.propTypes = {
  selectedFestival: PropTypes.string.isRequired,
};

export default Inforesa;
