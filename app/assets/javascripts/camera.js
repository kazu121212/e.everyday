function post (){

  
  const video  = document.querySelector("#camera");
  const canvas = document.querySelector("#picture");
  const se     = document.querySelector('#se');

  
  /** カメラ設定 */
  const constraints = {
    audio: true,
    video: {
    
      facingMode: "user"   // フロントカメラを利用する
      // facingMode: { exact: "environment" }  // リアカメラを利用する場合
    }
  };

  /**
   * カメラを<video>と同期
   */
  navigator.mediaDevices.getUserMedia(constraints)
  .then( (stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
      video.play();
    };
  })
  
  .catch( (err) => {
    console.log(err.name + ": " + err.message);
  });


  
  /**
   * シャッターボタン
   */
   document.querySelector("#ccc").addEventListener("click", (e) => {
    

    var canvas = document.getElementById('picture');	// videoのstreamをcanvasに書き出す方法.
    const ctx = canvas.getContext("2d");

    // 演出的な目的で一度映像を止めてSEを再生する
   
    se.play();      // シャッター音
    
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    
    timer = window.setTimeout(disMsg, 5000);
    function disMsg(){
      canvas.toBlob(function(blob) {
      var img = document.getElementById('image');
      img.src = window.URL.createObjectURL(blob);

      

    e.preventDefault();
    const form = document.getElementById("form");
   
    const formData = new FormData(form);
    
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/checks", true);
    XHR.responseType = "json";
    XHR.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
     
      formData.append('image', blob, '<%= Time.now.strftime("%Y%m%d%H%M") %>}.jpeg');
      // formData.append('avatar[uuid]', '<%= user.uuid %>');
     
    XHR.send(formData);
  }, 'image/jpeg', 0.95);
  video.srcObject.getTracks()[0].stop();

   }





  let btnCancel = document.getElementById('btnCancel');
  

  btnCancel.addEventListener('click', function(){
    console.log('aaa')
    check.classList.toggle('open-menu')
    console.log(nav)
    nav.classList.toggle('open-menu')
    console.log(btn)
    btn.innerHTML = 'check-in';
    window.clearTimeout(timer);
    window.clearTimeout(timer2);
   

  });
  var count = 5;
    var id = setInterval(function(){
      count--;
      document.querySelector('#timer').textContent=count;
      if(count <= 0) clearInterval(id);
    },1000);
    // setTimeout(function() {
    // canvas.toBlob(function(blob) {
    //   var img = document.getElementById('image');
    //   img.src = window.URL.createObjectURL(blob);

    //   const form = document.getElementById("form");
    //   const formData = new FormData(form);
      

    //   var request = new XMLHttpRequest();
    //   request.open('POST', '/checks');
    //   request.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
     
    //   formData.append('avatar[image]', blob, '<%= Time.now.strftime("%Y%m%d%H%M") %>}.jpeg');
    //   formData.append('avatar[uuid]', '<%= user.uuid %>');
    //   request.send(formData);

    //   console.log(formData)

  //   }, 'image/jpeg', 0.95);
  //   video.srcObject.getTracks()[0].stop();
  // });

  })
   





};




window.addEventListener('load', post);








// window.onload = () => {
//   const video  = document.querySelector("#camera");
//   const canvas = document.querySelector("#picture");
//   const se     = document.querySelector('#se');

  
//   /** カメラ設定 */
//   const constraints = {
//     audio: true,
//     video: {
    
//       facingMode: "user"   // フロントカメラを利用する
//       // facingMode: { exact: "environment" }  // リアカメラを利用する場合
//     }
//   };

//   /**
//    * カメラを<video>と同期
//    */
//   navigator.mediaDevices.getUserMedia(constraints)
//   .then( (stream) => {
//     video.srcObject = stream;
//     video.onloadedmetadata = (e) => {
//       video.play();
//     };
//   })
  
//   .catch( (err) => {
//     console.log(err.name + ": " + err.message);
//   });


  
//   /**
//    * シャッターボタン
//    */
//    document.querySelector("#ccc").addEventListener("click", () => {

//     var canvas = document.getElementById('picture');	// videoのstreamをcanvasに書き出す方法.
//     const ctx = canvas.getContext("2d");

//     // 演出的な目的で一度映像を止めてSEを再生する
//     video.pause();  // 映像を停止
//     se.play();      // シャッター音
//     setTimeout( () => {
//       video.play();    // 0.5秒後にカメラ再開
//     }, 3000);
//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

   
   
// });




// };