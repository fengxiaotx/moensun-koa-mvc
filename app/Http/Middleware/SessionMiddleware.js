/**
 * Created by Bane.Shi on 2015/12/25.
 */
'use strict';
class SessionMiddleware{
    *handle(next){
        console.log("sessionmiddleware");
        return next;
    }
}
module.exports=SessionMiddleware;