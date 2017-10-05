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
    var s = serve.call(this, "Happy Eating!", this.customer);
    console.log(s);
      updateFunction(serve.call(this, "Happy Eating!", this.customer))
    }, 2000)
  }
}

cake.decorate(updateStatus);

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
  mix(updateCakeStatus)
}

function makePie() {
  var updatePieStatus = updateStatus;;

  mix.call(pie,updatePieStatus)
   pie.decorate = cake.decorate.call(pie, updatePieStatus);

}

function updateStatus(statusText) {
//console.log(this); this is cake
  document.getElementsByClassName("status")[0].innerText = statusText
}

function bake(updateFunction) {
  var status = "Baking at " + this.bakeTemp + " for " + this.bakeTime
  setTimeout(function() {
    cool(updateFunction)
  }, 2000)
}

function mix(updateFunction) {
  console.log(this);
  var status = "Mixing " + this.ingredients.join(", ");
  console.log(status)
  setTimeout(() => {
    bake.call(this,updateFunction)
  }, 2000)
  updateFunction(status)
}

function cool(updateFunction) {
  var status = "It has to cool! Hands off!"
  setTimeout(() => {
    this.decorate(updateFunction)
  }, 2000)
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
