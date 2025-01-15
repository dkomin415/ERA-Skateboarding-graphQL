import mongoose from 'mongoose';

// db connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dkomin415-admin:Dmoney112468!1@cluster0.blvku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {

}).then(() => {
    
    console.log("Connected to DB");
}).catch((err) => {
    console.log('error', err);
});


// logs mongo queries being executed
mongoose.set('debug', true);

export default mongoose.connection;