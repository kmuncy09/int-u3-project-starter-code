// Declare variables below to save the different divs of your story.
let option1=document.querySelector(".option-one-screen");
let option2=document.querySelector(".option-two-screen");
let option3=document.querySelector(".option-three-screen");
let option4=document.querySelector(".option-four-screen");
let option5=document.querySelector(".option-five-screen");
let option6=document.querySelector(".option-six-screen");
let option7=document.querySelector(".option-seven-screen");
let option8=document.querySelector(".option-eight-screen");
let option9=document.querySelector(".option-nine-screen");
let option10=document.querySelector(".option-ten-screen");
let option11=document.querySelector(".option-eleven-screen");
let option12=document.querySelector(".option-twelve-screen");
let headingHome=document.querySelector(".heading-home-screen");

let buttonOption1=document.querySelector(".option1");
let buttonOption2=document.querySelector(".option2");
let buttonOption3=document.querySelector(".option3");
let buttonOption4=document.querySelector(".option4");
let buttonOption5=document.querySelector(".option5");
let buttonOption6=document.querySelector(".option6");
let buttonOption7=document.querySelector(".option7");
let buttonOption8=document.querySelector(".option8");
let buttonOption9=document.querySelector(".option9");
let buttonOption10=document.querySelector(".option10");
let buttonOption11=document.querySelector(".option11");
let buttonOption12=document.querySelector(".option12");
let buttonHeadingHome=document.querySelector(".option15");
let buttonStartOver=document.querySelector(".start-again");

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
buttonOption1.addEventListener('click',function(){
    option1.style.display='block';
    buttonOption3.style.display='inline';
    buttonOption4.style.display='inline';
    buttonOption2.style.display='none';
});
buttonOption2.addEventListener('click',function(){
    option2.style.display='block';
    buttonOption5.style.display='inline';
    buttonOption6.style.display='inline';
    buttonOption1.style.display='none';
});
buttonOption3.addEventListener('click',function(){
    option3.style.display='block';
    buttonOption7.style.display='inline';
    buttonOption8.style.display='inline';
    buttonOption4.style.display='none';
});
buttonOption4.addEventListener('click',function(){
    option4.style.display='block';
    buttonOption8.style.display='inline';
    buttonOption9.style.display='inline';
    buttonOption3.style.display='none';
});
buttonOption5.addEventListener('click',function(){
    option5.style.display='block';
    buttonOption10.style.display='inline';
    buttonOption11.style.display='inline';
    buttonOption6.style.display='none';
});
buttonOption6.addEventListener('click',function(){
    option6.style.display='block';
    buttonOption10.style.display='inline';
    buttonOption12.style.display='inline';
    buttonOption5.style.display='none';
});
buttonOption7.addEventListener('click',function(){
    option7.style.display='block';
    buttonHeadingHome.style.display='inline';
    buttonOption6.style.display='none';
});
buttonOption8.addEventListener('click',function(){
    option8.style.display='block';
    buttonHeadingHome.style.display='inline';
    buttonOption9.style.display='none';
});
buttonOption9.addEventListener('click',function(){
    option9.style.display='block';
    buttonHeadingHome.style.display='inline';
    buttonOption8.style.display='none';
});
buttonOption10.addEventListener('click',function(){
    option10.style.display='block';
    buttonHeadingHome.style.display='inline';
    buttonOption11.style.display='none';
    buttonOption12.style.display='none';
});
buttonOption11.addEventListener('click',function(){
    option11.style.display='block';
    buttonHeadingHome.style.display='inline';
    buttonOption10.style.display='none';
});
buttonOption12.addEventListener('click',function(){
    option12.style.display='block';
    buttonHeadingHome.style.display='inline';
    buttonOption10.style.display='none';
});
buttonHeadingHome.addEventListener('click',function(){
    headingHome.style.display='block';

});
buttonStartOver.addEventListener('click',function(){
    option1.style.display='none';
    option2.style.display='none';
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    option11.style.display='none';
    option12.style.display='none';
    headingHome.style.display='none';
    buttonOption3.style.display='none';
    buttonOption4.style.display='none';
    buttonOption5.style.display='none';
    buttonOption6.style.display='none';
    buttonOption7.style.display='none';
    buttonOption8.style.display='none';
    buttonOption9.style.display='none';
    buttonOption10.style.display='none';
    buttonOption11.style.display='none';
    buttonOption12.style.display='none';
    buttonHeadingHome.style.display='none';
    buttonOption1.style.display='inline';
    buttonOption2.style.display='inline';
});
// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });