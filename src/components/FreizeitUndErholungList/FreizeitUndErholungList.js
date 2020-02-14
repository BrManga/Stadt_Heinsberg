import React from "react";
import Card from "../Card/Card";
import "./freizetunderholung.styles.scss";
export default function FreizeitUndErholungList(props) {
  //console.log(" array geldi", props);

  if (props.sorted.length === 0) {
    return (
      <div className="empty-search">
        <h3>Keine Treffer</h3>
      </div>
    );
  }

  return (
    <section className="restaurantslist">
      <div className="restaurantslist-center">
        {props.sorted.map(item => {
          return (
            <Card
              key={item.id}
              value={item}
              section={"freizeitunderholung"}
            />
          );
        })}
      </div>
    </section>
  );
}
