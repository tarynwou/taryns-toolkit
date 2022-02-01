import React from "react";
import Collapsible from "../elements/Collapsable";
import "./component.css";

function FAQ() {
  return (
    <div className="faq">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <div className="page-top">
              <h1 className="page-headers">Frequently Asked Questions</h1>
              <p className="page-descriptions">
                This is a list of questions I've been asked recently!
              </p>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <h2>School</h2>
                <h3>UBC</h3>
                <Collapsible q="This is a question" a="This is an answer" />
                <Collapsible q="This is a question" a="This is an answer" />
                <h3>High School</h3>
                <Collapsible q="This is a question" a="This is an answer" />
                <h2>Career</h2>
                <Collapsible q="This is a question" a="This is an answer" />
                <Collapsible q="This is a question" a="This is an answer" />
                <Collapsible q="This is a question" a="This is an answer" />
                <Collapsible q="This is a question" a="This is an answer" />
                <h2>Productivity</h2>
                <Collapsible q="This is a question" a="This is an answer" />
                <Collapsible q="This is a question" a="This is an answer" />
              </div>
              <div class="col-sm-6">
                <h2>Extracurriculars</h2>
                <Collapsible q="This is a question" a="This is an answer" />
                <Collapsible q="This is a question" a="This is an answer" />
                <h2>Personal Development</h2>
                <h3>Learning</h3>
                <Collapsible q="This is a question" a="This is an answer" />
                <Collapsible q="This is a question" a="This is an answer" />
                <Collapsible q="This is a question" a="This is an answer" />
                <h3>Habits</h3>
                <Collapsible q="This is a question" a="This is an answer" />
                <Collapsible q="This is a question" a="This is an answer" />
                <Collapsible q="This is a question" a="This is an answer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
