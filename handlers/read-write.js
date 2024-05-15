const fs = require("fs")
// const { resolve } = require("path")

const read = async (filename) => {
    //pending, rejected, fulfilled
    console.log("I'm in read function")
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if(err) return reject(err)
            data = JSON.parse(data)
        return resolve(data)
        })
    })
}

const write = async (filename, data) => {
    console.log("I'm in write function")
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            if(err ) return reject(err)
            return resolve()
        })
    })
}

module.exports = {
    read,
    write,
}