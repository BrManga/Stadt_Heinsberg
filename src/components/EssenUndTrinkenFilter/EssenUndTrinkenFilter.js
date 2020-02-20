import React, { useContext } from "react";
import { HeinsbergContext } from "../../context";
import "./essenundtrinkenfilter.styles.scss";

const getUnique = (items, type) => {
  return [...new Set(items.map(item => item[type]))];
};
export default function EssenUndTrinkenFilter() {
  const context = useContext(HeinsbergContext);
  const { essenundtrinken, handleChange, type, preise } = context;
  let types = getUnique(essenundtrinken, "type");
  types = ["alle", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let preises = getUnique(essenundtrinken, "preise");
  preises = ["-", ...preises];
  preises = preises.sort(function(a, b) {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return a.length - b.length;
  });
  preises = preises.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <form className="filter-form">
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
