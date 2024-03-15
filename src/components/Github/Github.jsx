import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import GithubData from "./GtihubData";

function Github() {
  // const data = useLoaderData();

  const [input, setInput] = useState("");
  let [userData, setuserData] = useState("1");
  // let userData = "";

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sunnysahu")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("input: ", input);
    if (input === "") {
      alert(" Hey User Not Found!!! \n Try Again Please");
    } else {
      const response = await fetch(`https://api.github.com/users/${input}`);
      const data = await response.json();
      userData = data;
      console.log("Data :", data);
      setuserData(data);

      console.log("userdata :", userData);
    }

    // try {
    //   const response = await fetch(`https://api.github.com/users/${input}`);
    //   console.log("Response : ", response);
    //   if (!response.ok) {
    //     throw new Error("User not found");
    //   }
    //   const data = await response.json();
    //   userData = data;
    //   console.log("data", data);
    //   console.log("userdata", userData);
    // }
    // catch (error) {
    //   alert("User not found");
    //   console.log("Error Here");
    // }
  };
  return (
    <>
      <form
        className="text-center py-3 text-2xl"
        action=""
        // onSubmit={(e) => {
        //   input === "" && handleSubmit;
        // }}
      >
        <label className="text-center rounded-20" htmlFor="">
          Enter Github User Name : &nbsp;
        </label>
        <input
          className=" border-black border-2 rounded-3xl text-sm text-center p-1"
          type="text"
          value={input}
          placeholder="Enter UserName"
          name="inputText"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          id="textdata"
        />
        &nbsp; &nbsp;
        <button
          type="submit"
          className="bg-gray-300 rounded-lg text-sm p-1 border-1.5 border-black "
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>

      <div>
        {userData.message === "Not Found"
          ? (alert("User Not Found!!! \n Try Again Please"), setuserData("1"))
          : userData != "1" && <GithubData data={userData} />}
      </div>

      <div>{console.log("new user data : ", userData)}</div>
    </>
  );
}

export default Github;

// export const githubInfoLoader = async () => {
//   const response = await fetch("https://api.github.com/users/sunnysahu");
//   // const res = await response.json();
//   // if (res.message == "Not Found") {
//   //   alert("Username Not Found");
//   // } else return res;
//   return await response.json();
// };
