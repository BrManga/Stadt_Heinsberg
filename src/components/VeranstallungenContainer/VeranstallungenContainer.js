import React, { useContext } from "react";
import VeranstallungenFilter from "../VeranstallungenFilter/VeranstallungenFilter";
import VeranstallungenList from "../VeranstallungenList/VeranstallungenList";
import Loading from "../Loading/Loading";
import { HeinsbergContext } from "../../context";

function VeranstallungenContainer() {
  const context = useContext(HeinsbergContext);
  //console.log("data yazdirildi", context);

  const { loading, sorted } = context;
  //console.log("yazdi", sorted);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <VeranstallungenFilter />
      <VeranstallungenList sorted={sorted} />
    </div>
  );
}
export default VeranstallungenContainer;
