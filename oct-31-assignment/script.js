let myDiv = document.getElementById('my-div');


// document.getElementById('submit').addEventListener('click', ()=> {
// })

document.getElementById('submit').addEventListener('click', onSubmit);

function onSubmit(){
    let nameBox = document.getElementById("name");
    let textBox = document.getElementById('text');
    let ageBox = document.getElementById('age');
    let foodBox = document.getElementById('food');
    
    console.log(nameBox.value);

    let newSentence = (document.getElementById(
        'text'
    ).innerText = `Whatever ${nameBox.value} wants is '<br/><br>'the best ${ageBox.value}, '<br/><br>' ${foodBox.value}`);
    nameBox.value = '';

    setTimeout(() =>{
        console.log(`2 seconds have passed!`);
        nameBox.style.background = "#000000";
    }, 2000);

    setTimeout(()=>{
        nameBox.style.background="#ffffff";
        nameBox.value = '';
        ageBox.value='';
        foodBox.value='';
    }, 5000);


}