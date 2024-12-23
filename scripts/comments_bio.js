const arrComment = [{
    name: "Victor Pinto",
    date: "11/02/2023",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    }, {
    name: "Christina Cabrera",
    date: "10/28/2023",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    }, {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }];

//TIME STAMP
let timeStamp = new Date();
let mm = String(timeStamp.getMonth() + 1).padStart(2, "0");
let dd = String(timeStamp.getDate()).padStart(2,"0");
let yyyy = timeStamp.getFullYear();

timeStamp = mm + "/" + dd + "/" + yyyy;

const form = document.querySelector(".comments__input-info-form");


function displayComments(arr) {

    const commentDiv = document.querySelector(".comments__section");

    for(let key in arrComment) {

    //ADDS THE PARENT DIV FOR THE NEW COMMENT
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("comments__new");
    
    //ADDS THE IMG TO THE PARENT DIV
    const mainImg = document.createElement("img");
    mainImg.classList.add("comments__new-image");
    mainDiv.appendChild(mainImg);

    //DIV FOR BELOW. FLEX REASONS
    const subDiv = document.createElement("div");
    subDiv.classList.add("comments__container");
    mainDiv.appendChild(subDiv);

    //ADDS THE NAME TO THE PARENT DIV
    const mainName = document.createElement("h2");
    mainName.innerText = arrComment[key]["name"];
    mainName.classList.add("comments__new-name");
    subDiv.appendChild(mainName);

    //ADDS THE TIME STAMP TO THE PARENT DIV
    const mainTime = document.createElement("aside");
    mainTime.innerText = arrComment[key]["date"];
    mainTime.classList.add("comments__new-time");
    subDiv.appendChild(mainTime);

    //ADDS THE COMMENT TO THE PARENT DIV
    const mainP = document.createElement("p");
    mainP.innerText = arrComment[key]["comment"];
    mainP.classList.add("comments__new-comment");
    subDiv.appendChild(mainP);

    commentDiv.appendChild(mainDiv);
    }
};

displayComments(arrComment);


//ON CLICK NEW COMMENT

form.addEventListener("submit", newPost => {

    newPost.preventDefault();

    const newComment = {};
    
    newComment.name = newPost.target.name.value;
    newComment.comment = newPost.target.comment.value;

    //ADDS THE PARENT DIV FOR THE NEW COMMENT
    const commentDiv = document.querySelector(".comments__section");
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("comments__new");
    commentDiv.appendChild(mainDiv);
    
    //ADDS THE IMG TO THE PARENT DIV
    const mainImg = document.createElement("img");
    mainImg.classList.add("comments__new-image");
    mainDiv.appendChild(mainImg);

    //DIV FOR BELOW. FLEX REASONS
    const subDiv = document.createElement("div");
    subDiv.classList.add("comments__container");
    mainDiv.appendChild(subDiv);

    //ADDS THE NAME TO THE PARENT DIV
    const mainName = document.createElement("h2");
    mainName.innerText = newComment.name;
    mainName.classList.add("comments__new-name");
    subDiv.appendChild(mainName);

    //ADDS THE TIME STAMP TO THE PARENT DIV
    const mainTime = document.createElement("aside");
    mainTime.innerText = timeStamp;
    mainTime.classList.add("comments__new-time");
    subDiv.appendChild(mainTime);

    //ADDS THE COMMENT TO THE PARENT DIV
    const mainP = document.createElement("p");
    mainP.innerText = newComment.comment;
    mainP.classList.add("comments__new-comment");
    subDiv.appendChild(mainP);
    commentDiv.appendChild(mainDiv);
    
    
    //MAKES NEW COMMENTS GO TO THE TOP
    let toTheTop = document.querySelector(".comments__section");
    toTheTop.insertBefore(mainDiv, toTheTop.childNodes[0]);

    //CLEARS INPUT ON SUBMIT
    let formInput = document.querySelector(".comments__input-info-form")
    formInput.reset();
    
});  

console.log(arrComment);

// let arrComment = newComment.push();
// newComment.push(arrComment);
