import React from 'react'
import { SubTitle, Title } from 'style'
import { projectList } from 'data/projectList'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Project = () => {

    const renderLinks = project => project.links.map((link, idx) => {

        return <span key={link.src}>
            {idx > 0 ? <span>, </span> : null}
            <a href={link.src} target={link.src ? "_blank" : ""}>
                {link.name}
            </a>
        </span>
    })

    return (
        <div>
            <Title>프로젝트</Title>
            {projectList.map((item, idx) => <ProjectWrapper key={idx}>
                <SubTitle style={{fontWeight: 600, fontSize: '21px'}}>{item.name}</SubTitle>

                <Carousel showThumbs={item.imgs.length > 1} showArrows={false} showIndicators={false} showStatus={false}>
                    {item.imgs.map((img, i) => <div key={i}>
                            <img src={img} alt={img}/>
                        </div>
                    )}
                </Carousel>

                <LiWrapper >
                    <li>{item.subtitle}</li>
                    <li>{item.period}</li>
                    <li>개발인원: {item.devMembers}</li>
                    <li>{item.stack}</li>
                    <DiscriptWrapper>{item.discript.map((e, i) => <div key={i}>{e}</div>)}</DiscriptWrapper>
                    <LinksWrapper>
                        {renderLinks(item)}
                    </LinksWrapper>
                    <HRLine />
                </LiWrapper>
            </ProjectWrapper>)}
        </div>
    )
}

const ProjectWrapper = styled.div`
    padding: 1rem 0;
`
const LiWrapper = styled.ul`
    margin-top: 1rem;
    & > li {
        margin-top: 4px;
        font-size: 15px;
    }
`
const HRLine = styled.hr`
    margin-top: 3rem;
    border-top: 1px dashed #bbb;
    border-bottom: 1px dashed #fff;
`
const DiscriptWrapper = styled.div`
    margin-top: 1rem;
    & > * {
        margin-bottom: 4px;
        font-family: "SCDream3";
        font-size: 13px;
    }
` 
const LinksWrapper = styled.div`
    margin-top: 1rem;
`
export default Project
