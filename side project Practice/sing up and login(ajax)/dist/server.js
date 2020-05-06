"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const server = app_1.default.listen(app_1.default.get('port'), () => {
    console.log('App is running at http://localhost:%d', app_1.default.get('port'));
});
exports.default = server;
//# sourceMappingURL=server.js.map