/*
Rebecca Niemeier
Create Grocery.ts, define the Grocery class, add Grocery items to an arrary, then display the items with HTML output.
*/
var _a;
//grocery class
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, barcodeNumber, aisleLocation) {
        this.name = name;
        this.quantity = quantity;
        this.barcodeNumber = barcodeNumber;
        this.aisleLocation = aisleLocation;
    }
    //return a string version of the class
    Grocery.prototype.makeString = function () {
        return this.name + "\t" + this.quantity + " \t" + this.barcodeNumber + "\t" + this.aisleLocation;
    };
    return Grocery;
}());
//add grocery items to array
var groceryList = [];
groceryList.push(new Grocery('milk', 3, 3893, 'A23'));
groceryList.push(new Grocery('lettuce', 6, 1023, 'B3'));
groceryList.push(new Grocery('beans', 11, 9399, 'L3'));
if (document.getElementById("output") == null) { //if output div doens't exist, make it exist
    var temp = document.createElement("div");
    temp.setAttribute("id", "output");
    document.body.appendChild(temp);
}
var outputDiv = (_a = document.getElementById("output")) !== null && _a !== void 0 ? _a : document.createElement("div");
for (var i = 0; i < groceryList.length; i++) {
    var newChild = document.createTextNode(groceryList[i].makeString());
    outputDiv.appendChild(newChild);
    outputDiv.appendChild(document.createElement("br"));
}
