import React from 'react'
import { SubTitle, Title } from 'style'
import { projectList } from 'data/projectList'
import styled from 'styled-components'

const Project = () => {

    const renderLinks = project => project.links.map((link,idx) => {

        return <span key={link.src} >
            {idx > 0 ? <span>, </span> : null}
            <a href={link.src}>
                {link.name}
            </a>
        </span>
    })

    return (
        <div>
            <Title>프로젝트</Title>
            {projectList.map((item, idx) => <ProjectWrapper key={idx}>
                <SubTitle>{item.name}</SubTitle>
                <ul>
                    <li>{item.period}</li>
                    <li>{item.subtitle}</li>
                    <li>{item.stack}</li>
                    <li>{item.discript}</li>
                    {renderLinks(item)}
                </ul>
            </ProjectWrapper>)}
        </div>
    )
}

const ProjectWrapper = styled.div`
    padding: 1rem 0;
`

export default Project
