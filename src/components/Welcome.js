import React, { Component } from "react";

class Welcome extends Component {
  state = {
    current: "none"
  };

  

  render() {

    return (
      <div
        className="Welcome section"
        style={{
          background:
            "url(https://images.homedepot-static.com/productImages/2d5b1210-92fd-4200-8b6b-52b4e64f165f/svn/beyond-basics-wallpaper-420-87096-64_1000.jpg)"
        }}
      >
        <article class="athelas">
          <div class="vh-100 dt w-100 tc  white cover">
            <div class="dtc v-mid">
            <br/><br/><br/> 
            <div class="center measure-wide f5 pv5 lh-copy ph2" />
              <h1 class="f1 f-headline-l fw1 i white-60">ANCESTER</h1>
              <img src="https://ucarecdn.com/fe9e7383-8a3b-4fb9-85d5-a239f9c48bf4/"/>
              <blockquote class="ph0 mh0 measure f4 lh-copy center">
                <p class="f6 fw1 ttu tracked mb2 white-70">
                  <h3><strong>An state of the art enterprise.</strong></h3>
                </p>
                <h3 class="f6 fw1 lh-title">Since MMXVII</h3>
                <h1 className="welcome-intro">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i
                      className="fa fa-linkedin-square i-hov"
                      aria-hidden="true"
                    />
                  </a>{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-medium i-hov" aria-hidden="true" />
                  </a>{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github i-hov" aria-hidden="true" />
                  </a>{" "}
                  <a
                    href="mailto:#@gmail.com?Subject=Hello%20there!"
                    target="_top"
                  >
                    <i className="fa fa-envelope i-hov" aria-hidden="true" />
                  </a>
                  <br />
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <button className="button resume-button">
                      WhitePaper{" "}
                      <i className="fa fa-file-pdf-o" aria-hidden="true" />
                    </button>
                  </a>
                </h1>
              </blockquote>
            </div>
          </div>
          <div class="center measure-wide f5 pv5 lh-copy ph2" />
        </article>
      </div>
    );
  }
}

export default Welcome;

//   <a href="https://angel.co/mthorry" target="_blank" rel="noopener noreferrer"><i className="fa fa-angellist i-hov" aria-hidden="true"/></a>
