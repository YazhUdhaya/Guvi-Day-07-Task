// write a class to calculate uber price

class uberPrice{
    constructor(distancesOfKm, charge){
       this.distancesOfKm = distancesOfKm;
        this.charge = charge;
      
    }
    getPrice(){
        return `Your Uber Price is ${this.distancesOfKm * this.charge}`;
    }
    
}
let uberRate = new uberPrice(5, 12)
console.log(uberRate.getPrice());
