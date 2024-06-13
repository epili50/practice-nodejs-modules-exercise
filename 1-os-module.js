// Leer README

const os = require('os');

const nombreEquipo = os.hostname();
const version = os.version();
const totalMem = os.totalmem();
const totalMemGB = Math.ceil(totalMem / (1024 ** 3));


console.log('Equipo:', nombreEquipo, 'version', version, 'Total de RAM', totalMemGB);

