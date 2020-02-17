import React, { useContext } from "react";
import { HeinsbergContext } from "../../context";
import "./uebernachtenfilter.styles.scss";

const getUnique = (items, type) => {
  return [...new Set(items.map(item => item[type]))];
};
export default function UebernachtenFilter() {
  const context = useContext(HeinsbergContext);
  const { uebernachten, handleChange, type, preise } = context;
  console.log("context", uebernachten);
  let types = getUnique(uebernachten, "type");
  types = ["alle", ...types];
  // console.log(types);

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  
  return (
    <section className="filter-container">
      <form className="filter-form">
        {}
        <div className="form-group">
          <label htmlFor="type">Restauranttyp</label>
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
        <div className="form-group">
          <label htmlFor="price">Preise</label>
          <select
            name="preise"
            id="price"
            value={preise}
            className="form-control"
            onChange={handleChange}
          >
            {preises}
          </select>
        </div>

      </form>
    </section>
  );
}
