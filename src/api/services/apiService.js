const User = require("../models/User");

class ApiService {
   async getUser(userId){
     try{
     const resulth = await User.findAll({ where: { id: userId}})
     return { status: 200, response: resulth}
     }catch(err){
     console.log(err)
     return { status: 500, response: "Database Failed"}
     }
   }

   async createUser(userData){

     const {firstName, lastName, age} = userData;
        try{
          await User.create({firstName, lastName, age});
          return { status: 201, response: "User Created"}
        }catch(err){
          console.log(err)
          return { status: 500, response: "Database Failed"}
        }
   }

   async updateUser(userData, userId){
     const {firstName, lastName, age} = userData;
        try {
          await User.update({firstName, lastName, age}, {where: { id: userId}})
          return { status: 200, response: "User updated"}
        } catch(err) {
          console.log(err)
          return { status: 500, response: "Database Failed"}
        }
   }

   async deleteUser(userId){
        try{
          await User.destroy({ where: { id: userId}})
          return {status: 200, response: "User delete"}
        }catch(err){
          console.log(err)
          return { status: 500, response: "Database Failed"}
        }
   }
}


module.exports = new ApiService();