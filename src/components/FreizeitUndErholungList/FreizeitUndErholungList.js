import React from "react";
import Card from "../Card/Card";
import "./freizeitunderholunglist.styles.scss";
export default function FreizeitUndErholungList({ freizeitunderholung }) {
  console.log(freizeitunderholung);
  if (freizeitunderholung["restaurant"].length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no results matched your search</h3>
      </div>
    );
  }
  const restaurants = freizeitunderholung.restaurant;

  return (
    <section className="restaurantslist">
      <div className="restaurantslist-center">
        {restaurants.map(item => {
          return (
            <Card key={item.id} value={item} />

          );
        })}
      </div>
    </section>
  );
}
