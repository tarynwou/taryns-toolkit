import React from "react";
import Collapsible from "../elements/Collapsable";

function FAQ() {
  return (
    <div className="faq">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <h1 class="font-weight-light">FAQ</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div class="row">
              <div class="col-sm-6">
                <Collapsible q="This is a question" a="This is an answer" />
              </div>
              <div class="col-sm-6">
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
