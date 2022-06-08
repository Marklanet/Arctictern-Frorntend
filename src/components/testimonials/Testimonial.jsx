import { React, useState, useRef, useEffect } from "react";
import "./testimonial.css";
import person1 from "../../images/person1.png";
import person2 from "../../images/person2.png";
const imag = [person1, person2, person1];
const services = ["one", "two", "three"];
const delay = 9000;

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === services.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
  }, [index]);

  return (
    <div className="testimonials">
      <h1>TESTIMONIALS</h1>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className="slide1" key={0}>
          <div className="holderr">
            <p>
              This company is comparatively better than the <br></br>others that
              I used before. My nursing case study was <br></br> wonderfully
              written and exceeded my expectation!
            </p>
            <h2>Simona Newcastle, Australia</h2>
          </div>
        </div>
        <div className="slide2" key={1}>
          <div className="holderr">
            <p>
              Joash helped me with my econ assignments. <br></br>The IA needed a
              lot of analytical skills, which has been<br></br> demonstrated in
              every paper they have sent me. In every<br></br> paper they have
              sent me, they have met the target score I had. <br></br>I
              recommend him specifically for IAs.
            </p>

            <h2>Kristiana Adelaide, Australia</h2>
          </div>
        </div>
        <div className="slide3" key={3}>
          <div className="holderr">
            <p>
              Hey there! I ordered two long papers from Joash, and <br></br>the
              rates were affordable. My majorr concern <br></br>was plagiarism
              because my professor was no to it. Attaining 4%<br></br> plag on a
              long paper was superb. I can trust Joash with my <br></br>research
              projects.
            </p>
            <h2>Abdullahi Aswan, Egypt</h2>
          </div>
        </div>
      </div>
      <div className="slideshowDots">
        {services.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          >
            <img src={imag[idx]} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
