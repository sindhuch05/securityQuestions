let ques_array=[`what is your childhood name?`,
  `who is your favorite school teacher?`,
  `which sport you like the most?`,
`which place you like the most?`,
`who is your role model?`,
`what is your favorite dish?`];

let emptyArr=[];

let askQues1=document.querySelector('#question1_options');
let askQues2=document.querySelector('#question2_options');
let askQues3=document.querySelector('#question3_options');
let askQues=document.querySelectorAll('.ask');


let xyz=[];



  askQues1.addEventListener('input',function(event){
    event.preventDefault();
    console.log(event.target);
    emptyArr.push(event.target.value);

    if(emptyArr.length>0){
    console.log("clicked");
    askQues2.addEventListener('click',function(eve){
      eve.preventDefault();
      for(i=0;i<emptyArr.length;i++){
        let a1=emptyArr[i];
        console.log(a1+"^^^");

       let xyz=ques_array.filter(function(each){
         return (each!=a1)
       });

       console.log(xyz);
       askQues2.innerHTML="";
       for(i=0;i<xyz.length;i++){
         askQues2.innerHTML+=`<option value="${xyz[i]}">${xyz[i]}</option>`;

       }
      }

    });
    askQues3.addEventListener('click',function(even){
      even.preventDefault();
      for(i=0;i<emptyArr.length;i++){
        let a1=emptyArr[i];
        console.log(a1+"^^^");

        xyz=ques_array.filter(function(each){
         return (each!=a1)
       });
askQues3.innerHTML="";
       console.log(xyz);
       for(i=0;i<xyz.length;i++){
         askQues3.innerHTML+=`<option value="${xyz[i]}">${xyz[i]}</option>`;

       }
      }

    })



  }
  });

  askQues2.addEventListener('input',function(event){
    event.preventDefault();
    console.log(event.target);
    emptyArr.push(event.target.value);

    if(emptyArr.length>0){
    console.log("clicked");
    askQues3.addEventListener('click',function(eve){
      eve.preventDefault();
      console.log(emptyArr+"%%%%%%%");
      console.log(xyz);
      for(i=0;i<emptyArr.length;i++){


       xyza=xyz.filter(function(each){

         for(j=0;j<emptyArr.length;j++)
         {

           if (each!=emptyArr[j]);

           return each;
         }


       });

       console.log(xyza);
       askQues3.innerHTML="";
       for(i=0;i<xyza.length;i++){
         askQues3.innerHTML+=`<option value="${xyza[i]}">${xyza[i]}</option>`;

       }
      }

    });
    askQues1.addEventListener('click',function(even){
      even.preventDefault();
      for(i=0;i<emptyArr.length;i++){
        let a1=emptyArr[i];
        console.log(a1+"^^^");

       xyza=xyz.filter(function(each){
         return (each!=a1)
       });
  askQues1.innerHTML="";
       console.log(xyza);
       for(i=0;i<xyza.length;i++){
         askQues1.innerHTML+=`<option value="${xyza[i]}">${xyza[i]}</option>`;

       }
      }

    })



  }
  });
