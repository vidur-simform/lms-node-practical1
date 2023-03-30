const inquirer = require("inquirer");

const timeZones = require('./data/timzones.json');
const { timeValidator } = require('./utils/timeValidator');
const { converter } = require('./utils/converter');

const promtOptionsTimeZone = timeZones.map((tz) => tz.abbr + " (" + tz.full_form + ")");

const main = async () => {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "current_timezone",
            message: "What is the current timezone ?",
            choices: promtOptionsTimeZone,

        },
        {
            type: "list",
            name: "convert_to_timezone",
            message: "In which timezone you want to convert ?",
            choices: promtOptionsTimeZone,
        },
        {
            type: "input",
            name: "current_time",
            message: `Enter time in format of 'HH:MM AM/PM' :`,
            default: new Date().toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            }),
            validate(inputTime) {
                return timeValidator(inputTime);
            }
        }
    ]);
    console.log("CONVERTED_TIME  = ", converter(
        answers.current_timezone.split(' ')[0],
        answers.convert_to_timezone.split(' ')[0],
        answers.current_time
    ));
};

main();