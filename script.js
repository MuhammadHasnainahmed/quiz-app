const question = [
  {
    'que': "Which of the following is a markup language?",
    'a': "HTML",
    'b': "CSS",
    'c': "JAVASCRIPT",
    'd': "PHP",
    'correct': "a",
  },

  {
    'que': "What year was javascript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of the about",
    'correct': "b",
  },

  {
    'que': "What does CSS Stands for?",
    'a': "Hypertext Markup languages",
    'b': "Cascading style sheet",
    'c': "Jason object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "b",
  },

  
];


let index = 0;
let total = question.length
let right = 0;
let wrong = 0;
const quesbox = document.getElementById("queabox")
const optionInputs = document.querySelectorAll('.options')
const loadquestion = function () {
    if (index === total) {
        return endQuiz()
    }
    reset() 
  const data = question[index]
   quesbox.innerText =  `${index+1}) ${data.que}`;
   optionInputs[0].nextElementSibling.innerText = data.a;
   optionInputs[1].nextElementSibling.innerText = data.b;
   optionInputs[2].nextElementSibling.innerText = data.c;
   optionInputs[3].nextElementSibling.innerText = data.d;
   
};

const  submitQuiz =  () => {
  const data = question[index];
    const ans = getAnswer();
    console.log(ans , data.correct)
    if (ans === data.correct){
         right++;
    } else{
        wrong++
    }
    index++;
    loadquestion();
    return;
}

const getAnswer =  () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
               answer = input.value
              
            } 
        }
    )
    return answer;
}

function reset() {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}


const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
      <h3>Thanks you for playing </h3>
      <h2>${right} / ${total} are correct </h2>
 `   
}

loadquestion(); 