const yargs = require ("yargs");
const {hideBin} = require('yargs/helpers');
const { addFilm, listFilm, updateFilm, deleteFilm } = require("./Movies/movieMethods");
const argv = yargs(hideBin(process.argv)).argv;

const app = async() => {
    if(argv.add){
        const filmObj = {
            name: argv.title,
            actor: argv.actor
        }
        await addFilm(filmObj);
    } else if (argv.list) {
        await listFilm()
    } else if (argv.update) {
        await updateFilm(argv);
    } else if (argv.delete) {
        const filmDelete = {
            name: argv.title,
            actor: argv.actor
        }
        await deleteFilm(filmDelete);
    } else {
        console.log('Wrong Query')
    }
}

app()