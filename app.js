const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Kuidas sind kutsuda?'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Sisesta salasõna:',
    mask: '*' // Maskib sisendi tähed
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Kas oled kindel?',
    default: true
  },
  {
    type: 'list',
    name: 'color',
    message: 'Vali oma lemmikvärv:',
    choices: ['Punane', 'Roheline', 'Sinine']
  },
  {
    type: 'checkbox',
    name: 'hobbies',
    message: 'Millised hobid sul on?',
    choices: ['Lugemine', 'Jooksmine', 'Muusika kuulamine']
  },
  {
    type: 'number',
    name: 'age',
    message: 'Kui vana sa oled?',
    validate: (input) => {
      if (isNaN(input)) {
        return 'Palun sisesta number';
      }
      return true;
    }
  }
];

(async () => {
  const answers = await inquirer.prompt(questions);
  console.log('Kasutaja vastused:', answers);
})();
