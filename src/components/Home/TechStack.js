import React from 'react'
import { Title } from 'style'
import { stackList } from 'data/stackList'
import styled from 'styled-components'
// import useScrollFadeIn from 'hook/useScrollFadeIn'

const TechStack = () => {
    // const animatedTitle = useScrollFadeIn();
    // const animatedItem = {
    //     0: useScrollFadeIn('left', 1),
    //     1: useScrollFadeIn('left', 1, 0.1),
    //     2: useScrollFadeIn('left', 1, 0.2),
    //     3: useScrollFadeIn('left', 2, 0.3),
    //     4: useScrollFadeIn('left', 1, 0.4)
    // };

    const Stacks = ({ list }) => list.map(item => <Stack key={item.stack}>
        <img alt={item.stack} src={item.imgUrl}/>
    </Stack>)

    return (
        <div>
            <Title>기술 / 스택</Title>
            <Row>
                {
                    stackList.map((item, idx) => <div key={idx}>
                        <Stacks key={idx} list={item.list} />
                    </div>)
                }
            </Row>
        </div>
    )
}
const Stack = styled.div`
    margin-right: 4px;
`
const Row = styled.div`
    & > div {
        display: flex;
    }
`
export default TechStack

