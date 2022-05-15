const btn = document.querySelector('.btn-menu');
let nav = document.querySelector('nav');
const see  = document.querySelector('#see');



btn.addEventListener('click', () => {
nav.classList.toggle('open-menu')

/* ↓ ここから追加 ↓ */
if (btn.innerHTML === 'back') {
btn.innerHTML = 'check-in';
} else {
btn.innerHTML = 'back';
}
/* ↑ ここまで追加 ↑ */
});

const teacher = document.querySelector('.teacher-menu');
const na = document.querySelector('.na');

teacher.addEventListener('click', () => {
na.classList.toggle('open-teacher')
/* ↓ ここから追加 ↓ */
if (teacher.innerHTML === 'student') {
teacher.innerHTML = 'teacher';
} else {
teacher.innerHTML = 'student';
}
/* ↑ ここまで追加 ↑ */
});


// ボタンの処理
document.getElementById("ccc").style.display ="none";


// 初期表示は非表示

const show_in = document.getElementById("ccc");

const teachers_in = document.querySelectorAll('.aaa');

// クリック処理を付与
teachers_in.forEach((teacher) => {
  teacher.addEventListener('click', () => {
    // console.log(teacher)
    // 処理を書く
    if (show_in.style.display == "none" && nav.classList.contains('open-menu') == true  )
    {
      // 表示させる
      show_in.style.display = "block";
    }

  });
});

const show_out = document.getElementById("ccc");

const teacher_out = document.querySelector('.btn-menu');

let h1 = document.getElementById("h1");
let area = document.querySelector(".name-area");




// クリック処理を付与
  teacher_out.addEventListener('click', () => {
    // console.log(teacher)
    // 処理を書く
    if (show_out.style.display == "block"  )
    {
      // 表示させる
      show_out.style.display = "none";
      h1.style.display = "none";
      area.style.display = "none";
      


    }

 
  });



  document.getElementById("h1").style.display ="none";
  document.querySelector(".name-area").style.display ="none";



  // const upper_right_name = (今回はデータを持ってくるから少し違う)
  const student_name = document.querySelectorAll(".aaa");
  

  
  student_name.forEach(function(student){
      student.onclick = function(){

        

        const name = student.dataset.name
        const id = student.dataset.id
        
        
       
        
        
      

       

   

        // document.getElementById("h1").style.display ="block";
        let h1 = document.getElementById("h1");
        let area = document.querySelector(".name-area");
        let idc = document.getElementById("id-check") 

        


        h1.innerHTML = name;
        h2.innerHTML = name;

        idc.innerHTML = id

        
      h1.style.display = "block"
      area.style.display = "block"

      
     

      

  // 
     
      
    }
  });

     
      let check = document.getElementById("g-nav") 

      let shutter = document.getElementById("shutter_in");
      let shutter_out = document.getElementById("shutter_out");

      let footer = document.getElementById("footer");
      let check_in_time = document.getElementById("check_in_time");
      let check_out_time = document.getElementById("check_out_time");
      const student_id = document.getElementById("student_id");
      const image = document.getElementById("image");
      const name_in = document.getElementById("name");
      

      
      
   
     
      

     
      



      shutter.addEventListener('click', () => {
        // console.log(teacher)

        show_in.style.display = "none";
        h1.style.display = "none";
        area.style.display = "none";
        

        // 処理を書く
        check.classList.toggle('open-menu')

        timer2 = window.setTimeout(unlock, 5000);

        function unlock () {
          check.classList.toggle('open-menu')
          nav.classList.toggle('open-menu')
          btn.innerHTML = 'check-in';
         
          see.play();      // シャッター音
        }
        

        check_in_time.value =  document.getElementById("time-check").innerHTML
        

        

       
      

        student_id.value =   document.getElementById("id-check").innerHTML
      
       


    
 

 footer.innerHTML = "IN";

 

        
      
      

    
      });

      shutter_out.addEventListener('click', () => {
        // console.log(teacher)


        // 処理を書く
        check.classList.toggle('open-menu')

        show_in.style.display = "none";
        h1.style.display = "none";
        area.style.display = "none";

        timer2 = window.setTimeout(unlock, 5000);

        function unlock () {
          check.classList.toggle('open-menu')
          nav.classList.toggle('open-menu')
          btn.innerHTML = 'check-in';
         
          see.play();      // シャッター音
        }

        

        check_out_time.value =  document.getElementById("time-check").innerHTML

        

        student_id.value =   document.getElementById("id-check").innerHTML
    
 

        footer.innerHTML = "OUT";
        footer.style.backgroundColor = "orange"
     

 

        
      
      

    
      });

      

  



  // 

  // }
  


  
// document.getElementById("shutter_out").style.display ="none";

// // 初期表示は非表示


// const teachers_out = document.querySelectorAll('.aaa');

// // クリック処理を付与
// teachers_out.forEach((teacher) => {
//   teacher.addEventListener('click', () => {
//     // console.log(teacher)
//     // 処理を書く
//     if (show_out.style.display == "none" && nav.classList.contains('open-menu') == true  )
//     {
//       // 表示させる
//       show_out.style.display = "block";

//     }

//   });
// });

// document.getElementById("shutter_out").style.display ="none";

// // 初期表示は非表示
// const show_out = document.getElementById("shutter_out");

// const teachers_out = document.querySelectorAll('.aaa');

// // クリック処理を付与
// teachers_out.forEach((teacher) => {
//   teacher.addEventListener('click', () => {
//     // console.log(teacher)
//     // 処理を書く
//     if (show_out.style.display == "none" && nav.classList.contains('open-menu') == true  )
//     {
//       // 表示させる
//       show_out.style.display = "block";
      
//     }

//   });
// });


// const teacher = document.querySelector('.teacher-menu');
// const na = document.querySelector('.na');

// teacher.addEventListener('click', () => {
// na.classList.toggle('open-teacher')
// /* ↓ ここから追加 ↓ */
// if (teacher.innerHTML === 'student') {
// teacher.innerHTML = 'teacher';
// } else {
// teacher.innerHTML = 'student';
// }
// /* ↑ ここまで追加 ↑ */
// });