import Header from "./header";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="homepage">
        <div className="misvis">
          <div className="vision">
            <div className="title">Vision</div>
            <div className="content">
              A dynamic and highly competitive Higher Education Institution
              (HEI) committed to people empowerment towards building a humane
              society.
            </div>
          </div>
          <div className="mission">
            <div className="title">Mision</div>
            <div className="content">
              To provide quality, affordable and relevant education responsive
              to the changing needs of the local and global communities through
              effective and efficient integration of instruction, research and
              extension; to develop productive and God-loving individuals in
              society.
            </div>
          </div>
        </div>
        <div className="objective">
          <div className="title">Objectives</div>
          <div className="content">
            <span>
              - To contribute a dynamic and harmonious relationship to the
              global community.
            </span>
            <span>
              - To effectively provide the job market with ethical
              professionals.
            </span>
            <span>
              - To pursue research activities supportive of the stakeholders's
              needs and community development.
            </span>
            <span>
              - To guarantee an equitable access to learning adaptive to the
              demands of industry.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
