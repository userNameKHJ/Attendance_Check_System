const Sequelize = require('sequelize');

// id, password, name, type, nickname, description

module.exports = class Class extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id : {
                type: Sequelize.STRING(100),
                allowNull: false,
                primaryKey: true
            },
            name : {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            date : {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            description : {
                type: Sequelize.TEXT,
                allowNull: true
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Class',
            tableName: 'classes',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Class.hasMany(db.Attendance, { foreignKey: 'classId', sourceKey: 'id', onDelete: 'cascade' });
    }
};