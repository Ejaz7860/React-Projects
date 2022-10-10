import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

const Tableview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "POST",
      data: {
        sid: 258,
      },
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
  }, []);

  return (
    <Container>
      <Wrapper>
        <div className="inner__container">
          <div className="by__name">
            <input placeholder="Search by Name" type="text" />
          </div>
          <div
            style={{
              display: "flex",
              alignTtems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <label style={{ fontWeight: "bold" }} htmlFor="#">
                From -{" "}
              </label>
              <input type="date" />
            </div>
            <div style={{ marginLeft: "18px" }}>
              <label style={{ fontWeight: "bold" }} htmlFor="#">
                To -{" "}
              </label>
              <input type="date" />
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }} rowspan="3">
                S.No
              </th>
              <th style={{ textAlign: "center" }} rowspan="3">
                Employe Name
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
              <th style={{ textAlign: "center",color:"#111" }}>Open</th>
              <th style={{ textAlign: "center"}}>Closed</th>
              <th style={{ textAlign: "center" }}>Hold</th>
              <th style={{ textAlign: "center" }}>Date</th>
            </tr>
          </thead>

          <tbody>
            {/* Map data */}
            {data.map((item, idx) => {
              return (
                <tr className="tr" key={idx} onClick={(idx)=>{ console.log(idx) }}>
                  <td style={{ textAlign: "center" }} rowspan="1">
                    {idx + 1}
                  </td>

                  {/* USER TICKET CREATED NAME */}
                  <td style={{ textAlign: "center", fontWeight:"bold" }} rowspan="1">
                    {item.name}
                  </td>


                 {/* OPEN, CLOSED, HOLD STATUS  */}
                  {item.status
                    ? item.status.split(",").map((item, idx) => {
                        return (
                          <>
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

                    {/* DATE */}
                  <td style={{ textAlign: "center" }} rowspan="1">
                    {item.date1 ? item.date1.substring(0, 11) : "_"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    </Container>
  );
};

export default Tableview;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 100%;
`;

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 100vh;
  height: 100vh;
  overflow: scroll;

  .inner__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 10px;
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
    width: 100%;
  }

  td,
  th {
    border: 1px solid #eee;
    text-align: left;
    padding: 8px;
  }
  td{
    margin: 5px 0;
  }

  .tr{
    height: 50px;
  }

  .tr:nth-child(even) {
    background-color: #4659e5;
    color: #fff;
  }
`;
