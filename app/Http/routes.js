/**
 * Created by Bane.Shi on 2015/12/23.
 */
'use strict';
MSRouter.group({'middleware':['login']},function(){
    MSRouter.get('/index',{"middleware":["session"],"uses":"IndexController@index"});
    MSRouter.get('/index1',{"uses":"IndexController@index1"});

});

MSRouter.post('/post',{'uses':"IndexController@post"});
MSRouter.put('/put',{'uses':"IndexController@put"});
MSRouter.delete('/delete',{'uses':"IndexController@delete"});

MSRouter.get('/',{'uses':'IndexController@index'});
