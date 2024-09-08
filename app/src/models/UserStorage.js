"use strict";

const fs = require("fs").promises;

class UserStorage {
    
    static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
    }, {});

        return userInfo;
    }

    static getUsers(...fields) {

        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }

            // 아래 코드가 필요한가?
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(id) {
        // Promise
        return fs.readFile("./src/database/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }
    
    static save(userInfo) {

        // const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);
        
        return { success: true };
    }
}

module.exports = UserStorage;