const elementByWhatever = function (name, idOrClass) {
  if (idOrClass === `id` || idOrClass === `Id`) {
    return document.getElementById(name);
  } else if (idOrClass === `class` || idOrClass === `Class`) {
    return document.getElementsByClassName(name);
  } else {
    return alert(`You idiot is it either class or id and you put ${idOrClass}`);
  }
};
//------------------------------------------------------------------------------

let getSomeFriends = `Debes agregar al menos un amigo a tu lista "Yo soy tu amigo agrega a Daniel a tu lista 💖" 

You must have to add at least one friend to your list. "I'm your friend add Daniel to your list 💖"`;

let friendList = [];
let winner = `something went wrong`;

const agregarAmigo = function () {
  // Game Logic (Easy Part)
  let inputValue = document.querySelector(`#amigo`);
  console.log(inputValue.value);

  if (inputValue.value === ``) {
    alert(getSomeFriends);
  } else if (inputValue.value / 1) {
    alert(`Eso es un numero 😑`);
  } else {
    friendList.push(inputValue.value);
    console.log(friendList);
  }

  // putting the values in the HTMl (Crazy Fucking Difficult Part)

  let listSelector = elementByWhatever(`listaAmigos`, `id`);

  // create the List element
  let listElement = document.createElement(`li`);
  // add the list element to the `#listaAmigos`
  listSelector.appendChild(listElement);
  // create the P element
  let pElement = document.createElement(`p`);
  // add the p to list element
  listElement.appendChild(pElement);
  // Create the textNode
  let textNode = document.createTextNode(inputValue.value);
  // add the textNode element to p
  pElement.appendChild(textNode);
  //

  //------------------------------------------------------------------------------

  inputValue.value = ``;

  //------------------------------------------------------------------------------

  winner = ``;
};

const sortearAmigo = function () {
  // Game Logic (Easy Part)
  let randomNumber = Math.floor(Math.random() * friendList.length);
  winner = `El amigo secreto es ${friendList[randomNumber]}`;

  if (friendList.length === 0) {
    alert(getSomeFriends);
  } else {
    //-----------------------------------------------------------------------------

    // putting the values in the HTMl (Crazy Fucking Difficult Part)

    let removeFromFriendList = document.querySelector(`#resultado li`);
    removeFromFriendList.remove();

    let listSelector = elementByWhatever(`resultado`, `id`);

    // create the List element
    let listElement = document.createElement(`li`);
    // add the list element to the `#listaAmigos`
    listSelector.appendChild(listElement);
    // create the P element
    let pElement = document.createElement(`p`);
    // add the p to list element
    listElement.appendChild(pElement);
    // Create the textNode
    let textNode = document.createTextNode(winner);
    // add the textNode element to p
    pElement.appendChild(textNode);
    //

    //---------------------------------------------------------------------------------

    // remove all the elements from the friend list

    while (friendList.length !== 0) {
      let removeFromFriendList = document.querySelector(`#listaAmigos li`);
      removeFromFriendList.remove();
      friendList.pop();
    }
  }
};
