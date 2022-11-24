const fs = require('fs')

fs.writeFile('newFile.txt', 'Hello world!!!',(err) => {
	if (err) console.log(err)
})

