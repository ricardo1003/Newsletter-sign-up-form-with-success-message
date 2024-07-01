const mainElement = document.getElementsByTagName("main")[0]
const formElement = document.getElementsByTagName("form")[0]

const signUpSection = document.getElementsByClassName("signUp")[0]
const errorLabelElement = document.getElementById("errorLabel")
const inputElement = document.getElementsByTagName("input")[0]
const sendButtonElement = document.getElementsByTagName("button")[0]

const sucessSection = document.getElementsByClassName("successMesage")[0]
const dismissButton = document.getElementsByTagName("button")[1]


sendButtonElement.addEventListener("click",()=>{
    const emailValidation = inputElement.value[(inputElement.value.indexOf("@")+1)] === "."
    if (inputElement.value.trim() === "" || inputElement.value.indexOf("@") === -1 || inputElement.value.indexOf(".com") === -1 || emailValidation){
        errorLabelElement.classList.remove("noDisplay")
        inputElement.classList.add("error-state")
    }else{
        errorLabelElement.classList.add("noDisplay")
        inputElement.classList.remove("error-state")
        setTimeout(() => {
            mainElement.classList.add("submitted")
            signUpSection.classList.add("noDisplay")
            sucessSection.classList.remove("noDisplay")
        }, 250)
    }
})

dismissButton.addEventListener("click",()=>{
    setTimeout(() => {
        formElement.reset()
        mainElement.classList.remove("submitted")
        signUpSection.classList.remove("noDisplay")
        sucessSection.classList.add("noDisplay")
    }, 122.5)
})