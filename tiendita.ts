/// <reference path="ventas.ts" />
/// <reference path="productos.ts" />
/// <reference path="descuentosbehaviors.ts" />

namespace Tiendita {
    export function main() : void {
        let leche : Productos.Leche = new Productos.Leche(10);
        let crema : Productos.Crema = new Productos.Crema(0.5);
        let mantequilla : Productos.Mantequilla = new Productos.Mantequilla(0.25);
        let queso : Productos.Queso = new Productos.Queso(0.5);
        let platanos : Productos.Platano = new Productos.Platano(1);
        let manzana : Productos.Manzana = new Productos.Manzana(2);
        let jamon : Productos.Jamon = new Productos.Jamon(1);

        let productos = [ leche, crema, mantequilla, queso, platanos, manzana, jamon ];

        // Lunes
        let venta = new Ventas.Venta();
        venta.setDescuentoBehavior( new DescuentosBehaviors.Lunes() );
        
        // venta.setProductos( productos );
        productos.forEach((producto) => { venta.addProducto( producto ) });
        
        console.log("Lunes");
        venta.pagar();

        venta.setDescuentoBehavior( new DescuentosBehaviors.Martes() );
        console.log("Martes");
        venta.pagar();

        venta.setDescuentoBehavior( new DescuentosBehaviors.Miercoles() );
        console.log("Miercoles");
        venta.pagar();

        venta.setDescuentoBehavior( new DescuentosBehaviors.Jueves() );
        console.log("Jueves");
        venta.pagar();

        venta.setDescuentoBehavior( new DescuentosBehaviors.Viernes() );
        console.log("Viernes");
        venta.pagar();

        venta.setDescuentoBehavior( new DescuentosBehaviors.Sabado() );
        console.log("Sabado");
        venta.pagar();

        venta.setDescuentoBehavior( new DescuentosBehaviors.Domingo() );
        console.log("Domingo");
        venta.pagar();
        
    }
}