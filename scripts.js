//       ***********************
//            INSTRUCTIONS
//       ***********************

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'
const squares = document.getElementsByTagName("td")
let boxElements = []
let winChecker
let checkSpot
// const tdElements = element.getElementsByTagName('td')



// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}





//I tried to make the game work and output a winner 
// but i couldn't quite get it working right


//if there is the same currentmarker in any array set
const winConditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

const winCheck = () => {
  
  // for (k=0; k < 9; k++) {
  //   boxElements.push(document.getElementsByTagName(td))

  // }


  for (i=0; i < 9; i++) {
    let xCount = 0
    let oCount = 0
  

    for (j=0; j < 3; j++) {
      // console.log(winConditions[i][j])
      //squares is currently not a proper array for it is undefined
      
      checkSpot = winConditions[i][j]
      console.log('checkspot ',i,j,checkSpot)
      // let checkSpotDeep = checkSpot[j]
      console.log(squares[checkSpot].innerHTML)
      if (squares[checkSpotDeep].innerHTML !== null) {
        //access the x/o part of the element value here and it all works
        if (squares[checkSpotDeep].innerHTML == "X")  {
          xCount += 1
          console.log("xcount")
          console.log(xCount)
          // console.log(winCheck)
          if (xCount == 3) {
            console.log("X wins")
          }
        }
        
        if (squares[checkSpotDeep].innerHTML == "O")  {
          oCount += 1
          console.log("ocount")
          console.log(oCount)
          if (oCount == 3) {
            console.log("O wins")
          }
        }
        


      }
      
    }
    // console.log(xCount)
    
    
  }  
  // document.getElementById(top-left) = top-left


}






// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  // console.log(`*** The current marker is:  ${currentMarker}. ***`)
  // console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  // @TODO-2: Build a line of code that will set the innerHTML property of the element that was clicked to the "currentMarker"
  document.getElementById(id).innerHTML = currentMarker
  // @TODO-2.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 
  
  changeMarker()
  winCheck()
}










// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
  
}










// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {

  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
      // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
    // squares = document.getElementsByTagName("td")
    console.log(squares)
  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  // const
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
}

