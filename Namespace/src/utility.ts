namespace Utility {
    export namespace Taxes {
        export function calculateIva(price: number): number {
            return (price * 0.21) + price;
        }

        export function penalityIva(penality: number): number{
            return (penality * 0.30) + penality;
        }
    }
}