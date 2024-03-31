var inp = document.querySelector(".x1")
var myh1 = document.querySelector("h1")
var vowel = document.querySelector(".y1")
var consonant = document.querySelector(".y2")

vowel.innerText = "0"
consonant.innerText = "0"

function x(){
    myh1.innerText = inp.value
    for (var i of myh1.innerText){
    if(i =="ა" || i =="ე" || i =="ი" || i =="ო" || i =="უ" || i =="a" || i =="e" || i =="i" || i =="o" || i =="u"){
        vowel.innerText++; 
        
    }
    else if (i >= "ა" && i <= "ჰ" || i >= "a" && i <= "z" ){
        consonant.innerText++;
             
    }    
}

    if (vowel.innerText > consonant.innerText){
        vowel.style.color = "rgb(17, 177, 17)"
        consonant.style.color = "red"
    }
    else if (vowel.innerText < consonant.innerText){
        consonant.style.color = "rgb(17, 177, 17)"
        vowel.style.color = "red"

    }
    else if (vowel.innerText == consonant.innerText){
        vowel.style.color = "yellow"
        consonant.style.color = "yellow"
    }
    
}

