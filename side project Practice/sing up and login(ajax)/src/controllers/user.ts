import {Request, Response} from 'express';
import {User} from '../models/User';

export const getSingin=(req:Request, res:Response)=>{
    res.render('user',{
        title:'登入',
        hint:'還沒有帳號嗎?來',
        hint_link:'singup',
        hint_act:'註冊',
        submit_act:'Login',
        js_url:'http://127.0.0.1:3000/js/singin.js'
    });
};

export const postSingin=(req:Request, res:Response)=>{
    User.findOne({name:req.body.name},(err,user)=>{
        if(err)
        {
            res.json({
                result:false,
                reason:'伺服器錯誤'
            });
        }
        if(user)
        {
            if(user?.password==req.body.password)
            {
                res.json({result:true,});
            }
            else
            {
                res.json({
                    result:false,
                    reason:'密碼錯誤'
                });
            }
        }
        else
        {
            res.json({
                result:false,
                reason:'使用者名稱錯誤'
            });
        }
    });
    
};

export const getSingup=(req:Request, res:Response)=>{
    res.render('user',{
        title:'註冊',
        hint:'已經有帳號了!來',
        hint_link:'singin',
        hint_act:'登入',
        submit_act:'Singup',
        js_url:'http://127.0.0.1:3000/js/singup.js'
    });
};

export const postSingup=(req:Request, res:Response)=>{
    const user = new User({
        name:req.body.name,
        password:req.body.password
    });
    console.log(req.body);

    User.findOne({name:req.body.name},(err,exsitingUser)=>{
        if(exsitingUser)
        {
            res.json({
                result:false,
                reason:'已經有人取這個名子了喔!'
            });
        }
        else
        {
            user.save(err=>{
                if(err)
                {
                    res.json({
                        result:false,
                        reason:'伺服器錯誤!'
                    });
                }
                else
                {
                    res.json({
                        result:true
                    });
                }
            });
        }
    });
};