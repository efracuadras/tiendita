/// <reference path="descuentosbehaviors.ts" />

namespace Ventas {
    export class Venta {
        protected descuentoBehavior : DescuentosBehaviors.DescuentoBehavior;

        public display() : void {
        }

        public setDescuentoBehavior( db : DescuentosBehaviors.DescuentoBehavior ) : void {
            this.descuentoBehavior = db;
        }

        public descuento() : void {
            this.descuentoBehavior.descuento();
        }
    }
}