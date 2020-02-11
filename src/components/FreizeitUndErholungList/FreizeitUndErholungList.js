import React from "react";
import Card from "../Card/Card";
import "./freizetunderholung.styles.scss";
export default function FreizeitUndErholungList(props) {
 // console.log(" array geldi",Object.keys(props));
  const [way]=Object.keys(props)
  if (props.freizeitunderholung.length === 0) {
    return (
      <div className="empty-search">
        <h3>Keine Treffer</h3>
      </div>
    );
  }

  return (
    <section className="restaurantslist">
      <div className="restaurantslist-center">
        {props.freizeitunderholung.map(item => {
          return <Card key={item.id} value={item} way={way} section={"freizeitunderholung"}/>;
        })}
      </div>
    </section>
  );
}
