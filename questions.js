
let ques_array=[`what is your childhood name?`,
  `who is your favorite school teacher?`,
  `which sport you like the most?`];

  let val1=ques_array[0];
  let val2=ques_array[1];
  let val3=ques_array[2];

let initarray=[];

  var addQuest = document.querySelectorAll('.ask');

Array.from(addQuest).forEach(link => {
    link.addEventListener('click', function(event) {
let click1=event.target.value;
let queSel;
console.log(click1+"&&&&");
    if(click1=='please1'){
queSel=question1_options;
exec(question1_options,question2_options,question3_options);

    }
    else if (click1=='please2') {
      queSel=question2_options;
      exec(question2_options,question1_options,question3_options);
    }
    else if (click1=='please3'){
      queSel=question3_options;
      exec(question3_options,question1_options,question2_options);
    }


    function exec(queName1,queName2,queName3)
      {
        event.preventDefault();
        queName1.innerHTML=`<option value="${val1}">${val1}</option>
           <option value="${val2}">${val2}</option>
           <option value="${val3}">${val3}</option>`;

        queName1.addEventListener('input',function(){
          console.log(event.target.value+"####");
          let val=event.target.value;

initarray.push(val);


          if(val==val1){
          queName2.innerHTML=`<option value="${val2}">${val2}</option>
               <option value="${val3}">${val3}</option>`;
            queName3.innerHTML=`<option value="${val2}">${val2}</option>
                  <option value="${val3}">${val3}</option>`;
          }
          else if(val==val2){
            queName2.innerHTML=`<option value="${val1}">${val1}</option>
               <option value="${val3}">${val3}</option>`;
               queName3.innerHTML=`<option value="${val1}">${val1}</option>
                  <option value="${val3}">${val3}</option>`;
          }
          else if(val==val3){
            queName2.innerHTML=`<option value="${val1}">${val1}</option>
               <option value="${val2}">${val2}</option>`;
               queName3.innerHTML=`<option value="${val1}">${val1}</option>
                  <option value="${val2}">${val2}</option>`;
          }


      });
    }
console.log(initarray+"@@@@@");
  });
  });




  --------------
  let count=0;

  let arr1=[];

  let adder=document.querySelectorAll('.ask');
  console.log(adder);

  for(i=0;i<adder.length;i++)
  {
    adder[i].addEventListener('click',function(event){
  count++;
    event.preventDefault();
    console.log("clicked"+event.target.value);
  arr1.push(event.target.value);
  console.log(count);

  if(count==1){
  console.log("1st click");
  console.log(ques_array.length);
    for(j=0;j<ques_array.length;j++)
    {
      event.target.innerHTML+=`<option value="${ques_array[j]}">${ques_array[j]}</option>`;
    }


  }



    });
    adder[i].addEventListener('input',function(){
      console.log(event.target.value);
      arr1.push(event.target.value);
    });


  }
