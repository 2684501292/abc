const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<div style="background-color:red;">江西软件职业技术大学</div>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
