import React, { useContext } from "react";
import VeranstallungenFilter from "../VeranstaltungenFilter/VeranstaltungenFilter";
import VeranstallungenList from "../VeranstaltungenList/VeranstaltungenList";
import Loading from "../Loading/Loading";
import { HeinsbergContext } from "../../context";

function VeranstallungenContainer() {
  const context = useContext(HeinsbergContext);
  const { loading, sorted } = context;

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
