import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        //nombre:String,
    
    }
);

userSchema.methods.toJSON = function(){
    let obj = this.toObject()
    delete obj.password
    return obj;
}

export default mongoose.model('User', userSchema);