import React from 'react'
import styled from 'styled-components'

import Awards from 'components/Home/Awards'
import Career from 'components/Home/Career'
import Profile from 'components/Home/Profile'
import Project from 'components/Home/Project'
import TechStack from 'components/Home/TechStack'
import Education from 'components/Home/Education'
import ContentsAction from 'components/ContentsAction'

const Home = () => {

    return (
        <Container>
            <ContentsAction />
            <Profile />
            <TechStack />
            <Education />
            <Project />
            <Career />
            <Awards />
        </Container>
    )
}

const Container = styled.div`
    width: min(800px, 90vw);
    margin: 50px auto 50px auto;
    overflow: hidden;
    & > * {
        margin-bottom: 4rem;
    }
`
export default Home