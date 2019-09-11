"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = new server_1.default();
server.app.use('/user', usuario_1.default);
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
