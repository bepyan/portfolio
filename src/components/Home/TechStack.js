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

    const Stacks = ({ list }) => list.map(item => <StackImg key={item.stack} imgUrl={item.imgUrl} />)

    return (
        <div>
            <Title {...animatedTitle}>기술 / 스택</Title>
            <Row>
                {
                    stackList.map((item, idx) => <div key={idx}>
                        <SubTitle>{item.title}</SubTitle>
                        <Stacks list={item.list} />
                    </div>)
                }
            </Row>
        </div>
    )
}
const StackImg = styled.div`
    width: 60px;
    height: 60px;
    background-size: cover; 
    background-position: center center;
    background-image: url(${(props) => props.imgUrl});
`
const Row = styled.div`
    & > div {
        display: flex;
    }
`
export default TechStack

