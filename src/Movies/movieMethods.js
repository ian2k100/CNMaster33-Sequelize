const Film = require('./movieModal');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

exports.addFilm = async(filmObj) =>{
    try {
        await Film.sync() //craeting the database
        await Film.create(filmObj) //creating an entry
    } catch (error) {
        console.log(error)
    } 
}

exports.list = async() => {
    try {
        const listOfMovies = await Film.findAll()
        console.log(listOfMovies)
    } catch (error) {
        console.log(error)
    }
}