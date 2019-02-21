/// <reference path="productos.ts" />

namespace DescuentosBehaviors {

    export interface DescuentoBehavior {
        descuento( productos : Array<Productos.Producto> ) : number;
    }

    export class Lunes implements DescuentoBehavior {
        public descuento() : number {
            return 0.0
        }
    }

    export class Martes implements DescuentoBehavior {
        public descuento() : number {
            return 0.0
        }
    }

    export class Miercoles implements DescuentoBehavior {
        public descuento() : number {
            return 0.0
        }
    }

    export class Jueves implements DescuentoBehavior {
        public descuento() : number {
            return 0.0
        }
    }

    export class Viernes implements DescuentoBehavior {
        public descuento() : number {
            return 0.0
        }
    }

    export class Sabado implements DescuentoBehavior {
        public descuento() : number {
            return 0.0
        }
    }

    export class Domingo implements DescuentoBehavior {
        public descuento() : number {
            return 0.0
        }
    }
}