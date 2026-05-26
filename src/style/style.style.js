import styled, { keyframes } from "styled-components";

const dash = keyframes`
    0%{
        transform: translate(100%, -100%) scale(0.1);
        filter: blur(10px);
    }
    70%{
        scale: (0.6);
        opacity: 1;
        filter: blur(0);
    }
    100%{
        transform: translate(-50%, -50%) scale(1) ;
    }
`;

export const F1Car = styled.span`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    animation: ${dash} 2.2s cubic-bezier(0.25, 1, 0.5, 1.2);

    & img {
        width: 600px;
        max-width: 80%;
        height: auto;
        filter: drop-shadow(0 15px 10px rgba(0, 0, 0, 0.4));
        transition: transform 0.3s ease;
        cursor: pointer;
    }

    & img:hover {
        transform: translateY(-10px) scale(1.2);
    }
`;

export const Container = styled.article`
    display: flex;
    flex-direction: row; /* 가로 배치로 변경 */
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100vw;
    height: 100vh;
    overflow: hidden; /* 가로 배치 + 스크롤 막기 조합이 가장 예쁩니다 */
    background-color: #d3d3d3;
`;

export const Profiles = styled.section`
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;

export const Role = styled.p`
    color: blue;
    font-weight: bold;
    margin: 5px 0;
`;

export const Img = styled.img`
    width: 170px;
    height: 170px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const Details = styled.section`
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;
export const Text = styled.p`
    margin: 5px 0;
`;

export const SubTitle = styled.h3`
    margin-top: 20px;
`;

export const List = styled.ul`
    padding-left: 20px;
`;

export const Item = styled.li`
    margin-bottom: 5px;
`;

export const LinkText = styled.a`
    color: blue;
    &:hover {
        text-decoration: underline;
    }
`;

export const Background = styled.article`
    background:
        linear-gradient(
            to bottom,
            #87ceeb 0%,
            #87ceeb 30%,
            rgba(135, 206, 235, 0.5) 65%,
            transparent 100%
        ),
        url(${(props) => props.bgImg});

    background-size:
        100% auto,
        100% 45%;
    background-position:
        center top,
        center bottom;

    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    padding-bottom: 80px;
    box-sizing: border-box;
    margin: 0;

    & img {
        width: 600px;
        max-width: 80%;
        height: auto;
        filter: drop-shadow(0 15px 10px rgba(0, 0, 0, 0.4));
        transition: transform 0.3s ease;
        cursor: pointer;
    }

    & img:hover {
        transform: translateY(-10px) scale(1.2);
    }
`;

export const SideCar = styled.span`
    position: absolute;

    top: ${(props) => props.topPos || "80%"};
    left: ${(props) => props.leftPos || "50%"};

    transform: translate(-50%, -50%);
    z-index: 9;

    animation: ${dash} 2.2s cubic-bezier(0.25, 1, 0.5, 1.2) forwards;
    animation-delay: ${(props) => props.delay || "0s"};
    animation-fill-mode: backwards;

    & img {
        max-width: 40%;
        height: auto;

        filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.3));
    }
`;
