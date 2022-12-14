let content0=
  `<div class="game-block" data-web="app develop">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/app-development.png" alt="">
    </div>
  </div>
  <div class="game-block" data-web="app develop">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/app-development.png" alt="">
    </div>
  </div>
  <div class="game-block" data-web="coding">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/coding.png" alt="">
    </div>
  </div>
  <div class="game-block" data-web="coding">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/coding.png"  alt="">
    </div>
  </div>
  <div class="game-block" data-web="computer">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/computer.png" alt="">
    </div>
  </div>
  <div class="game-block" data-web="computer">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/computer.png" alt="">
    </div>
  </div>`;

let content1=
  `<div class="game-block" data-web="download">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/download.png" alt="">
    </div>
  </div> 
  <div class="game-block" data-web="download">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/download.png" alt="">
    </div>
  </div>
  <div class="game-block" data-web="hosting">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/hosting.png" alt="">
    </div>
  </div>
  <div class="game-block" data-web="hosting">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/hosting.png" alt="">
    </div>
  </div> 
  <div class="game-block" data-web="network">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/network.png" alt="">
    </div>
  </div>
  <div class="game-block" data-web="network">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/network.png" alt="">
    </div>
  </div>`

let content2=
  `<div class="game-block" data-web="programming">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/programming.png" alt="">
    </div>
  </div> 
  <div class="game-block" data-web="programming">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/programming.png" alt="">
    </div>
  </div>
  <div class="game-block" data-web="responsive">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/responsive.png" alt="">
    </div>
  </div>
  <div class="game-block" data-web="responsive">
    <div class="face front"></div>
    <div class="face back">
      <img src="images/responsive.png" alt="">
    </div>
  </div>`


  document.querySelector(".control-buttons span").onclick = function () {  

    let yourName = prompt("Please Enter Your Name"); 
    if (yourName == null || yourName == "") {
      document.querySelector(".name span").innerHTML = 'Unknown';
    } 
    else {
      document.querySelector(".name span").innerHTML = yourName;
    }
    document.querySelector(".control-buttons").remove();

  };


  let flag=0;
  let count=0;
  let triesElement = document.querySelector('.tries span');
  let duration = 1000;  
  let blocksContainer = document.querySelector(".memory-game-blocks");
  let blocks = Array.from(blocksContainer.children); 
  let orderRange = Array.from(Array(blocks.length).keys()); // To extract the keys in an array
  level0();

  function initialize(){

    count=0;
    blocksContainer = document.querySelector(".memory-game-blocks");
    blocks = Array.from(blocksContainer.children); 
    orderRange = Array.from(Array(blocks.length).keys());
    shuffle(orderRange);
    blocks.forEach((block, index) => {
      block.style.order = orderRange[index];
      block.addEventListener('click', function () {  
        flipBlock(block);
      });
    });

  }

  function removeHasMatch(){

    document.getElementById("win-container").style.display="none";
        for(i=0; i<blocks.length; i++) {
          blocks[i].classList.remove('has-match');
    
        }
        triesElement.innerHTML =0;
  }
  function cont(flg){

    document.querySelector("#Wrongtries span").innerHTML = triesElement.innerHTML;
    if (flg==0){
      document.getElementById("win-container").style.display="block";
      document.querySelector(".win .continue").onclick = function () {
          removeHasMatch();
          level1();  
      }; 
      document.querySelector(".win .back").onclick = function () {
        removeHasMatch();
        level0();  
      }; 
    }
    else if (flg==1){
      document.getElementById("win-container").style.display="block";
      document.querySelector(".win .continue").onclick = function () {
        removeHasMatch();
        level2(); 
      }; 
      document.querySelector(".win .back").onclick = function () {
        removeHasMatch();
        level1();  
      }; 
    }
    else if (flg==2){
      document.getElementById("finish-container").style.display="block";
      document.querySelector("#fWrongtries span").innerHTML = triesElement.innerHTML;
      document.querySelector(".finish .retry").onclick = function () {
        document.getElementById("finish-container").style.display="none";
          for(i=0; i<blocks.length; i++) {
            blocks[i].classList.remove('has-match');
      
          }
          triesElement.innerHTML=0;
          
          level0(); 
        }; 
      document.querySelector(".finish .back").onclick = function () {
      document.getElementById("finish-container").style.display="none";
        for(i=0; i<blocks.length; i++) {
          blocks[i].classList.remove('has-match');
      
        }
          triesElement.innerHTML =0;
          level2();  
      }; 
    }  
  }
  function level0 (){

    flag=0;
    document.querySelector(".title h1").innerHTML = "Level 0";
    blocksContainer.innerHTML = content0;
    document.getElementById("memory-game-blocks").style.width="400px";
    initialize();

  }

  function level1(){

    flag=1;
    document.getElementById("memory-game-blocks").style.width="400px";
    document.querySelector(".title h1").innerHTML = "Level 1";
    blocksContainer.innerHTML = content0 + content1;
    initialize(); 

   }

  function level2(){

    flag=2;
    document.getElementById("memory-game-blocks").style.width="500px";
    document.querySelector(".title h1").innerHTML = "Level 2";
    blocksContainer.innerHTML=content0 + content1 + content2;
    initialize();

  }
  
  function flipBlock(selectedBlock) {

    selectedBlock.classList.add('is-flipped');
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    if (allFlippedBlocks.length === 2) {
      stopClicking();
      checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
  
  }

  function stopClicking() {

    blocksContainer.classList.add('no-clicking');
    setTimeout(() => {   
      blocksContainer.classList.remove('no-clicking');
    }, duration);
  
  }

  function checkMatchedBlocks(firstBlock, secondBlock) {
      
    if (firstBlock.dataset.web === secondBlock.dataset.web) {
      count+=2;
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
  
      firstBlock.classList.add('has-match');
      secondBlock.classList.add('has-match');
   
      if(count == blocks.length){
        blocksContainer.classList.remove('no-clicking');
        
        if(flag==0){
          cont(0);
        }
        else if (flag==1){
          cont(1);
        }
        else if (flag==2){
          cont(2);
        }
      }
    } 
    else {
  
      triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
      setTimeout(() => {

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
  
      }, duration);
      
    }
  
  }
  
  function shuffle(array) {
    let current = array.length, temp, random;

    while (current > 0) {
  
      random = Math.floor(Math.random() * current);
      current--;
 
      temp = array[current]; // Save the last element of the array in temp
  
      array[current] = array[random];
  
      array[random] = temp;
  
    }
    return array;
  }
  