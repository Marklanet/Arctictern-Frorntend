import React from "react";
import "./ordernow.css";

export default function Ordernow() {
  const pages = [];
  for (let i = 1; i < 201; i++) {
    pages.push(`${i} pages / ${i * 275} words`);
  }
  const [formData, setFormData] = React.useState({
    PaperType: "",
    Pages: "",
    Spacing: "",
    Level: "",
    Deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="ordernow">
      <form className="order">
        <fieldset>
          <label htmlFor="favColor">PAPER CATEGORY</label>
          <select
            value={formData.PaperType}
            name="PaperType"
            onChange={handleChange}
          >
            <option value="academic">Academic</option>
            <option value="article">Article</option>
          </select>
        </fieldset>

        <fieldset>
          <label>PAPER TYPE</label>
          <select
            value={formData.PaperType}
            name="PaperType"
            onChange={handleChange}
            autocomplete="off"
          >
            <option value="- Select -">-- Select Type of Assigment --</option>
            <option value="Abstract">Abstract</option>
            <option value="Academic Report">Academic Report</option>
            <option value="Admission Essay">Admission Essay</option>
            <option value="Analysis Paper">Analysis Paper</option>
            <option value="Annotated Bibliography">
              Annotated Bibliography
            </option>
            <option value="Argumentative Essay">Argumentative Essay</option>
            <option value="Article">Article</option>
            <option value="Article Critique">Article Critique</option>
            <option value="Article Review">Article Review</option>
            <option value="Assessment">Assessment</option>
            <option value="Autobiography">Autobiography</option>
            <option value="Biographies">Biographies</option>
            <option value="Book/Movie Review">Book Review</option>
            <option value="Book/Movie Review">Movie Review</option>
            <option value="Business Report">Business Report</option>
            <option value="Capstone Project">Capstone Project</option>
            <option value="Case Study">Case Study</option>
            <option value="Case Brief Writing">Case Brief Writing</option>
            <option value="Cause/Effect Analysis">Cause/Effect Analysis</option>
            <option value="Course Work">Course Work</option>
            <option value="Creative Writing">Creative Writing</option>
            <option value="Critical Thinking">Critical Thinking</option>
            <option value="Critique Writing">Critique Writing</option>
            <option value="Discussion Post">Discussion Post</option>
            <option value="Dissertation">Dissertation</option>
            <option value="Dissertation Chapter - Literature Review">
              Dissertation Chapter
            </option>
            <option value="Editing/ Proofreading">Editing/ Proofreading</option>
            <option value="Essay">Essay</option>
            <option value="Extended Essay Writing">
              Extended Essay Writing
            </option>
            <option value="Fact Sheets">Fact Sheets</option>
            <option value="Finance and Accounting Assignment">
              Finance / Accounting Assignment
            </option>
            <option value="Homework">Homework</option>
            <option value="IB Extended Essay">IB Extended Essay</option>
            <option value="IB Internal Assessment">
              IB Internal Assessment
            </option>
            <option value="IB PPD Form">IB PPD Form</option>
            <option value="IB Theatre Director's Notebook">
              IB Theatre Director's Notebook
            </option>
            <option value="IB TOK Essay">IB TOK Essay</option>
            <option value="IB TOK Exhibition">IB TOK Exhibition</option>
            <option value="Internal Assessment">Internal Assessment</option>
            <option value="Lab Report">Lab Report</option>
            <option value="Letter">Letter</option>
            <option value="Literature Review">Literature Review</option>
            <option value="Marketing Plan">Marketing Plan</option>
            <option value="Memo">Memo</option>
            <option value="Outline">Outline</option>
            <option value="Personal Statement">Personal Statement</option>
            <option value="Persuasive Essay">Persuasive Essay</option>
            <option value="Programming Assignment">
              Programming Assignment
            </option>
            <option value="Proposal">Proposal</option>
            <option value="Position Paper">Position Paper</option>
            <option value="Power Point Presentation">
              Power Point Presentation
            </option>
            <option value="Problem-Solving">Problem-Solving</option>
            <option value="Question-Answer">Question-Answer</option>
            <option value="Reaction Paper">Reaction Paper</option>
            <option value="Resume">Resume</option>
            <option value="Research Paper">Research Paper</option>
            <option value="Research Proposal">Research Proposal</option>
            <option value="Rhetorical Analysis">Rhetorical Analysis</option>
            <option value="Speech">Speech</option>
            <option value="Summary">Summary</option>
            <option value="Thesis">Thesis</option>
            <option value="Thesis-Chapter">Thesis - Chapter</option>
            <option value="Thesis Proposal">Thesis Proposal</option>
            <option value="Term Paper">Term Paper</option>
            <option value="Theory of Knowledge">Theory of Knowledge</option>
            <option value="Write My Essay for Me">Write My Essay for Me</option>
            <option value="Write My Capstone Project">
              Write My Capstone Project
            </option>
          </select>
        </fieldset>
        <fieldset>
          <label>PAGES </label>
          <select onChange={handleChange}>
            {pages.map((xyz) => (
              <option key={xyz} value={xyz}>
                {xyz}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <label>SPACING</label>
          <select onChange={handleChange}>
            <option value="single">Single Spaced</option>
            <option value="double" selected="selected">
              Double Spaced
            </option>
          </select>
        </fieldset>
        <fieldset>
          <label>SELECT LEVEL</label>
          <select onChange={handleChange}>
            <option value="High School">High School</option>
            <option value="Undergraduate (yrs 1-2)">
              {`Undergraduate (yrs 1-2)`}
            </option>
            <option value="Undergraduate (yrs 3-4)">
              {`Undergraduate (yrs 3-4)`}
            </option>
            <option value="Master's/IB">Masters</option>
            <option value="Master's/IB">IB Level</option>
            <option value="Doctoral">Doctoral</option>
          </select>
        </fieldset>
        <span>
          <h2>US$ 24.99</h2>
          <div>
            <h2>US$ 19.99</h2>
          </div>
        </span>
        <button className="btn3">Order Now</button>
      </form>
    </div>
  );
}
