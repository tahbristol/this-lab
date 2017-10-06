var cake = {
  name: "German Chocolate Cake",
  ingredients: ["eggs", "flour", "oil", "chocolate", "sugar", "butter"],
  topping: "coconut frosting",
  bakeTemp: "425 degrees",
  bakeTime: "45 minutes",
  customer: "Tommy",
  decorate: function(updateFunction) {
    //console.log(this); this is cake
    var status = "Decorating with " + this.topping + ". Ready to eat soon!"
    updateFunction(status)
    setTimeout(() => {
  //console.log(this); this is cakef

      updateFunction(serve.call(this, "Happy Eating!", this.customer))
    }, 2000)
  }
}



var pie = {
  name: "Apple Pie",
  ingredients: ["apples", "flour", "eggs", "butter", "sugar"],
  topping: "streusel",
  bakeTemp: "350 degrees",
  bakeTime: "75 minutes",
  customer: "Tammy"
}

function makeCake() {
  var updateCakeStatus = updateStatus;
  mix.call(cake, updateCakeStatus)
}

function makePie() {
  var updatePieStatus = updateStatus;;

  mix.call(pie,updatePieStatus)
   pie.decorate = cake.decorate.call(pie, updatePieStatus);

}

function updateStatus(statusText) {
//console.log(this); this is cake

console.log(statusText);
  document.getElementsByClassName("status")[0].innerText = statusText
}

function bake(updateFunction) {
  var status = "Baking at " + this.bakeTemp + " for " + this.bakeTime
  setTimeout(() => {
    cool(updateFunction)
  }, 2000)
}

function mix(updateFunction) {
  console.log(this
  ); //this is the dessert
  var status = "Mixing " + this.ingredients.join(", ");
  //console.log(status)
  updateFunction(status);
  setTimeout(() => {
    bake.call(this,updateFunction)
  }, 2000)
  updateFunction(status)
}

function cool(updateFunction) {
  var status = "It has to cool! Hands off!"

  if(this === "cake"){
    setTimeout(() => {
        //console.log(this);
      //cake.decorate(this, updateFunction)
    }, 2000)
  }else {
      updateFunction(status);
  }
}

function makeDessert() {
  //add code here to decide which make... function to call
  //based on which link was clicked
  var buttons = document.getElementsByClassName('js-make');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(e){
        //  console.log();
          if (this.innerHTML.split(" ")[1] === "Pie") {
            makePie();
          }else{
            makeCake();
          }
        });
    }
  //console.log(buttons.length);
}
 makeDessert();
function serve(message, customer) {
  //you shouldn't need to alter this function
//console.log(this);
    return(customer + ", your " + this.name + " is ready to eat! " + message)
}
