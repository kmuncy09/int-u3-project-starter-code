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
let nameInput=document.querySelector(".name");
let passenger1Input=document.querySelector(".passenger-1");
let passenger2Input=document.querySelector(".passenger-2");
let passenger3Input=document.querySelector(".passenger-3");
let start=document.querySelector(".start");
let storyOpening=document.querySelector(".story-opening");

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
let buttonHeadingHome7=document.querySelector(".heading-home-7");
let buttonHeadingHome8=document.querySelector(".heading-home-8");
let buttonHeadingHome9=document.querySelector(".heading-home-9");
let buttonHeadingHome10=document.querySelector(".heading-home-10");
let buttonStartOver=document.querySelector(".start-again");
let buttonSubmit=document.querySelector(".Submit");


// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
buttonSubmit.addEventListener ('click', function() {
    storyOpening.style.display='block';
    buttonOption1.style.display='inline';
    buttonOption2.style.display='inline';
    start.style.display='none';
    let name=nameInput.value;
    let passenger1=passenger1Input.value;
    let passenger2=passenger2Input.value;
    let passenger3=passenger3Input.value;
    const names=document.querySelectorAll(".name");
    names.forEach((you) => you.textContent=name);
    const passenger1s=document.querySelectorAll(".passenger-1");
    passenger1s.forEach((one) => one.textContent=passenger1);
    const passenger2s=document.querySelectorAll(".passenger-2");
    passenger2s.forEach((two) => two.textContent=passenger2);
    const passenger3s=document.querySelectorAll(".passenger-3");
    passenger3s.forEach((three) => three.textContent=passenger3);
});
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
    buttonOption4.style.display='none';
});
buttonOption4.addEventListener('click',function(){
    option4.style.display='block';
    buttonOption8.style.display='inline';
    buttonOption3.style.display='none';
});
buttonOption5.addEventListener('click',function(){
    option5.style.display='block';
    buttonOption9.style.display='inline';
    buttonOption6.style.display='none';
});
buttonOption6.addEventListener('click',function(){
    option6.style.display='block';
    buttonOption10.style.display='inline';
    buttonOption5.style.display='none';
});
buttonOption7.addEventListener('click',function(){
    option7.style.display='block';
    buttonHeadingHome7.style.display='inline';
});
buttonOption8.addEventListener('click',function(){
    option8.style.display='block';
    buttonHeadingHome8.style.display='inline';
});
buttonOption9.addEventListener('click',function(){
    option9.style.display='block';
    buttonHeadingHome9.style.display='inline';
});
buttonOption10.addEventListener('click',function(){
    option10.style.display='block';
    buttonHeadingHome10.style.display='inline';
});
buttonHeadingHome7.addEventListener('click',function(){
    headingHome.style.display='block';
});
buttonHeadingHome8.addEventListener('click',function(){
    headingHome.style.display='block';
});
buttonHeadingHome9.addEventListener('click',function(){
    headingHome.style.display='block';
});
buttonHeadingHome10.addEventListener('click',function(){
    headingHome.style.display='block';
});
buttonStartOver.addEventListener('click',function(){
    storyOpening.style.display='none';
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
    headingHome.style.display='none';
    buttonOption3.style.display='inline';
    buttonOption4.style.display='inline';
    buttonOption5.style.display='inline';
    buttonOption6.style.display='inline';
    buttonOption7.style.display='inline';
    buttonOption8.style.display='inline';
    buttonOption9.style.display='inline';
    buttonOption10.style.display='inline';
    buttonOption1.style.display='inline';
    buttonOption2.style.display='inline';
    start.style.display='block'
});