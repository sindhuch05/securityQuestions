let totalQuestions={
  0:`what is your childhood name?`,
  1:`who is your favorite school teacher?`,
  2:`which sport you like the most?`,
  3:`which place you like the most?`,
  4:`who is your role model?`,
  5:`what is your favorite dish?`
};

let box1=[];
let box2=[];
let box3=[];

let string1="";
let string2="";
let string3="";

let selectQues=document.querySelectorAll('.ask');

for(i=0;i<selectQues.length;i++){
  selectQues[i].addEventListener('click',firstClick,false);
  selectQues[i].addEventListener('input',addedQuest,false);
}

function firstClick(){
  event.preventDefault();
let x=event.target.id;
let arrayList=[];
if(x==='box1'){
  for(z=0;z<box1.length;z++){
    console.log(string1+"string1");
    console.log(string2+"string2");
    console.log(string3+"string3");
    if(!(box1[z]===box2[(box2.length)-1] && box1[z]===box3[(box3.length)-1])){
      console.log(box1[z]+"BOX1");
    
      totalQuestions[z]=box1[z];
    }

  }

  //console.log(arrayList);
}
else if (x==='box2') {
  // arrayList=[...box2];
  for(z=0;z<box2.length;z++){
    if(!(box2[z]===box1[(box1.length)-1] && box2[z]===box3[(box3.length)-1])){
      totalQuestions[z]=box2[z];
    }

  }console.log(totalQuestions);

}
else if (x==='box3') {
  // arrayList=[...box3];
  for(z=0;z<box3.length;z++){
    if(!(box3[z]===box1[(box1.length)-1] && box3[z]===box2[(box2.length)-1])){
      totalQuestions[z]=box3[z];
    }

  }

}
  event.target.innerHTML=`<option value="Please select a question..." class="quest0" disabled selected>Please select a question...</option>`;

let o1=Object.assign({},totalQuestions);


for(prop in o1){
  arrayList.push(o1[prop]);

}

  for(j=0;j<arrayList.length;j++){
    event.target.innerHTML +=`<option value="${arrayList[j]}" class="${j}" id="q${j}">${arrayList[j]}</option>`;
  }

}

function addedQuest(){
  event.preventDefault();
  let x=event.target.id;
  if(x==='box1'){

string1=event.target.value;
    box1.push(event.target.value);

  for(prop in totalQuestions){

    if(totalQuestions[prop]==event.target.value){
      delete totalQuestions[prop];
    }
  }

  }

  else if (x==='box2') {
    string2=event.target.value;
    box2.push(event.target.value);
    for(prop in totalQuestions){

      if(totalQuestions[prop]==event.target.value){
        delete totalQuestions[prop];
      }
    }

  }
  else if (x==='box3') {
    string3=event.target.value;
    box3.push(event.target.value);
    for(prop in totalQuestions){

      if(totalQuestions[prop]==event.target.value){
        delete totalQuestions[prop];
      }
    }
  }

}
