import React from "react";
import Card from "../Card/Card";
import "./essenundtrinkenlist.styles.scss";
export default function EssenUndTrinkenList({ essenundtrinken }) {
  //console.log("restaurant array geldi",essenundtrinken);
  if (essenundtrinken["restaurant"].length === 0) {
    return (
      <div className="empty-search">
        <h3>Keine Treffer</h3>
      </div>
    );
  }
  const restaurants = essenundtrinken.restaurant;

  return (
    <section className="restaurantslist">
      <div className="restaurantslist-center">
        {restaurants.map(item => {
          return <Card key={item.id} value={item} />;
        })}
      </div>
    </section>
  );
}
