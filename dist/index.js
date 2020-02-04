"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const posts_1 = __importDefault(require("./routes/posts"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
//body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//
server.app.use(express_fileupload_1.default({
    userTempFiles: true
}));
//
server.app.use(cors_1.default({ origin: true, credentials: true }));
//
server.app.use('/user', usuario_1.default);
server.app.use('/post', posts_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/fotosgram', {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
}, (err) => {
    if (err)
        throw err;
    console.log('bien conexion');
});
server.start(() => {
    console.log(`Server in port ${server.port}`);
});
