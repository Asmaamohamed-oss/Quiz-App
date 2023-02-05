// https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
import Quiz from "./quiz.js"

class Settings{
    constructor() {
        this.settingsDom = document.querySelector(".settings")
        this.quizDom = document.querySelector(".quiz")
        this.categoryDom = document.querySelector(".category")
        this.amountDom = document.querySelector(".questions-num")
        this.difficultyDom = document.querySelectorAll(".difficulty-settings input[type='radio']")
        this.startBtn = document.querySelector(".submit")
        this.loading = document.querySelector(".loading")
        this.quiz = {}
        /// 
        this.startBtn.addEventListener("click",this.startQiuzApp)
    }
    //Methods
    //Unsing arrow function here is important becouse of value of this keyword
    startQiuzApp = async()=>{
        try {
            console.log("Quiz is start");
            const amount = this.getAmount();
            const category = this.categoryDom.value;
            const difficulty = this.chooseDifficulty();
            if(category !== "" && amount !== undefined && difficulty !== undefined){
                const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
                
                this.settingsDom.style.display = "none" 
                this.loading.style.display = "block" 
                // Get data from the object that returned from fetchData function using destructruing
                let {results} = await this.fechData(url);
                this.loading.style.display = "none" 
                this.quiz = new Quiz(this.quizDom,amount,results)
                this.quizDom.style.display = "grid" 
                //Invoke Quiz Class
            }else{
                alert("Please Complete Settings")
            }
        } catch (error) {
            console.log(error,"error");
            alert("Something wrong happend ,Can You Try Again?")
            location.reload()
        }
    }

    getAmount(){
        const amount = this.amountDom.value 
        if(amount > 0 && amount <= 50){
            return amount
        }
    }
    
    chooseDifficulty(){
        const checkDifficulty = [...this.difficultyDom].filter(function(input){
            return input.checked;
        })
        if(checkDifficulty.length === 1){
            return checkDifficulty[0].value
        }
    }
    fechData = async(url)=>{
        const getData = await (await fetch(url)).json()
        return getData;
    }
}



export default Settings