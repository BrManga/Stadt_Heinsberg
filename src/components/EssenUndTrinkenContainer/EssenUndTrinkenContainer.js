import React, { useContext } from "react";
import EssenUndTrinkenFilter from "../EssenUndTrinkenFilter/EssenUndTrinkenFilter";
import EssenUndTrinkenList from "../EssenUndTrinkenList/EssenUndTrinkenList";
import Loading from "../Loading/Loading";
import { HeinsbergContext } from "../../context";

function EssenUndTrinkenContainer() {
  const context = useContext(HeinsbergContext);

  const { loading, sorted} = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <EssenUndTrinkenFilter />
      <EssenUndTrinkenList sorted={sorted} />
    </div>
  );
}
export default EssenUndTrinkenContainer;
