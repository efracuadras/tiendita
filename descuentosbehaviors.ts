/// <reference path="productos.ts" />

namespace DescuentosBehaviors {

    export interface DescuentoBehavior {
        descuento( productos : Array<Productos.Producto> ) : number;
    }

    export class Lunes implements DescuentoBehavior {
        public descuento( productos : Array<Productos.Producto> ) : number {

            // DESCUENTO 5%
            return productos.reduce((total, producto)=>{
                return total + ( producto.getTotal() * .05 );
            }, 0);
        }
    }

    export class Martes implements DescuentoBehavior {
        public descuento( productos : Array<Productos.Producto> ) : number {
            // No hay descuento
            return 0.0
        }
    }

    export class Miercoles implements DescuentoBehavior {
        public descuento( productos : Array<Productos.Producto> ) : number {
            // menonita
            return productos.filter(( producto )=>{ return producto.getTipo() === 'lacteo'; })
                .reduce((total, producto)=>{
                    return total + ( producto.getTotal() * .1 );
                }, 0)
        }
    }

    export class Jueves implements DescuentoBehavior {
        public descuento( productos : Array<Productos.Producto> ) : number {
            // fruta
            return productos.filter(( producto )=>{ return producto.getTipo() === 'fruta'; })
                .reduce((total, producto)=>{
                    return total + ( producto.getTotal() * .15 );
                }, 0)
        }
    }

    export class Viernes implements DescuentoBehavior {
        public descuento( productos : Array<Productos.Producto> ) : number {
            let total = 0;

            // embutidos
            total += productos.filter(( producto )=>{ return producto.getTipo() === 'embutido'; })
                .reduce((total, producto)=>{
                    return total + ( producto.getTotal() * .15 );
                }, 0)

            // lacteos
            total += productos.filter(( producto )=>{ return producto.getTipo() === 'lacteo'; })
                .reduce((total, producto)=>{
                    return total + ( producto.getTotal() * .15 );
                }, 0)

            return total;
        }
    }

    export class Sabado implements DescuentoBehavior {
        public descuento( productos : Array<Productos.Producto> ) : number {
            // No hay descuento
            return 0.0
        }
    }

    export class Domingo implements DescuentoBehavior {
        public descuento( productos : Array<Productos.Producto> ) : number {
            // DESCUENTO 5%
            return productos.reduce((total, producto)=>{
                return total + ( producto.getTotal() * .05 );
            }, 0);
        }
    }
}