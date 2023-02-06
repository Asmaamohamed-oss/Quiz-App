
class Final{
    constructor(correctAnswers,totalAmount) {
        this.scoreElement = document.querySelector(".score");
        this.againBtn = document.querySelector("#again");

        this.againBtn.addEventListener("click",this.tryAgain)
        this.render(correctAnswers,totalAmount)
    }
    render(correctAnswers,totalAmount){
        this.scoreElement.innerHTML = `
        You Have Answered ${correctAnswers} Qustions From ${totalAmount}
        `
    }
    tryAgain=()=>{
        window.location.reload()
    }

}

export default Final