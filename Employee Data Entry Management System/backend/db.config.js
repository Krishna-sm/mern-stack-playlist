const mongoose = require("mongoose")

exports.ConnectDb = async()=>{
        try {
                    await mongoose.connect(`apni mongodb string lagana`)
                    console.log(`mongodb is connect with ${mongoose.connection.host}`);
                    
        } catch (error) {
            mongoose.disconnect()
            process.exit(1)
        }
} 


//krishna   abcdefgh
