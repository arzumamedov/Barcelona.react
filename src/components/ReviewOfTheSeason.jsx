import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

import './ReviewOfTheSeason.scss'
function ReviewOfTheSeason() {
  return (
    <>
      <div className='section1'>
        <div className='section1Left'>
          <h4>Review Of The Season</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit nisi pulvinar, dapibus elit malesuada.</p>

          {/* <div className="progress-area"> */}
          <span>STRATEGY</span>
          <ProgressBar

            completed={95}
            className="wrapper"
            barContainerClassName="container"
            completedClassName="barCompleted"
            labelClassName="label"
          />
          <span>DESIGN</span>
          <ProgressBar

            completed={90}
            className="wrapper"
            barContainerClassName="container"
            completedClassName="barCompletedd"
            labelClassName="label"
          />
          <span>MARKETING</span>
          <ProgressBar

            completed={30}
            className="wrapper"
            barContainerClassName="container"
            completedClassName="barCompleteddd"
            labelClassName="label"
          />
          <span>DEVELOPMENT</span>
          <ProgressBar

            completed={60}
            className="wrapper"
            barContainerClassName="container"
            completedClassName="barCompletedddd"
            labelClassName="label"
          />

          {/* </div> */}
        </div>
        <div className='section1Right'>
          <iframe width="530" height="315" src="https://www.youtube.com/embed/jqlxti9oYzw?si=OxFaYOiDP1_2bV1q" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </div>

    </>
  )
}

export default ReviewOfTheSeason