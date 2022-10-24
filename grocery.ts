/*
Rebecca Niemeier
10/23/2022
Create Grocery.ts, define the Grocery class, add Grocery items to an arrary, then display the items with HTML output. 
*/

//grocery class
class Grocery {
    name: string;
    quantity: number;
    barcodeNumber: number;
    aisleLocation: string;

    constructor(name: string, quantity: number, barcodeNumber: number, aisleLocation: string){
        this.name = name;
        this.quantity = quantity;
        this.barcodeNumber = barcodeNumber;
        this.aisleLocation = aisleLocation;
    }

    //return a string version of the class
    makeString(){
        return this.name + "\t" + this.quantity + " \t" + this.barcodeNumber + "\t" + this.aisleLocation;
    }
}


//create Grocery array and add items
const groceryList: Grocery[] = [];
groceryList.push(new Grocery('milk', 3, 3893, 'A23'));
groceryList.push(new Grocery('lettuce', 6, 1023, 'B3'));
groceryList.push(new Grocery('beans', 11, 9399, 'L3'));

//Verify output div exists, and if it doesn't, then create it and add it to the body
if(document.getElementById("output") == null){ 
    var temp  = document.createElement("div");
    temp.setAttribute("id", "output");
    document.body.appendChild(temp);
}

//Get the output div, then add each Grocery item from the array (and add a </br> element between them for formatting)
var outputDiv = document.getElementById("output") ?? document.createElement("div");
for(let i = 0; i < groceryList.length; i++){
    const newChild = document.createTextNode(groceryList[i].makeString());
    outputDiv.appendChild(newChild);
    outputDiv.appendChild(document.createElement("br"));
}

