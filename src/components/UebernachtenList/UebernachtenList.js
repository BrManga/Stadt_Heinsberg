import React from "react";
import Card from "../Card/Card";
import "./uebernachtenList.styles.scss";
export default function UebernachtenList({ sorted }) {

  if (sorted.uebernachten.length === 0) {
    return (
      <div className="empty-search">
        <h3>Keine Treffer</h3>
      </div>
    );
  }

  return (
    <section className="restaurantslist">
      <div className="restaurantslist-center">
        {sorted.uebernachten.map(item => {
          return (
            <Card key={item.id} value={item} section={"uebernachten"} />
          );
        })}
      </div>
    </section>
  );
}
