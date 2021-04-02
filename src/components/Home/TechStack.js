import React from 'react'
import { SubTitle, Title } from 'style'
import { stackList } from 'data/stackList'
import styled from 'styled-components'

const TechStack = () => {

    const renderStacks = (list) => list.map(item => <FlexDiv key={item.stack}>
        <span>{item.stack}</span> 
        <Rate>{item.rate}</Rate>
    </FlexDiv>)

    return (
        <div>
            <Title>기술 / 스택</Title>
            <Row>
                {
                    stackList.map((item, idx) => <div key={idx}>
                        <SubTitle>{item.title}</SubTitle>
                        {renderStacks(item.list)}
                    </div>)
                }
            </Row>
        </div>
    )
}
const FlexDiv = styled.div`
    display: flex;
`
const Row = styled.div`
    display: flex;
    & > * {
        flex: 1;
    }
`
const Rate = styled.span`
    margin-left: auto;
    margin-right: 2rem;
`
export default TechStack

