const objectContent = [
    {
        speedContent: ["C/C++", "Rust", "Go"],
        intuitiveProgrammingContent: ["Python", "JavaScript", "Scratch"],
        easyIntegrationContent: ["Python", "JavaScript", "Java"],
        librariesContent: ["React (JavaScript)", "Vue (JavaScript)", "Angular (TypeScript)"],
        easyUnderstandingContent: ["JavaScript", "Python", "TypeScript"],
        biggestCommunityContent: ["JavaScript", "Python", "React"],
    },
    
    { 
        speedContent: ["Dart (Flutter)", "React", "Java"],
        intuitiveProgrammingContent: ["Python", "JavaScript", "Dart (Flutter)"],
        easyIntegrationContent: ["Java", "Dart (Flutter)", "Swift"],
        librariesContent: ["Swift", "Java", "React Native"],
        easyUnderstandingContent: ["Python (Kivy e o BeeWare)", "React Native", "Dart (Flutter)"],
        biggestCommunityContent: ["Java", "React Native", "Swift"],
    },
]

let itemObjectContent;


function restartPage() {
    const area = document.getElementById("area");
    const backend = document.getElementById("back-end");
    const frontend = document.getElementById("front-end");
    const answersContainer = document.getElementById("answers-container");
    const notValue = "none";

    area.style.display = notValue;
    backend.style.display = notValue;
    frontend.style.display = notValue;
    answersContainer.style.display = notValue;
}


function revelaProximaPergunta(button) {
    const area = document.getElementById("area");
    area.style.display = "block";
    
    if (button === "web") itemObjectContent = objectContent[0];
    if (button === "mobile") itemObjectContent = objectContent[1];
}


function revelaVantagens(button) {
    const backEnd = document.getElementById("back-end");
    const frontEnd = document.getElementById("front-end");

    if (button === "back") {
        backEnd.style.display = "block";
        frontEnd.style.display = "none";
    }
    
    if (button === "front") {
        backEnd.style.display = "none";
        frontEnd.style.display = "block";
    }
}

function revelaMelhoresLinguagens(button) {

    const answersContainer = document.getElementById('answers-container');
    const listAnswers = document.getElementById('list-answers');
    
    let answers;

    if (button === 'libraries') answers = itemObjectContent.librariesContent;
    if (button === 'understanding') answers = itemObjectContent.easyUnderstandingContent;
    if (button === 'community') answers = itemObjectContent.biggestCommunityContent;
    if (button === 'intuitive') answers = itemObjectContent.intuitiveProgrammingContent;
    if (button === 'speed') answers = itemObjectContent.speedContent;
    if (button === 'integration') answers = itemObjectContent.easyIntegrationContent;

    answersContainer.style.display = "block";
    for (let i=0; i < 3; i++) {

        const itemRemove = document.getElementById(i+1);
        if (itemRemove) itemRemove.remove()

        const item = document.createElement('li');
        item.id = i+1;
        item.textContent = `${answers[i]}`;
        listAnswers.appendChild(item);
    }
}

