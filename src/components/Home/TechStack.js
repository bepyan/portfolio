import React from 'react'
import { SubTitle, Title } from 'style'
import { stackList } from 'data/stackList'
import styled from 'styled-components'
import useScrollFadeIn from 'hook/useScrollFadeIn'

const TechStack = () => {
    const animatedTitle = useScrollFadeIn();
    const animatedItem = {
        0: useScrollFadeIn('left', 1),
        1: useScrollFadeIn('left', 1, 0.1),
        2: useScrollFadeIn('left', 1, 0.2),
        3: useScrollFadeIn('left', 2, 0.3),
        4: useScrollFadeIn('left', 1, 0.4)
    };
      
    const renderStacks = (list) => list.map(item => <FlexDiv key={item.stack}>
        <span>{item.stack}</span> 
        <Rate>{item.rate}</Rate>
    </FlexDiv>)

    return (
        <div>
            <Title {...animatedTitle}>기술 / 스택</Title>
            <Row>
                {
                    stackList.map((item, idx) => <div key={idx}  {...animatedItem[idx]}>
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
    & > :last-child{
        flex: 0.3
    }
`
const Rate = styled.span`
    margin-left: auto;
    margin-right: 2rem;
`
export default TechStack

