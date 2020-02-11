import React, { useContext } from "react";
import FreizeitundErholungFilter from "../FreizeitUndErholungFilter/FreizeitUndErholungFilter";
import FreizeitundErholungList from "../FreizeitUndErholungList/FreizeitUndErholungList";
import Loading from "../Loading/Loading";
import { HeinsbergContext } from "../../context";

function FreizeitundErholungContainer() {
  const context = useContext(HeinsbergContext);
  //console.log("data yazdirildi", context);

  const { loading, sorted, freizeitunderholung, handleChange } = context;
  //console.log("yazdi", freizeitunderholung);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <FreizeitundErholungFilter data={freizeitunderholung} />
      <FreizeitundErholungList freizeitunderholung={sorted.freizeitunderholung} />
    </div>
  );
}
export default FreizeitundErholungContainer;
