let example = 
    {
        name: 'Retrieve Categories',
        path: ' /categories/store/:storeId',
        verb: 'get',
        headers: {
            accept: 'application/vnd.mywebgrocer.category+json',
            authorization: 'token'
        },
        response: {

        }
    }


app.${entry.verb}('${entry.path}', (req,res) => {
    let storeId = req.params.storeId
    if(!req.accepts('application/vnd.mywebgrocer.category+json') || !req.get('Authorization') ) {
        res.set('Content-Type', 'application/vnd.mywebgrocer.category+json')
        res.status(400).send({error:'Bad Request'})
    }
    
    let storeExists = await storeChecker(storeId)
    if(!storeExists) {
        res.set('Content-Type', 'application/vnd.mywebgrocer.category+json')
        res.status(404).send({error:'StoreNotFound'})
    }
    
    let categories = await magicalCategoriesFunctionGoesHere(storeId)
    if(!categories) {
        res.set('Content-Type', 'application/vnd.mywebgrocer.category+json')
        res.status(404).send({error:'CategoryNotFound'})
    }
    res.set('Content-Type', 'application/vnd.mywebgrocer.category+json')
    res.status(200).send(categories)
})

app.get('/categories/store/:storeId', (req,res) => {
    let storeId = req.params.storeId
    if(!req.accepts('application/vnd.mywebgrocer.category+json') || !req.get('Authorization') ) {
        res.set('Content-Type', 'application/vnd.mywebgrocer.category+json')
        res.status(400).send({error:'Bad Request'})
    }
    let storeExists = await storeChecker(storeId)
    if(!storeExists) {
        res.set('Content-Type', 'application/vnd.mywebgrocer.category+json')
        res.status(404).send({error:'StoreNotFound'})
    }
    let categories = await magicalCategoriesFunctionGoesHere(storeId)
    if(!categories) {
        res.set('Content-Type', 'application/vnd.mywebgrocer.category+json')
        res.status(404).send({error:'CategoryNotFound'})
    }
    res.set('Content-Type', 'application/vnd.mywebgrocer.category+json')
    res.status(200).send(categories)
})