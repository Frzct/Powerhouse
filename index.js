const Express = require("express")
const Path = require("path")
const Application = Express()

const quickJoin = Path.join
const Landing = quickJoin(__dirname, "public/landing")

Application.get("/", (req, res) => {
    res.sendFile(quickJoin(Landing, "index.html"))
})
Application.listen(3000, () => {
    console.log("Did you know? Those who know.")
})