const Sequelize = require('sequelize');


module.exports = class Teacher extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Teacher',
            tableName: 'teachers',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Teacher.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id' });
        db.Teacher.hasMany(db.Class, { foreignKey: 'classId', sourceKey: 'id' });
    }
};