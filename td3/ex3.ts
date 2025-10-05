let id: number | string;
id = 10;
console.log(id); 
id = "10a";
console.log(id);

type Status = "pending" | "done" | "cancelled";

let currentStatus: Status = "pending";

type NetworkError = {
    errorCode: number;
    message: string;
};

type FileError = {
    filePath: string;
    message: string;
};

type Error1 = NetworkError & FileError; 

const combinedError: Error1 = {
    errorCode: 500,
    filePath: "/logs/app.log",
    message: "Server and log access failed."
};


let x: unknown = "TypeScript";

if (typeof x === 'string') {
    console.log(`La longueur sécurisée est : ${x.length}`); 
} else {
    console.log("La variable n'est pas une chaîne.");
}