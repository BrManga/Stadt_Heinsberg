import React, { useContext } from "react";
import { HeinsbergContext } from "../../context";
import "./veranstaltungenfilter.styles.scss";

export default function VeranstallungenFilter() {
  const context = useContext(HeinsbergContext);
  const { handleChange } = context;

  return (
    <section className="filter-container">
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">Nach Datum sortieren</label>
          <select
            name="type"
            id="type"
            className="form-control"
            onChange={handleChange}
          >
            <option value="-">-</option>
            <option value="aufsteigend">Aufsteigend</option>
            <option value="absteigend">Absteigend</option>
          </select>
        </div>
      </form>
    </section>
  );
}
