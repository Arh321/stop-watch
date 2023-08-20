
  let minutecount = document.getElementById('minute');
  let houercount = document.getElementById('houre');
  let mili = document.getElementById('mili')
  let secound = document.getElementById('secound')
  let int = null;
  let i=0;
  let i2 = 0;
  let i3 = 0;
  let i4 = 0;

let conditions = function() {
  i = i+5;
  if(i >= 1000){
    i = 0
    i2++
  }
  if(i2 >= 60){
        i2 = 0
        i3++;
  }
  if (i3 >= 60){
    i3 = 0;
  }
  if(i4 >= 24){
    i4 = 0;
  }
let h = i4 < 10 ? "0" + i4 : i4;
houercount.innerHTML = h + ':';
let m = i3 < 10 ? "0" + i3 : i3;
minutecount.innerHTML = m+ ':';
let s = i2 < 10 ? "0" + i2 : i2;
secound.innerHTML = s;
let milisanie = i < 10 ? "00" + i : i < 100 ? "0" + i : i;
mili.innerHTML = milisanie;
}

document.getElementById('Start')
.addEventListener('click',() => {
  if (int !== null){
    clearInterval(int);
  }
  int = setInterval(conditions,5);
})

document.getElementById('Puase')
.addEventListener('click',() => {
  clearInterval(int);
})

document.getElementById('Reset').
addEventListener('click', ()=>{
  
  clearInterval(int);
  mili.innerHTML = '000';
  secound.innerHTML = '00';
  minutecount.innerHTML = '00:';
  houercount.innerHTML = '00:';
  i=0;
  i2=0;
  i3=0;
  i4=0;
});