const imgShields = (title, color, logo, logoColor) => `https://img.shields.io/badge/${title}-${color}?style=flat-square&logo=${logo}&logoColor=${logoColor}`

export const stackList = [
    {
        title: "Language",
        list: [
            { stack: "JavaScript(ES6)", rate: 5, imgUrl: imgShields("JavaScript", "F7DF1E", "JavaScript", "black") },
            { stack: "TypeScript", rate: 3, imgUrl: imgShields("TypeScript", "3178C6", "TypeScript", "white") },
            { stack: "JAVA", rate: 4, imgUrl: imgShields("Java", "007396", "Java", "white") },
            // { stack: "Python", rate: 2, imgUrl: imgShields("Python", "3776AB", "Python", "white") },
        ]
    },
    {
        title: "Front-Framework",
        list: [
            { stack: "VanillaJS", rate: 4, imgUrl: imgShields("VanillaJS", "F7DF1E", "JavaScript", "black") },
            { stack: "React", rate: 5, imgUrl: imgShields("React", "61DAFB", "React", "black") },
            { stack: "ReactNative", rate: 4, imgUrl: imgShields("React Native", "292C33", "React", "82D7F7") },
            { stack: "Vue", rate: 3, imgUrl: imgShields("Vue", "4FC08D", "Vue.js", "white") },
            { stack: "JavaFX", rate: 4, imgUrl: imgShields("JavaFX", "D8762C", "Java", "white") },
            // { stack: "Django", rate: 1, imgUrl: imgShields("Django", "092E20", "Django", "white") },
        ]
    },
    {
        title: "Front-end",
        list: [
            { stack: "HTML", rate: 4, imgUrl: imgShields("HTML5", "E34F26", "HTML5", "white") },
            { stack: "CSS/SCSS", rate: 4, imgUrl: imgShields("CSS/SCSS", "1572B6", "CSS3", "white") },
            { stack: "styled", rate: 5, imgUrl: imgShields("styled components", "DB7093", "styled-components", "white") },
        ]
    },
    {
        title: "Back-end",
        list: [
            { stack: "Express", rate: 4, imgUrl: imgShields("Express", "000000", "Express", "white") },
            { stack: "Spring", rate: 4, imgUrl: imgShields("Spring", "6DB33F", "Spring", "white") },
            { stack: "MySQL", rate: 3, imgUrl: imgShields("MySQL", "4479A1", "MySQL", "white") },
            { stack: "Mongoose", rate: 3, imgUrl: imgShields("MongoDB", "47A248", "MongoDB", "white") },
            { stack: "Firebase", rate: 2, imgUrl: imgShields("Firebase", "FFCA28", "Firebase", "white")},
            { stack: "AWS", rate: 1, imgUrl: imgShields("AWS", "232F3E", "Amazon AWS", "white") },
        ]
    },
]