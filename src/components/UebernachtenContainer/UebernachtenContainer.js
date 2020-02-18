import React, { useContext } from "react";
import UebernachtenList from "../UebernachtenList/UebernachtenList";
import Loading from "../Loading/Loading";
import { HeinsbergContext } from "../../context";

function UebernachtenContainer() {
  const context = useContext(HeinsbergContext);

  const { loading, sorted } = context;

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
