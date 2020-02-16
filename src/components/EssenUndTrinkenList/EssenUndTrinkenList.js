import React from "react";
import Card from "../Card/Card";
import "./essenundtrinkenlist.styles.scss";
export default function EssenUndTrinkenList({sorted}) {
  //console.log("restaurant array geldi", props);
  if (sorted.essenundtrinken.length === 0) {
    return (
      <div className="empty-search">
        <h3>Keine Treffer</h3>
      </div>
    );
  }

  return (
    <section className="restaurantslist">
      <div className="restaurantslist-center">
        {sorted.essenundtrinken.map(item => {
          return (
            <Card
              key={item.id}
              value={item}
              section={"essenundtrinken"}
            />
          );
        })}
      </div>
    </section>
  );
}
