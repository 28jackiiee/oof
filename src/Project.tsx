
import Navbar from "./components/Navbar";
import './Project.css'
import pic1 from './assets/balletnettrainer.png'
import pic2 from './assets/chess.png'
import pic3 from './assets/ezetrack.png'
import pic4 from './assets/slashnbash.png'
import pic5 from './assets/spectral_clustering.png'
import pic6 from './assets/taf_transformer.png'
import pic7 from './assets/holotictactoe.png'

function Project() {
  return (
    <>
      <Navbar></Navbar>
      <div className="portfolio-page">


      <div className="portfolio-item">
      <a href="">
        <img
          src={pic1}
          className="portfolio-item-image"
        />
        <h2 className="portfolio-item-title">BalletNetTrainer</h2>
        <p className="portfolio-item-description">
        BalletNetTrainer
        is a computer vision-based motion instructor model that analyzes the spatial-temporal 
        dynamics in dance motion data through human pose estimation, a novel feature angle 
        extraction technique, and dynamic time warping.
        <br />
        <a href="http://ieomsociety.org/proceedings/2021rome/349.pdf" target="_blank">Paper</a>
        </p>
        </a>
      </div>


      <div className="portfolio-item">
        <a href="">
        <img
          src={pic4}
          className="portfolio-item-image"
        />
        <h2 className="portfolio-item-title">SlashNBash</h2>
        <p className="portfolio-item-description">
        SlashNBash is a real-time computer vision controlled multi-level fighter game with hit priority, timing mechanics, and full animation by deploying Google’s MediaPipe Pose Tracking & Landmarking model, utilizing OpenCV for webcam access and image processing. Code written in Python.
        </p>
        </a>
      </div>


      <div className="portfolio-item">
        <a href="">
        <img
          src={pic6}
          className="portfolio-item-image"
        />
        <h2 className="portfolio-item-title">TAF Pose</h2>
        <p className="portfolio-item-description">
        TAF Pose or Temporal Affinity Fields (TAF) Pose is the first transformer-based pose estimation model that directly performs 2D tracking given temporal knowledge with spatio-temporal self-attention. This is an extension of similar work done by Truong et al in the task of video action recognition in DirecFormer.
        </p>
        </a>
      </div>


      <div className="portfolio-item">
        <a href="">
        <img
          src={pic5}
          className="portfolio-item-image"
        />
        <h2 className="portfolio-item-title">Spectral Clustering</h2>
        <p className="portfolio-item-description">
        I analyzed the theory behind dimensionality reduction and unsupervised spectral clustering 
                        techniques such as K-means clustering, K-nearest neighbors and applied them to cluster music into their 
                        genres based on ~200 features (e.g tempo). Implementations are in Julia. 
        </p>
        </a>
      </div>


      <div className="portfolio-item">
        <a href="">
        <img
          src={pic7}
          className="portfolio-item-image"
        />
        <h2 className="portfolio-item-title">Holo Tic Tac Toe</h2>
        <p className="portfolio-item-description">
        Holo Tic Tac Toe is a tic tac toe game controlled via the movement of a human hand using computer vision. I originally created this project for a workshop I taught at Hackclub’s Assemble hackathon.
        </p>
        </a>
      </div>


      <div className="portfolio-item">
        <a href="">
        <img
          src={pic3}
          className="portfolio-item-image"
        />
        <h2 className="portfolio-item-title">eZeTrack</h2>
        <p className="portfolio-item-description">
        eZeTrack is an IOS mobile app that aims to reduces food waste by helping its user to track their food usage via an interactive smart digital fridge. In the app, the user can track expiration dates and also curate grocery shopping lists based on available stock in the fridge. App built in Xcode using C++.
        </p>
        </a>
      </div>


      <div className="portfolio-item">
        <a href="">
        <img
          src={pic2}
          className="portfolio-item-image"
        />
        <h2 className="portfolio-item-title">Chess</h2>
        <p className="portfolio-item-description">
        This is a 2-player chess game built in Python with Tkinter. Main features in addition to a basic working game include Check/Checkmate detection, En Passant, and Pawn Promotion.
        </p>
        </a>
      </div>


      
    </div>
    </>
  );
}

export default Project;