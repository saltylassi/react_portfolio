import React from "react";
import NavBar from "../../../Components/navBar/navBar";
import styles from "./LSPresenter.module.css";

import TL1 from "../../../assets/images/twoluck/1.jpg";
import TL2 from "../../../assets/images/twoluck/2.jpg";
import TL3 from "../../../assets/images/twoluck/3.jpg";
import TL4 from "../../../assets/images/twoluck/4.jpg";
import TL5 from "../../../assets/images/twoluck/5.jpg";
import TL6 from "../../../assets/images/twoluck/6.jpg";
import TL7 from "../../../assets/images/twoluck/7.jpg";
import TL8 from "../../../assets/images/twoluck/8.jpg";
import TL9 from "../../../assets/images/twoluck/9.jpg";
import TL10 from "../../../assets/images/twoluck/10.jpg";
import TL11 from "../../../assets/images/twoluck/11.jpg";

import reactNativeLogo from "../../../assets/images/logos/reactNative.png";
import EC2Logo from "../../../assets/images/logos/ec2.png";
import JSLogo from "../../../assets/images/logos/js.png";
import NodeLogo from "../../../assets/images/logos/node.png";
import StyledLogo from "../../../assets/images/logos/styled.png";
import GraphQLLogo from "../../../assets/images/logos/graphQL.png";

import { useRef } from "react";

const LSPresenter = (props) => {
    const sliderRef = useRef();

    const moveToLeft = () => {
        const margin = parseInt(sliderRef.current.style.marginLeft);
        console.log(margin);
        if (
            sliderRef.current.style.marginLeft === "" ||
            sliderRef.current.style.marginLeft === 0
        ) {
            return;
        } else if (margin <= -21) {
            sliderRef.current.style.marginLeft = margin + 21 + "rem";
        }
        // else if (margin === -21) {
        //     sliderRef.current.style.marginLeft = margin + 21 + "rem";
        // }
        else {
            return;
        }
        console.log("left");
    };
    const moveToRight = () => {
        console.log("right");
        const margin = parseInt(sliderRef.current.style.marginLeft);
        console.log(margin);
        if (
            sliderRef.current.style.marginLeft === "" ||
            sliderRef.current.style.marginLeft === 0
        ) {
            sliderRef.current.style.marginLeft =
                sliderRef.current.style.marginLeft - 21 + "rem";
        } else if (margin >= -168) {
            sliderRef.current.style.marginLeft = margin - 21 + "rem";
        }
        // else if (margin === -126) {
        //     sliderRef.current.style.marginLeft = margin - 21 + "rem";
        // }
        else {
            return;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <NavBar />
                <div className={styles.wrapper}>
                    <div className={styles.textContainer}>
                        <span className={styles.title}>2LuckShare</span>
                    </div>
                    <div className={styles.appImgContainer}>
                        <div ref={sliderRef} className={styles.imgWrapper}>
                            <button
                                className={`${styles.sliderBtn} ${styles.leftBtn}`}
                                onClick={moveToLeft}
                            >
                                {"<"}
                            </button>
                            <img
                                className={styles.appImg}
                                src={TL1}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL2}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL3}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL4}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL5}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL6}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL7}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL8}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL9}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL10}
                                alt="appImg"
                            />
                            <img
                                className={styles.appImg}
                                src={TL11}
                                alt="appImg"
                            />
                            <button
                                className={`${styles.sliderBtn} ${styles.rightBtn}`}
                                onClick={moveToRight}
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.subTitle}>Tech Stack</span>
                    </div>
                    <div className={styles.logoContainer}>
                        <img
                            src={reactNativeLogo}
                            className={styles.logo}
                            alt="logo"
                        />
                        <img src={EC2Logo} className={styles.logo} alt="logo" />
                        <img src={JSLogo} className={styles.logo} alt="logo" />
                        <img
                            src={NodeLogo}
                            className={styles.logo}
                            alt="logo"
                        />
                        <img
                            src={StyledLogo}
                            className={styles.logo}
                            alt="logo"
                        />
                        <img
                            src={GraphQLLogo}
                            className={styles.logo}
                            alt="logo"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.text}>
                            2020??? ??? 2Luck?????? ????????? ??? ???????????? ?????????
                            ???????????????????????????.
                        </span>
                        <span className={styles.text}>
                            ????????????, ????????????????????? ??? ?????? ???????????? ??????
                            ??????????????? ???????????? ?????? ????????? ??????
                            ????????????????????????.
                        </span>
                        <span className={styles.text}>
                            ?????????????????? ReactNative??? styledComponents???,
                            ???????????? NodeJS??? ???????????? ????????? GraphQL???
                            ??????????????????.
                        </span>
                        <span className={styles.text}>
                            ???????????? ????????? ????????? ????????? ????????? ??????
                            ?????????????????? ?????????????????? ??????????????? ?????? ????????????
                            ?????? ???????????? ??? ????????????.
                        </span>
                        <span className={styles.text}></span>
                        <span className={styles.text}></span>
                        <span className={styles.text}></span>
                        <span className={styles.text}>
                            ??????????????? ??? ?????????????????? Redux??? ???????????? ???
                            ???????????????. ??????????????? ??????????????? ???????????????
                            ?????????????????????.
                        </span>
                        <span className={styles.text}>
                            ?????? ????????? Redux??? ????????? ????????? ????????? ??? ?????????
                            ????????? ?????? ?????? ?????? ??????????????? ????????? ????????????
                            ?????? ????????? ?????? ??????, Redux ????????? ??? ?????????
                            ???????????? ?????? ????????? ??????????????? ?????????.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LSPresenter;
