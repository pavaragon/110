function retrieveCatalog(){

    $.ajax({
        url: '/catalog/getCatalog',
        type: 'GET',
        success: list => {
            console.log(list);  

            //display cars on HTml
            for(let i=0; i < list.length; i++){
                displayCar(list[i]);
            }
        },
        error: function(detail){
            console.error("Error on request", detail);
        }
    });
    
}

function displayCar(car){
    //get container

    var container = $("#catalog");

    //create template/sintax

    var sntx = 
    `<div class="item bg-light">
        <div class="">
        <h3 class="text-light bg-dark" >${car.year} ${car.make} ${car.model} </h3>
        <img class="img-fluid" src="${car.image}">
        <br>
        <p> Color: ${car.color} // ${car.mpg} Mpg // ${car.mileage}.00 miles</p>
        <h4> $${car.price}.00 dollars </h4>
        <button type="button" class="btn btn-dark">Add To Cart</button>
        </div>
    <s/div>`;

    // add template to conainter

    container.append(sntx)
}

function init(){
    console.log("Catalog Page")
    //get data
    retrieveCatalog();
    // hook events
}

window.onload = init();