import React from "react";
import styles from './main.module.css';
import dolarImage from "../images/Picture1.png";
import mobileImage from "../images/Picture 2.png";
import cubeImage from "../images/Picture 4.png";
import pilarImage from "../images/Picture 5.png";
import stairsImage from "../images/Picture 6.png";
import eyeImage from "../images/Picture 7.png";
import bigstairImage from "../images/Picture 8.png";
import sm1Image from "../images/sm 1.png";
import sm2Image from "../images/sm 2.png";
import sm3Image from "../images/sm 3.png";
import sm4Image from "../images/sm 4.png";
import sm5Image from "../images/sm 5.png";
import sm6Image from "../images/sm 6.png";

const Main = () => {
  return (
    <>
      <img className={styles.dolarImage} src={dolarImage} alt="Dollar" />
      <img className={styles.cubeImage} src={cubeImage} alt="Cube" />
      <img className={styles.pilarImage} src={pilarImage} alt="Pillar" />
      <img className={styles.stairsImage} src={stairsImage} alt="Stairs" />
      <img className={styles.eyeImage} src={eyeImage} alt="Eye" />
      <img className={styles.bigstairImage} src={bigstairImage} alt="Big Stair" />
      <div className={styles.menu}>
        <h1 className={styles.txt}>sign in</h1>
        <h1 className={styles.txt}>legal</h1>
        <h1 className={styles.txt}>license</h1>
        <h1 className={styles.txt}>security</h1>
        <h1 className={styles.txt}>careers</h1>
        <h1 className={styles.txt}>press</h1>
        <h1 className={styles.txt}>support</h1>
        <h1 className={styles.txt}>status</h1>
        <h1 className={styles.txt}>codeblog</h1>
      </div>
      <div>
        <p className={styles.cashText}>CASH</p>
        <img src={mobileImage} className={styles.mobileImage} alt="Mobile" />
        <p className={styles.appText}>APP</p>
        <img src={sm1Image} className={styles.sm1Image} alt="Sm 1" />
        <img src={sm2Image} className={styles.sm2Image} alt="Sm 2" />
        <img src={sm3Image} className={styles.sm3Image} alt="Sm 3" />
      </div>
      <div className={styles.pillarText}>
        <p>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          <br />
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          <br />
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          <br />
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          <br />
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
      </div>
      <div className={styles.apple}>
        <img src={sm4Image} className={styles.sm4Image} alt="Sm 4" />
        <p className={styles.appleText}>App Store</p>
      </div>
      <div className={styles.googlePlay}>
        <img src={sm5Image} className={styles.sm5Image} alt="Sm 5" />
        <p className={styles.googleText}>Google Play</p>
      </div>
      <img src={sm6Image} className={styles.downArrow} alt="Down Arrow" />
    </>
  );
};

export default Main;
