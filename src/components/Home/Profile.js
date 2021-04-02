import React from 'react'
import styled from 'styled-components'

const Profile = () => {
    return (
        <Wrapper>
            <Img src={`https://avatars.githubusercontent.com/u/65283190?s=400&u=793fee7ddc4c66f600b9ca6f663b3dfd1e38b5dd&v=4`}/>
            <Cols>
                <Title>김 평 안</Title>
                <p>도전을 두려워하지 않는 개발자입니다</p>
                <p>간단한 자기소개 글</p>
                
                <a href="https://github.com/bepyan" >Github</a>
                <a href="https://www.notion.so/bepyan/GET-START-de49308c21884e8a8037829b0c156931" >Notion</a>
            </Cols>
        </Wrapper>
    )
}

export default Profile

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Cols = styled.div`
    margin-left: 2rem;
    & > * {
        margin-bottom: 1rem;
    }
`
const Title = styled.p`
    font-weight: 900;
    font-size: 30px;
    margin: 1rem 0;
`

const Img = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
` 