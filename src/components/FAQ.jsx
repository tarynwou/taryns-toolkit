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
                  a={text}
                />
                <Collapsible
                  q="Tips for the Sauder application?"
                  a="This is an answer"
                />
                <Collapsible
                  q="What do you think made you stand out on your UBC application?"
                  a="This is an answer"
                />
                <Collapsible
                  q="How did you apply for both business and computer science at UBC?"
                  a="This is an answer"
                />
                <Collapsible
                  q="Why is BUCS a cheat code?"
                  a="This is an answer"
                />
                <Collapsible
                  q="Tips for the BUCS application?"
                  a="This is an answer"
                />
                <Collapsible
                  q="Would you recommend living on campus?"
                  a="This is an answer"
                />
                <h3>High School</h3>
                <Collapsible
                  q="What courses did you take in grade 11 and 12?"
                  a="This is an answer"
                />
                <Collapsible
                  q="What were your extracurriculars in high school?"
                  a="This is an answer"
                />
                <Collapsible
                  q="Should I take calculus 12?"
                  a="This is an answer"
                />
                <Collapsible
                  q="Tips for English essays?"
                  a="This is an answer"
                />
                <Collapsible q="Note-taking Tips?" a="This is an answer" />
              </div>
              <div class="col-sm-6">
                <h2>Extracurriculars</h2>
                <h3>Shad</h3>
                <Collapsible
                  q="What Shad campus did you go to?"
                  a="This is an answer"
                />
                <Collapsible
                  q="What did you do in Shad?"
                  a="This is an answer"
                />
                <h3>YELL</h3>
                <Collapsible
                  q="Is YELL worth the time and money?"
                  a="This is an answer"
                />
                <Collapsible
                  q="How much time do I need to spend on YELL (weekly)?"
                  a="This is an answer"
                />
                <h2>Career</h2>
                <Collapsible
                  q="Tips for individual interviews?"
                  a="This is an answer"
                />
                <h2>Personal Development</h2>
                <h3>Habits</h3>
                <Collapsible
                  q="What tools do you manage your time?"
                  a="This is an answer"
                />
                <Collapsible
                  q="How do you manage your time?"
                  a="This is an answer"
                />
                <Collapsible
                  q="How do you stay motivated to do school work?"
                  a="This is an answer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

const text = "lol \n haha";
