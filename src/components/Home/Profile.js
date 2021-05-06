import React from 'react'
import styled from 'styled-components'

const Profile = () => {
    const href = url => {
        window.location.href = url;
    }

    return (
        <Wrapper>
            <ProfileImg src={`https://user-images.githubusercontent.com/65283190/113720795-f3858800-9729-11eb-805d-6840c094260e.png`} />
            <ProfileRight>
                <Name>김평안 <span style={{ marginLeft: '4px', fontSize: 16}}>bepyan@naver.com</span></Name>

                <div>
                    <p>사람에 관심이 많은 개발자입니다.</p>
                    <p style={{ marginTop: '5px' }}>사용자에게 어떻게 편리한 서비스를 제공할것인지,</p>
                    <p style={{ marginTop: '5px' }}>개발자에게 좋은 코드가 무엇인지 끝없이 고민합니다.</p>
                    <p style={{ marginTop: '10px' }}>현재 <Underline>React(Typescript)</Underline>를 주로 사용하며 Full-Stack 개발자를 목표로 공부하고 있습니다.</p>
                </div>

                <Links>
                    <div onClick={() => href("https://github.com/bepyan")}>
                        <img alt="github" src="https://img.shields.io/badge/Github-black?style=flat-square&logo=Github&logoColor=white" />
                    </div>
                    <div onClick={() => href("https://www.notion.so/bepyan/GET-START-de49308c21884e8a8037829b0c156931")}>
                        <img alt="notion" src="https://img.shields.io/badge/Notion-black?style=flat-square&logo=Notion&logoColor=white" />
                    </div>
                    <div onClick={() => href("https://velog.io/@bepyan")}>
                        <img alt="velog" src="https://img.shields.io/badge/Velog-20c997?style=flat-square&logo=Vimeo&logoColor=white" />
                    </div>
                </Links>
            </ProfileRight>
        </Wrapper>
    )
}

export default Profile

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`
const Name = styled.p`
    font-family: 'SCDream6';
    font-size: 30px;
    margin: 1rem 0;
    display: flex;
    align-items: flex-end;
`
const ProfileImg = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    filter: brightness(110%) contrast(95%);
    &:hover {
    }
`
const ProfileRight = styled.div`
    margin-left: 3rem;
    & > * {
        margin-bottom: 1rem;
    }
`
const Links = styled.div`
        display: flex;
    & > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 4px;
    }
`
const Underline = styled.span`
    text-decoration: underline
`