namespace Productos {
    export class Producto {
        protected precio : Number;
        protected unidad : String;
    }

    export class Leche extends Producto {
        constructor() {
            super();

            this.precio = 15.5;
            this.unidad = 'Lt';
            
        }
    }

    export class Crema extends Producto {
        constructor() {
            super();

            this.precio = 10.0;
            this.unidad = 'Kg';
            
        }
    }

    export class Mantequilla extends Producto {
        constructor() {
            super();

            this.precio = 4.5;
            this.unidad = 'Kg';
            
        }
    }

    export class Jamon extends Producto {
        constructor() {
            super();

            this.precio = 35.0;
            this.unidad = 'Kg';
            
        }
    }

    export class Queso extends Producto {
        constructor() {
            super();

            this.precio = 100.0;
            this.unidad = 'Kg';
            
        }
    }

    export class Platano extends Producto {
        constructor() {
            super();

            this.precio = 14.0;
            this.unidad = 'Kg';
            
        }
    }

    export class Manzana extends Producto {
        constructor() {
            super();

            this.precio = 13.0;
            this.unidad = 'Kg';
            
        }
    }
}
