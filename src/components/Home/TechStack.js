import React from 'react'
import { Title } from 'style'

const TechStack = () => {
    const stackList = [
        {stack: "C++", rate: 4},
        {stack: "JAVA", rate: 4},
        {stack: "Python", rate: 2},
        {stack: "ModernJS", rate: 5},
        {stack: "TypeScript", rate: 3},
        {stack: "HTML/CSS/SCSS", rate: 4},

        {stack: "VanillaJS", rate: 4},
        {stack: "React", rate: 5},
        {stack: "Vue", rate: 3},
        {stack: "Django", rate: 1},
        {stack: "ReactNative", rate: 5},

        
        {stack: "NodeJS(Express)", rate: 1},
        {stack: "MySQL", rate: 1},
        {stack: "Mongoose", rate: 1},
        {stack: "Firebase", rate: 1},
        

        {stack: "Crawling/NPL/GTP-2", rate: 5},
        {stack: "AWS", rate: 1},
        {stack: "Spring", rate: 1},
    ]

    return (
        <div>
            <Title>기술 / 스택</Title>
            {stackList.map((item, idx) => <div key={idx}>
                {item.stack} {item.rate}
            </div>)}
        </div>
    )
}

export default TechStack

