import Server from './clases/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';

const server = new Server();

server.app.use('/user', userRoutes);




mongoose.connect('mongodb://localhost:27017/fotosgram',{
    useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true 
}, (err) =>{
    if(err) throw err;
    console.log('bien conexion');
});

server.start(()=>{

    console.log(`Server in port ${server.port}`)
});