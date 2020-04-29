function Car(make, model, year, color, price, mpg, mileage, image, condition){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.mpg = mpg;
    this.mileage = mileage;
    this.image = image;
    this.condition = condition;
}


function registerCar(){

    // get variables

    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var color = $("#txtColor").val();
    var price = $("#txtPrice").val();
    var mpg = $("#txtMpg").val();
    var mileage = $("#txtMileage").val();
    var image = $("#txtImage").val();
    var condition = $("#selCondition").val();

    var priceNum = 0;
    if(price){
        priceNum = parseFloat(price);
    }

    var yearNum = 0;
    if(year){
        yearNum = parseInt(year);
    }

    var mileageNum = 0;
    if(mileage){
        mileageNum = parseInt(mileage);
    }

    var mpgNum = 0;
    if(mpg){
        mpgNum = parseInt(mpg);
    }
    
    //create an object

    var car = new Car(make, model, yearNum, color, priceNum, mpgNum, mileageNum, image, condition);
    console.log(car);

    // send the object on AJAX req

    $.ajax({
        url: '/catalog/SaveCar',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(car),
        success: function(res) {
            console.log("server responded", res);  
        },
        error: function(detail){
            console.log("Error on request", detail);
        }
    })

}

function init(){
    console.log("Register Page!");
    $("#btnSave").click(registerCar);
}

window.onload = init;