/// <reference path="descuentosbehaviors.ts" />
/// <reference path="productos.ts" />

namespace Ventas {
    export class Venta {
        protected descuentoBehavior : DescuentosBehaviors.DescuentoBehavior;
        protected productos : Array<Productos.Producto>

        public setDescuentoBehavior( db : DescuentosBehaviors.DescuentoBehavior ) : void {
            this.descuentoBehavior = db;
        }

        public descuento() : number {
            return this.descuentoBehavior.descuento( this.productos );
        }
        
        public total() : number {
            return this.productos.reduce((total, producto)=>{
                return total + producto.getPrecio();
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