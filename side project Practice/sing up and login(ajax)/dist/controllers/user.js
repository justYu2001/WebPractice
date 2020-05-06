"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
exports.getSingin = (req, res) => {
    res.render('user', {
        title: '登入',
        hint: '還沒有帳號嗎?來',
        hint_link: 'singup',
        hint_act: '註冊',
        submit_act: 'Login',
        js_url: 'http://127.0.0.1:3000/js/singin.js'
    });
};
exports.postSingin = (req, res) => {
    User_1.User.findOne({ name: req.body.name }, (err, user) => {
        var _a;
        if (err) {
            res.json({
                result: false,
                reason: '伺服器錯誤'
            });
        }
        if (user) {
            if (((_a = user) === null || _a === void 0 ? void 0 : _a.password) == req.body.password) {
                res.json({ result: true, });
            }
            else {
                res.json({
                    result: false,
                    reason: '密碼錯誤'
                });
            }
        }
        else {
            res.json({
                result: false,
                reason: '使用者名稱錯誤'
            });
        }
    });
};
exports.getSingup = (req, res) => {
    res.render('user', {
        title: '註冊',
        hint: '已經有帳號了!來',
        hint_link: 'singin',
        hint_act: '登入',
        submit_act: 'Singup',
        js_url: 'http://127.0.0.1:3000/js/singup.js'
    });
};
exports.postSingup = (req, res) => {
    const user = new User_1.User({
        name: req.body.name,
        password: req.body.password
    });
    console.log(req.body);
    User_1.User.findOne({ name: req.body.name }, (err, exsitingUser) => {
        if (exsitingUser) {
            res.json({
                result: false,
                reason: '已經有人取這個名子了喔!'
            });
        }
        else {
            user.save(err => {
                if (err) {
                    res.json({
                        result: false,
                        reason: '伺服器錯誤!'
                    });
                }
                else {
                    res.json({
                        result: true
                    });
                }
            });
        }
    });
};
//# sourceMappingURL=user.js.map