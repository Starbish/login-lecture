"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");
        const response = {};
        let idx = users.id.indexOf(id);
        if( idx != -1 ) {
            console.log(idx);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }
        
        response.success = false;
        response.msg = "Failed to sign in.";
        return res.json(response);
    },
}

module.exports = {

    output, process,
};