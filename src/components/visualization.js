import React, { useEffect, useState } from "react";
import { FaChevronRight, FaCogs, FaChartPie } from "react-icons/fa";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from "recharts";

const Visualization = () => {
  const [isData, setisData] = useState([]);

  const rdate = new Date();

  const Data = async () => {
    try {
      const response = await fetch(
        `https://s4lud-palp-api.herokuapp.com/api/palp/data`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": sessionStorage.getItem("token"),
          },
        }
      );
      const userDataList = await response.json();
      setisData(userDataList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let isUnmounted = false;
    if (!isUnmounted) {
      Data();
    }
    return () => {
      isUnmounted = true;
    };
  }, []);

  const CountingClusters = () => {
    const OverAllResult = () => {
      let setHighCounter = 0;
      let setGoodCounter = 0;
      const setIQ = [];
      const setIQIndex = [];
      const setIQCounter = [];
      const setSQ = [];
      const setSQIndex = [];
      const setSQCounter = [];
      const setTM = [];
      const setTMIndex = [];
      const setTMCounter = [];
      const setLE = [];
      const setLEIndex = [];
      const setLECounter = [];
      const setSF = [];
      const setSFIndex = [];
      const setSFCounter = [];
      let desktop = 0;
      let laptop = 0;
      let tablet = 0;
      let mobile_phone = 0;
      let borrowed_rented = 0;

      isData.map((data) => {
        const IQ = (data.iq1 + data.iq2 + data.iq3) / 3;
        return setIQ.push(IQ.toFixed(2));
      });

      isData.map((data) => {
        const SQ = (data.sq1 + data.sq2 + data.sq3) / 3;
        return setSQ.push(SQ.toFixed(2));
      });

      isData.map((data) => {
        const TM = (data.tm1 + data.tm2 + data.tm3) / 3;
        return setTM.push(TM.toFixed(2));
      });

      isData.map((data) => {
        const LE = (data.le1 + data.le2 + data.le3) / 3;
        return setLE.push(LE.toFixed(2));
      });

      isData.map((data) => {
        const SF = (data.sf1 + data.sf2 + data.sf3) / 3;
        return setSF.push(SF.toFixed(2));
      });

      //IQ
      setIQ.map((data) => {
        const C1 = data - 1;
        const C2 = data - 3;
        const C3 = data - 5;
        return setIQIndex.push({
          cone: Math.abs(C1.toFixed(2)),
          ctwo: Math.abs(C2.toFixed(2)),
          cthree: Math.abs(C3.toFixed(2)),
        });
      });

      setIQIndex.map((item) => {
        const tempIndex = [];
        const Min = Math.min(...[item.cone, item.ctwo, item.cthree]);
        tempIndex.push(item.cone, item.ctwo, item.cthree);
        return setIQCounter.push(tempIndex.indexOf(Min) + 1);
      });

      setIQCounter.forEach((item) => {
        if (item === 2) {
          setGoodCounter = setGoodCounter + 1;
        } else if (item === 3) {
          setHighCounter = setHighCounter + 1;
        } else if (item === 1) {
          console.log("Found 1");
        }
      });

      //SQ
      setSQ.map((data) => {
        const C1 = data - 1;
        const C2 = data - 3;
        const C3 = data - 5;
        return setSQIndex.push({
          cone: Math.abs(C1.toFixed(2)),
          ctwo: Math.abs(C2.toFixed(2)),
          cthree: Math.abs(C3.toFixed(2)),
        });
      });

      setSQIndex.map((item) => {
        const tempIndex = [];
        const Min = Math.min(...[item.cone, item.ctwo, item.cthree]);
        tempIndex.push(item.cone, item.ctwo, item.cthree);
        return setSQCounter.push(tempIndex.indexOf(Min) + 1);
      });

      setSQCounter.forEach((item) => {
        if (item === 2) {
          setGoodCounter = setGoodCounter + 1;
        } else if (item === 3) {
          setHighCounter = setHighCounter + 1;
        } else if (item === 1) {
          console.log("Found 1");
        }
      });

      //TM
      setTM.map((data) => {
        const C1 = data - 1;
        const C2 = data - 3;
        const C3 = data - 5;
        return setTMIndex.push({
          cone: Math.abs(C1.toFixed(2)),
          ctwo: Math.abs(C2.toFixed(2)),
          cthree: Math.abs(C3.toFixed(2)),
        });
      });

      setTMIndex.map((item) => {
        const tempIndex = [];
        const Min = Math.min(...[item.cone, item.ctwo, item.cthree]);
        tempIndex.push(item.cone, item.ctwo, item.cthree);
        return setTMCounter.push(tempIndex.indexOf(Min) + 1);
      });

      setTMCounter.forEach((item) => {
        if (item === 2) {
          setGoodCounter = setGoodCounter + 1;
        } else if (item === 3) {
          setHighCounter = setHighCounter + 1;
        } else if (item === 1) {
          console.log("Found 1");
        }
      });

      //LE
      setLE.map((data) => {
        const C1 = data - 1;
        const C2 = data - 3;
        const C3 = data - 5;
        return setLEIndex.push({
          cone: Math.abs(C1.toFixed(2)),
          ctwo: Math.abs(C2.toFixed(2)),
          cthree: Math.abs(C3.toFixed(2)),
        });
      });

      setLEIndex.map((item) => {
        const tempIndex = [];
        const Min = Math.min(...[item.cone, item.ctwo, item.cthree]);
        tempIndex.push(item.cone, item.ctwo, item.cthree);
        return setLECounter.push(tempIndex.indexOf(Min) + 1);
      });

      setLECounter.forEach((item) => {
        if (item === 2) {
          setGoodCounter = setGoodCounter + 1;
        } else if (item === 3) {
          setHighCounter = setHighCounter + 1;
        } else if (item === 1) {
          console.log("Found 1");
        }
      });

      //SF
      setSF.map((data) => {
        const C1 = data - 1;
        const C2 = data - 3;
        const C3 = data - 5;
        return setSFIndex.push({
          cone: Math.abs(C1.toFixed(2)),
          ctwo: Math.abs(C2.toFixed(2)),
          cthree: Math.abs(C3.toFixed(2)),
        });
      });

      setSFIndex.map((item) => {
        const tempIndex = [];
        const Min = Math.min(...[item.cone, item.ctwo, item.cthree]);
        tempIndex.push(item.cone, item.ctwo, item.cthree);
        return setSFCounter.push(tempIndex.indexOf(Min) + 1);
      });

      setSFCounter.forEach((item) => {
        if (item === 2) {
          setGoodCounter = setGoodCounter + 1;
        } else if (item === 3) {
          setHighCounter = setHighCounter + 1;
        } else if (item === 1) {
          console.log("Found 1");
        }
      });

      isData.forEach((item) => {
        if (item.osg1 === "desktop") {
          desktop = desktop + 1;
        } else if (item.osg1 === "laptop") {
          laptop = laptop + 1;
        } else if (item.osg1 === "tablet") {
          tablet = tablet + 1;
        } else if (item.osg1 === "mobile_phone") {
          mobile_phone = mobile_phone + 1;
        } else if (item.osg1 === "borrowed_rented") {
          borrowed_rented = borrowed_rented + 1;
        }
      });

      const DevicesShow = [
        { device: "Desktop", total: desktop },
        { device: "Laptop", total: laptop },
        { device: "Tablet", total: tablet },
        { device: "Mobile", total: mobile_phone },
        { device: "Borrowed", total: borrowed_rented },
      ];

      const GraphShow = [
        {
          rate: "High",
          percentage:
            (setHighCounter / (setGoodCounter + setHighCounter)) * 100,
        },
        {
          rate: "Good",
          percentage:
            (setGoodCounter / (setGoodCounter + setHighCounter)) * 100,
        },
        {
          rate: "Low",
          percentage: 0,
        },
      ];

      return (
        <div className="overall">
          <div className="title">Overall Percentage</div>
          <BarChart width={250} height={150} data={GraphShow}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="rate" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="percentage" fill="#8884d8" />
          </BarChart>
          <div className="title">Student Use Devices</div>
          <BarChart width={250} height={150} data={DevicesShow}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="device" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        </div>
      );
    };

    return (
      <div className="resultContent">
        <div className="title">
          <div className="icon">
            <FaChartPie />
          </div>
          Final Result
        </div>
        <OverAllResult />
      </div>
    );
  };

  const InformationQuality = () => {
    const [isIQ, setIQ] = useState(false);
    const [isIQC, setIQC] = useState(false);
    const [isIQC2, setIQC2] = useState(false);
    const [isIQCC, setIQCC] = useState(false);
    const [isIQCC2, setIQCC2] = useState(false);

    const setIQMean = [];
    const combineIQMean = [];
    const setIQClucster = [];
    const setIQClucster2 = [];
    const combineIQCluster = [];
    const combineIQCluster2 = [];
    let countIQClusterG = 0;
    let countIQClusterH = 0;
    let totalIQClusterG = 0;
    let totalIQClusterH = 0;
    let countIQClusterG2 = 0;
    let countIQClusterH2 = 0;
    let totalIQClusterG2 = 0;
    let totalIQClusterH2 = 0;

    //Get Mean Each Respondets
    isData.map((item) => {
      const mean = (item.iq1 + item.iq2 + item.iq3) / 3;
      return setIQMean.push({
        mean: Math.abs(mean.toFixed(2)),
      });
    });

    //Combine All Mean Into One Object
    setIQMean.map((item) => {
      return combineIQMean.push(item.mean);
    });

    //Sort Desc And Minus Mean To 3 CLusters
    combineIQMean.sort().map((item) => {
      const C1 = item - 1;
      const C2 = item - 3;
      const C3 = item - 5;
      return setIQClucster.push({
        mean: item,
        cone: Math.abs(C1.toFixed(2)),
        ctwo: Math.abs(C2.toFixed(2)),
        cthree: Math.abs(C3.toFixed(2)),
      });
    });

    //Get The Index of Nearest Cluster
    setIQClucster.map((item) => {
      const tempIndex = [];
      const Min = Math.min(...[item.cone, item.ctwo, item.cthree]);
      tempIndex.push(item.cone, item.ctwo, item.cthree);
      return combineIQCluster.push(tempIndex.indexOf(Min) + 1);
    });

    //Get First Centroid
    combineIQCluster.forEach((element, index) => {
      if (element === 2) {
        countIQClusterG = countIQClusterG + setIQClucster[index].mean;
        totalIQClusterG = totalIQClusterG + 1;
      } else if (element === 3) {
        countIQClusterH = countIQClusterH + setIQClucster[index].mean;
        totalIQClusterH = totalIQClusterH + 1;
      }
    });

    //Get Second Centroid
    combineIQMean.sort().map((item) => {
      const NEWC2 = countIQClusterG / totalIQClusterG;
      const NEWC3 = countIQClusterH / totalIQClusterH;
      const C2 = item - NEWC2;
      const C3 = item - NEWC3;
      return setIQClucster2.push({
        mean: item,
        ctwo: Math.abs(C2.toFixed(2)),
        cthree: Math.abs(C3.toFixed(2)),
      });
    });

    //Get The Index of Nearest Cluster
    setIQClucster2.map((item) => {
      const tempIndex = [];
      const Min = Math.min(...[item.ctwo, item.cthree]);
      tempIndex.push(item.ctwo, item.cthree);
      return combineIQCluster2.push(tempIndex.indexOf(Min) + 2);
    });

    //Get Second Centroid
    combineIQCluster2.forEach((element, index) => {
      if (element === 2) {
        countIQClusterG2 = countIQClusterG2 + setIQClucster[index].mean;
        totalIQClusterG2 = totalIQClusterG2 + 1;
      } else if (element === 3) {
        countIQClusterH2 = countIQClusterH2 + setIQClucster[index].mean;
        totalIQClusterH2 = totalIQClusterH2 + 1;
      }
    });

    return (
      <>
        <div
          className="target disable-select"
          onClick={() => (isIQ ? setIQ(false) : setIQ(true))}
        >
          <div className={`icon ${isIQ ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Getting INFORMATION QUALITY Mean
        </div>
        {isIQ ? (
          <div className="iqresponses">
            {isData.map((item, index) => {
              const mean = (item.iq1 + item.iq2 + item.iq3) / 3;
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Getting Mean: `}</span>
                    <span className="res">{` R1: ${item.iq1} `}</span>
                    <span className="res">{`R2: ${item.iq2} `}</span>
                    <span className="res">{`R3: ${item.iq3} `}</span>
                    <span className="rmeand">{`= Mean: ${mean.toFixed(
                      2
                    )}`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQC ? setIQC(false) : setIQC(true))}
        >
          <div className={`icon ${isIQC ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          First Clustering INFORMATION QUALITY
        </div>
        {isIQC ? (
          <div className="iqresponses">
            {setIQClucster.map((item, index) => {
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Clustering: `}</span>
                    <span className="rmeand">{` Mean: ${item.mean}`}</span>
                    <span className="res">{` Low: ${item.cone} `}</span>
                    <span className="res">{`Good: ${item.ctwo} `}</span>
                    <span className="res">{`High: ${item.cthree} `}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQCC ? setIQCC(false) : setIQCC(true))}
        >
          <div className={`icon ${isIQCC ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          First Centroid INFORMATION QUALITY
        </div>
        {isIQCC ? (
          <div className="iqresponses">
            <div className="rmean">
              <div className="rcount">1</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`Good Centroid Roll 1: ${(
                  countIQClusterG / totalIQClusterG
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">2</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`High Centroid Roll 1: ${(
                  countIQClusterH / totalIQClusterH
                ).toFixed(2)}`}</span>
              </div>
            </div>
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQC2 ? setIQC2(false) : setIQC2(true))}
        >
          <div className={`icon ${isIQC2 ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Second Clustering INFORMATION QUALITY
        </div>
        {isIQC2 ? (
          <div className="iqresponses">
            {setIQClucster2.map((item, index) => {
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Clustering: `}</span>
                    <span className="rmeand">{` Mean: ${item.mean}`}</span>
                    <span className="res">{` Good: ${item.ctwo} `}</span>
                    <span className="res">{`High: ${item.cthree} `}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQCC2 ? setIQCC2(false) : setIQCC2(true))}
        >
          <div className={`icon ${isIQCC2 ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Second Centroid INFORMATION QUALITY
        </div>
        {isIQCC2 ? (
          <div className="iqresponses">
            <div className="rmean">
              <div className="rcount">1</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`Good Centroid Roll 2: ${(
                  countIQClusterG2 / totalIQClusterG2
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">2</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`High Centroid Roll 2: ${(
                  countIQClusterH2 / totalIQClusterH2
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">3</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">
                  Centroid did not change for second Clustering
                </span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">4</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">
                  {`Final Centroid: 
                    ${(
                      (countIQClusterG2 / totalIQClusterG2 +
                        countIQClusterH2 / totalIQClusterH2) /
                      2
                    ).toFixed(2)}`}
                </span>
              </div>
            </div>
          </div>
        ) : undefined}
      </>
    );
  };

  const SystemQuality = () => {
    const [isIQ, setIQ] = useState(false);
    const [isIQC, setIQC] = useState(false);
    const [isIQC2, setIQC2] = useState(false);
    const [isIQCC, setIQCC] = useState(false);
    const [isIQCC2, setIQCC2] = useState(false);

    const setIQMean = [];
    const combineIQMean = [];
    const setIQClucster = [];
    const setIQClucster2 = [];
    const combineIQCluster = [];
    const combineIQCluster2 = [];
    let countIQClusterG = 0;
    let countIQClusterH = 0;
    let totalIQClusterG = 0;
    let totalIQClusterH = 0;
    let countIQClusterG2 = 0;
    let countIQClusterH2 = 0;
    let totalIQClusterG2 = 0;
    let totalIQClusterH2 = 0;

    //Get Mean Each Respondets
    isData.map((item) => {
      const mean = (item.sq1 + item.sq2 + item.sq3) / 3;
      return setIQMean.push({
        mean: Math.abs(mean.toFixed(2)),
      });
    });

    //Combine All Mean Into One Object
    setIQMean.map((item) => {
      return combineIQMean.push(item.mean);
    });

    //Sort Desc And Minus Mean To 3 CLusters
    combineIQMean.sort().map((item) => {
      const C1 = item - 1;
      const C2 = item - 3;
      const C3 = item - 5;
      return setIQClucster.push({
        mean: item,
        cone: Math.abs(C1.toFixed(2)),
        ctwo: Math.abs(C2.toFixed(2)),
        cthree: Math.abs(C3.toFixed(2)),
      });
    });

    //Get The Index of Nearest Cluster
    setIQClucster.map((item) => {
      const tempIndex = [];
      const Min = Math.min(...[item.cone, item.ctwo, item.cthree]);
      tempIndex.push(item.cone, item.ctwo, item.cthree);
      return combineIQCluster.push(tempIndex.indexOf(Min) + 1);
    });

    //Get First Centroid
    combineIQCluster.forEach((element, index) => {
      if (element === 2) {
        countIQClusterG = countIQClusterG + setIQClucster[index].mean;
        totalIQClusterG = totalIQClusterG + 1;
      } else if (element === 3) {
        countIQClusterH = countIQClusterH + setIQClucster[index].mean;
        totalIQClusterH = totalIQClusterH + 1;
      }
    });

    //Get Second Centroid
    combineIQMean.sort().map((item) => {
      const NEWC2 = countIQClusterG / totalIQClusterG;
      const NEWC3 = countIQClusterH / totalIQClusterH;
      const C2 = item - NEWC2;
      const C3 = item - NEWC3;
      return setIQClucster2.push({
        mean: item,
        ctwo: Math.abs(C2.toFixed(2)),
        cthree: Math.abs(C3.toFixed(2)),
      });
    });

    //Get The Index of Nearest Cluster
    setIQClucster2.map((item) => {
      const tempIndex = [];
      const Min = Math.min(...[item.ctwo, item.cthree]);
      tempIndex.push(item.ctwo, item.cthree);
      return combineIQCluster2.push(tempIndex.indexOf(Min) + 2);
    });

    //Get Second Centroid
    combineIQCluster2.forEach((element, index) => {
      if (element === 2) {
        countIQClusterG2 = countIQClusterG2 + setIQClucster[index].mean;
        totalIQClusterG2 = totalIQClusterG2 + 1;
      } else if (element === 3) {
        countIQClusterH2 = countIQClusterH2 + setIQClucster[index].mean;
        totalIQClusterH2 = totalIQClusterH2 + 1;
      }
    });

    return (
      <>
        <div
          className="target disable-select"
          onClick={() => (isIQ ? setIQ(false) : setIQ(true))}
        >
          <div className={`icon ${isIQ ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Getting SYSTEM QUALITY Mean
        </div>
        {isIQ ? (
          <div className="iqresponses">
            {isData.map((item, index) => {
              const mean = (item.iq1 + item.iq2 + item.iq3) / 3;
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Getting Mean: `}</span>
                    <span className="res">{` R1: ${item.iq1} `}</span>
                    <span className="res">{`R2: ${item.iq2} `}</span>
                    <span className="res">{`R3: ${item.iq3} `}</span>
                    <span className="rmeand">{`= Mean: ${mean.toFixed(
                      2
                    )}`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQC ? setIQC(false) : setIQC(true))}
        >
          <div className={`icon ${isIQC ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          First Clustering SYSTEM QUALITY
        </div>
        {isIQC ? (
          <div className="iqresponses">
            {setIQClucster.map((item, index) => {
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Clustering: `}</span>
                    <span className="rmeand">{` Mean: ${item.mean}`}</span>
                    <span className="res">{` Low: ${item.cone} `}</span>
                    <span className="res">{`Good: ${item.ctwo} `}</span>
                    <span className="res">{`High: ${item.cthree} `}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQCC ? setIQCC(false) : setIQCC(true))}
        >
          <div className={`icon ${isIQCC ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          First Centroid SYSTEM QUALITY
        </div>
        {isIQCC ? (
          <div className="iqresponses">
            <div className="rmean">
              <div className="rcount">1</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`Good Centroid Roll 1: ${(
                  countIQClusterG / totalIQClusterG
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">2</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`High Centroid Roll 1: ${(
                  countIQClusterH / totalIQClusterH
                ).toFixed(2)}`}</span>
              </div>
            </div>
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQC2 ? setIQC2(false) : setIQC2(true))}
        >
          <div className={`icon ${isIQC2 ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Second Clustering SYSTEM QUALITY
        </div>
        {isIQC2 ? (
          <div className="iqresponses">
            {setIQClucster2.map((item, index) => {
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Clustering: `}</span>
                    <span className="rmeand">{` Mean: ${item.mean}`}</span>
                    <span className="res">{` Good: ${item.ctwo} `}</span>
                    <span className="res">{`High: ${item.cthree} `}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQCC2 ? setIQCC2(false) : setIQCC2(true))}
        >
          <div className={`icon ${isIQCC2 ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Second Centroid SYSTEM QUALITY
        </div>
        {isIQCC2 ? (
          <div className="iqresponses">
            <div className="rmean">
              <div className="rcount">1</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`Good Centroid Roll 2: ${(
                  countIQClusterG2 / totalIQClusterG2
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">2</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`High Centroid Roll 2: ${(
                  countIQClusterH2 / totalIQClusterH2
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">3</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">
                  Centroid did not change for second Clustering
                </span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">4</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">
                  {`Final Centroid: 
                    ${(
                      (countIQClusterG2 / totalIQClusterG2 +
                        countIQClusterH2 / totalIQClusterH2) /
                      2
                    ).toFixed(2)}`}
                </span>
              </div>
            </div>
          </div>
        ) : undefined}
      </>
    );
  };

  const TeachingMethod = () => {
    const [isIQ, setIQ] = useState(false);
    const [isIQC, setIQC] = useState(false);
    const [isIQC2, setIQC2] = useState(false);
    const [isIQCC, setIQCC] = useState(false);
    const [isIQCC2, setIQCC2] = useState(false);

    const setIQMean = [];
    const combineIQMean = [];
    const setIQClucster = [];
    const setIQClucster2 = [];
    const combineIQCluster = [];
    const combineIQCluster2 = [];
    let countIQClusterG = 0;
    let countIQClusterH = 0;
    let totalIQClusterG = 0;
    let totalIQClusterH = 0;
    let countIQClusterG2 = 0;
    let countIQClusterH2 = 0;
    let totalIQClusterG2 = 0;
    let totalIQClusterH2 = 0;

    //Get Mean Each Respondets
    isData.map((item) => {
      const mean = (item.tm1 + item.tm2 + item.tm3) / 3;
      return setIQMean.push({
        mean: Math.abs(mean.toFixed(2)),
      });
    });

    //Combine All Mean Into One Object
    setIQMean.map((item) => {
      return combineIQMean.push(item.mean);
    });

    //Sort Desc And Minus Mean To 3 CLusters
    combineIQMean.sort().map((item) => {
      const C1 = item - 1;
      const C2 = item - 3;
      const C3 = item - 5;
      return setIQClucster.push({
        mean: item,
        cone: Math.abs(C1.toFixed(2)),
        ctwo: Math.abs(C2.toFixed(2)),
        cthree: Math.abs(C3.toFixed(2)),
      });
    });

    //Get The Index of Nearest Cluster
    setIQClucster.map((item) => {
      const tempIndex = [];
      const Min = Math.min(...[item.cone, item.ctwo, item.cthree]);
      tempIndex.push(item.cone, item.ctwo, item.cthree);
      return combineIQCluster.push(tempIndex.indexOf(Min) + 1);
    });

    //Get First Centroid
    combineIQCluster.forEach((element, index) => {
      if (element === 2) {
        countIQClusterG = countIQClusterG + setIQClucster[index].mean;
        totalIQClusterG = totalIQClusterG + 1;
      } else if (element === 3) {
        countIQClusterH = countIQClusterH + setIQClucster[index].mean;
        totalIQClusterH = totalIQClusterH + 1;
      }
    });

    //Get Second Centroid
    combineIQMean.sort().map((item) => {
      const NEWC2 = countIQClusterG / totalIQClusterG;
      const NEWC3 = countIQClusterH / totalIQClusterH;
      const C2 = item - NEWC2;
      const C3 = item - NEWC3;
      return setIQClucster2.push({
        mean: item,
        ctwo: Math.abs(C2.toFixed(2)),
        cthree: Math.abs(C3.toFixed(2)),
      });
    });

    //Get The Index of Nearest Cluster
    setIQClucster2.map((item) => {
      const tempIndex = [];
      const Min = Math.min(...[item.ctwo, item.cthree]);
      tempIndex.push(item.ctwo, item.cthree);
      return combineIQCluster2.push(tempIndex.indexOf(Min) + 2);
    });

    //Get Second Centroid
    combineIQCluster2.forEach((element, index) => {
      if (element === 2) {
        countIQClusterG2 = countIQClusterG2 + setIQClucster[index].mean;
        totalIQClusterG2 = totalIQClusterG2 + 1;
      } else if (element === 3) {
        countIQClusterH2 = countIQClusterH2 + setIQClucster[index].mean;
        totalIQClusterH2 = totalIQClusterH2 + 1;
      }
    });

    return (
      <>
        <div
          className="target disable-select"
          onClick={() => (isIQ ? setIQ(false) : setIQ(true))}
        >
          <div className={`icon ${isIQ ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Getting TEACHING METHOD Mean
        </div>
        {isIQ ? (
          <div className="iqresponses">
            {isData.map((item, index) => {
              const mean = (item.iq1 + item.iq2 + item.iq3) / 3;
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Getting Mean: `}</span>
                    <span className="res">{` R1: ${item.iq1} `}</span>
                    <span className="res">{`R2: ${item.iq2} `}</span>
                    <span className="res">{`R3: ${item.iq3} `}</span>
                    <span className="rmeand">{`= Mean: ${mean.toFixed(
                      2
                    )}`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQC ? setIQC(false) : setIQC(true))}
        >
          <div className={`icon ${isIQC ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          First Clustering TEACHING METHOD
        </div>
        {isIQC ? (
          <div className="iqresponses">
            {setIQClucster.map((item, index) => {
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Clustering: `}</span>
                    <span className="rmeand">{` Mean: ${item.mean}`}</span>
                    <span className="res">{` Low: ${item.cone} `}</span>
                    <span className="res">{`Good: ${item.ctwo} `}</span>
                    <span className="res">{`High: ${item.cthree} `}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQCC ? setIQCC(false) : setIQCC(true))}
        >
          <div className={`icon ${isIQCC ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          First Centroid TEACHING METHOD
        </div>
        {isIQCC ? (
          <div className="iqresponses">
            <div className="rmean">
              <div className="rcount">1</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`Good Centroid Roll 1: ${(
                  countIQClusterG / totalIQClusterG
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">2</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`High Centroid Roll 1: ${(
                  countIQClusterH / totalIQClusterH
                ).toFixed(2)}`}</span>
              </div>
            </div>
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQC2 ? setIQC2(false) : setIQC2(true))}
        >
          <div className={`icon ${isIQC2 ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Second Clustering TEACHING METHOD
        </div>
        {isIQC2 ? (
          <div className="iqresponses">
            {setIQClucster2.map((item, index) => {
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Clustering: `}</span>
                    <span className="rmeand">{` Mean: ${item.mean}`}</span>
                    <span className="res">{` Good: ${item.ctwo} `}</span>
                    <span className="res">{`High: ${item.cthree} `}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQCC2 ? setIQCC2(false) : setIQCC2(true))}
        >
          <div className={`icon ${isIQCC2 ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Second Centroid TEACHING METHOD
        </div>
        {isIQCC2 ? (
          <div className="iqresponses">
            <div className="rmean">
              <div className="rcount">1</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`Good Centroid Roll 2: ${(
                  countIQClusterG2 / totalIQClusterG2
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">2</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`High Centroid Roll 2: ${(
                  countIQClusterH2 / totalIQClusterH2
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">3</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">
                  Centroid did not change for second Clustering
                </span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">4</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">
                  {`Final Centroid: 
                    ${(
                      (countIQClusterG2 / totalIQClusterG2 +
                        countIQClusterH2 / totalIQClusterH2) /
                      2
                    ).toFixed(2)}`}
                </span>
              </div>
            </div>
          </div>
        ) : undefined}
      </>
    );
  };

  const LearningEnvirontment = () => {
    const [isIQ, setIQ] = useState(false);
    const [isIQC, setIQC] = useState(false);
    const [isIQC2, setIQC2] = useState(false);
    const [isIQCC, setIQCC] = useState(false);
    const [isIQCC2, setIQCC2] = useState(false);

    const setIQMean = [];
    const combineIQMean = [];
    const setIQClucster = [];
    const setIQClucster2 = [];
    const combineIQCluster = [];
    const combineIQCluster2 = [];
    let countIQClusterG = 0;
    let countIQClusterH = 0;
    let totalIQClusterG = 0;
    let totalIQClusterH = 0;
    let countIQClusterG2 = 0;
    let countIQClusterH2 = 0;
    let totalIQClusterG2 = 0;
    let totalIQClusterH2 = 0;

    //Get Mean Each Respondets
    isData.map((item) => {
      const mean = (item.le1 + item.le2 + item.le3) / 3;
      return setIQMean.push({
        mean: Math.abs(mean.toFixed(2)),
      });
    });

    //Combine All Mean Into One Object
    setIQMean.map((item) => {
      return combineIQMean.push(item.mean);
    });

    //Sort Desc And Minus Mean To 3 CLusters
    combineIQMean.sort().map((item) => {
      const C1 = item - 1;
      const C2 = item - 3;
      const C3 = item - 5;
      return setIQClucster.push({
        mean: item,
        cone: Math.abs(C1.toFixed(2)),
        ctwo: Math.abs(C2.toFixed(2)),
        cthree: Math.abs(C3.toFixed(2)),
      });
    });

    //Get The Index of Nearest Cluster
    setIQClucster.map((item) => {
      const tempIndex = [];
      const Min = Math.min(...[item.cone, item.ctwo, item.cthree]);
      tempIndex.push(item.cone, item.ctwo, item.cthree);
      return combineIQCluster.push(tempIndex.indexOf(Min) + 1);
    });

    //Get First Centroid
    combineIQCluster.forEach((element, index) => {
      if (element === 2) {
        countIQClusterG = countIQClusterG + setIQClucster[index].mean;
        totalIQClusterG = totalIQClusterG + 1;
      } else if (element === 3) {
        countIQClusterH = countIQClusterH + setIQClucster[index].mean;
        totalIQClusterH = totalIQClusterH + 1;
      }
    });

    //Get Second Centroid
    combineIQMean.sort().map((item) => {
      const NEWC2 = countIQClusterG / totalIQClusterG;
      const NEWC3 = countIQClusterH / totalIQClusterH;
      const C2 = item - NEWC2;
      const C3 = item - NEWC3;
      return setIQClucster2.push({
        mean: item,
        ctwo: Math.abs(C2.toFixed(2)),
        cthree: Math.abs(C3.toFixed(2)),
      });
    });

    //Get The Index of Nearest Cluster
    setIQClucster2.map((item) => {
      const tempIndex = [];
      const Min = Math.min(...[item.ctwo, item.cthree]);
      tempIndex.push(item.ctwo, item.cthree);
      return combineIQCluster2.push(tempIndex.indexOf(Min) + 2);
    });

    //Get Second Centroid
    combineIQCluster2.forEach((element, index) => {
      if (element === 2) {
        countIQClusterG2 = countIQClusterG2 + setIQClucster[index].mean;
        totalIQClusterG2 = totalIQClusterG2 + 1;
      } else if (element === 3) {
        countIQClusterH2 = countIQClusterH2 + setIQClucster[index].mean;
        totalIQClusterH2 = totalIQClusterH2 + 1;
      }
    });

    return (
      <>
        <div
          className="target disable-select"
          onClick={() => (isIQ ? setIQ(false) : setIQ(true))}
        >
          <div className={`icon ${isIQ ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Getting LEARNING ENVIRONMENT Mean
        </div>
        {isIQ ? (
          <div className="iqresponses">
            {isData.map((item, index) => {
              const mean = (item.iq1 + item.iq2 + item.iq3) / 3;
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Getting Mean: `}</span>
                    <span className="res">{` R1: ${item.iq1} `}</span>
                    <span className="res">{`R2: ${item.iq2} `}</span>
                    <span className="res">{`R3: ${item.iq3} `}</span>
                    <span className="rmeand">{`= Mean: ${mean.toFixed(
                      2
                    )}`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQC ? setIQC(false) : setIQC(true))}
        >
          <div className={`icon ${isIQC ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          First Clustering LEARNING ENVIRONMENT
        </div>
        {isIQC ? (
          <div className="iqresponses">
            {setIQClucster.map((item, index) => {
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Clustering: `}</span>
                    <span className="rmeand">{` Mean: ${item.mean}`}</span>
                    <span className="res">{` Low: ${item.cone} `}</span>
                    <span className="res">{`Good: ${item.ctwo} `}</span>
                    <span className="res">{`High: ${item.cthree} `}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQCC ? setIQCC(false) : setIQCC(true))}
        >
          <div className={`icon ${isIQCC ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          First Centroid LEARNING ENVIRONMENT
        </div>
        {isIQCC ? (
          <div className="iqresponses">
            <div className="rmean">
              <div className="rcount">1</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`Good Centroid Roll 1: ${(
                  countIQClusterG / totalIQClusterG
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">2</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`High Centroid Roll 1: ${(
                  countIQClusterH / totalIQClusterH
                ).toFixed(2)}`}</span>
              </div>
            </div>
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQC2 ? setIQC2(false) : setIQC2(true))}
        >
          <div className={`icon ${isIQC2 ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Second Clustering LEARNING ENVIRONMENT
        </div>
        {isIQC2 ? (
          <div className="iqresponses">
            {setIQClucster2.map((item, index) => {
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Clustering: `}</span>
                    <span className="rmeand">{` Mean: ${item.mean}`}</span>
                    <span className="res">{` Good: ${item.ctwo} `}</span>
                    <span className="res">{`High: ${item.cthree} `}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQCC2 ? setIQCC2(false) : setIQCC2(true))}
        >
          <div className={`icon ${isIQCC2 ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Second Centroid LEARNING ENVIRONMENT
        </div>
        {isIQCC2 ? (
          <div className="iqresponses">
            <div className="rmean">
              <div className="rcount">1</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`Good Centroid Roll 2: ${(
                  countIQClusterG2 / totalIQClusterG2
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">2</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`High Centroid Roll 2: ${(
                  countIQClusterH2 / totalIQClusterH2
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">3</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">
                  Centroid did not change for second Clustering
                </span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">4</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">
                  {`Final Centroid: 
                    ${(
                      (countIQClusterG2 / totalIQClusterG2 +
                        countIQClusterH2 / totalIQClusterH2) /
                      2
                    ).toFixed(2)}`}
                </span>
              </div>
            </div>
          </div>
        ) : undefined}
      </>
    );
  };

  const Satisfactory = () => {
    const [isIQ, setIQ] = useState(false);
    const [isIQC, setIQC] = useState(false);
    const [isIQC2, setIQC2] = useState(false);
    const [isIQCC, setIQCC] = useState(false);
    const [isIQCC2, setIQCC2] = useState(false);

    const setIQMean = [];
    const combineIQMean = [];
    const setIQClucster = [];
    const setIQClucster2 = [];
    const combineIQCluster = [];
    const combineIQCluster2 = [];
    let countIQClusterG = 0;
    let countIQClusterH = 0;
    let totalIQClusterG = 0;
    let totalIQClusterH = 0;
    let countIQClusterG2 = 0;
    let countIQClusterH2 = 0;
    let totalIQClusterG2 = 0;
    let totalIQClusterH2 = 0;

    //Get Mean Each Respondets
    isData.map((item) => {
      const mean = (item.sf1 + item.sf2 + item.sf3) / 3;
      return setIQMean.push({
        mean: Math.abs(mean.toFixed(2)),
      });
    });

    //Combine All Mean Into One Object
    setIQMean.map((item) => {
      return combineIQMean.push(item.mean);
    });

    //Sort Desc And Minus Mean To 3 CLusters
    combineIQMean.sort().map((item) => {
      const C1 = item - 1;
      const C2 = item - 3;
      const C3 = item - 5;
      return setIQClucster.push({
        mean: item,
        cone: Math.abs(C1.toFixed(2)),
        ctwo: Math.abs(C2.toFixed(2)),
        cthree: Math.abs(C3.toFixed(2)),
      });
    });

    //Get The Index of Nearest Cluster
    setIQClucster.map((item) => {
      const tempIndex = [];
      const Min = Math.min(...[item.cone, item.ctwo, item.cthree]);
      tempIndex.push(item.cone, item.ctwo, item.cthree);
      return combineIQCluster.push(tempIndex.indexOf(Min) + 1);
    });

    //Get First Centroid
    combineIQCluster.forEach((element, index) => {
      if (element === 2) {
        countIQClusterG = countIQClusterG + setIQClucster[index].mean;
        totalIQClusterG = totalIQClusterG + 1;
      } else if (element === 3) {
        countIQClusterH = countIQClusterH + setIQClucster[index].mean;
        totalIQClusterH = totalIQClusterH + 1;
      }
    });

    //Get Second Centroid
    combineIQMean.sort().map((item) => {
      const NEWC2 = countIQClusterG / totalIQClusterG;
      const NEWC3 = countIQClusterH / totalIQClusterH;
      const C2 = item - NEWC2;
      const C3 = item - NEWC3;
      return setIQClucster2.push({
        mean: item,
        ctwo: Math.abs(C2.toFixed(2)),
        cthree: Math.abs(C3.toFixed(2)),
      });
    });

    //Get The Index of Nearest Cluster
    setIQClucster2.map((item) => {
      const tempIndex = [];
      const Min = Math.min(...[item.ctwo, item.cthree]);
      tempIndex.push(item.ctwo, item.cthree);
      return combineIQCluster2.push(tempIndex.indexOf(Min) + 2);
    });

    //Get Second Centroid
    combineIQCluster2.forEach((element, index) => {
      if (element === 2) {
        countIQClusterG2 = countIQClusterG2 + setIQClucster[index].mean;
        totalIQClusterG2 = totalIQClusterG2 + 1;
      } else if (element === 3) {
        countIQClusterH2 = countIQClusterH2 + setIQClucster[index].mean;
        totalIQClusterH2 = totalIQClusterH2 + 1;
      }
    });

    return (
      <>
        <div
          className="target disable-select"
          onClick={() => (isIQ ? setIQ(false) : setIQ(true))}
        >
          <div className={`icon ${isIQ ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Getting SATISFACTORY Mean
        </div>
        {isIQ ? (
          <div className="iqresponses">
            {isData.map((item, index) => {
              const mean = (item.iq1 + item.iq2 + item.iq3) / 3;
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Getting Mean: `}</span>
                    <span className="res">{` R1: ${item.iq1} `}</span>
                    <span className="res">{`R2: ${item.iq2} `}</span>
                    <span className="res">{`R3: ${item.iq3} `}</span>
                    <span className="rmeand">{`= Mean: ${mean.toFixed(
                      2
                    )}`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQC ? setIQC(false) : setIQC(true))}
        >
          <div className={`icon ${isIQC ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          First Clustering SATISFACTORY
        </div>
        {isIQC ? (
          <div className="iqresponses">
            {setIQClucster.map((item, index) => {
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Clustering: `}</span>
                    <span className="rmeand">{` Mean: ${item.mean}`}</span>
                    <span className="res">{` Low: ${item.cone} `}</span>
                    <span className="res">{`Good: ${item.ctwo} `}</span>
                    <span className="res">{`High: ${item.cthree} `}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQCC ? setIQCC(false) : setIQCC(true))}
        >
          <div className={`icon ${isIQCC ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          First Centroid SATISFACTORY
        </div>
        {isIQCC ? (
          <div className="iqresponses">
            <div className="rmean">
              <div className="rcount">1</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`Good Centroid Roll 1: ${(
                  countIQClusterG / totalIQClusterG
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">2</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`High Centroid Roll 1: ${(
                  countIQClusterH / totalIQClusterH
                ).toFixed(2)}`}</span>
              </div>
            </div>
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQC2 ? setIQC2(false) : setIQC2(true))}
        >
          <div className={`icon ${isIQC2 ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Second Clustering SATISFACTORY
        </div>
        {isIQC2 ? (
          <div className="iqresponses">
            {setIQClucster2.map((item, index) => {
              return (
                <div key={index} className="rmean">
                  <div className="rcount">{index + 1}</div>
                  <div className="rdate">{rdate.toUTCString()}</div>
                  <div className="rmeanr">
                    <span className="rindex">{`Clustering: `}</span>
                    <span className="rmeand">{` Mean: ${item.mean}`}</span>
                    <span className="res">{` Good: ${item.ctwo} `}</span>
                    <span className="res">{`High: ${item.cthree} `}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : undefined}
        <div
          className="target newtarget disable-select"
          onClick={() => (isIQCC2 ? setIQCC2(false) : setIQCC2(true))}
        >
          <div className={`icon ${isIQCC2 ? "animate" : "animateClose"}`}>
            <FaChevronRight color="#626970" />
          </div>
          Second Centroid SATISFACTORY
        </div>
        {isIQCC2 ? (
          <div className="iqresponses">
            <div className="rmean">
              <div className="rcount">1</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`Good Centroid Roll 2: ${(
                  countIQClusterG2 / totalIQClusterG2
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">2</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">{`High Centroid Roll 2: ${(
                  countIQClusterH2 / totalIQClusterH2
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">3</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">
                  Centroid did not change for second Clustering
                </span>
              </div>
            </div>
            <div className="rmean">
              <div className="rcount">4</div>
              <div className="rdate">{rdate.toUTCString()}</div>
              <div className="rmeanr">
                <span className="rindex">
                  {`Final Centroid: 
                    ${(
                      (countIQClusterG2 / totalIQClusterG2 +
                        countIQClusterH2 / totalIQClusterH2) /
                      2
                    ).toFixed(2)}`}
                </span>
              </div>
            </div>
          </div>
        ) : undefined}
      </>
    );
  };

  return (
    <>
      <div className="gridStyle">
        <CountingClusters />
        <div className="visual-container">
          <div className="title">
            <FaCogs size={20} />
            <span className="tLogs">Process Logs</span>
          </div>
          <div className="prcss-lgs">
            <InformationQuality />
            <div className="seperator" />
            <SystemQuality />
            <div className="seperator" />
            <TeachingMethod />
            <div className="seperator" />
            <LearningEnvirontment />
            <div className="seperator" />
            <Satisfactory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Visualization;
