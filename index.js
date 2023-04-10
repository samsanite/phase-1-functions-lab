// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    let blocks = 42;
    return Math.abs(pickup - blocks);
}
function distanceFromHqInFeet(pickup){
    let blocks = distanceFromHqInBlocks(pickup)
    return blocks * 264 
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264
}
function calculatesFarePrice (start, destination){
    let fare = distanceTravelledInFeet(start, destination)
    if (fare <= 400){
        return (fare)*0;
    }
    else if  (fare > 400 && fare <= 2000){
        return Math.abs((fare - 400)*0.02);
    }
    else if (fare > 2000 && fare < 2500){
        return Math.abs((fare - 400)*0)+25;
    }
    else if (fare > 2500){
        return "cannot travel that far";
    }
}