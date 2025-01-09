import { FaPlay, FaStop } from "react-icons/fa";
import { ideThemes, languages } from "helpers/staticData";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__elements">
          <div className="navbar__logo">
            <img src={"runnerlogo.png"} alt="logo"></img>
            <span>Code Runner</span>
          </div>
          <div className="navbar__items">
            {!!languages?.length && (
              <div>
                <select name="languages" id="languages">
                  {languages.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {!!ideThemes?.length && (
              <div>
                <select name="theme" id="theme">
                  {ideThemes.map((ideTheme) => (
                    <option key={ideTheme} value={ideTheme}>
                      {ideTheme}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button className="primary-btn">
              <FaPlay />
              Run
            </button>
            <button className="secondary-btn">
              <FaStop />
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
