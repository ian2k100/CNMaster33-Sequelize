const Film = require('./movieModel');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

exports.addFilm = async(filmObj) =>{
    try {
        await Film.sync() //creating the database
        await Film.create(filmObj) //creating an entry
    } catch (error) {
        console.log(error)
    } 
}

exports.listFilm = async() => {
    try {
        const listOfMovies = await Film.findAll()
        console.log(listOfMovies)
    } catch (error) {
        console.log(error)
    }
}

exports.updateFilm = async() => {
    try {
        if (argv.newname) {
            await Film.update(
                {name: argv.newname},
                {where: {name:argv.name}}
            )
            console.log(`The movie ${argv.name} has been changed to ${argv.newname}`)
    } else if (argv.newactor) {
        await Film.update (
            { actor: argv.newactor},
            {where: {name:argv.name}}
        )
        console.log(`The movie ${argv.name} actor has been changed to ${argv.newactor}`)
        }
    } catch (error) {
    console.log(error) 
    }
}

exports.deleteFilm = async() => {
    try {
        if (argv.name) {
            await Film.destroy({
                where:{name:argv.name}
            })
            console.log(`The movie ${argv.name} has been deleted`);
        } else if (argv.actor) {
            await Film.destroy({
                where:{actor:argv.actor}
            })
            console.log(`The movie starring ${argv.actor} has been deleted`);
        }
    } catch (error) {
        console.log(error);
    }
}
