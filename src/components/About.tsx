
import './About.css'

function About() {
  return (
    <div className="container">
      <div className="centered-element">
        <h1>Emily Li</h1>
        <p>I like to build cool things.</p>
        <p>AI/computer vision enthusiast. Growing researcher. All things exploration.</p>
        <p>Currently, I am messing around with multimodal deep neural nets.</p>
        <p>
          Founded and executively direct{' '}
          <a className="lin" href="https://www.arquestssern.org/links" target="_blank" rel="noopener noreferrer">
            ARQuest SSERN
          </a>
          . Studying CS at Carnegie Mellon. Researching at{' '}
          <a className="lin" href="https://www.modernintelligence.ai/" target="_blank" rel="noopener noreferrer">
            Modern Intelligence
          </a>
          .
        </p>
        <p>My other interests include tech startups (esp AI ones), robotics, 3D printing, dancing, singing</p>
        <p>Reach out and connect. My work:</p>
        <a className="social" href="https://www.linkedin.com/in/jiayao-emily-li-8075751b0/" target="_blank">Linkedin</a>
        <a className="social"href="https://github.com/emilyjiayaoli" target="_blank">Github</a>
        <a className="social" href="https://scrapbook.hackclub.com/EmilyLi" target="_blank">Scrapbook</a>
        <a className="social" href="https://twitter.com/EmilyLiJiayao" target="_blank">Twitter</a>
        <a className="social" href="https://www.instagram.com/emilyyayq.li/?hl=en" target="_blank">Instagram</a>
        <div>
        </div>
      </div>

      <div className="centered-element-copyright">
        <p>Copyright © 2022 Emily Li. All rights reserved.</p>
      </div>
    </div>
  );
}

export default About;
