enum Days {
    Sunday = 3,
    Monday = 1,
    Tuesday,
    Wednesday = 0.2,
    Thursday,
    Friday = -1,
    Saturday,
}

console.log(Days["Sunday"]);    
console.log(Days["Wednesday"]);  
console.log(Days[3]);


// console.log(Days["Sunday"] === 0);  // true
// console.log('Sunday' === Days[0]);  // true

enum Color {
    Red = "red".length,
    Green = 5,
    Blue = 4,
}

const enum Direction {
    Up,
    Down,
}

enum requestStatusCodes {
    error = 400,
    success = 200,
}

enum requestWrongCodes {
    missingParameter = 'A',
    wrongParameterType = 'B',
    invalidToken = 'C',
}

const handleResponseStatus = (status: number): void => {
    switch (status){
        case requestStatusCodes.success:
            // do something
            break;
        case requestStatusCodes.error:
            // do something
            break;
        default:
            throw new Error("Status Code doesn't exist.")
    }
}

const handleWrongCodes = (status: string): void => {
    const { missingParameter, wrongParameterType, invalidToken } = requestWrongCodes;
    switch (status) {
        case missingParameter:
            //do something
            break;
        case wrongParameterType:
            //do something
            break;
        case invalidToken:
            //do something
            break;
        default:
            throw new Error("Wrong Code doesn't exist.")
    }
}