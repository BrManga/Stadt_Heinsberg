import React, { useContext } from "react";
import EssenUndTrinkenFilter from "../EssenUndTrinkenFilter/EssenUndTrinkenFilter";
import EssenUndTrinkenList from "../EssenUndTrinkenList/EssenUndTrinkenList";
import Loading from "../Loading/Loading";
import { HeinsbergContext } from "../../context";

function EssenUndTrinken() {
  const context = useContext(HeinsbergContext);
  console.log("data yazdirildi", context);

  const { loading, sorted, essenundtrinken } = context;
  console.log("AMK", loading);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <EssenUndTrinkenFilter data={essenundtrinken} />
      <EssenUndTrinkenList essenundtrinken={sorted} />
    </div>
  );
}
export default EssenUndTrinken;
