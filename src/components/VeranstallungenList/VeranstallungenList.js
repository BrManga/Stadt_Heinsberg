import React from "react";
import Card from "../Card/Card";
import "./veranstallungenlist.styles.scss";
export default function VeranstallungenList({ sorted }) {

  if (sorted.veranstaltungen.length === 0) {
    return (
      <div className="empty-search">
        <h3>Keine Treffer</h3>
      </div>
    );
  }

  return (
    <section className="restaurantslist">
      <div className="restaurantslist-center">
        {sorted.veranstaltungen.map(item => {
          return (
            <Card key={item.id} value={item} section={"veranstallungen"} />
          );
        })}
      </div>
    </section>
  );
}
