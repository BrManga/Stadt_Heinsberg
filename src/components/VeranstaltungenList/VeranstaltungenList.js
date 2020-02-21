import React from "react";
import Card from "../Card/Card";
import "./veranstaltungenlist.styles.scss";
export default function VeranstallungenList({ sorted }) {
  console.log('List part sorted', sorted);
  

  if (sorted.veranstaltungen.length === 0) {
    return (
      <div className="empty-search">
        <h3>Keine Treffer</h3>
      </div>
    );
  }

  return (
    <section className="veranstaltunglist">
      <div className="veranstaltunglist-center">
        {sorted.veranstaltungen.map(item => {
          return (
            <Card key={item.id} value={item} section={"veranstaltungen"} />
          );
        })}
      </div>
    </section>
  );
}
