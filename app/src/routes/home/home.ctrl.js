"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["woorimIT", "abc", "def"],
    psword: ["1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        let idx = users.id.indexOf(id);
        if( idx != -1 ) {
            console.log(idx);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }
        
        return res.json({
            success: false,
            msg: "Failed to sign in",
        });
    },
}

module.exports = {

    output, process,
};