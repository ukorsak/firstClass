function Phone(mark, price, color, storage, system) {
	this.mark = mark || "brak danych";
	this.price = price || "brak danych";
	this.color = color || "brak danych";
	this.storage = storage || "brak danych";
	this.system = system || "brak danych"; 
}

Phone.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.mark + ", kolor to " + this.color + ", a cena to " + this.price + ".");
}

Phone.prototype.printSystem = function() {
	console.log("System telefonu to " + this.system+".");
}

Phone.prototype.printStorage = function() {
	console.log("Pamięć wynosi " + this.storage+" GB.");
}

Phone.prototype.printAll = function() {
	this.printInfo();
	this.printSystem();
	this.printStorage();
}

var iPhone6S = new Phone("Apple", 2250, "srebrny", 128, "IOS");
var samsungS6 = new Phone("Samsung Galaxy", 2000, "czarny", "" ,"Android");
var onePlus = new Phone("OnePlus One", 1000, "czerwony", 16);
var nokia3310 = new Phone("Nokia", "bezcenny", "granatowy", "wystarczająco", "nejlepszy na świecie :-)");

iPhone6S.printInfo();
iPhone6S.printSystem();
iPhone6S.printStorage();
samsungS6.printInfo();
samsungS6.printSystem();
samsungS6.printStorage();
onePlus.printInfo();
onePlus.printSystem();
onePlus.printStorage();
nokia3310.printAll();