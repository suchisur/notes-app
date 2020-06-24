const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const yargsParser = require('yargs-parser')
const { demandOption } = require('yargs')
const { argv } = require('process')

//customize yargs version
yargs.version('1.1.0')


yargs.command({
    command : 'add' ,
    describe : 'Add a new note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe : 'Note body',
            demandOption: true,
            type : 'string'
        }
         
    },
   
    handler (argv) {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command : 'remove' ,
    describe : 'Remove a note',
    builder:{
        title: {
            describe : 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler  (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command : 'read' ,
    describe : 'Read a note!',
    builder:{
        title:{
            describe :'Read note',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})


yargs.command({
    command : 'list' ,
    describe : 'List all the notes',
    handler  () {
       notes.listNotes()
   
    } 
})

yargs.parse()


