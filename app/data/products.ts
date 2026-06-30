export interface Product {
    id: string;
    name: string;
    category: "Panaderías" | "Reposterías" | "Pastelerías";
    image: string;
    description: string;
    longDescription: string;
    features: string[];
    usage: string;
    presentation: string;
}

export const products: Product[] = [
    {
        id: "cupcake",
        name: "Adai Cupcake Vainilla",
        category: "Reposterías",
        image: "/images/products/cupcake.png",
        description: "Premezcla para cupcake de vainilla diseñada para prolongar la vida de anaquel y ahorrar adición de huevos y componentes grasos.",
        longDescription: "Nuestra premezcla para cupcake de vainilla está diseñada para prolongar la vida de anaquel, ahorrar adición de huevos y componentes grasos.",
        features: [
            "Fácil preparación",
            "Sabor a vainilla natural",
            "Textura esponjosa y suave",
            "Resultados consistentes",
            "Reduce tiempo de elaboración"
        ],
        usage: "Mezclar con líquidos (huevos, aceite y agua) batir por 3-5 minutos y hornear a 180°C por 18-22 minutos.",
        presentation: "Bolsa de 5 lb (2.27 kg) y de 50 lb (22.73 kg)"
    },
    {
        id: "mejorante",
        name: "Adai Mejorante de Pan",
        category: "Panaderías",
        image: "/images/products/mejorante.png",
        description: "Mejorador de harinas para panificación, diseñado para todo tipo de panes.",
        longDescription: "Es un mejorador de harinas para panificación, diseñado para todo tipo de panes, asegura homogeneidad de miga, volumen, color y aroma deseado en el producto final.",
        features: [
            "Diseñado para todo tipo de panes",
            "Homogeneidad de miga",
            "Mejor volumen",
            "Color y aroma deseado",
            "Resultados consistentes"
        ],
        usage: "Agregar 0.25% a 0.50% del peso total de la harina. Mezclar junto con los ingredientes secos antes de amasar.",
        presentation: "Bolsa de 5 lb (2.27 kg) y de 50 lb (22.73 kg)"
    },
    {
        id: "base-pan-integral",
        name: "Adai Base para Pan Integral",
        category: "Panaderías",
        image: "/images/products/mejorante.png",
        description: "Base para panes integrales de sabor ligeramente dulce, miga de color marrón natural y olor característico.",
        longDescription: "Base para panes integrales de sabor ligeramente dulce, miga de color marrón natural y olor característico.",
        features: [
            "Fórmula balanceada",
            "Perfil dulce-salado-vainilla",
            "Miga de color marrón natural",
            "Olor característico",
            "Ideal para panes integrales"
        ],
        usage: "Agregar 10% a 30% del peso total de la harina.",
        presentation: "25 lb (11.26 kg)"
    },
    {
        id: "basedonuts",
        name: "Adai Donuts (Base Concentrada)",
        category: "Panaderías",
        image: "/images/products/basedonuts.png",
        description: "Base concentrada para elaborar donuts perfectos, esponjosos y de textura suave por más tiempo.",
        longDescription: "Nuestra base concentrada para elaborar donuts perfectos, esponjosos y de textura suave por más tiempo.",
        features: [
            "Fácil de preparar",
            "Textura suave y esponjosa",
            "Mayor durabilidad del producto",
            "Resultados consistentes"
        ],
        usage: "Mezclar con harina, margarina, levadura y agua, hasta lograr la masa. Darle reposo de 10 minutos. Extender la masa hasta 1 cm de grosor. Formar las donuts, dejar actuar la levadura hasta el tamaño deseado, freír, escurrir y decorar al gusto.",
        presentation: "Bolsa de 5 lb (2.27 kg) y de 50 lb (22.73 kg)"
    },
    {
        id: "vainilla",
        name: "Adai Base Concentrada Pastel Vainilla",
        category: "Pastelerías",
        image: "/images/products/base-concentrada-pastel-vainilla-bolsas.png",
        description: "Base concentrada 1:10 de harina para pasteles, con miga firme, esponjosa y sabor a vainilla natural.",
        longDescription: "La más concentrada (1:10 de harina) para pasteles, es la opción preferida de reposteros profesionales por aportar una miga firme, esponjosa de un sabor a vainilla natural que cautiva desde el primer bocado.",
        features: [
            "Sabor premium a vainilla natural",
            "Miga húmeda y esponjosa",
            "Fácil preparación",
            "Ideal para decoración",
            "Resultados consistentes"
        ],
        usage: "Mezclar con harina, huevos, azúcar, aceite y agua. Batir por 4-5 minutos. Hornear a 170°C por 30-35 minutos.",
        presentation: "Bolsa de 5 lb (2.27 kg) y de 50 lb (22.73 kg)"
    },
    {
        id: "pastel-maiz",
        name: "Adai Base Pastel de Maíz",
        category: "Pastelerías",
        image: "/images/products/vainilla.png",
        description: "Base concentrada 1:10 de harina para pasteles de maíz, diseñada para ahorrar huevos y componentes grasos.",
        longDescription: "Base Concentrada (1:10 de harina) para Pasteles de Maíz, diseñada para ahorrar adición de huevos y componentes grasos, para desarrollar un producto de sabor exquisito.",
        features: [
            "Sabor tradicional a maíz",
            "Textura suave",
            "Fácil preparación",
            "Resultados uniformes"
        ],
        usage: "Mezclar con los ingredientes líquidos indicados, batir hasta integrar y hornear según el tamaño del molde.",
        presentation: "Consultar disponibilidad"
    },
    {
        id: "cupcake-chocolate",
        name: "Adai Cupcake Chocolate",
        category: "Reposterías",
        image: "/images/products/cupcake-chocolate-bolsas.png",
        description: "Premezcla para cupcake de chocolate diseñada para prolongar la vida de anaquel y ahorrar adición de huevos y componentes grasos.",
        longDescription: "Nuestra premezcla para cupcake de Chocolate está diseñada para prolongar la vida de anaquel, ahorrar adición de huevos y componentes grasos.",
        features: [
            "Fácil preparación",
            "Sabor exquisito del Cacao Dominicano",
            "Textura esponjosa",
            "Resultados consistentes",
            "Reduce tiempo de elaboración"
        ],
        usage: "Mezclar con líquidos (huevos, aceite y agua) batir por 3-5 minutos y hornear a 180°C por 18-22 minutos.",
        presentation: "Bolsa de 5 lb (2.27 kg) y de 50 lb (22.73 kg)"
    },
    {
        id: "polvo-hornear",
        name: "Adai Polvo de Hornear (Leudante doble acción)",
        category: "Pastelerías",
        image: "/images/products/vainilla.png",
        description: "Leudante de doble acción, con fórmula concentrada para productos de reposterías y pastelerías.",
        longDescription: "Leudante de doble acción, con fórmula concentrada para productos de reposterías y pastelerías.",
        features: [
            "Libera gas al mezclarse con los líquidos",
            "Actúa nuevamente con el calor del horno",
            "Ayuda a obtener una miga de mayor volumen",
            "Aporta suavidad y esponjosidad"
        ],
        usage: "Usar 0.5-1% para galletas, 1.5-2% para donas y 2-3% para pasteles. Dejar la mezcla en reposo por 30-60 minutos antes de entrar al horno.",
        presentation: "Consultar disponibilidad"
    },
];

export function getProductById(id: string): Product | undefined {
    return products.find(product => product.id === id);
}

export function getAllProductIds(): string[] {
    return products.map(product => product.id);
}
