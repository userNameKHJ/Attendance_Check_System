const Sequelize = require('sequelize');

// id, password, name, type, nickname, description

module.exports = class Check extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            state : {
                type: Sequelize.STRING(20),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Check',
            tableName: 'checks',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Check.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id' });
        db.Check.belongsTo(db.Attendance, { foreignKey: 'attendanceId', targetKey: 'id' });
    }
};