import React, { useContext } from "react";
import EssenUndTrinkenFilter from "../EssenUndTrinkenFilter/EssenUndTrinkenFilter";
import EssenUndTrinkenList from "../EssenUndTrinkenList/EssenUndTrinkenList";
import Loading from "../Loading/Loading";
import { HeinsbergContext } from "../../context";

function EssenUndTrinkenContainer() {
  const context = useContext(HeinsbergContext);
  console.log("data yazdirildi", context);

  const { loading, sorted, essenundtrinken } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <EssenUndTrinkenFilter />
      <EssenUndTrinkenList essenundtrinken={sorted.essenundtrinken} />
    </div>
  );
}
export default EssenUndTrinkenContainer;
