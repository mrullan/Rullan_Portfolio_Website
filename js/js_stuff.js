let replySpot = document.querySelector('#comments');

let post = document.createElement("button");
let post2 = document.createElement("button");



let firstReply = document.getElementById('startReply');


post.textContent = "Post reply";
post.id = "newButton";
post.className = "replyButton";
post2.textContent = "Post reply";
post2.id = "newButton2";
post2.className = "replyButton2";

firstReply.addEventListener('click', comReply1);

//Create a input box and button for user to post comment

function comReply1(){
    let emptySpace = document.createElement("input");
    emptySpace.type = 'text';
    replySpot.appendChild(emptySpace);
    emptySpace.style.float = "right";
    emptySpace.style.width = '100%';
    emptySpace.style.textAlign = 'left';
    emptySpace.id = "created";

    replySpot.appendChild(post);
    
}

post.addEventListener('click', commitComment);


//Posts comment to original post
function commitComment(){
    let finComment = document.createElement('p');
    var goIn = document.getElementById('created').value;
    finComment.className = 'reply';
    finComment.innerHTML = goIn;
    let postReply = document.createElement("button");
    postReply.textContent = "Respond";
    postReply.id = "newerButton";
    postReply.className = "replyButton2";

    postReply.addEventListener('click', comReply2);
    
    document.getElementById('newButton').remove();
    document.getElementById('created').remove();
    replySpot.appendChild(finComment);
    finComment.appendChild(postReply);
    }
//creates a box and button for reply to comments
    function comReply2(){
        let emptySpace2 = document.createElement("input");
        emptySpace2.type = 'text';
        replySpot.appendChild(emptySpace2);
        emptySpace2.style.float = "right";
        emptySpace2.style.width = '85%';
        emptySpace2.style.textAlign = 'left';
        emptySpace2.id = "created2";
    
        
        replySpot.appendChild(post2);
    }
    post2.addEventListener('click', commitComment2);

    function commitComment2(){
        let finComment2 = document.createElement('p');
        var goIn2 = document.getElementById('created2').value;
        finComment2.className = 'reply2';
        finComment2.innerHTML = goIn2;
        // let postReply2 = document.createElement("button");
        // postReply2.textContent = "Respond";
        // postReply2.id = "newerButton";
        // postReply2.className = "replyButton2";
    
        
        replySpot.appendChild(finComment2);
        // finComment2.appendChild(postReply2);
        document.getElementById('newerButton');
        document.getElementById('created2').remove();
        document.getElementById('newButton2').remove();
        
        }
        




//let mainText = document.querySelector("input[type = 'text']")

