
export const quiz = {
    fetch("./question.json")
        .then(response => response.json())
        .then(data => console.log(data));

};