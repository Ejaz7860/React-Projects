import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { BsFillPersonFill } from "react-icons/bs";
import Chart from "react-apexcharts";

const Report = () => {
  const [report2, setReport] = useState([
    {
      userid: "201",
      name: "Amruta Avadhoot Kulkarni",
      status:
        "Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "202",
      name: "Anuja Bhalchandra ARANAKE",
      status: "Open Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "294",
      name: "Urmila Rajendra Kamble",
      status:
        "Open Closed Open Open Open Open Closed Closed Closed Closed Closed Closed Open Open Closed Closed",
    },
    {
      userid: "304",
      name: "Ashadevi Anil Bhutkar",
      status:
        "Closed Open Open Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed",
    },
    {
      userid: "327",
      name: "Gokul Gotu Ahire",
      status:
        "Closed Closed Closed Closed Closed Open Closed Open Open Open Open Open Open Open Closed",
    },
    {
      userid: "330",
      name: "Pratibha Ashok Taru",
      status: "Open Open Closed Closed Closed Open Open Closed Closed",
    },
    {
      userid: "378",
      name: "Sharmila Manoharsinh Bayas",
      status: "Closed Open Open Closed Closed Closed Open",
    },
    { userid: "387", name: "Madhuri Abhay Kulkarni", status: "Open Open" },
    {
      userid: "512",
      name: "YOGESH Dattatyraya CHIWATE",
      status:
        "Closed Closed Open Closed Closed Closed Open Open Open Open Open Open Open Open Open Open Open Open Open Closed Open Open Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Open Open Open Open Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Open Open Open Open Closed Closed Closed Open Closed Open Closed Open Open Open Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Open Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Open Closed Closed Closed Open Open Closed Closed Closed Closed Closed Open Open Open Open Closed Closed Closed Open Closed Open Open Closed Open Closed Open Closed Closed Closed Closed Closed Closed Closed Open Open Closed Closed Open Closed Closed Open Closed Closed Open Open Open Closed Open Closed Closed Open Closed Open Open Closed Open Open Open Closed Closed Closed Open Closed Closed Closed Closed Closed Open Closed Open Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Open Closed Closed Closed Closed Open Open Open Closed Closed Closed Closed",
    },
    {
      userid: "513",
      name: "Abhijit Ashokrao Patil",
      status:
        "Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "514",
      name: "Amrut Ramchandra Kulkarni",
      status:
        "Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "518",
      name: "Snehal Tushar Kumthekar",
      status:
        "Open Closed Closed Open Open Closed Closed Open Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Open Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Open Closed Closed Closed Closed Closed Open Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed",
    },
    {
      userid: "519",
      name: "Satej Prakash Kamble",
      status:
        "Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "520",
      name: "Sachin Subhash Langade",
      status:
        "Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "521",
      name: "Pushpalata Sunil Mane",
      status:
        "Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Open Closed Closed",
    },
    {
      userid: "527",
      name: "CHAITANYA Jayant Joshi",
      status:
        "Closed Open Open Open Open Open Open Open Open Open Open Open Open Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Open Closed Open",
    },
    {
      userid: "531",
      name: "Ashok Ramchandra Mohite",
      status:
        "Open Open Open Open Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      id: "1174",
      committee: "Chief Executive Officer",
      file: "",
      file_1: "",
      file_2: "",
      file_3: "",
      description:
        "Mobile with Connectivity -4G/5G  \r\nhaving  Camera\r\nStorage- 128 GB memory \r\nRAM-8GB",
      status: "Open",
      priority: "High",
      title: "Purchase of Mobile for college",
      duedate: "2022-09-26 10:28:41",
      date: "2022-09-24 10:28:41",
      school: "Shikshan Mandal Karad",
      name: "Ila Devchand Jogi",
      email: "null",
      contact: "Unknown",
      uid: "543",
      s_id: "557",
      remark: "",
      staff: "YOGESH",
      staffClosed_uid: "0",
      staff_id: "512",
      parent_id: "",
      closed_tickets: "0",
      closed_by: "",
      updated_on: "2022-09-24 10:28:43",
      created_on: "2022-09-24 10:28:43",
      duedate1: "26th September",
    },
    { userid: "546", name: "Parag Sudhakar Sontakke", status: "Closed Closed" },
    {
      userid: "1016",
      name: "REKHA PRAKASH CHAVAN",
      status: "Open Closed Closed Closed Closed Open Closed Closed Closed",
    },
    {
      userid: "1018",
      name: "MANISHA RAJESH PATIL",
      status:
        "Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Open Closed Closed Closed Closed Closed Closed Closed Open Open Closed Open Open Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "1022",
      name: "PRADIP NANA GAVNANG",
      status:
        "Closed Closed Closed Closed Closed Closed Closed Closed ClosedClosed Closed Closed",
    },
    {
      id: "1125",
      committee: "Property Manager",
      file: "https://files.prisms.in/smkaradprisms/2022-2023/Ticket/Attachment/1663152741541823219730009596035jpg/1663152861xonluf1663152741541823219730009596035.jpg",
      file_1: "",
      file_2: "",
      file_3: "",
      description: "Hi sir ",
      status: "Closed",
      priority: "High",
      title: "Hi",
      duedate: "2022-09-16 16:23:58",
      date: "2022-09-14 16:23:58",
      school: "Shikshan Mandal Karad",
      name: "VISHWAS BABU PAWAR",
      email: "null",
      contact: "Unknown",
      uid: "1024",
      s_id: "557",
      remark: "",
      staff: "RUSHIKESH",
      staffClosed_uid: "0",
      staff_id: "1051",
      parent_id: "",
      closed_tickets: "763",
      closed_by: "Yogesh dattatyraya chiwate",
      updated_on: "2022-09-14 16:26:14",
      created_on: "2022-09-14 16:24:23",
      duedate1: "16th September",
    },
    {
      userid: "1027",
      name: "SNEHAL YADU MOHITE",
      status: "Closed Closed Open Open Closed",
    },
    {
      userid: "1051",
      name: "RUSHIKESH SATISH KARMALKAR",
      status:
        "Closed Closed Open Closed Open Open Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Open Closed Closed Closed Closed Closed",
    },
    {
      userid: "1053",
      name: "ARATI AMRUT KULKARNI",
      status:
        "Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "1059",
      name: "SARITA BALASO PAWAR",
      status:
        "Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      id: "344",
      committee: "Web Developer",
      file: "https://files.prisms.in/smkaradprisms/2021-2022/Ticket/Attachment/layout-newpptx/164948037781k6yulayout new.pptx",
      file_1: "",
      file_2: "",
      file_3: "",
      description: "hjjkj",
      status: "Closed",
      priority: "High",
      title: "gjjh",
      duedate: "2022-04-11 10:29:38",
      date: "2022-04-09 10:29:38",
      school: "Shikshan Mandal Karad",
      name: "KASTURI MILIND JOSHI",
      email: "null",
      contact: "Unknown",
      uid: "1060",
      s_id: "0",
      remark: "",
      staff: "Snehal",
      staffClosed_uid: "0",
      staff_id: "518",
      parent_id: "",
      closed_tickets: "130",
      closed_by: "Snehal tushar kumthekar",
      updated_on: "2022-04-12 14:08:31",
      created_on: "2022-04-09 10:29:38",
      duedate1: "11th April",
    },
    {
      userid: "1061",
      name: "SHAILA RANJESHKUMAR BHALERAO",
      status:
        "Open Closed Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Open Closed Closed Closed Open Closed Closed Closed Closed Open Closed Open Closed Closed Closed Closed Open Open Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "1062",
      name: "PRAVINKUMAR SHIVAJI GIRIGOSAVI",
      status:
        "Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "1064",
      name: "SANTOSHKUMAR PARSHARAM GIRI",
      status:
        "Closed Open Open Closed Open Closed Closed Closed Closed Closed Closed Closed",
    },
    {
      userid: "1084",
      name: "SHRIKANT SAMBHAJI KUMBHAR",
      status: "Closed Closed",
    },
    { userid: "1089", name: "PRINCIPAL  SRKLAHOTI", status: "Closed Open" },
    {
      userid: "1096",
      name: "PRINCIPAL  SRKLAHOTI",
      status: "Open Closed Open",
    },
    { userid: "1099", name: "PRINCIPAL  NUTUN", status: "Closed Closed Open" },
    { userid: "1101", name: "PRINCIPAL  THSKSCHOOL", status: "Closed Open" },
    {
      id: "1192",
      committee: "Chief Executive Officer",
      file: "",
      file_1: "",
      file_2: "",
      file_3: "",
      description:
        "सर , मी अश्विनी विठ्ठल जाधव ,आपल्या आय टी विभागात कार्यरत आहे \r\nमाझे सासरचे नाव अश्विनी रमेश शिंगण आहे .काही pancard issu मुळे माझे ब्यांकेत अश्विनी जाधव नावाने  अकौंट ओपन होत नाही .\r\nतरी माझ्या संस्थेत दिलेल्या document मध्ये अश्विनी रमेश शिंगण नावाने बदल करावा हि नम्र विनंती.",
      status: "Open",
      priority: "Medium",
      title: "नावात बदल करणे बाबत...",
      duedate: "2022-09-29 14:10:00",
      date: "2022-09-27 14:10:00",
      school: "Shikshan Mandal Karad",
      name: "ASHWINI VITTHAL JADHAV",
      email: "null",
      contact: "Unknown",
      uid: "1108",
      s_id: "557",
      remark: "",
      staff: "YOGESH",
      staffClosed_uid: "0",
      staff_id: "512",
      parent_id: "",
      closed_tickets: "0",
      closed_by: "",
      updated_on: "2022-09-27 14:10:03",
      created_on: "2022-09-27 14:10:03",
      duedate1: "29th September",
    },
    {
      id: "1108",
      committee: "Accountant",
      file: "https://files.prisms.in/smkaradprisms/2022-2023/Ticket/Attachment/25-Stud-22-23xlsx/1663060184jgyvs425% Stud. 22-23.xlsx",
      file_1: "",
      file_2: "",
      file_3: "",
      description: "Please see the attach",
      status: "Closed",
      priority: "Medium",
      title: "25% RTE Stud. List 22-23",
      duedate: "2022-09-15 14:39:44",
      date: "2022-09-13 14:39:44",
      school: "Shikshan Mandal Karad",
      name: "Unknown",
      email: "Unknown",
      contact: "Unknown",
      uid: "3069",
      s_id: "557",
      remark: "",
      staff: "Pushpalata",
      staffClosed_uid: "0",
      staff_id: "521",
      parent_id: "",
      closed_tickets: "751",
      closed_by: "Pushpalata sunil mane",
      updated_on: "2022-09-13 14:46:40",
      created_on: "2022-09-13 14:39:45",
      duedate1: "15th September",
    },
    { userid: "4881", name: "Unknown", status: "Closed Closed" },
    { userid: "9000", name: "Unknown" },
  ]);

    useEffect(() => {
      //{"fun_name":"GetTicketCreate","sid":"557","all":1}

      function combine(arr) {
        var combined = arr.reduce(function (result, item) {
          var current = result[item.uid];

          result[item.uid] = !current
            ? item
            : {
                userid: item.uid,
                name: current.name,
                status: current.status + " " + item.status,
                date:current.date1,
              };

          return result;
        }, {});

        return Object.keys(combined).map(function (key) {
          return combined[key];
        });
      }

       let result = combine(report2);
      setReport([]);
    }, [report2]);

  return (
    <>
      <div>
        <Container>
          <Wrapper>
            <ReportBox>
              {report2 &&
                report2.map((item, index) => {
                  return (
                    <div className="h" key={index}>
                      <h3
                        style={{
                          color: "#212529",
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "700px",
                        }}
                      >
                        <BsFillPersonFill
                          style={{ marginRight: "5px", color: "#1798ef" }}
                        />
                        {index + 1}.{item.name === "Unknown" ? " " : item.name}
                      </h3>
                      {item.status
                        ? item.status.split(",").map((item, index) => {
                            return (
                              <>
                                <div className="box_model">
                                  <div
                                    className="left"
                                    style={{ width: "50%" }}
                                    key={index}
                                  >
                                    <div>
                                      {" "}
                                      <span>Total Tickets : </span>{" "}
                                      <span>
                                        {" "}
                                        {item
                                          ? (item.match(/Open/g) || []).length +
                                            (item.match(/Closed/g) || [])
                                              .length +
                                            (item.match(/Hold/g) || []).length
                                          : null}
                                      </span>
                                    </div>
                                    <div>
                                      {" "}
                                      <span>Open :</span>{" "}
                                      <span>
                                        {(item.match(/Open/g) || []).length}
                                      </span>
                                    </div>
                                    <div>
                                      {" "}
                                      <span>Closed : </span>{" "}
                                      <span>
                                        {(item.match(/Closed/g) || []).length}
                                      </span>
                                    </div>
                                    <div>
                                      {" "}
                                      <span>Hold : </span>{" "}
                                      <span>
                                        {" "}
                                        {(item.match(/Hold/g) || []).length}
                                      </span>
                                    </div>
                                  </div>

                                  <div
                                    className="right"
                                    style={{ width: "50%" }}
                                  >
                                    <Chart
                                      type="donut"
                                      width={300}
                                      height={300}
                                      series={[item]}
                                      options={{
                                        labels: ["Open", "Closed", "Hold"],
                                      }}
                                    />
                                  </div>
                                </div>
                              </>
                            );
                          })
                        : null}
                    </div>
                  );
                })}
            </ReportBox>
          </Wrapper>
        </Container>
      </div>
    </>
  );
};

export default Report;

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

  
`;

const ReportBox = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .h {
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #c0c0c0;
    border-radius: 4px;
    margin: 5px 0;

    .box_model {
      margin: 5px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .innerbox {
    width: 100%;
    display: flex;
    margin: 5px 0;
    font-size: 1rem;
    justify-content: space-around;
    border: 1px solid #2f2f32;
    align-items: center;
    font-weight: 600px;
    border-radius: 4px;
    height: 70px;

    .cmname {
      width: 18%;
    }
  }

  .box {
    padding: 30px 20px;
    display: flex;
    background-color: gray;
    justify-content: space-between;
    flex-direction: column;
    .name {
      font-size: 1.4rem;
      color: #5e5ed2;
      margin-top: 10px;
    }
    .tickets {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;
