let fs = require('fs')

let basicGenTwo = async (routes,dest) => {
    let summary = [`module.exports = function(app) { `];
    if(Array.isArray(routes)) {
        routes.forEach((entry) => {
            summary.push(`\tapp.${entry.verb.toLowerCase()}('${entry.path}', (req,res) => {   res.send(${entry.send})   })`)
        })
    } else {
        console.log('Input is not an array')
        return false
    }
    summary.push('}')

    let output = summary.join('\n');
    
    fs.writeFile(`./routes/${dest}.js`, output, (err) => {
        if(err) {
            console.log(err)
            return false
        }
    
        console.log("Written to file!")
    })

    return true
}

let routeArray = [
    {verb:'get',path:'/',send:"'Hello, world!'"},
    {verb:'get',path:'/users/:userId/books',send:'req.params'},
    {verb:'get',path:'/hellonerds',send:"'Hello, nerds!!!'"}
]

basicGenTwo(routeArray,'routes')



module.exports = basicGenTwo