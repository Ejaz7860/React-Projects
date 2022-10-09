import React from "react";
import styled from "styled-components";

const Tableview = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Monthy wise Report</h1>
        <div className="inner__container">
          <div className="by__name">
            <input placeholder="Search Name" type="text" />
          </div>
          <div
            style={{
              display: "flex",
              alignTtems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <label style={{fontWeight:"bold"}} htmlFor="#">From - </label>
              <input type="date" />
            </div>
            <div style={{ marginLeft: "18px" }}>
              <label style={{fontWeight:"bold"}} htmlFor="#">To - </label>
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
                background: "#43db85",
                textAlign: "center",
                color: "white",
              }}
            >
              <th style={{ textAlign: "center" }} colspan="3">
                Ticket Created
              </th>
              <th style={{ textAlign: "center" }} colSpan="3">
                Ticket Assigned
              </th>
            </tr>

            <tr>
              <th style={{ textAlign: "center" }}>Open</th>
              <th style={{ textAlign: "center" }}>Close</th>
              <th style={{ textAlign: "center" }}>Hold</th>
              <th style={{ textAlign: "center" }}>Open</th>
              <th style={{ textAlign: "center" }}>Close</th>
              <th style={{ textAlign: "center" }}>Hold</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td rowspan="1">1</td>
              <td rowspan="1">Amit kumar</td>
              <td rowspan="1">54</td>
              <td rowspan="1">56</td>
              <td rowspan="1">5</td>
              <td rowspan="1">54</td>
              <td rowspan="1">56</td>
              <td rowspan="1">5</td>
            </tr>
            <tr>
              <td rowspan="1">2</td>
              <td rowspan="1">Rakesh Singh</td>
              <td rowspan="1">54</td>
              <td rowspan="1">56</td>
              <td rowspan="1">5</td>
              <td rowspan="1">54</td>
              <td rowspan="1">56</td>
              <td rowspan="1">5</td>
            </tr>
            <tr>
              <td rowspan="1">2</td>
              <td rowspan="1">Rakesh Singh</td>
              <td rowspan="1">54</td>
              <td rowspan="1">56</td>
              <td rowspan="1">5</td>
              <td rowspan="1">54</td>
              <td rowspan="1">56</td>
              <td rowspan="1">5</td>
            </tr>
            <tr>
              <td rowspan="1">2</td>
              <td rowspan="1">Rakesh Singh</td>
              <td rowspan="1">54</td>
              <td rowspan="1">56</td>
              <td rowspan="1">5</td>
              <td rowspan="1">54</td>
              <td rowspan="1">56</td>
              <td rowspan="1">5</td>
            </tr>
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
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #eee;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;
