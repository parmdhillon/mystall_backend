import mongoose from 'mongoose';
mongoose.set('debug', true);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const connDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, options);
    console.log('Database Connected');
  } catch (err) {
    console.log(`Error Connecting DB: ${err.message}`);
    process.exit(1);
  }
};

export default connDB;
