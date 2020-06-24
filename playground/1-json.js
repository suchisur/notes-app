const fs=require('fs')

const dataBuffer = fs.readFileSync('1-json.json')//in binary from file
const dataJSON = dataBuffer.toString()//convert to string
const user = JSON.parse(dataJSON)//parse to make it an object
 user.name= 'Suchismita'
 user.age='20'
const userJSON = JSON.stringify(user)//stringify to make it a string suitable to write into a json file
fs.writeFileSync('1-json.json',userJSON) 