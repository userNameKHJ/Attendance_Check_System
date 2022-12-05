const Sequelize = require('sequelize');

// id, password, name, type, description

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id : {
                type: Sequelize.STRING(100),
                allowNull: false,
                primaryKey: true
            },
            password : {
                type: Sequelize.STRING(100),
                allowNull: true
            },
            name : {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            type : {
                type: Sequelize.INTEGER(20),
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
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.User.hasMany(db.Check, { foreignKey: 'userId', sourceKey: 'id', onDelete: 'cascade' });
        db.User.hasMany(db.Member, { foreignKey: 'userId', sourceKey: 'id', onDelete: 'cascade' });
        db.User.hasMany(db.Teacher, { foreignKey: 'userId', sourceKey: 'id', onDelete: 'cascade' });
    }
};