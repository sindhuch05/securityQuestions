let totalQuestions={
  q0:`what is your childhood name?`,
  q1:`who is your favorite school teacher?`,
  q2:`which sport you like the most?`,
  q3:`which place you like the most?`,
  q4:`who is your role model?`,
  q5:`what is your favorite dish?`
};



let emptyObj={};
let counter1=0;
let counter2=0;
let counter3=0;
let val1={};
let val2={};
let val3={};

let que_wrapper=document.querySelectorAll(".ask");

for(i=0;i<que_wrapper.length;i++){
  que_wrapper[i].addEventListener('click',(event)=>{
    event.preventDefault();

    let target_id=event.target.id;

    if(target_id=="question1_options"){
      counter1++;
      let copy=Object.assign(totalQuestions,val1);

    }
    else if(target_id=="question2_options"){
      counter2++;
      let copy=Object.assign(totalQuestions,val2);
    }
    else if(target_id=="question3_options"){
      counter3++;
      let copy=Object.assign(totalQuestions,val3);
    }


if(counter1<=1 || counter2<=1 || counter3<=1){
  // console.log(event.target);
   let refined_Ques=[];

  for(prop in totalQuestions){
    refined_Ques.push(totalQuestions[prop]);
  }
  // console.log(refined_Ques);
  event.target.innerHTML=`<option value="quest0" class="quest0" disabled selected>Please select a question...</option>`;

  for(j=0;j<refined_Ques.length;j++){
    event.target.innerHTML +=`<option value="${refined_Ques[j]},q${j}" class="${j}" id="q${j}">${refined_Ques[j]}</option>`;
  }
}
else if(counter1>1){
  let new_obj=Object.assign(totalQuestions,diff_arr,{q:val1});
  // let new_obj=Object.assign(totalQuestions,{q:val1});
  console.log(new_obj+"@@@@@@@@@@@");
  console.log(event.target.id+"$$$");
  event.target.innerHTML=`<option value="quest0" class="quest0" disabled selected>Please select a question...</option>`;

  for(k=0;k<new_obj.length;k++){
    event.target.innerHTML +=`<option value="${new_obj[k]},q${k}" class="${k}" id="q${k}">${new_obj[k]}</option>`;
  }
}
else if(counter2>1){
  let new_obj1=Object.assign(totalQuestions,diff_arr,{q:val2});
  // let new_obj=Object.assign(totalQuestions,{q:val2});
  console.log(new_obj1+"(((((())))))");
  console.log(event.target.id);
  event.target.innerHTML=`<option value="quest0" class="quest0" disabled selected>Please select a question...</option>`;

  for(l=0;l<new_obj1.length;l++){
    event.target.innerHTML +=`<option value="${new_obj1[l]},q${l}" class="${l}" id="q${l}">${new_obj1[l]}</option>`;
  }
}
else if(counter3>1){
  let new_obj2=Object.assign(totalQuestions,diff_arr,{q:val3});
  // let new_obj=Object.assign(totalQuestions,{q:val3});
  console.log(new_obj2+"##############");
  console.log(event.target.id+"$$$");
  event.target.innerHTML=`<option value="quest0" class="quest0" disabled selected>Please select a question...</option>`;

  for(m=0;m<new_obj2.length;m++){
    event.target.innerHTML +=`<option value="${new_obj2[m]},q${m}" class="${m}" id="q${m}">${new_obj2[m]}</option>`;
  }
}

  });


  que_wrapper[i].addEventListener('input',(event)=>{
    event.preventDefault();
let target_id=event.target.id;

if(target_id=="question1_options"){
  counter1++;
console.log(counter1);
  val1=Object.assign({},{q:event.target.value});
  console.log(val1+"!!!!!!!!!");
  let sep_arr=[];

  sep_arr.push(event.currentTarget.value);
  let sep_val=sep_arr[0].split(",");
  console.log(sep_val);
  console.log(event.currentTarget.value);
 let value1=sep_val[0];
  let value2=sep_val[1];

  let diff_arr=Object.assign(emptyObj,{q:value1});
  let removed_ques=Object.assign(totalQuestions);

  // delete removed_ques[value2];



   function deleteByVal(val) {
       for (var key in removed_ques) {
           if (removed_ques[key] == val) delete removed_ques[key];
       }
   }

   deleteByVal('value1');
   console.log(removed_ques);
   console.log(diff_arr);

}
else if(target_id=="question2_options"){
  counter2++;
  console.log(counter2);
  val2=Object.assign({},{q:event.target.value});
  let sep_arr=[];

  sep_arr.push(event.currentTarget.value);
  let sep_val=sep_arr[0].split(",");
  console.log(sep_val);
  console.log(event.currentTarget.value);
 let value1=sep_val[0];
  let value2=sep_val[1];

  let diff_arr=Object.assign(emptyObj,{q:value1});
  let removed_ques=Object.assign(totalQuestions);

  function deleteByVal(val) {
      for (var key in removed_ques) {
          if (removed_ques[key] == val) delete removed_ques[key];
      }
  }

  deleteByVal('value1');
  console.log(removed_ques);
  console.log(diff_arr);

}
else if(target_id=="question3_options"){
  counter3++;
  console.log(counter3);
  val3=Object.assign({},{q:event.target.value});
  let sep_arr=[];

  sep_arr.push(event.currentTarget.value);
  let sep_val=sep_arr[0].split(",");
  console.log(sep_val);
  console.log(event.currentTarget.value);
 let value1=sep_val[0];
  let value2=sep_val[1];

  let diff_arr=Object.assign(emptyObj,{q:value1});
  let removed_ques=Object.assign(totalQuestions);

  function deleteByVal(val) {
      for (var key in removed_ques) {
          if (removed_ques[key] == val) delete removed_ques[key];
      }
  }

  deleteByVal('value1');
  console.log(removed_ques);
  console.log(diff_arr);
}

  //   let sep_arr=[];
   //
  //   sep_arr.push(event.currentTarget.value);
  //   let sep_val=sep_arr[0].split(",");
  //   console.log(sep_val);
  //   console.log(event.currentTarget.value);
  //  let value1=sep_val[0];
  //   let value2=sep_val[1];
   //
  //   let diff_arr=Object.assign(emptyObj,{q:value1});
  //   let removed_ques=Object.assign(totalQuestions);
   //
  //   delete removed_ques[value2];
   //
  //    console.log(removed_ques);
  //    console.log(diff_arr);





  })
}

// function repeat(a,b,c){
// this.c=c;
// console.log(c+"&&&&");
//  document.getElementById(a).addEventListener('click',function(event){
//    event.preventDefault();
//    let new_obj=Object.assign(totalQuestions,{c:b});
//    console.log(new_obj);
//    console.log(event.target.id+"$$$");
//    event.target.innerHTML=`<option value="quest0" class="quest0" disabled selected>Please select a question...</option>`;
//
//    for(k=0;k<new_obj.length;k++){
//      event.target.innerHTML +=`<option value="${new_obj[k]},q${k}" class="${k}" id="q${k}">${new_obj[k]}</option>`;
//    }
//  })
// }
