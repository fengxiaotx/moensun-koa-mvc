/**
 * Created by Bane.Shi on 2015/12/24.
 */
'use strict';
class LoginMiddleware {
    *handle(next){
        console.log("middleware");
     //return {"s":"ddd"}
        return next;
    }
}
module.exports=LoginMiddleware;