const 
    express = require('express'),
    app = express(),
    port = 3015;


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))