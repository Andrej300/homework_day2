const Park = function(name,ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaur = [];

}
module.exports = Park;


// Park.prototype.addDinosaur = function (dino) {
//     this.collectionOfDinosaur.push(dino);
// };

// Decorator.prototype.removeDinosaur= function (dino) {
//     let areaToBePainted = room.areaInSquareMeters;
  
//       if (paintCan.litresOfPaint >= areaToBePainted) {
//         paintCan.decreasePaint(areaToBePainted);
//         areaToBePainted = 0;
//         return;
//       } else {
//         areaToBePainted -= paintCan.litresOfPaint;
//         paintCan.empty();
//       }
//     }
//   };
