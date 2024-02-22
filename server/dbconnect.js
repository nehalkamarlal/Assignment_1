const mongoose = require('mongoose');



module.exports= async ()=>{
  
try
{
const mongooseURi='mongodb+srv://nehalkumarlal183:hA3pIxRiOHBxEZ3l@cluster0.uoidv0w.mongodb.net/?retryWrites=true&w=majority';
const connect =await mongoose.connect(mongooseURi,{
  useUnifiedTopology:true,
  useNewURlParser:true,
});
  console.log(`Mongo Db connected ;${connect.connection.host}`);
}catch(e)
{
  console.log(e);
  process.exit(1);
}
}