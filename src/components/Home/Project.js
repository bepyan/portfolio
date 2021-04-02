import React from 'react'
import { SubTitle, Title } from 'style'
import { projectList } from 'data/projectList'

const Project = () => {
    return (
        <div>
            <Title>프로젝트</Title>
            {projectList.map((item, idx) => <div key={idx}>
                <SubTitle>{item.name}</SubTitle>
            </div>)}
        </div>
    )
}

export default Project
