const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth'
    })
  })
}

// Функция для занесения имени в правый верхний угол при загрузке страницы
window.addEventListener("load",function(){
    document.getElementById('helloResSessionStorage').innerHTML = sessionStorage.getItem("Name");
});

//Функция для примера с именем
document.getElementById('sayhellobutton').onclick = function(){
    let a = document.getElementById('sayhello').value;
    if(a == ""){
        document.getElementById('helloRes').innerHTML = "Нужно ввести что-нибудь(";
        return;
    }

    document.getElementById('helloRes').innerHTML ='Привет, ' + a + '!';
    document.getElementById('helloResSessionStorage').innerHTML = a;
    sessionStorage.setItem("Name",a);
}
// Функиция для нахождения площади
document.getElementById('sqrbutton').onclick = function(){
    let a = document.getElementById('side1').value;
    let b = document.getElementById('side2').value;
    if (a=='' || b==''){
        document.getElementById('squareRes').innerHTML = 'Нужно ввести все значения(';
        return;
    }
    else if (!isNaN(0.5*(a*b))) document.getElementById('squareRes').innerHTML = 0.5*(a*b);
    else document.getElementById('squareRes').innerHTML = 'Нужно ввести числа(';
}


//Функция для сравнения строк
document.getElementById('stringsbutton').onclick = function(){
    let a = document.getElementById('string1').value;
    let b = document.getElementById('string2').value;
    if (a=='' || b==''){
        document.getElementById('stringsRes').innerHTML = 'Нужно ввести все значения(';
        return;
    }

    if(a.length == b.length) document.getElementById('stringsRes').innerHTML = 'Введенные строки одинаковой длины!';
    else document.getElementById('stringsRes').innerHTML = 'Введенные строки разной длины!';
}


// Функция для нахождения максимума и минимума
document.getElementById('maxminbutton').onclick = function(){
    let arr = [];
    let sum = 0;
    arr.push(document.getElementById('maxmininput1').value);  
    arr.push(document.getElementById('maxmininput2').value);
    arr.push(document.getElementById('maxmininput3').value);
    arr.push(document.getElementById('maxmininput4').value);
    arr.push(document.getElementById('maxmininput5').value);
    for (let index = 0; index < arr.length; index++) {
      sum+=arr[index];      
    }
        let min = arr[0];
        let max = arr[0];
    if(arr[0] == ""){
        document.getElementById('maxminRes').innerHTML = 'Нужно ввести все значения(';
        return;
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i]!= ""){
            if(min > arr[i]) min = arr[i];
            if (max < arr[i]) max = arr[i];
        }
        else{
            document.getElementById('maxminRes').innerHTML = 'Нужно ввести все значения(';
            return;
        }
        
    }
    if (isNaN(sum*2)) {
      document.getElementById('maxminRes').innerHTML = 'Нужно ввести числа(';
    }
    else document.getElementById('maxminRes').innerHTML = 'Минимальное: '+ min +  '  максимальное: ' + max;
}


// Заставка
document.getElementById('surprisebutton').addEventListener('click',()=>{
    let h = document.getElementById('header');
    let s = document.getElementById('surpriseScreen');

    document.body.style.overflow = 'hidden';
    h.style.overflow = 'hidden';
    s.style.display = 'flex';

    var animationShow = s.animate({height : "100%"},500);
    animationShow.addEventListener('finish', function() {
        s.style.height = '100%';
        let date = new Date();
        
        let min = date.getMinutes();
        let hour = date.getHours();
        if(min < 10) {min = '0'+ min};

        if(hour < 10) {hour = '0'+ hour};

        document.getElementById('time').innerHTML =  hour +':' + min;

        let day = date.getDate();
        let month = date.getMonth()+ 1;

        if(day < 10) {day = '0'+ day};

        if(month < 10) {month = '0'+ month};
        document.getElementById('dateWithName').innerHTML = day  + ':' + month + ':' + date.getFullYear() + ((sessionStorage.getItem('Name') ==null)? ' '  : ' ' + sessionStorage.getItem('Name'));
      });

    s.addEventListener('click',()=>{
        var animationHide = s.animate({height : "0%"},500);

        animationHide.addEventListener('finish', function() {
            s.style.height = '0%';
            s.style.display = 'none';
        });
        
        document.body.style.overflow = 'visible';
        h.style.overflow = 'visible';
        
    });
})



// Таймер
timer = {
    sec: 0,
    min: 0,
    hour: 0,
    check: true,
  
    start() {
      document.getElementById('pTimer').innerHTML = this.hour +  ":" +  this.min + ":" + this.sec;
      if (this.sec < 59) {
        this.sec++;
      }
      else if (this.min < 59) {
        this.min++;
        this.sec = 0;
      }
      else {
        this.hour++;
        this.sec = 0;
        this.min = 0;
      }
      let interval = setInterval(() => {
        if (this.check == true) {
          document.getElementById('pTimer').innerHTML = this.hour +  ":" +  this.min + ":" + this.sec;
          if (this.sec < 59) {
            this.sec++;
          }
          else if (this.min < 59) {
            this.min++;
            this.sec = 0;
          }
          else {
            this.hour++;
            this.sec = 0;
            this.min = 0;
          }
        }
        else {
          clearInterval(interval);
          this.check = true;
        }
      }, 1000);
    },
  
  
    stop() {
      this.check = false;
    },
  
  
    restart() {
      this.sec = 0;
      this.min = 0;
      this.hour = 0;
      document.getElementById('pTimer').innerHTML = this.hour +  ":" +  this.min + ":" + this.sec;
      if (this.sec < 59) {
        this.sec++;
      }
      else if (this.min < 59) {
        this.min++;
        this.sec = 0;
      }
      else {
        this.hour++;
        this.sec = 0;
        this.min = 0;
      }
    }
  };
  
  let startBtn = document.getElementById("start"); 
  startBtn.addEventListener("click", function () { 
    timer.start(); 
    startBtn.disabled = true; 
    stopBtn.disabled = false; 
  });
  
  let stopBtn = document.getElementById("stop");
  stopBtn.addEventListener("click", function () {
    timer.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
  });
  
  let restartBtn = document.getElementById("restart");
  restartBtn.addEventListener("click", function () {
    timer.restart();
  });

  //тест
  let arrAnswers = ['0','3','4','3','1','3','2','1','2','2','2'];
  let check = false;
  let checkedRadio;
  let quesnumber = 'question'; 
  let arr;
  let labelCheckedID;
  document.getElementById('testButton').addEventListener('click',()=>{
    
    for (let i = 1; i <= 10; i++) {
      quesnumber += i;
      arr = document.getElementsByName(quesnumber);
      arr.forEach(t => {
        if(t.checked){
          checkedRadio = t;
          check = true;
        }
      });
      
      if (!check) {
        console.log(i);
        document.getElementById(quesnumber).style.backgroundColor ='rgb(121, 121, 121)';
      }
      else if (checkedRadio.value == arrAnswers[i]) {
        console.log(i);
        document.getElementById(quesnumber).style.backgroundColor ='rgb(122, 190, 122)';
        labelCheckedID = checkedRadio.getAttribute('id');
        labelCheckedID+='_lab';
        console.log(document.getElementById(labelCheckedID).innerHTML);
      }

      else {
        document.getElementById(quesnumber).style.backgroundColor ='rgb(236, 87, 87)';
        console.log(i);
        labelCheckedID = checkedRadio.getAttribute('id');
        labelCheckedID+='_lab';
        console.log(document.getElementById(labelCheckedID).innerHTML);
      }
      quesnumber = 'question';
      check = false;
    }
    
    document.getElementById('testButtonRetry').style.display = 'block';
    document.getElementById('sectionTest').scrollIntoView({
      behavior: 'smooth'
    })
  });


  document.getElementById('testButtonRetry').addEventListener('click',()=>{
    window.location.reload();
  });