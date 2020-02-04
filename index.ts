import Server from './clases/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import postRoutes from './routes/posts';
import fileUpload from 'express-fileupload';
import cors from 'cors';
const server = new Server();


//body parser

server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());
//
server.app.use(fileUpload({
    userTempFiles: true
}));
//
server.app.use(cors({origin: true, credentials: true}));
//
server.app.use('/user', userRoutes);
server.app.use('/post', postRoutes);




mongoose.connect('mongodb://localhost:27017/fotosgram',{
    useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true 
}, (err) =>{
    if(err) throw err;
    console.log('bien conexion');
});

server.start(()=>{

    console.log(`Server in port ${server.port}`)
});