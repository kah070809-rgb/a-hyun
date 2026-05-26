import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import * as S from "../style/style.style";
import img from "./f1.jpg";

const Profile = () => {
    const [좋아요, 좋아요변경] = useState(0);

    return (
        <>
            <S.Container>
                <S.Profiles style={{ textAlign: "center" }}>
                    <S.Img src={img} />
                    <span
                        onClick={() => {
                            좋아요변경(좋아요 + 1);
                        }}
                    >
                        🩶
                    </span>
                    {좋아요}
                    <div>
                        <h2 syle={{ margin: "10px 0 5px" }}>김아기사자</h2>
                        <S.Role>Frontend</S.Role>
                        <S.Text>열심히 배우는 프론트엔드입니다.</S.Text>
                    </div>
                </S.Profiles>
                <S.Details>
                    <h2 style={{ marginBottom: "5px" }}>김아기사자</h2>
                    <S.Role>Frontend</S.Role>
                    <S.Text>멋쟁이사자처럼</S.Text>

                    <S.SubTitle>자기소개</S.SubTitle>
                    <S.Text>
                        인천대 아기사자 14기 프론트엔드 개발자입니다. 저는
                        F1이랑 웹툰보는거 좋아합니다. 친해지면 말도 많아져요!
                    </S.Text>

                    <S.SubTitle>연락처</S.SubTitle>
                    <S.List>
                        <S.Item>이메일: Zn@gmail.com</S.Item>
                        <S.Item>전화: 010-0000-0000</S.Item>
                        <S.Item>
                            웹사이트:
                            <S.LinkText
                                href="https://velog.io/@_zn_/posts"
                                target="_blank"
                            >
                                https://velog.io/@_zn_/posts
                            </S.LinkText>
                        </S.Item>
                    </S.List>
                    <S.SubTitle>관심기술</S.SubTitle>
                    <S.List>
                        <S.Item>HTML</S.Item>
                        <S.Item>CSS</S.Item>
                        <S.Item>JavaScript</S.Item>
                    </S.List>
                    <S.SubTitle>한마디</S.SubTitle>
                    <S.Text>
                        기초를 탄탄하게 다져서 더 나은 개발자 되겠습니다!
                    </S.Text>
                </S.Details>
            </S.Container>
        </>
    );
};

export default Profile;
