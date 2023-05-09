const NomenPostgre = require('./NomenPostgre.js');
const NomenPostgreConfig = {
    'Table1': [
        { name: 'column1', type: NomenPostgre.DataType.NUMBER, notnull: false }
    ]
};

module.exports.NomenPostgreConfig=NomenPostgreConfig;