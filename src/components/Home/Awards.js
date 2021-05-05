import React from 'react'
import { Title } from 'style'
import styled from 'styled-components'

const Awards = () => {
    return (
        <div>
            <Title>수상경력</Title>
            <ListWrapper>
                <p>제10회 전국 창의문제 해결능력 경진대회 은상</p>
                <p>주부산중국총영사관 주최 대학생중국어말하기대회 장려상</p>
                <p>KIT Engineering Fair 2020 일반 캡스톤디자인 장려상</p>
            </ListWrapper>
        </div>
    )
}

const ListWrapper = styled.div`
    & > * {
        margin: 1rem 0;
        font-size: 16px;
    }
`

export default Awards