
for (var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var letter=this.innerHTML;
    switch(letter){
        case('w'):
            var audio= new Audio("sounds/tom-1.mp3"); audio.play();
            break;
        case('a'):
            var audio= new Audio("sounds/tom-2.mp3"); audio.play();
            break;
        case('s'):
            var audio= new Audio("sounds/tom-3.mp3"); audio.play();
            break;
        case('d'):
            var audio= new Audio("sounds/tom-4.mp3"); audio.play();
            break;
        case('j'):
            var audio= new Audio("sounds/crash.mp3"); audio.play();
            break;
        case('k'):
            var audio= new Audio("sounds/kick-bass.mp3"); audio.play();
            break;
        case('l'):
            var audio= new Audio("sounds/snare.mp3"); audio.play();
            break;
    }
    effect(letter); 
});
    
    document.addEventListener("keypress",function(event){
        switch(event.key){
            case('w'):
                var audio= new Audio("sounds/tom-1.mp3"); audio.play();
                break;
            case('a'):
                var audio= new Audio("sounds/tom-2.mp3"); audio.play();
                break;
            case('s'):
                var audio= new Audio("sounds/tom-3.mp3"); audio.play();
                break;
            case('d'):
                var audio= new Audio("sounds/tom-4.mp3"); audio.play();
                break;
            case('j'):
                var audio= new Audio("sounds/crash.mp3"); audio.play();
                break;
            case('k'):
                var audio= new Audio("sounds/kick-bass.mp3"); audio.play();
                break;
            case('l'):
                var audio= new Audio("sounds/snare.mp3"); audio.play();
                break;
}       
    effect(event.key);
});
}

function effect(a){
    var btn=document.querySelector("."+a);
    btn.classList.add("clicked");
    setTimeout(function(){btn.classList.remove("clicked");},140);
}