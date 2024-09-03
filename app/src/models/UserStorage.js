"use strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "abc", "def"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "A", "B"],
    };

    static getUsers(...fields) {

        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }

            // 아래 코드가 필요한가?
            return newUsers;
        }, {});

        return newUsers;
    }
}

module.exports = UserStorage;