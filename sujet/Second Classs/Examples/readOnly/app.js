var NiftyThing = function() {
    var trulyPrivateVariable;

    trulyPrivateVariable = 5; // For instance
    this.accessorFunction = function() {
        return trulyPrivateVariable;
    }
};

var n = new NiftyThing();
console.log(n.trulyPrivateVariable);
// Alerts "undefined"
console.log(n.accessorFunction());
// Alerts "5"