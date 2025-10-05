var id;
id = 10;
console.log(id);
id = "10a";
console.log(id);
var currentStatus = "pending";
var combinedError = {
    errorCode: 500,
    filePath: "/logs/app.log",
    message: "Server and log access failed."
};
var x = "TypeScript";
if (typeof x === 'string') {
    console.log("La longueur s\u00E9curis\u00E9e est : ".concat(x.length));
}
else {
    console.log("La variable n'est pas une chaîne.");
}
