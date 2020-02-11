import React from "react";
import Card from "../Card/Card";
import "./essenundtrinkenlist.styles.scss";
export default function EssenUndTrinkenList(props) {
  //console.log("restaurant array geldi", props.essenundtrinken);
  const [way] = Object.keys(props);
  if (props.essenundtrinken["restaurant"].length === 0) {
    return (
      <div className="empty-search">
        <h3>Keine Treffer</h3>
      </div>
    );
  }
  const { restaurant } = props.essenundtrinken.restaurant;

  return (
    <section className="restaurantslist">
      <div className="restaurantslist-center">
        {restaurant.map(item => {
          return <Card key={item.id} value={item} way={way} />;
        })}
      </div>
    </section>
  );
}
