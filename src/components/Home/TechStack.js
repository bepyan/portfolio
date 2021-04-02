import React from 'react'
import { SubTitle, Title } from 'style'
import { stackList } from 'data/stackList'
import styled from 'styled-components'

const TechStack = () => {

    const renderStacks = (list) => list.map(item => <div key={item.stack}>
        {item.stack} {item.rate}
    </div>)

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

const Row = styled.div`
    display: flex;
    & > * {
        flex: 1;
    }
`

export default TechStack

