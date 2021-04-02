import React from 'react'
import styled from 'styled-components'

const Profile = () => {
    const href = url => {
        window.location.href = url;
    }

    return (
        <Wrapper>
            <ProfileImg src={`https://avatars.githubusercontent.com/u/65283190?s=400&u=793fee7ddc4c66f600b9ca6f663b3dfd1e38b5dd&v=4`} />
            <ProfileRight>
                <Name>Pyungan Kim</Name>
                <p>도전을 두려워하지 않는 개발자입니다</p>
                <p>간단한 자기소개 글</p>
                <Links>
                    <div>
                        <img src="email.png" alt="email" />
                        <p>bepyan@naver.com</p>
                    </div>
                    <div onClick={() => href("https://github.com/bepyan")}>
                        <img src="github.png" alt="github" />
                        <p>Github</p>
                    </div>
                    <div onClick={() => href("https://www.notion.so/bepyan/GET-START-de49308c21884e8a8037829b0c156931")}>
                        <img src="notion.png" alt="notion" />
                        <p>Notion</p>
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
    font-weight: 900;
    font-size: 30px;
    margin: 1rem 0;
`
const ProfileImg = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
`
const ProfileRight = styled.div`
    margin-left: 2rem;
    & > * {
        margin-bottom: 1rem;
    }
`
const Links = styled.div`
    margin-left: 1rem;
    & > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        & > p {
            text-decoration: underline;
            margin-left: 8px;
            font-size: 16px
        }
    }
`