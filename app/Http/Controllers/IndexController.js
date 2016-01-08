/**
 * Created by Bane.Shi on 2015/12/23.
 */
'use strict';
let Controller = require('./Controller.js');
class IndexController extends Controller{
    constructor(){
       super();
    }


    *index(){
        return this.render('index/index');
    }

    *index1(){
         return this.render("index",{"name":"ss"});
    }

    *post(){
        return {"name":"post"};
    }

    *put(){
        return {"name":"put"};
    }

    *delete(){
        return {"name":"delete"};
    }
}
module.exports=IndexController;