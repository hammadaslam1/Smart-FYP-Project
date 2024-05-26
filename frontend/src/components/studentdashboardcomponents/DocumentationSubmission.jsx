import '../../styles/studentcomponentsstyles/documentationsubmission.css'
const DocumentationSubmission = () => {
  return (
    <div className="documentationSubmissionMain">
      <h1>Upload Document</h1>
      <div className="documentationSubmission">
        <div>
          <label htmlFor="DocumentType">Document Type*:</label>
          <br />
          <select className='documentTypeSelect'>
            <option value="">Select Document</option>
            <option value="Introduction">Introduction</option>
            <option value="Abstract">Abstract</option>
            <option value="Thesis">Thesis</option>
          </select>
        </div>
        <div>
          <h3>Select the PDF file to upload:</h3>
          <h4>Note:</h4>
          <p>File name should be a combination of your group name and document type.</p>
          <input type="file" accept="application/pdf" />
        </div>
        
        <div className="documentSubmitButtonDiv">
          <button className="documentSubmitButton">Upload PDF</button>
        </div>
      </div>
    </div>
  );
};

export default DocumentationSubmission;
