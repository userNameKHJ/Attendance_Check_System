const Sequelize = require('sequelize');

module.exports = class Member extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Member',
            tableName: 'members',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Member.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id' });
        db.Member.belongsTo(db.Class, { foreignKey: 'classId', targetKey: 'id' });
    }
};