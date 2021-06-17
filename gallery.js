let images=[
    "url(./Images/1_min.jpg)",
    "url(./Images/2_min.jpg)",
    "url(./Images/3_min.jpg)",
    "url(./Images/4_min.jpg)",
    "url(./Images/5_min.jpg)",
    "url(./Images/6_min.jpg)",
    "url(./Images/7_min.jpg)",
    "url(./Images/8_min.jpg)",
    "url(./Images/9_min.jpg)",
    "url(./Images/10_min.jpg)",
    "url(./Images/11_min.jpg)",
]


let img=document.getElementsByClassName("image")[0];

function randomize(){
    let randomNumber;
    randomNumber=Math.floor(Math.random() * images.length);
    return randomNumber;
}

function image(){
    
    let random = randomize();
    img.style.backgroundImage = images[random];

    images.splice(random,1);

    if(images.length==0) images=[
        "url(./Images/1_min.jpg)",
        "url(./Images/2_min.jpg)",
        "url(./Images/3_min.jpg)",
        "url(./Images/4_min.jpg)",
        "url(./Images/5_min.jpg)",
        "url(./Images/6_min.jpg)",
        "url(./Images/7_min.jpg)",
        "url(./Images/8_min.jpg)",
        "url(./Images/9_min.jpg)",
        "url(./Images/10_min.jpg)",
        "url(./Images/11_min.jpg)",
    ]    
}

window.onload = function () {
    img.style.backgroundImage = images[Math.floor(Math.random() * images.length)];
    setInterval(image, 4800);
};

