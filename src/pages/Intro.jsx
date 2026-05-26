import React from "react";
import * as S from "../style/style.style";
import redbull from "./redbull.png";
import track from "./track.png";
import { useNavigate } from "react-router-dom";
import mini1 from "./mini1.png";
import mini2 from "./mini2.png";

const Intro = () => {
    const navigate = useNavigate();

    return (
        <S.Background bgImg={track}>
            <S.SideCar leftPos="55%" topPos="60%" delay="0.1s">
                <img src={mini1} alt="mini1" />
            </S.SideCar>
            <S.F1Car onClick={() => navigate("/profile")}>
                <img src={redbull} alt="redbull" />
            </S.F1Car>
            <S.SideCar leftPos="72%" topPos="83%" delay="0.1s">
                <img src={mini2} alt="mini2" />
            </S.SideCar>
        </S.Background>
    );
};

export default Intro;
