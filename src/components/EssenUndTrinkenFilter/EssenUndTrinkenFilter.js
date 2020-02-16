import React, { useContext } from "react";
import Title from "../Title/Title";
import { HeinsbergContext } from "../../context";
import "./essenundtrinkenfilter.styles.scss";

const getUnique = (items, type) => {
  //console.log("items geldi",items);
  return [...new Set(items.map(item => item[type]))];
};
export default function EssenUndTrinkenFilter() {
  const context = useContext(HeinsbergContext);
  const { essenundtrinken, handleChange, type, preise } = context;
  console.log("context", essenundtrinken);
  let types = getUnique(essenundtrinken, "type");
  types = ["alle", ...types];
 // console.log(types);

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
    //console.log("preise", item);
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  /* 
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  }); */
  return (
    <section className="filter-container">
      <Title title="Search Restaurants" />
      <form className="filter-form">
        {}
        <div className="form-group">
          <label htmlFor="type">Restaurant type</label>
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
        {/*  <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
       
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              id="size"
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              id="size"
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="pets">breakfast</label>
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div> */}
      </form>
    </section>
  );
}
