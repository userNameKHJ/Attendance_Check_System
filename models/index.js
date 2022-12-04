const Sequelize = require('sequelize');
const User = require('./user');
const Class = require('./class');
const Attendance = require('./attendance');
const Check = require('./check');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const sequelize = new Sequelize(
    config.database, config.username, config.password, config
);

const db = {
    sequelize,
    User,
    Class,
    Attendance,
    Check
};

User.init(sequelize);
Class.init(sequelize);
Attendance.init(sequelize);
Check.init(sequelize);

User.associate(db);
Class.associate(db);
Attendance.associate(db);
Check.associate(db);

module.exports = db;