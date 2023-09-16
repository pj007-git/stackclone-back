
module.exports = (sql,Sequelize) => {
    const userDetails =  sql.define('users',{
        name : {
            type : Sequelize.STRING
        },
        created_at: {
            allowNull: false,
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            allowNull: false,
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    },{
        timestamps: false
    })
    return userDetails;
}