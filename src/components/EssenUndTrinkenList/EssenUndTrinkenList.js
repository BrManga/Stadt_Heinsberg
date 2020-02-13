import React from "react";
import Card from "../Card/Card";
import "./essenundtrinkenlist.styles.scss";
export default function EssenUndTrinkenList(props) {
  console.log("restaurant array geldi", props);
  if (props.essenundtrinken.length === 0) {
    return (
      <div className="empty-search">
        <h3>Keine Treffer</h3>
      </div>
    );
  }

  return (
    <section className="restaurantslist">
      <div className="restaurantslist-center">
        {props.essenundtrinken.map(item => {
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
