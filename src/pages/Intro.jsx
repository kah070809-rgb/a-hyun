import React from "react";
import * as S from "../style/style.style";
import redbull from "./redbull.png";
import track from "./track.png";
import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate();

    return (
        <S.Background bgImg={track}>
            <S.F1Car onClick={() => navigate("/profile")}>
                <img src={redbull} />
            </S.F1Car>
        </S.Background>
    );
};

export default Intro;
