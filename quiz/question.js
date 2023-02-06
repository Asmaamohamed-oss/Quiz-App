
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
        let inputValue =  checkedElement[0].firstChild.value
        this.isCorrect = inputValue == this.correctAnswer ? true : false;
    }
    render(){
        this.questionEle.innerHTML =this.qusetion;
        this.answerEles.forEach((label,index)=>{ 
            label.innerHTML = `<input type="radio" name="answer"
            value=${this.answers[index]}
            ${this.answers[index]==undefined?'hidden':''}> 
            ${this.answers[index] !== undefined ? this.answers[index] :''}`
        })
    }
}

export default Question