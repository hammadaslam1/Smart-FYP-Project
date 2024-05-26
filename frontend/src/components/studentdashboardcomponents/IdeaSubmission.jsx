import "../../styles/studentcomponentsstyles/ideasubmission.css";
const IdeaSubmission = () => {
  return (
    <div className="ideaSubmissionMain">
      <h1>Project Idea Submission</h1>
      <div className="ideaSubmission">
        <div>
          <label htmlFor="ProjectIdea">Project Idea*:</label>
          <input className="projectIdeaInput" type="text" />
        </div>
        <div className="projectDescriptionDiv">
          <label
            htmlFor="ProjectDescription"
            className="projectDescriptionLabel"
          >
            Project Description*:
          </label>
          <textarea rows={8} className="projectDescriptionInput" type="text" />
        </div>
        <div className="projectSubmitButtonDiv">
          <button className="projectSubmitButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default IdeaSubmission;
