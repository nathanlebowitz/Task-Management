//let inputEl = document.querySelector('#user-name-input')
//let userName = inputEl.value
const TITLE = 'welcome to our ToDo App!!!';

function loginBtnClicked() {
    let userName = document.querySelector('#user-name-input').value

    let loginBtn = document.querySelector('#login-btn')

    loginBtn.innerText = 'Loging in...';
    setTimeout(displayApp, 2000);



    /*document.querySelector('#user-name')
        .innerText = userName;}
        */
}
function displayApp() {
    let container = document.querySelector('.todo-container');
    container.style.display = 'block';

    let welcomCtr = document.querySelector('.login')
    welcomCtr.style.display = 'none';

    displayTitle();
    displayTasks();

}


function displayTitleTillIndex(index){
    let subTitle = TITLE.substring(0, index+1);
    let h1El = document.querySelector('#app-title');
    if(index < TITLE.length-1) subTitle += '_';
    h1El.innerText = subTitle;
  }
  
  
  function displayTitle(){
   { for(let i = 0; i < TITLE.length; i++)
      setTimeout(function() {
        displayTitleTillIndex(i);
      }, i*100);
    }

  
  }





/*document.addEventListener('DOMContentLoaded',
    function () {
        document.querySelector('#login-btn').addEventListener('click',loginBtnClicked

    )}
);
    */
