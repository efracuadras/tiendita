namespace DescuentosBehaviors {

    export interface DescuentoBehavior {
        descuento() : void;
    }

    export class Lunes implements DescuentoBehavior {
        public descuento() : void {
            console.log("Descuento!");
        }
    }

    export class Martes implements DescuentoBehavior {
        public descuento() : void {
            console.log("Descuento!");
        }
    }

    export class Miercoles implements DescuentoBehavior {
        public descuento() : void {
            console.log("Descuento!");
        }
    }

    export class Jueves implements DescuentoBehavior {
        public descuento() : void {
            console.log("Descuento!");
        }
    }

    export class Viernes implements DescuentoBehavior {
        public descuento() : void {
            console.log("Descuento!");
        }
    }

    export class Sabado implements DescuentoBehavior {
        public descuento() : void {
            console.log("Descuento!");
        }
    }

    export class Domingo implements DescuentoBehavior {
        public descuento() : void {
            console.log("Descuento!");
        }
    }
}