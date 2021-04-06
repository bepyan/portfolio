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
                <Name>김평안</Name>
                <div>
                    <p>무거운 엉덩이를 갖고 도전을 멈추지않는 개발자입니다.</p>
                    <p style={{marginTop: '4px'}}>사용자에게 가까운 서비스를 많이 다뤘지만 모든 서비스에 관심이 있습니다.</p>
                </div>
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
    font-family: 'SCDream6';
    font-size: 30px;
    margin: 1rem 0;
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