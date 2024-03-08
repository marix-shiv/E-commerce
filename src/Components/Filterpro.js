import React from "react";

const Filterpro = ({ key, category, onClick }) => {
  return <button className="btn btn-primary" onClick={onClick}>{category}</button>;
};

export default Filterpro;
