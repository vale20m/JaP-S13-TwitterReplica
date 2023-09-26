// URL de los comentarios

const URL = "https://my-json-server.typicode.com/vale20m/JaP-S13-TwitterReplica/users";

const images = "https://xsgames.co/randomusers/assets/avatars/pixel/";

const commentSection = document.querySelector(".tweets")

function showComments(comments){

    for (const comment of comments) {
        
        commentSection.innerHTML += `<hr><div class="container"><img class="float-start profile-pic" src="${images + randomNumbers() + ".jpg"}">
        <div class="content">
          <div class="names mt-3">
            <p class="full-name">${comment.name}</p>
            <p class="user-name">${getUsername(comment.name)}</p>
          </div>
        </div>
        <div class="tweet-content mt-2">
          <p>${comment.text}</p>
        </div>
        <div class="tweet-icons">
          <i class="fa fa-comment" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
        </div></div>`

    }
}

function randomNumbers(){
    return Math.round(Math.random() * 50);
}

function getUsername (name){
    let username = "@";
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i++){
        if (name[i] == " "){
            username += "_"
        } else {
            username += name[i];
        }
    }
    return username;
}

async function getComments(url){

    let response = await fetch(url);

    try {

        let responseContents = await response.json();
        showComments(responseContents);

    } catch (error) {

        console.log ("HTTP ERROR: " + error.message);

    }

/*

    if (response.ok){

        let responseContents = await response.json();
        console.log(responseContents);
        showComments(responseContents);

    } else {

        console.log("HTTP ERROR CODE: " + response.status);

    }

    */

}

getComments(URL);