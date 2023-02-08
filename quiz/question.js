
class Question{
    constructor(question) {
        this.questionEle = document.querySelector("#question")
        this.answerEles = [...document.querySelectorAll(".answer")]

        this.correctAnswer = question.correct_answer
        this.qusetion = question.question;
        this.isCorrect = false;
        this.answers = [this.correctAnswer,...question.incorrect_answers]
    }
    answer(checkedElement){
        let answer =  checkedElement[0].textContent.trim();
        this.isCorrect = answer == this.correctAnswer ? true : false;
    }
    render(){
        this.questionEle.innerHTML =this.qusetion;
        this.answerEles.forEach((label,index)=>{ 
            label.innerHTML = `<input type="radio" name="answer"
            ${this.answers[index]==undefined?'hidden':''}> 
            ${this.answers[index] !== undefined ? this.answers[index] :''}`
        })
    }
}

export default Question