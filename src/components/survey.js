import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SurveyForm = () => {
  const [Page, setPage] = useState(false);
  const [Data, setData] = useState([]);

  const FirstPage = () => {
    const [YearLevel, setYearLevel] = useState("");
    const [Section, setSection] = useState("");
    const [Email, setEmail] = useState("");
    const [Program, setProgram] = useState("");

    const FG = {
      year_level: YearLevel,
      section: Section,
      email: Email,
      program: Program,
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
          <FormControl component="fieldset">
            <div className="forms">
              <div className="form-content">
                <div className="question">
                  Year &amp; Level: <span className="required">*</span>
                </div>
                <RadioGroup
                  value={YearLevel}
                  onChange={(e) => setYearLevel(e.target.value)}
                >
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
              </div>
            </div>
            <div className="forms">
              <div className="form-content">
                <div className="question">
                  Section: <span className="required">*</span>
                </div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "35ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    variant="standard"
                    value={Section}
                    onChange={(e) => setSection(e.target.value)}
                  />
                </Box>
              </div>
            </div>
            <div className="forms">
              <div className="form-content">
                <div className="question">
                  Email Address: <span className="required">*</span>
                </div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "35ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    variant="standard"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
              </div>
            </div>
            <div className="forms">
              <div className="form-content">
                <div className="question">
                  Program: <span className="required">*</span>
                </div>
                <RadioGroup
                  value={Program}
                  onChange={(e) => setProgram(e.target.value)}
                >
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
              </div>
            </div>
            <div className="btnControl">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => {
                  setData(FG);
                  setPage(true);
                  console.log(FG);
                }}
              >
                Next
              </Button>
              <Link to="/survey/2/page">
                <Button variant="text">Clear form</Button>
              </Link>
            </div>
          </FormControl>
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

    const CombineData = () => {
      let mergeds = { ...Data, ...SP };
      console.log(mergeds);
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
          <div className="form">
            <div className="title">ONLINE STUDY GADGETS:</div>
            <div className="form-content">
              <div className="question">
                Please indicate gadgets use in a blended learning.
                <span className="required">*</span>
              </div>
              <RadioGroup
                value={OSG1}
                onChange={(e) => setOSG1(e.target.value)}
              >
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
            </div>
            <div className="form-content">
              <div className="question">
                Please indicate internet connectivity use in a blended learning.
                <span className="required">*</span>
              </div>
              <RadioGroup
                value={OSG2}
                onChange={(e) => setOSG2(e.target.value)}
              >
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
            </div>
          </div>
          {/* INFORMATION QUALITY */}
          <div className="form">
            <div className="title">INFORMATION QUALITY:</div>
            <div className="form-content">
              <div className="question">
                The information content provided in LMS is relevant to my
                learning.
                <span className="required">*</span>
              </div>
              <RadioGroup value={IQ1} onChange={(e) => setIQ1(e.target.value)}>
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
            </div>
            <div className="form-content">
              <div className="question">
                The learning content provided in LMS is clear and easy to
                understand.
                <span className="required">*</span>
              </div>
              <RadioGroup value={IQ2} onChange={(e) => setIQ2(e.target.value)}>
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
            </div>
            <div className="form-content">
              <div className="question">
                The learning content provided in LMS is complete and up-to-date.
                <span className="required">*</span>
              </div>
              <RadioGroup value={IQ3} onChange={(e) => setIQ3(e.target.value)}>
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
            </div>
          </div>
          {/* SYSTEM QUALITY */}
          <div className="form">
            <div className="title">SYSTEM QUALITY:</div>
            <div className="form-content">
              <div className="question">
                The LMS platform use is offer flexibility in learning as to time
                and place.
                <span className="required">*</span>
              </div>
              <RadioGroup value={SQ1} onChange={(e) => setSQ1(e.target.value)}>
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
            </div>
            <div className="form-content">
              <div className="question">
                The information content in LMS offer multimedia(audio, video,
                and text) types of course content.
                <span className="required">*</span>
              </div>
              <RadioGroup value={SQ2} onChange={(e) => setSQ2(e.target.value)}>
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
            </div>
            <div className="form-content">
              <div className="question">
                The LMS platform have sufficient functions for my learning.
                <span className="required">*</span>
              </div>
              <RadioGroup value={SQ3} onChange={(e) => setSQ3(e.target.value)}>
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
            </div>
          </div>
          {/* TEACHING METHOD */}
          <div className="form">
            <div className="title">TEACHING METHOD:</div>
            <div className="form-content">
              <div className="question">
                I have a positive feeling towards using digital materials (such
                ebook, modules, lectures etc).
                <span className="required">*</span>
              </div>
              <RadioGroup value={TM1} onChange={(e) => setTM1(e.target.value)}>
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
            </div>
            <div className="form-content">
              <div className="question">
                Having weekly concept quizzes is helpful for me to learn the
                concepts covered in the course.
                <span className="required">*</span>
              </div>
              <RadioGroup value={TM2} onChange={(e) => setTM2(e.target.value)}>
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
            </div>
            <div className="form-content">
              <div className="question">
                Making all online assignments open from the start of the course
                with designated dead-lines each week is helpful to keep me
                moving forward during the semester.
                <span className="required">*</span>
              </div>
              <RadioGroup value={TM3} onChange={(e) => setTM3(e.target.value)}>
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
            </div>
          </div>
          {/* LEARNING ENVIRONMENT */}
          <div className="form">
            <div className="title">LEARNING ENVIRONMENT:</div>
            <div className="form-content">
              <div className="question">
                The process of using the blended learning environment to assist
                my learning is pleasant.
                <span className="required">*</span>
              </div>
              <RadioGroup value={LE1} onChange={(e) => setLE1(e.target.value)}>
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
            </div>
            <div className="form-content">
              <div className="question">
                I find the blended learning environment to be enjoyable.
                <span className="required">*</span>
              </div>
              <RadioGroup value={LE2} onChange={(e) => setLE2(e.target.value)}>
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
            </div>
            <div className="form-content">
              <div className="question">
                The learning climate provided by the blended learning
                environment could motivate my spontaneous learning.
                <span className="required">*</span>
              </div>
              <RadioGroup value={LE3} onChange={(e) => setLE3(e.target.value)}>
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
            </div>
          </div>
          {/* SATISFACTION */}
          <div className="form">
            <div className="title">SATISFACTION:</div>
            <div className="form-content">
              <div className="question">
                Overall, I am pleased with the blended learning environment.
                <span className="required">*</span>
              </div>
              <RadioGroup value={SF1} onChange={(e) => setSF1(e.target.value)}>
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
            </div>
            <div className="form-content">
              <div className="question">
                Overall, the blended learning environment is pleasant to me.
                <span className="required">*</span>
              </div>
              <RadioGroup value={SF2} onChange={(e) => setSF2(e.target.value)}>
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
            </div>
            <div className="form-content">
              <div className="question">
                Overall, the blended learning environment satisfies my learning
                needs.
                <span className="required">*</span>
              </div>
              <RadioGroup value={SF3} onChange={(e) => setSF3(e.target.value)}>
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
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  CombineData();
                  setPage(false);
                }}
              >
                Submit
              </Button>
            </div>
            <Button variant="text">Clear form</Button>
          </div>
        </div>
      </div>
    );
  };

  return <>{Page ? <SecondPage /> : <FirstPage />}</>;
};

export default SurveyForm;
