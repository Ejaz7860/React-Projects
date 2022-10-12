import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const Tableview = () => {
  const [data, setData] = useState([]);
  const [Month, setMonth] = useState("");
  const [Loader, setLoader] = useState(false)

  const getFunc = (e) => {
    e.preventDefault();
    const data = {
      sid: 258,
      month: Month,
    };
    axios({
      method: "POST",
      data,
      url: "http://localhost:8080/api/tickets/reports",
      headers: {
        Authorization: "#$laksdfnlknoea#$@$%^&%$",
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      setLoader(true)


  };

  // get Current MM-YYY

  useEffect(() => {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    today = yyyy + "-" + mm;
    console.log(today);
  }, []);

  return (
    <Container>
      <Wrapper>
        {/* Tab */}
        <div className="inner__container">
          <div className="by__name">
            <Button variant="outlined">Ticket Created Report</Button>
            <Button variant="outlined">Ticket Assigned Report</Button>{" "}
          </div>
          <div
            style={{
              display: "flex",
              alignTtems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Year and Month wise report */}
            <div>
              <div>
                <input
                  type="month"
                  onChange={(e) => setMonth(e.target.value)}
                  className="mm__yyyy"
                />
               { Month !='' ?  <button
                  className="btn__check"
                  onClick={(e) => {
                    getFunc(e);
                  }}
                >
                  Submit
                </button>: null }
              </div>
            </div>
          </div>
        </div>
        <table>
          { Month !=""  ?
          data.length > 0 ? (
            <thead>
              <tr>
                <th style={{ textAlign: "center" }} rowspan="3">
                  S.No
                </th>
                <th style={{ textAlign: "center" }} rowspan="3">
                  Ticket Created By
                </th>
              </tr>
              <tr
                style={{
                  textAlign: "center",
                }}
              >
                <th style={{ textAlign: "center" }} colspan="4">
                  Ticket Created
                </th>
              </tr>

              <tr>
                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(219, 248, 113)",
                  }}
                >
                  All
                </th>
                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(255, 201, 201)",
                  }}
                >
                  Open
                </th>
                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(190, 254, 199)",
                  }}
                >
                  Closed
                </th>
                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "#efe9e68c",
                  }}
                >
                  Hold
                </th>
              </tr>
            </thead>
          ) : (
            "No Report"
          ) :"Selcet Month/Year and Submit button" }

          <tbody>
            {/* Map data */}
            {data
              ? data.map((item, idx) => {
                  return (
                    <tr
                      className="tr"
                      key={idx}
                      onClick={(idx) => {
                        console.log(idx);
                      }}
                    >
                      <td style={{ textAlign: "center" }} rowspan="1">
                        {idx + 1}
                      </td>

                      {/* USER TICKET CREATED NAME */}
                      <td style={{ textAlign: "center" }} rowspan="1">
                        {item.name ? item.name : "_"}
                      </td>

                      {/* OPEN, CLOSED, HOLD STATUS  */}
                      {item.status
                        ? item.status.split(",").map((item, idx) => {
                            return (
                              <>
                                <td style={{ textAlign: "center" }} rowspan="1">
                                  {item
                                    ? (item.match(/Open/g) || []).length +
                                      (item.match(/Closed/g) || []).length +
                                      (item.match(/Hold/g) || []).length
                                    : null}
                                </td>
                                <td style={{ textAlign: "center" }} rowspan="1">
                                  {(item.match(/Open/g) || []).length}
                                </td>

                                <td style={{ textAlign: "center" }} rowspan="1">
                                  {(item.match(/Closed/g) || []).length}
                                </td>

                                <td style={{ textAlign: "center" }} rowspan="1">
                                  {(item.match(/Hold/g) || []).length}
                                </td>
                              </>
                            );
                          })
                        : null}

                      {/* DATE
              <td style={{ textAlign: "center" }} rowspan="1">
                {item.date1 ? item.date1.substring(0, 11) : "_"}
              </td> */}
                    </tr>
                  );
                })
              : "NO REPORT"}
          </tbody>
        </table>
      </Wrapper>
    </Container>
  );
};

export default Tableview;

const Container = styled.div`
  position: relative;
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Wrapper = styled.div`
  max-width: 100%;

  .inner__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 10px;

    .mm__yyyy {
      height: 40px;
      border: none;
      border-radius: 4px 0 0 4px;
      padding: 0 4px;
      width: 140px;
      color: #fff;
      background-color: darkblue;
    }

    .btn__check {
      height: 40px;
      border-radius: 0 4px 4px 0;

      background: #5de8cf;
      width: 51px;
      border: none;
      color: #fff;
      width: 60px;
      height: 40px;
    }
  }
  h1 {
    text-align: center;
    margin-top: 5px;
    font-weight: 600;
  }

  table {
    font-family: arial, sans-serif;
    letter-spacing: 0.1rem;
    border-collapse: collapse;
    font-weight: 700;
    color: #222;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ff93cd;
    text-align: left;
    padding: 8px;
  }
  td {
    margin: 5px 0;
  }

  .tr {
    height: 50px;
  }

  .tr:nth-child(even) {
    background-color: #cdffea;
  }
`;
