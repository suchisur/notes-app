const fs = require('fs')
const chalk=require('chalk')


const addNote = (title,body)=>
{
    const notes = loadNotes()
    const duplicateNote = notes.find( (note)=> note.title===title)
    if(!duplicateNote)
    { 
         notes.push(
                {
                    title: title,
                    body: body
                }
            )
        saveNotes(notes)
        console.log(chalk.green.inverse('New note saved!'))

    }
    else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
    
}

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes =  ()=>
{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) //parse to make it an object
    }
    catch (e)
    {
        return []
    }
    

}
const removeNote =  (title)=>
{
    const notes =loadNotes()
    const notesToKeep = notes.filter((note)=> note.title!==title)
    if(notes.length>notesToKeep.length)
    {
        console.log(chalk.green.inverse( 'Note ' + title + ' removed'))
        saveNotes(notesToKeep)
    }
    else
    {
        console.log(chalk.red.inverse('No note found!'))
    }
    
    
    
}
const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes.. ' ))
    notes.forEach(note => console.log(note.title ))
  

}
const readNote = (title)=>
{
    const notes =loadNotes()
    const req=notes.find((note)=>note.title===title)
    if(req)
    {
        console.log(chalk.yellow(req.body))
    }
    else{
        console.log(chalk.red('Note not found'))
    }

}


module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes:listNotes,
    readNote:readNote
}