const { SERVFAIL } = require('dns');
const Sequelize = require('sequelize');

// id, password, name, type, nickname, description

module.exports = class Attendance extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id : {
                type: Sequelize.STRING(100),
                allowNull: false,
                primaryKey: true
            },
            date : {
                type: Sequelize.DATE,
                allowNull: false
            },
            time : {
                type: Sequelize.TIME,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Attendance',
            tableName: 'attendances',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Attendance.hasMany(db.Check, { foreignKey: 'attendanceId', sourceKey: 'id', onDelete: 'cascade' });
        db.Attendance.belongsTo(db.Class, { foreignKey: 'classId', targetKey: 'id' });
    }
};