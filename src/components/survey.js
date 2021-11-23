import React, { useState, useRef } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";

const SurveyForm = () => {
  const [Page, setPage] = useState(false);
  const [isDone, setisDone] = useState(false);
  const [Data, setData] = useState([]);

  const DoneSurvey = () => {
    return (
      <div className="done">
        <div className="title">Thank you for participating to our survey.</div>
        <Button
          onClick={() => {
            setPage(false);
            setisDone(false);
          }}
          variant="contained"
        >
          Take Survey Again
        </Button>
        <div className="desk">
          You can close this page if your not taking the survey again.
        </div>
      </div>
    );
  };

  const FirstPage = () => {
    const [YearLevel, setYearLevel] = useState("");
    const [Section, setSection] = useState("");
    const [Email, setEmail] = useState("");
    const [Program, setProgram] = useState("");
    const [error, setError] = useState(false);
    const [helperText1, setHelperText1] = useState("");
    const [helperText2, setHelperText2] = useState("");
    const [helperText3, setHelperText3] = useState("");
    const [helperText4, setHelperText4] = useState("");
    const goToYearLevel = useRef();
    const goToSection = useRef();
    const goToEmail = useRef();
    const goToProgram = useRef();

    const clearValue = () => {
      setYearLevel("");
      setSection("");
      setEmail("");
      setProgram("");
    };

    const FG = {
      year_level: YearLevel,
      section: Section,
      email: Email,
      program: Program,
    };

    const handleRadioChange1 = (event) => {
      setYearLevel(event.target.value);
      setHelperText1("");
      setError(false);
    };

    const handleRadioChange2 = (event) => {
      setSection(event.target.value);
      setHelperText2("");
      setError(false);
    };

    const handleRadioChange3 = (event) => {
      setEmail(event.target.value);
      setHelperText3("");
      setError(false);
    };

    const handleRadioChange4 = (event) => {
      setProgram(event.target.value);
      setHelperText4("");
      setError(false);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      if (YearLevel === "") {
        setHelperText1("Please select your Year Level.");
        setError(true);
        goToYearLevel.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (Section === "") {
        setHelperText2("Please type your Section.");
        setError(true);
        goToSection.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (Email === "") {
        setHelperText3("Please type your Email.");
        setError(true);
        goToEmail.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (Program === "") {
        setHelperText4("Please select your Program.");
        setError(true);
        goToProgram.current.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        setError(false);
        setData(FG);
        setPage(true);
      }
    };

    return (
      <div className="survey-container">
        <div className="survey-wrapper">
          <div className="heading">
            <div className="colorheader" />
            <div className="content-wrapper">
              <div className="title">Research Survey</div>
              <div className="content">
                <span className="c-one">
                  We are 4th year BSCS students conducting research entitled
                  'Predictive Analysis of Learning Performance in a Blended
                  Learning Environment of CITCS Student using Data Mining
                  algorithm' as a part of the requirements of our subject Thesis
                  Writing 2.
                </span>
                <span>
                  We are kindly asking your short time to answer research
                  question. Please answer honestly. This survey rest assured
                  confidential. Thankyou!
                </span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" error={error}>
              <div className="forms" ref={goToYearLevel}>
                <div className="form-content">
                  <div className="question">
                    Year Level: <span className="required">*</span>
                  </div>
                  <RadioGroup value={YearLevel} onChange={handleRadioChange1}>
                    <div className="content">
                      <Radio value={1} />
                      <span>1st Year</span>
                    </div>
                    <div className="content">
                      <Radio value={2} />
                      <span>2nd Year</span>
                    </div>
                    <div className="content">
                      <Radio value={3} />
                      <span>3rd Year</span>
                    </div>
                    <div className="content">
                      <Radio value={4} />
                      <span>4th year</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText1}</FormHelperText>
                </div>
              </div>
              <div className="forms" ref={goToSection}>
                <div className="form-content">
                  <div className="question">
                    Section: <span className="required">*</span>
                  </div>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { width: "20ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      variant="standard"
                      value={Section}
                      onChange={handleRadioChange2}
                    />
                  </Box>
                  <FormHelperText>{helperText2}</FormHelperText>
                </div>
              </div>
              <div className="forms" ref={goToEmail}>
                <div className="form-content">
                  <div className="question">
                    Email Address: <span className="required">*</span>
                  </div>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { width: "20ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      variant="standard"
                      value={Email}
                      onChange={handleRadioChange3}
                    />
                  </Box>
                  <FormHelperText>{helperText3}</FormHelperText>
                </div>
              </div>
              <div className="forms" ref={goToProgram}>
                <div className="form-content">
                  <div className="question">
                    Program: <span className="required">*</span>
                  </div>
                  <RadioGroup value={Program} onChange={handleRadioChange4}>
                    <div className="content">
                      <Radio value="act" />
                      <span>ACT</span>
                    </div>
                    <div className="content">
                      <Radio value="bsit" />
                      <span>BSIT</span>
                    </div>
                    <div className="content">
                      <Radio value="bscs" />
                      <span>BSCS</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText4}</FormHelperText>
                </div>
              </div>
              <div className="btnControl">
                <Button variant="contained" color="primary" type="submit">
                  Next
                </Button>
                <Button onClick={clearValue} variant="text">
                  Clear form
                </Button>
              </div>
            </FormControl>
          </form>
        </div>
      </div>
    );
  };

  const SecondPage = () => {
    const [OSG1, setOSG1] = useState("");
    const [OSG2, setOSG2] = useState("");
    const [IQ1, setIQ1] = useState("");
    const [IQ2, setIQ2] = useState("");
    const [IQ3, setIQ3] = useState("");
    const [SQ1, setSQ1] = useState("");
    const [SQ2, setSQ2] = useState("");
    const [SQ3, setSQ3] = useState("");
    const [TM1, setTM1] = useState("");
    const [TM2, setTM2] = useState("");
    const [TM3, setTM3] = useState("");
    const [LE1, setLE1] = useState("");
    const [LE2, setLE2] = useState("");
    const [LE3, setLE3] = useState("");
    const [SF1, setSF1] = useState("");
    const [SF2, setSF2] = useState("");
    const [SF3, setSF3] = useState("");

    const clearData = () => {
      setOSG1("");
      setOSG2("");
      setIQ1("");
      setIQ2("");
      setIQ3("");
      setSQ1("");
      setSQ2("");
      setSQ3("");
      setTM1("");
      setTM2("");
      setTM3("");
      setLE1("");
      setLE2("");
      setLE3("");
      setSF1("");
      setSF2("");
      setSF3("");
    };

    const [error, setError] = useState(false);
    const [helperText1, setHelperText1] = useState("");
    const [helperText2, setHelperText2] = useState("");
    const [helperText3, setHelperText3] = useState("");
    const [helperText4, setHelperText4] = useState("");
    const [helperText5, setHelperText5] = useState("");
    const [helperText6, setHelperText6] = useState("");
    const [helperText7, setHelperText7] = useState("");
    const [helperText8, setHelperText8] = useState("");
    const [helperText9, setHelperText9] = useState("");
    const [helperText10, setHelperText10] = useState("");
    const [helperText11, setHelperText11] = useState("");
    const [helperText12, setHelperText12] = useState("");
    const [helperText13, setHelperText13] = useState("");
    const [helperText14, setHelperText14] = useState("");
    const [helperText15, setHelperText15] = useState("");
    const [helperText16, setHelperText16] = useState("");
    const [helperText17, setHelperText17] = useState("");
    const goToOSG1 = useRef();
    const goToOSG2 = useRef();
    const goToIQ1 = useRef();
    const goToIQ2 = useRef();
    const goToIQ3 = useRef();
    const goToSQ1 = useRef();
    const goToSQ2 = useRef();
    const goToSQ3 = useRef();
    const goToTM1 = useRef();
    const goToTM2 = useRef();
    const goToTM3 = useRef();
    const goToLE1 = useRef();
    const goToLE2 = useRef();
    const goToLE3 = useRef();
    const goToSF1 = useRef();
    const goToSF2 = useRef();
    const goToSF3 = useRef();

    const SP = {
      osg1: OSG1,
      osg2: OSG2,
      iq1: IQ1,
      iq2: IQ2,
      iq3: IQ3,
      sq1: SQ1,
      sq2: SQ2,
      sq3: SQ3,
      tm1: TM1,
      tm2: TM2,
      tm3: TM3,
      le1: LE1,
      le2: LE2,
      le3: LE3,
      sf1: SF1,
      sf2: SF2,
      sf3: SF3,
    };

    const handleRadioChange1 = (event) => {
      setOSG1(event.target.value);
      setHelperText1("");
      setError(false);
    };

    const handleRadioChange2 = (event) => {
      setOSG2(event.target.value);
      setHelperText2("");
      setError(false);
    };

    const handleRadioChange3 = (event) => {
      setIQ1(event.target.value);
      setHelperText3("");
      setError(false);
    };

    const handleRadioChange4 = (event) => {
      setIQ2(event.target.value);
      setHelperText4("");
      setError(false);
    };

    const handleRadioChange5 = (event) => {
      setIQ3(event.target.value);
      setHelperText5("");
      setError(false);
    };

    const handleRadioChange6 = (event) => {
      setSQ1(event.target.value);
      setHelperText6("");
      setError(false);
    };

    const handleRadioChange7 = (event) => {
      setSQ2(event.target.value);
      setHelperText7("");
      setError(false);
    };

    const handleRadioChange8 = (event) => {
      setSQ3(event.target.value);
      setHelperText8("");
      setError(false);
    };
    const handleRadioChange9 = (event) => {
      setTM1(event.target.value);
      setHelperText9("");
      setError(false);
    };

    const handleRadioChange10 = (event) => {
      setTM2(event.target.value);
      setHelperText10("");
      setError(false);
    };

    const handleRadioChange11 = (event) => {
      setTM3(event.target.value);
      setHelperText11("");
      setError(false);
    };

    const handleRadioChange12 = (event) => {
      setLE1(event.target.value);
      setHelperText12("");
      setError(false);
    };
    const handleRadioChange13 = (event) => {
      setLE2(event.target.value);
      setHelperText13("");
      setError(false);
    };

    const handleRadioChange14 = (event) => {
      setLE3(event.target.value);
      setHelperText14("");
      setError(false);
    };

    const handleRadioChange15 = (event) => {
      setSF1(event.target.value);
      setHelperText15("");
      setError(false);
    };

    const handleRadioChange16 = (event) => {
      setSF2(event.target.value);
      setHelperText16("");
      setError(false);
    };

    const handleRadioChange17 = (event) => {
      setSF3(event.target.value);
      setHelperText17("");
      setError(false);
    };

    const mergeData = async () => {
      const finalData = { ...Data, ...SP };

      if (finalData) {
        const ResponseSV = await fetch(
          `https://s4lud-palp-api.herokuapp.com/api/palp/survey`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              year_level: finalData.year_level,
              section: finalData.section,
              email: finalData.email,
              program: finalData.program,
              osg1: finalData.osg1,
              osg2: finalData.osg2,
              iq1: finalData.iq1,
              iq2: finalData.iq2,
              iq3: finalData.iq3,
              sq1: finalData.sq1,
              sq2: finalData.sq2,
              sq3: finalData.sq3,
              tm1: finalData.tm1,
              tm2: finalData.tm2,
              tm3: finalData.tm3,
              le1: finalData.le1,
              le2: finalData.le2,
              le3: finalData.le3,
              sf1: finalData.sf1,
              sf2: finalData.sf2,
              sf3: finalData.sf3,
            }),
          }
        );
        try {
          const saveMove = await ResponseSV.json();
          if (saveMove) {
            setisDone(true);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      if (OSG1 === "") {
        setHelperText1("Please select a proper rating.");
        setError(true);
        goToOSG1.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (OSG2 === "") {
        setHelperText2("Please select a proper rating.");
        setError(true);
        goToOSG2.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (IQ1 === "") {
        setHelperText3("Please select a proper rating.");
        setError(true);
        goToIQ1.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (IQ2 === "") {
        setHelperText4("Please select a proper rating.");
        setError(true);
        goToIQ2.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (IQ3 === "") {
        setHelperText5("Please select a proper rating.");
        setError(true);
        goToIQ3.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (SQ1 === "") {
        setHelperText6("Please select a proper rating.");
        setError(true);
        goToSQ1.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (SQ2 === "") {
        setHelperText7("Please select a proper rating.");
        setError(true);
        goToSQ2.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (SQ3 === "") {
        setHelperText8("Please select a proper rating.");
        setError(true);
        goToSQ3.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (TM1 === "") {
        setHelperText9("Please select a proper rating.");
        setError(true);
        goToTM1.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (TM2 === "") {
        setHelperText10("Please select a proper rating.");
        setError(true);
        goToTM2.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (TM3 === "") {
        setHelperText11("Please select a proper rating.");
        setError(true);
        goToTM3.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (LE1 === "") {
        setHelperText12("Please select a proper rating.");
        setError(true);
        goToLE1.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (LE2 === "") {
        setHelperText13("Please select a proper rating.");
        setError(true);
        goToLE2.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (LE3 === "") {
        setHelperText14("Please select a proper rating.");
        setError(true);
        goToLE3.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (SF1 === "") {
        setHelperText15("Please select a proper rating.");
        setError(true);
        goToSF1.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (SF2 === "") {
        setHelperText16("Please select a proper rating.");
        setError(true);
        goToSF2.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (SF3 === "") {
        setHelperText17("Please select a proper rating.");
        setError(true);
        goToSF3.current.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        setError(false);
        mergeData();
      }
    };

    return (
      <div className="survey-container">
        <div className="survey-wrapper">
          <div className="headingSecond">
            <div className="colorheader">SURVEY QUESTIONNAIRES</div>
            <div className="content-wrapper">
              <div className="content">
                <span className="c-one">
                  Kindly answer the questions honest as possible. Rest assured
                  that all information provided here will be kept confidential.
                </span>
                <span className="c-one">
                  Directions: Please answer the questions based on your learning
                  performance and experience in a blended learning environment
                  (Synchronous and Asynchronous classes).
                </span>
                <span className="c-one">
                  Legend:
                  <ul>
                    <li>5 - Strongly Agree</li>
                    <li>4 - Agree</li>
                    <li>3 - Neutral</li>
                    <li>2 - Disagree</li>
                    <li>1 - Strongly Disagree</li>
                  </ul>
                </span>
                <span className="c-one">
                  LMS platform – refers to instant messaging app and video
                  conferencing tools such as (Google classroom, FB messenger,
                  Schoology, Zoom and Google meet).
                </span>
                <span className="c-one">Thank you for your participation.</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" error={error}>
              <div className="form">
                <div className="title">ONLINE STUDY GADGETS:</div>
                <div className="form-content" ref={goToOSG1}>
                  <div className="question">
                    Please indicate gadgets use in a blended learning.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={OSG1} onChange={handleRadioChange1}>
                    <div className="content">
                      <Radio value="desktop" />
                      <span>Desktop</span>
                    </div>
                    <div className="content">
                      <Radio value="laptop" />
                      <span>Laptop</span>
                    </div>
                    <div className="content">
                      <Radio value="tablet" />
                      <span>Tablet</span>
                    </div>
                    <div className="content">
                      <Radio value="mobile_phone" />
                      <span>Mobile Phone</span>
                    </div>
                    <div className="content">
                      <Radio value="borrowed_rented" />
                      <span>
                        Borrowed/Rented gadgets(such computer, laptop, pisonet)
                      </span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText1}</FormHelperText>
                </div>
                <div className="form-content" ref={goToOSG2}>
                  <div className="question">
                    Please indicate internet connectivity use in a blended
                    learning.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={OSG2} onChange={handleRadioChange2}>
                    <div className="content">
                      <Radio value="wifi" />
                      <span>WIFI</span>
                    </div>
                    <div className="content">
                      <Radio value="data_connection" />
                      <span>Data Connection</span>
                    </div>
                    <div className="content">
                      <Radio value="hotspot" />
                      <span>Hotspot Vendo</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText2}</FormHelperText>
                </div>
              </div>
              {/* INFORMATION QUALITY */}
              <div className="form">
                <div className="title">INFORMATION QUALITY:</div>
                <div className="form-content" ref={goToIQ1}>
                  <div className="question">
                    The information content provided in LMS is relevant to my
                    learning.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={IQ1} onChange={handleRadioChange3}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText3}</FormHelperText>
                </div>
                <div className="form-content" ref={goToIQ2}>
                  <div className="question">
                    The learning content provided in LMS is clear and easy to
                    understand.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={IQ2} onChange={handleRadioChange4}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText4}</FormHelperText>
                </div>
                <div className="form-content" ref={goToIQ3}>
                  <div className="question">
                    The learning content provided in LMS is complete and
                    up-to-date.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={IQ3} onChange={handleRadioChange5}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText5}</FormHelperText>
                </div>
              </div>
              {/* SYSTEM QUALITY */}
              <div className="form">
                <div className="title">SYSTEM QUALITY:</div>
                <div className="form-content" ref={goToSQ1}>
                  <div className="question">
                    The LMS platform use is offer flexibility in learning as to
                    time and place.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={SQ1} onChange={handleRadioChange6}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText6}</FormHelperText>
                </div>
                <div className="form-content" ref={goToSQ2}>
                  <div className="question">
                    The information content in LMS offer multimedia(audio,
                    video, and text) types of course content.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={SQ2} onChange={handleRadioChange7}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText7}</FormHelperText>
                </div>
                <div className="form-content" ref={goToSQ3}>
                  <div className="question">
                    The LMS platform have sufficient functions for my learning.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={SQ3} onChange={handleRadioChange8}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText8}</FormHelperText>
                </div>
              </div>
              {/* TEACHING METHOD */}
              <div className="form">
                <div className="title">TEACHING METHOD:</div>
                <div className="form-content" ref={goToTM1}>
                  <div className="question">
                    I have a positive feeling towards using digital materials
                    (such ebook, modules, lectures etc).
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={TM1} onChange={handleRadioChange9}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText9}</FormHelperText>
                </div>
                <div className="form-content" ref={goToTM2}>
                  <div className="question">
                    Having weekly concept quizzes is helpful for me to learn the
                    concepts covered in the course.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={TM2} onChange={handleRadioChange10}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText10}</FormHelperText>
                </div>
                <div className="form-content" ref={goToTM3}>
                  <div className="question">
                    Making all online assignments open from the start of the
                    course with designated dead-lines each week is helpful to
                    keep me moving forward during the semester.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={TM3} onChange={handleRadioChange11}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText11}</FormHelperText>
                </div>
              </div>
              {/* LEARNING ENVIRONMENT */}
              <div className="form">
                <div className="title">LEARNING ENVIRONMENT:</div>
                <div className="form-content" ref={goToLE1}>
                  <div className="question">
                    The process of using the blended learning environment to
                    assist my learning is pleasant.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={LE1} onChange={handleRadioChange12}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText12}</FormHelperText>
                </div>
                <div className="form-content" ref={goToLE2}>
                  <div className="question">
                    I find the blended learning environment to be enjoyable.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={LE2} onChange={handleRadioChange13}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText13}</FormHelperText>
                </div>
                <div className="form-content" ref={goToLE3}>
                  <div className="question">
                    The learning climate provided by the blended learning
                    environment could motivate my spontaneous learning.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={LE3} onChange={handleRadioChange14}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText14}</FormHelperText>
                </div>
              </div>
              {/* SATISFACTION */}
              <div className="form">
                <div className="title">SATISFACTION:</div>
                <div className="form-content" ref={goToSF1}>
                  <div className="question">
                    Overall, I am pleased with the blended learning environment.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={SF1} onChange={handleRadioChange15}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText15}</FormHelperText>
                </div>
                <div className="form-content" ref={goToSF2}>
                  <div className="question">
                    Overall, the blended learning environment is pleasant to me.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={SF2} onChange={handleRadioChange16}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText16}</FormHelperText>
                </div>
                <div className="form-content" ref={goToSF3}>
                  <div className="question">
                    Overall, the blended learning environment satisfies my
                    learning needs.
                    <span className="required">*</span>
                  </div>
                  <RadioGroup value={SF3} onChange={handleRadioChange17}>
                    <div className="content">
                      <Radio value="5" />
                      <span>5 - Strongly Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="4" />
                      <span>4 - Agree</span>
                    </div>
                    <div className="content">
                      <Radio value="3" />
                      <span>3 - Neutral</span>
                    </div>
                    <div className="content">
                      <Radio value="2" />
                      <span>2 - Disagree</span>
                    </div>
                    <div className="content">
                      <Radio value="1" />
                      <span>1 - Strongly Disagree</span>
                    </div>
                  </RadioGroup>
                  <FormHelperText>{helperText17}</FormHelperText>
                </div>
              </div>
              <div className="btnControl">
                <div className="actionstyle">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setPage(false)}
                  >
                    Back
                  </Button>
                  <div className="spacer" />
                  <Button variant="contained" color="success" type="submit">
                    Submit
                  </Button>
                </div>
                <Button onClick={clearData} variant="text">
                  Clear form
                </Button>
              </div>
            </FormControl>
          </form>
        </div>
      </div>
    );
  };

  return <>{isDone ? <DoneSurvey /> : Page ? <SecondPage /> : <FirstPage />}</>;
};

export default SurveyForm;
