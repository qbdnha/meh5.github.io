var audio = document.getElementById('audio');
audio.play();
var lis = document.querySelectorAll('ul.jj li');
for(var i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        lis[i].index=i;
        audio.src='../audio/'+i+'.mps';
        audio.play();
        console
    }
}
lis.forEach(li => {
    li.onclick = function() {
        audio.src = 
        audio.play();
        console.log(this.innerHTML)
    }
});
document.querySelector('.s1').onclick = function() {
    audio.currentTime = 0;
    console.log('重开')
};
document.querySelector('.s2').onclick = function() {
    audio.pause();
    console.log('停止')
}