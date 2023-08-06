#!/usr/bin/env node
import chalk from 'chalk'
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import { createSpinner } from 'nanospinner'

//capture user name
let playerName;
//helper variable to delay title
const delay = (ms = 2000) => new Promise((r) => setTimeout(r, ms))
async function welcome() {
    const title = chalkAnimation.rainbow("Million in the bag whose in?\n")
    await delay()
    title.stop();

    // Creating a template literal to allow multiple strings in the console without using line breaks
    console.log(
        `
        Hi, am BECK, your host for the game.
        If you get the question wrong I get ${chalk.bgRedBright("terminated")}
        Please get the questions right. I am still young to go....
        `
    )
}


async function handleAnswer(kweli) {
    const spinner = createSpinner("Confirming in system").start()
    await delay
    if (kweli) {
        spinner.success({ text: `You survived ${playerName}` })
    } else {
        spinner.error({ text: `☠☠☠ You just terminated me 👻👻👻. Watch your back ${playerName}` })
        process.exit(1)
    }
}
async function askName() {
    const answers = await inquirer.prompt({
        name: "player_name",
        type: "input",
        message: "Identify Yourself peasant?",
        default() {
            return "Player"
        },
    })
    playerName = answers.player_name
}
// async function ask() {
//     const jibu = await inquirer.prompt({
//         name: "swali",
//         type: "list",
//         message: "What is my name?",
//         choices: [
//             "BECK",
//             "BETT",
//             "MANU",
//             "CHERU",
//         ],
//     })

//     return handleAnswer(jibu.swali == "BETT")
// }
async function ask() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'JavaScript was created in 10 days then released on\n',
        choices: [
            'May 23rd, 1995',
            'Nov 24th, 1995',
            'Dec 4th, 1995',
            'Dec 17, 1996',
        ],
    });

    return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}
console.clear()
await welcome()
await askName()
await ask()