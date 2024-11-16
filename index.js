const Express = require("express")
const Path = require("path")
const Application = Express()

const quickJoin = Path.join
const Public = quickJoin(__dirname, "public")

Application.use(Express.static(Public))

Application.get("/", (req, res) => {
    res.sendFile(quickJoin(Public, "landing/index.html"))
})

Application.listen(3000, () => {
    console.log("Did you know? Those who know.")
})