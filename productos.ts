namespace Productos {
    export class Producto {
        protected cantidad : number;
        protected precio : number;
        protected unidad : String;
        protected tipo : String;

        constructor( cantidad : number ){
            this.cantidad = cantidad;
        }

        public getTotal() : number {
            return this.cantidad * this.precio;
        }

        public getTipo() : String {
            return this.tipo;
        }
    }

    export class Leche extends Producto {
        constructor( cantidad : number) {
            super(cantidad);

            this.precio = 15.5;
            this.unidad = 'Lt';
            this.tipo   = 'lacteo';
        }
    }

    export class Crema extends Producto {
        constructor( cantidad : number) {
            super(cantidad);

            this.precio = 10.0;
            this.unidad = 'Kg';
            this.tipo   = 'lacteo';
            
        }
    }

    export class Mantequilla extends Producto {
        constructor( cantidad : number) {
            super(cantidad);

            this.precio = 4.5;
            this.unidad = 'Kg';
            this.tipo   = 'lacteo';
            
        }
    }

    export class Jamon extends Producto {
        constructor( cantidad : number) {
            super(cantidad);

            this.precio = 35.0;
            this.unidad = 'Kg';
            this.tipo   = 'embutido';
            
        }
    }

    export class Queso extends Producto {
        constructor( cantidad : number) {
            super(cantidad);

            this.precio = 100.0;
            this.unidad = 'Kg';
            this.tipo   = 'lacteo';
            
        }
    }

    export class Platano extends Producto {
        constructor( cantidad : number) {
            super(cantidad);

            this.precio = 14.0;
            this.unidad = 'Kg';
            this.tipo   = 'fruta';
            
        }
    }

    export class Manzana extends Producto {
        constructor( cantidad : number) {
            super(cantidad);

            this.precio = 13.0;
            this.unidad = 'Kg';
            this.tipo   = 'fruta';
            
        }
    }
}
