import React, { useContext } from "react";
import FreizeitundErholungFilter from "../FreizeitUndErholungFilter/FreizeitUndErholungFilter";
import FreizeitundErholungList from "../FreizeitUndErholungList/FreizeitUndErholungList";
import Loading from "../Loading/Loading";
import { HeinsbergContext } from "../../context";

function FreizeitundErholungContainer() {
  const context = useContext(HeinsbergContext);
  //console.log("data yazdirildi", context);

  const { loading, sorted } = context;
  //console.log("yazdi", sorted);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <FreizeitundErholungFilter />
      <FreizeitundErholungList sorted={sorted} />
    </div>
  );
}
export default FreizeitundErholungContainer;
