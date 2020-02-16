import React, { useContext } from "react";
import Title from "../Title/Title";
import { HeinsbergContext } from "../../context";
import "./freizeitunderholung.styles.scss";

const getUnique = (items, type) => {
  //console.log("items geldi",items);
  return [...new Set(items.map(item => item[type]))];
};

export default function FreizeitUndErholungFilter() {
  const context = useContext(HeinsbergContext);
  const { freizeitunderholung, handleChange, type } = context;
  //console.log("geldi", freizeitunderholung);
  let types = getUnique(freizeitunderholung, "type");
  //console.log("geldi",types);
  types = ["alle", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Freizeit, Erholung" />
      <form className="filter-form">
        {}
        <div className="form-group">
          <label htmlFor="type">Erleben</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
}
