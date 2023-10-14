const image = Array.from(document.querySelectorAll(".image")),
    appear = document.querySelector(".appear"), 
    img = document.querySelector(".appear .display"),
    x = document.querySelector(".xMark"),
    right = document.querySelector(".right"),
    left = document.querySelector(".left");

    let imageIndex = 0;

    image.forEach((element, i) => {element.addEventListener("click", () =>{

        img.setAttribute("src", image[i].src);
    
        appear.style.display = "flex";

        imageIndex = i;
    })});

    right.addEventListener("click", rightClick)

    left.addEventListener("click", leftClick)

    x.addEventListener("click", xClick)

    // right key
    function rightClick(){

        imageIndex++;

        if(imageIndex == 6) imageIndex = 0;

        img.setAttribute("src", image[imageIndex].src);
    }

    // left key
    function leftClick(){

        imageIndex--;

        if(imageIndex == -1) imageIndex = 5;

        img.setAttribute("src", image[imageIndex].src);
    }

    // escape key
    function xClick(){appear.style.display = "none";}

