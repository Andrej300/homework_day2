const Park = function(name,ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaur = [];

}
module.exports = Park;


Park.prototype.addDinosaur = function (dino) {
    this.collectionOfDinosaur.push(dino);
};




// Decorator.prototype.removeDinosaur= function (dino) {
//    
  
//      if ( = ) {
//         

