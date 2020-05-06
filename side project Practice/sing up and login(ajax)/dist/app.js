"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const bluebird_1 = __importDefault(require("bluebird"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const secrets_1 = require("./util/secrets");
const homeController = __importStar(require("./controllers/home"));
const userController = __importStar(require("./controllers/user"));
const app = express_1.default();
const mongourl = secrets_1.MONGODB_URI;
mongoose_1.default.Promise = bluebird_1.default;
mongoose_1.default.connect(mongourl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .catch(err => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
});
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname + '/public')));
app.get('/', homeController.index);
app.get('/singin', userController.getSingin);
app.post('/singin', userController.postSingin);
app.get('/singup', userController.getSingup);
app.post('/singup', userController.postSingup);
exports.default = app;
//# sourceMappingURL=app.js.map