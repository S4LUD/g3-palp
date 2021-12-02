import React, { useState, useEffect } from "react";
import Header from "./header";

const UsersResponse = () => {
  const [isData, setisData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const AbortCont = new AbortController();
      await fetch(`https://s4lud-palp-api.herokuapp.com/api/palp/data`, {
        signal: AbortCont.signal,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw Error();
          }
          return res.json();
        })
        .then((data) => {
          return setisData(data);
        })
        .catch((err) => {});
      return () => AbortCont.abort();
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counterd1 = 0;
  let counterd2 = 0;
  let counterd3 = 0;
  let counterd4 = 0;
  let counterd5 = 0;
  let counterc1 = 0;
  let counterc2 = 0;
  let counterc3 = 0;

  isData.forEach((element) => {
    //COunt Program
    if (element.program === "act") counter1++;
    if (element.program === "bscs") counter2++;
    if (element.program === "bsit") counter3++;
    //COunt Device
    if (element.osg1 === "laptop") counterd1++;
    if (element.osg1 === "desktop") counterd2++;
    if (element.osg1 === "tablet") counterd3++;
    if (element.osg1 === "mobile_phone") counterd4++;
    if (element.osg1 === "borrowed_rented") counterd5++;
    //Count Connection
    if (element.osg2 === "wifi") counterc1++;
    if (element.osg2 === "hotspot") counterc2++;
    if (element.osg2 === "data_connection") counterc3++;
  });

  return (
    <>
      <Header />
      <div className="user-response">
        <div className="res-table">
          <div className="title">Response Collected Details</div>
          <div className="program-container">
            <div className="prgrm-title">
              <div className="ttl">ACT:</div>
              <div className="act-count">{counter1}</div>
            </div>
            <div className="prgrm-title">
              <div className="ttl">BSCS:</div>
              <div className="bscs-count">{counter2}</div>
            </div>
            <div className="prgrm-title">
              <div className="ttl">BSIT:</div>
              <div className="bsit-count">{counter3}</div>
            </div>
          </div>
          <div className="device-container">
            <div className="device-wrapper">
              <div className="prgrm-title">
                <div className="ttl">Laptop:</div>
                <div className="act-count">{counterd1}</div>
              </div>
              <div className="prgrm-title">
                <div className="ttl">Desktop:</div>
                <div className="bscs-count">{counterd2}</div>
              </div>
              <div className="prgrm-title">
                <div className="ttl">Tablet:</div>
                <div className="bsit-count">{counterd3}</div>
              </div>
            </div>
          </div>
          <div className="deviced-container">
            <div className="device-wrapper">
              <div className="prgrm-title">
                <div className="ttl">Mobile Phone:</div>
                <div className="bsit-count">{counterd4}</div>
              </div>
              <div className="prgrm-title">
                <div className="ttl">Borrowed:</div>
                <div className="bsit-count">{counterd5}</div>
              </div>
            </div>
          </div>
          <div className="devicec-container">
            <div className="device-wrapper">
              <div className="prgrm-title">
                <div className="ttl">Wifi:</div>
                <div className="act-count">{counterc1}</div>
              </div>
              <div className="prgrm-title">
                <div className="ttl">Hotspot:</div>
                <div className="bscs-count">{counterc2}</div>
              </div>
              <div className="prgrm-title">
                <div className="ttl">Data:</div>
                <div className="bsit-count">{counterc3}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="res-list">
          <div className="title">Response Collected Details</div>
          {/* ----------------------------------------------- */}
          <div className="user-res-data-list">
            {isData.map((item) => {
              return (
                <div className="user-content" key={item._id}>
                  <div className="user-email user-data">
                    <div className="res-title">Email</div>
                    <div className="data email">{item.email}</div>
                  </div>
                  <div className="user-year user-data">
                    <div className="res-title">Year</div>
                    <div className="data year">{item.year_level}</div>
                  </div>
                  <div className="user-program user-data">
                    <div className="res-title">Program</div>
                    <div className="data program">{item.program}</div>
                  </div>
                  <div className="user-device user-data">
                    <div className="res-title">Device</div>
                    <div className="data device">
                      {item.osg1 === "mobile_phone"
                        ? "mobile"
                        : item.osg1 === "borrowed_rented"
                        ? "Borrowed"
                        : item.osg1}
                    </div>
                  </div>
                  <div className="user-connection user-data">
                    <div className="res-title">Connection</div>
                    <div className="data connection">
                      {item.osg2 === "data_connection" ? "data" : item.osg2}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* ----------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default UsersResponse;
