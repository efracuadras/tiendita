/// <reference path="descuentosbehaviors.ts" />
/// <reference path="productos.ts" />

namespace Ventas {
    export class Venta {
        protected descuentoBehavior : DescuentosBehaviors.DescuentoBehavior;
        protected productos : Array<Productos.Producto>

        public setDescuentoBehavior( db : DescuentosBehaviors.DescuentoBehavior ) : void {
            this.descuentoBehavior = db;
        }

        public pagar() : void {
            let total = this.total();
            let iva = total * 0.16;
            let descuento = this.descuento();
        
            console.log(`Total : ${ total }`);
            console.log(`Iva (16%) : ${ iva }`);
            console.log(`Descuento : ${ descuento }`);
            console.log('----------------------------');
            console.log(`Total de Venta : ${ total + iva - descuento }`);

            console.log('\n\n');
        }
        public descuento() : number {
            return this.descuentoBehavior.descuento( this.productos );
        }
        
        public total() : number {
            return this.productos.reduce((total, producto)=>{
                return total + producto.getTotal();
            }, 0)
        }

        public setProductos( productos : Array<Productos.Producto> ) : void {
            this.productos = productos;
        }

        public addProducto( producto : Productos.Producto ) : void {
            this.productos.push( producto );
        }
    }
}