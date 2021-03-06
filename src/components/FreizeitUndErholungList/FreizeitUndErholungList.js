import React from "react";
import Card from "../Card/Card";
import "./freizetunderholung.styles.scss";
export default function FreizeitUndErholungList({ sorted }) {
//  console.log(" freizeit list component props:", sorted);

  if (sorted.freizeitunderholung.length === 0) {
    return (
      <div className="empty-search">
        <h3>Keine Treffer</h3>
      </div>
    );
  }

  return (
    <section className="freizeitlist">
      <div className="freizeitlist-center">
        {sorted.freizeitunderholung.map(item => {
          return (
            <Card key={item.id} value={item} section={"freizeitunderholung"} />
          );
        })}
      </div>
    </section>
  );
}
