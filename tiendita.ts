/// <reference path="ventas.ts" />
/// <reference path="productos.ts" />
/// <reference path="descuentosbehaviors.ts" />

namespace MiniDuckSimulator {
    export function main() : void {
        let leche : Productos.Leche = new Productos.Leche(10);
        let crema : Productos.Crema = new Productos.Crema(0.5);
        let mantequilla : Productos.Mantequilla = new Productos.Mantequilla(0.25);
        let queso : Productos.Queso = new Productos.Queso(0.5);
        let platanos : Productos.Platano = new Productos.Platano(1);
        let manzana : Productos.Manzana = new Productos.Manzana(2);

        let productos = [ leche, crema, mantequilla, queso, platanos, manzana ];

        // Lunes
        let venta = new Ventas.Venta();
        venta.setDescuentoBehavior( new DescuentosBehaviors.Lunes() );
        venta.setProductos( productos );

        console.log('descueto: '+ venta.descuento() );
        console.log('total: '+ venta.total() );
    }
}