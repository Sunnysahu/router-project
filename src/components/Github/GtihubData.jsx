import React, { useEffect, useState, useRef } from "react";

function GtihubData({ data }) {
  // console.log("Hello", data);
  // console.log("Hey", val);

  //   const [value, setValue] = useState("");
  //   const usernameRef = useRef(null);
  const copyToClipboard = () =>
    window.navigator.clipboard.writeText(data.location);
  return (
    <>
      <div className="flex justify-center">
        <h1>Profile Id : {data.login}</h1>
      </div>
      <div className="flex items-center justify-around text-start flex-shrink">
        <img src={data.avatar_url} alt="" width={150} />
        <div>
          <h1>
            <b>Followers</b> : {data.followers}
          </h1>
          <h1>
            <b>Following</b> : {data.following}
          </h1>
          <h1>
            <b>Id</b> : {data.id}
          </h1>
          <h1>
            <b>Location</b> : {data.location}
          </h1>
          <h1>
            <b>Bio</b> : {data.bio}
          </h1>
        </div>
        <div className="flex flex-col">
          <h1>
            Click Below to Copy the <br /> Full Github URL &nbsp;
          </h1>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="bg-gray-300 rounded-lg p-2"
            onClick={copyToClipboard}
          >
            {" "}
            Click to Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default GtihubData;
