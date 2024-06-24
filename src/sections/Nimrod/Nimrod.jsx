//type 'rfce' then press tab to generate boilerplate code.

import styles from "./NimrodStyle.module.css";
import nimrod_look_up from "../../assets/nimrod-look-up.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedInIconLight from "../../assets/linkedin-light.svg"
import linkedInIconDark from "../../assets/linkedin-dark.svg"
import githubIconLight from "../../assets/github-light.svg"
import githubIconDark from "../../assets/github-dark.svg"
import instagramIconLight from "../../assets/instagram-light.svg"
import instagramIconDark from "../../assets/instagram-dark.svg"
import resume from "../../assets/nimrod-polido-resume.pdf"
import { useTheme } from "../../common/ThemeContext";

function Nimrod() {
    const {theme, toggleTheme} = useTheme ();
    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedInIconLight : linkedInIconDark;
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;
    const instagramIcon = theme === 'light' ? instagramIconLight : instagramIconDark;

  return (
    <section id="nimrod" className={styles.container}>
      <div className={styles.colorModeContainer}> 
        <img
          className={styles.nimrod}
          src={nimrod_look_up}
          alt="Profile Picture"
        />
        <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt="Theme icon" 
            onClick={toggleTheme}
        /> 
      </div>
      <div className={styles.info}>
        <h1>
            Nimrod Polido
        </h1>
        <h2>Android Developer</h2>
        <span>
            <a href="https://www.linkedin.com/in/nimrod-polido/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://www.instagram.com/nmrdpldo/" target="_blank">
                <img src={instagramIcon} alt="Instagram Icon" />
            </a>
            <a href="https://github.com/nmrdpldo" target="_blank">
                <img src={githubIcon} alt="Github Icon" />
            </a>
        </span>
        <p className={styles.description}>
        A highly skilled and detail-oriented Android Developer with 4 years of experience in designing
        and developing high quality Android Applications.
        </p>
        <a href={resume} download>
            <button className="hover">
                Resume
            </button>
        </a>
      </div>
    </section>
  );
}

export default Nimrod;
