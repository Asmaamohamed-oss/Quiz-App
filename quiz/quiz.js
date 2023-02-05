import Question from "./question.js";
import Final from "./final.js";

class Quiz{
    constructor(quizDom,amount,questions) {
        this.quizElement =quizDom;
        this.currentElement = document.querySelector(".current")
        this.totalElement = document.querySelector(".total")
        this.finalElement = document.querySelector(".final")
        this.nextBtn = document.querySelector("#next")

        this.totalAmount = amount;
        this.answerdAmount =0;
        /// Invoke Functions
        this.questionsNewFormat = this.setQuestions(questions)
        this.renderQuestion()
        this.nextBtn.addEventListener("click",this.nextQuestion)
    }

    //Methods
    setQuestions(questions){
        return questions.map((question)=> new Question(question))
    }

    renderQuestion(){
        this.questionsNewFormat[this.answerdAmount].render();
        this.currentElement.innerHTML = `${this.answerdAmount+1}`;
        this.totalElement.innerHTML = `${this.totalAmount}`
    }

    nextQuestion=()=>{
        let checkedElement = this.questionsNewFormat[this.answerdAmount].answerEles.filter((label)=>{
            return label.firstChild.checked;
        })
        if(checkedElement.length == 0){
            alert("please answer")
        }else{
            this.questionsNewFormat[this.answerdAmount].answer(checkedElement);
            this.answerdAmount++;
            this.answerdAmount < this.totalAmount ? this.renderQuestion() : this.endQuiz();
        }
    }
    endQuiz(){
        console.log("end this quiz");
        // hide quiz
        this.quizElement.style.display="none"
        this.finalElement.style.display="block";
        const countAnswers = this.correctAnswersAmount()
        new Final(countAnswers,this.totalAmount)

        new Final(countAnswers,this.totalAmount)
    }
    correctAnswersAmount=()=>{
        let count = 0;
        this.questionsNewFormat.forEach(element => {
            if(element.isCorrect){
                count++
            }
        });
        return count
    }
}


export default Quiz