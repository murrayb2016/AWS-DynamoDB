"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./db/dynamoose");
var user_1 = require("./routers/user");
var hbs_1 = __importDefault(require("hbs"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = process.env.PORT || 3000;
var viewsPath = path_1.default.join(__dirname, "../../views");
var partialsPath = path_1.default.join(__dirname, "../../views/partials");
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs_1.default.registerPartials(partialsPath);
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(express_1.default.json());
app.use(user_1.userRouter);
app.listen(port, function () {
    console.log('Server is up on port ' + port);
});
