var Days;
(function (Days) {
    Days[Days["Sunday"] = 3] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 0.2] = "Wednesday";
    Days[Days["Thursday"] = 1.2] = "Thursday";
    Days[Days["Friday"] = -1] = "Friday";
    Days[Days["Saturday"] = 0] = "Saturday";
})(Days || (Days = {}));
console.log(Days["Sunday"]);
console.log(Days["Wednesday"]);
console.log(Days[3]);
// console.log(Days["Sunday"] === 0);  // true
// console.log('Sunday' === Days[0]);  // true
var Color;
(function (Color) {
    Color[Color["Red"] = "red".length] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var requestStatusCodes;
(function (requestStatusCodes) {
    requestStatusCodes[requestStatusCodes["error"] = 400] = "error";
    requestStatusCodes[requestStatusCodes["success"] = 200] = "success";
})(requestStatusCodes || (requestStatusCodes = {}));
var requestWrongCodes;
(function (requestWrongCodes) {
    requestWrongCodes["missingParameter"] = "A";
    requestWrongCodes["wrongParameterType"] = "B";
    requestWrongCodes["invalidToken"] = "C";
})(requestWrongCodes || (requestWrongCodes = {}));
var handleResponseStatus = function (status) {
    switch (status) {
        case requestStatusCodes.success:
            // do something
            break;
        case requestStatusCodes.error:
            // do something
            break;
        default:
            throw new Error("Status Code doesn't exist.");
    }
};
var handleWrongCodes = function (status) {
    var missingParameter = requestWrongCodes.missingParameter, wrongParameterType = requestWrongCodes.wrongParameterType, invalidToken = requestWrongCodes.invalidToken;
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
            throw new Error("Wrong Code doesn't exist.");
    }
};
