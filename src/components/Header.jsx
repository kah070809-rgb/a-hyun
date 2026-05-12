import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const navigate = useNavigate();
    return (
        <HContainer>
            <HeaderTitle>ahyun's Profile</HeaderTitle>
            <HButtons>
                <HeaderBtn onClick={() => navigate("/")}>Intro</HeaderBtn>
                <HeaderBtn onClick={() => navigate("/profile")}>
                    Profile
                </HeaderBtn>
            </HButtons>
        </HContainer>
    );
};
export default Header;

const HContainer = styled.nav`
    width: 100%;
    height: 70px;
    background-color: #13111189;
    display: flex;
    align-items: center;
    padding: 0 40px;
    position: fixed; /* 상단 고정 */
    top: 0;
    left: 0;
    z-index: 1000; /* 다른 요소보다 위에 있게 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`;

// 중앙 제목
const HeaderTitle = styled.h1`
    font-size: 24px;
    margin: 0;
    position: absolute; /* 부모(Header) 기준 절대 위치 */
    left: 50%;
    transform: translateX(-50%); /* 정확히 정중앙으로 밀기 */
    color: #fdfdfd;
    cursor: pointer;
`;

// 오른쪽 버튼 그룹
const HButtons = styled.div`
    margin-left: auto; /* 오른쪽 끝으로 밀기 */
    display: flex;
    gap: 20px;
`;

const HeaderBtn = styled.span`
    background: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #fdfdfd;
    cursor: pointer;
    &:hover {
        color: #000; /* 마우스 올리면 진해짐 */
    }
`;
