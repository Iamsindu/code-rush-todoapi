import fs from 'fs';
import {Router} from 'express';                  // const express = require('express'); const router = express.Router();

import * as endpoints from './constants/endpoints';
import * as userController from "./controllers/user";
import { validateUserCreation , validateUserUpdate } from './schemas/user';

const router = Router();

router.get("/", (req, res, next) => {
    res.json({
        name: 'todo-api',
        version: '1.0.0'
    })
})

router.get(endpoints.GET_USERS, userController.getAllUsers);

router.get(endpoints.GET_USERS_BY_ID, userController.getUsersById);

router.post(endpoints.CREATE_USER, validateUserCreation, userController.createUser);

router.delete(endpoints.DELETE_USER, userController.deleteUser);

router.put(endpoints.UPDATE_USER, validateUserUpdate ,userController.updateUser);

export default router;    










/**GET METHOD */
//Output = localhost:1234/users
// router.get(GET_USERS, userController.getAllUsers);
    //  (request, response, next) => {
    // logger.info('Fetching all users');
    // const usersJson = require(usersJsonPath);      //gets all data from users.json
    // response.json(usersJson);                       //prints every data obtained from users.json
// });


//Output = localhost:1234/users/:userId
// router.get(GET_USERS_BY_ID, userController.getUsersById);
    // (request, response, next) => {
    // const userId = +request.params.userId;
    // logger.info(`Fetching user with id ${userId}`);
    // + : string lai number ma laijancha
    // for eg: localhost:1234/users/1 => userId = request.params.userId; userId = '1'
    // so  if userId = +request.params.userId;  then userId = 1
    
    // const usersJson = require(usersJsonPath);
    // const requestedUser = usersJson.find(user => user.id === userId);
    // if (!requestedUser) {
    //     logger.error(`Cannot find user with id ${userId}`);
       
    //     response.json({
    //         message: "Can't find user with id " + userId
    //     });
    // }
    // response.json(requestedUser);
// });


/**Post Method */
//Output = localhost:1234/users
// router.post(CREATE_USER, validateUserCreation, (request, response, next) => {
    // const params = request.body;
    // if (!params.firstName || !params.lastName || !params.phoneNumbers) {
    //     response.json({
    //         message: "Insufficient number of arguments supplied."
    //     })
    // }
    
    // if (!Array.isArray(params.phoneNumbers)) {
    //     response.json({
    //         message: "Phone number should be an array"
    //     })
    // }

    // const usersJson = require(usersJsonPath);
    // const maxId = usersJson.reduce((acc, cur) => {
    //     return cur.id > acc ? cur.id : acc              //acc = number,  cur = object
    // }, 0);

    // const updatedJson = [
    //     ...usersJson,                   //users.json ma vayeko sabai data same aaucha
    //     {
    //         id: maxId + 1,
    //         ...params                  //requestBody (i.e.Postman) bata pathayeko data
    //     }
    // ];

    // fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));
    // response.json({
    //     message: "new user added successfully.",
    //     data: {
    //         id: maxId + 1,
    //         ...params
    //     }
    // })
// })

/**DELETE Method
 * localhost:1234/users/3
 */
// router.delete(DELETE_USER, (req, res, next)=> {
    // const userId= +req.params.userId;
    // const usersJson = require(usersJsonPath);
    
    // const updatedUserList = usersJson.filter(user => user.id !== userId);
    
    // const doesUserExist = usersJson.find((user) => user.id === userId);
    // if (!doesUserExist) {
    //   response.json({
    //       message: "Cannot find user with id " + userId,
    //   })
    // }

    // fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUserList, null, 2));
    // response.json({
    //     message:"Deleted user with userid" + userId,
    // })
// })

// router.delete('/users/:userId', (request, response, next) =>
//   //users.json ko data leyera id mileko data lai bhanda aaru lai array ma leyera with filter file ma write garchaam
//   {
//     const userId = +request.params.userId;
//     //request.params.userId bata string aauchha teslai number banauna we use +
    // const doesUserExist = usersJson.find((user) => user.id === userId);
    // if (!doesUserExist) {
    //   response.json({
    //     message: "Cannot find user with id " + userId,
    //   });
//     }
//     //The filter() method creates an array filled with all array elements that pass a test
//     //updatedlist ma chain array nai aauchha jun array ma delete gareko userId wala data hudaina
//     const updatedUsersList = usersJson.filter((user) => user.id !== userId);
//     fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsersList, null, 2));
//     response.json({
//       message: "Deleted user with id" + userId,
//     });
//   }
// );

/**PUT Method
 * localhost:1234/users/2
 */
// router.put(UPDATE_USER, (request, response, next) => {
    // const params = request.body;    //postman bata pathaune data
    // const userId = +request.params.userId;   //localhost:1234/users/2 i.e. requested params ko specific  field userId tanne

    // const usersJson = require(usersJsonPath);  
    // const updatedJson = usersJson.map(user => {
    //     if (user.id === userId){    //user.jsonma vako id ra requested id matched cha vane
    //         return {
    //             ...user,            //users.json ko data sabai same lera aauncha
    //             ...params           //postman bata fetch gareko naya data le replace garcha
    //         }
    //     }
    //     return user;        //if naya data chaina vane users.json ko data nai return garcha
    // })
    
    // fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));
    // response.json({
    //     message: "Updated Json with user id " + userId
    // })
// } )

// export default router;    // module.exports = router;


    // const isValidToken = (token) => {
    //     return true;
    // }
    
    // const function1 = (request, response, next) => {
    //     const requestBody = request.body;
    //     console.log(requestBody);
    //     if (!requestBody.id || !requestBody.fName || !requestBody.lName) {
    //         response.json({
    //             message: "Invalid arguments"
    //         });
    //     }
    
    //     if (!requestBody.token) {
    //         response.json({
    //             message: "Token is required."
    //         });
    //     }
    
    //     const isValid = isValidToken(requestBody.token);
    
    //     if (!isValid) {
    //         response.json({
    //             message: "Token is invalid."
    //         });
    //     }
    //     next();
    // }
    
    // const function2 = (request, response, next) => {
    //     console.log("Invoked");
    
    //     response.json({
    //         name: 'todo-api',
    //         version: '1.0.0'
    //     });
    // }
    
    // router.post("/", function1, function2);