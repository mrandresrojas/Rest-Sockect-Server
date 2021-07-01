"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("./global/environment");
var server_1 = __importDefault(require("./classes/server"));
var router_1 = __importDefault(require("./routes/router"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var server = new server_1.default();
//body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
//rutas
server.app.use('/', router_1.default);
server.start(function () {
    console.log("Servidor corriendo en el puerto " + environment_1.SERVER_PORT);
});
