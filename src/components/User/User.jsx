import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <div className="text-center">User : {id} </div>;

  //   const params = useParams();
  //   return <div className="text-center">User : {params.id} </div>;
}

export default User;
