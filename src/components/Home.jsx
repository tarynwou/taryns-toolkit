import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/300x300"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">Home</h1>
            <p>
              I’m a second-year business and computer science student at the
              University of British Columbia. I am always looking to pursue new
              opportunities that promote personal development and community
              benefit. Given my experiences, I’ve come across many lessons I’d
              love to share with you! <br></br>
              <br></br>
              Let’s connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
