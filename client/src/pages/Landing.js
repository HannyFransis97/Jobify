import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            I'm baby forage viral echo park bushwick cred, humblebrag
            vibecession keffiyeh taxidermy try-hard. Seitan unicorn fanny pack
            synth etsy photo booth taxidermy gentrify normcore
          </p>
          <Link to='/register' className="btn btn-hero"> Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
