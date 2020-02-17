import React, { useContext } from "react";
import UebernachtenList from "../UebernachtenList/UebernachtenList";
import Loading from "../Loading/Loading";
import { HeinsbergContext } from "../../context";

function UebernachtenContainer() {
  const context = useContext(HeinsbergContext);
  //console.log("data yazdirildi", context);

  const { loading, sorted } = context;
  //console.log("yazdi", sorted);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <UebernachtenList sorted={sorted} />
    </div>
  );
}
export default UebernachtenContainer;
