const fs = require("fs")

const {
    read,
    write
} = require("./read-write")

const getLoginForm = async (req, res) => {
    console.log("I'm in function getLoginForm");
    try{
        res.render("loginForm", {});
    } catch(err) {
        res.status(500).send("Invalid server error")
    }
}

const postLoginForm = async ( req, res) => {
    console.log("I'm in postLoginForm")
    try{
        console.log(req.body)
        let fileData = await read(`${__dirname}/../students.json`)
        fileData.push(req.body)
        console.log(`I've read the file and the result is: ${fileData}`)
        await write(`${__dirname}/../students.json`, JSON.stringify(fileData))
        // fileData = await read(`${__dirname}/../students.json`)
        res.redirect("/students")
    } catch(err) {
        res.status(500).send("Invalid server error")
    }
}

    const delateStudent = async ( req, res ) => {
        console.log(`Get Form Students`)
        const j = Number(req.query.i)
        console.log(j, "Dali raboti")
        try {
            let fileData = await read(`${__dirname}/../students.json`)
    fileData.splice(j,1)
    console.log(typeof j, j)
    fileData.forEach((element, i) => {
        console.log(i + 1)
    });
    // console.log(fileData, j)
    await write(`${__dirname}/../students.json`, JSON.stringify(fileData))
    // fileData = await read(`${__dirname}/../students.json`)
        // res.render("showLoginForm", { fileData });
        res.redirect("/students")
        } catch {
        res.status(500).send("Invalid server error")
        }
    }

    const getStudents = async (req, res) => {

        try {
            const fileData = await read(`${__dirname}/../students.json`)
            res.render("showLoginForm", { fileData });
        } catch {
        res.status(500).send("Invalid server error")
        }

    }
module.exports = {
    getLoginForm,
    postLoginForm,
    delateStudent,
    getStudents
}