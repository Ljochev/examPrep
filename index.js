const express = require("express");
const {
    getLoginForm,
    postLoginForm,
    delateStudent,
    getStudents
} = require("./handlers/formData")



const app = express()

app.use(express.urlencoded({ extended: true}))
app.set("view engine", "ejs")

app.get("/form", getLoginForm)
app.get("/students", getStudents)
app.post("/login", postLoginForm)
app.get("/brishi", delateStudent)




app.listen(3000, () => console.log("Server started at port 3000"))
