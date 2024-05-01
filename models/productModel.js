module.exports = (sequelize, DataTypes) =>{
    const Producto = sequelize.define("producto", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          nombre: {
            type: DataTypes.TEXT
          },
          descripcion: {
            type: DataTypes.TEXT
          },
          precio: {
            type: DataTypes.INTEGER
          }        
        
    });

    return Producto
}

//Se define el modelo para la creación de la tabla Productos
