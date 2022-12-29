import axios from "axios";
import { useEffect } from "react";

const SearchByname = () => {
//   const sendData = (e) => {
//     fetch("getName", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ payload: e.value }),
//     });
//   };

const getName = async (e) => {
    try {
        console.log(e.target.value)
      await axios({
        method: "POST",
        url: "http://localhost:8080/api/idcard/generateby/name",
        data: {
          sid: 258,
          payload: e.target.value
        },
        headers: {
          Authorization: "#$laksdfnlknoea#$@$%^&%$",
        },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(`fetching ${error}`);
    }
  };
  useEffect(() => {
   
  }, []);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "1.4rem" }}>SearchByname</h1>
        <input
          style={{ background: "#eee" }}
          type="text"
          onKeyUp={(e)=>getName(e)}
          
        />
      </div>
    </>
  );
};

export default SearchByname;
