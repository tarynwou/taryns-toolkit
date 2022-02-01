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
                <Collapsible
                  q="What did you have to do in your UBC Sauder application?"
                  a="The Sauder application had 2 more questions than the
                  regular UBC personal profile (e.g. science, arts,
                  engineering, etc.)
                  
                  These were my written questions (concise)—I believe they changed one of the questions to address your experiences in COVID:
                  
                  - How did you respond to a problem? (200 words)
                  - What social issue is important to you? Why? How have
                  you addressed it? (200 words)
                  - How would your community/friends/fan describe you?
                  (250 words)
                  - What is important to you and why? (250 words)
                  - Describe 5 activities you do (50 words each)
                  - Elaborate on 1-2 activities (350 words)
                  - Additional info (100 words)
                  - Clarification (2000 chars)
                  
                  Answer 2 questions in an online interview for ~1 min each.
                  They record you but there's no actual person there while
                  you record. My questions were **describe a time when you encountered conflict in a team** and **do you like working in a group or independently**? I heard they usually throw one practical question and one random question (my friend was asked what superhero he would be and why), but I was asked two practicals.
                  
                  Send your transcript-your school will hopefully walk you
                  through that."
                />
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
