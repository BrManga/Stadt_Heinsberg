import React, { useContext, useState } from "react";
//import { freizeitunderholungContext } from "../context";
import Title from "../Title/Title";

const getUnique = (items, value, type) => {
  console.log(items);
  return [...new Set(items[value].map(item => item[type]))];
};
export default function FreizeitUndErholungFilter({ freizeitunderholung }) {
  //const context = useContext(freizeitunderholungContext);
const [type, setType] = useState("")
  let types = getUnique(freizeitunderholung, "restaurant", "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
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
          <label htmlFor="type">Erlohung type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={(e)=>setType(e.target.value)}
          >
            {types}
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
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            id="price"
            onChange={handleChange}
            className="form-control"
          />
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
