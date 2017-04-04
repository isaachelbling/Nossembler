var nossemble      = require('./src/nossemble')
var helpers        = require('./src/helpers')
var write          = helpers.write
var parseProgram   = helpers.parseProgram
var displayResults = helpers.displayResults
var helloWorld     = require('./sample-data/hello-world')
var simpleProgram  = require('./programs/simple')



var memorySize = 8*16
var data       = write(helloWorld).to( new Array(memorySize).fill(0) )
var program    = parseProgram(simpleProgram)
var memory     = [data, program]



// Now to ruin a perfectly good piece of binary with base-ten digits.
displayResults(memory, nossemble(memory))