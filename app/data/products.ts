export interface Product {
    id: string;
    name: string;
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
        name: "Premezcla para Cupcake",
        image: "/images/products/cupcake.png",
        description: "Facilita el proceso de elaboración, basta adicionar líquidos, mezclar, hornear y en unos minutos disfrutar cupcakes de delicioso sabor y olor a vainilla natural.",
        longDescription: "Nuestra premezcla para cupcakes es la solución ideal para panaderías y reposterías que buscan eficiencia sin sacrificar calidad. Con ingredientes seleccionados y una fórmula perfectamente balanceada, obtendrás cupcakes esponjosos, con un sabor excepcional a vainilla natural.",
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
        name: "Mejorante para todo tipo de pan",
        image: "/images/products/mejorante.png",
        description: "Fórmula superconcentrada, con proteínas y vitaminas, ofrece optimizar la dosificación y los tiempos de proceso, mejor estructura de la miga, dorado de la corteza y aroma del producto final.",
        longDescription: "Gracias a su fórmula superconcentrada con proteínas y vitaminas, garantiza ahorro en dosis y tiempo, aporta mejor estructura de la miga, ahorro y dorado perfecto en cada horneada.",
        features: [
            "Fórmula superconcentrada",
            "Enriquecido con proteínas y vitaminas",
            "Reduce el uso entre 50-75%",
            "Mejor estructura de la miga",
            "Dorado uniforme de la corteza",
            "Aroma excepcional"
        ],
        usage: "Agregar 0.25% a 0.50% del peso total de la harina. Mezclar junto con los ingredientes secos antes de amasar.",
        presentation: "Bolsa de 5 lb (2.27 kg) y de 50 lb (22.73 kg)"
    },
    {
        id: "basedonuts",
        name: "Base Concentrada para Donuts",
        image: "/images/products/basedonuts.png",
        description: "Obtén los mejores resultados de donuts sabrosos y suaves durante varios días.",
        longDescription: "Nuestra base concentrada para donuts te permite crear donuts perfectos con una textura suave y esponjosa que se mantiene fresca por más tiempo. Ideal para panaderías y negocios que buscan ofrecer donuts de calidad premium con menor esfuerzo.",
        features: [
            "Textura suave y esponjosa",
            "Mayor durabilidad del producto",
            "Fácil de trabajar",
            "Absorción óptima de fritura",
            "Resultados profesionales"
        ],
        usage: "Mezclar con harina, margarina, levadura y agua. Mezclar todos los ingredientes hasta lograr la masa. Pasar la masa por cilindro hasta suavizarla. Dejar tapada con tela o plástico, en reposo por 10 minutos. Extender la masa hasta 1 cm de grosor aproximado. Formar las Donuts con troquel o maquinaria. Dejar actuar la levadura hasta tamaño deseado. Freír en aceite vegetal. Escurrir y decorar al gusto.",
        presentation: "Bolsa de 5 lb (2.27 kg) y de 50 lb (22.73 kg)"
    },
    {
        id: "vainilla",
        name: "Base Concentrada Pastel de Vainilla",
        image: "/images/products/vainilla.png",
        description: "Mezcla perfecta para crear pasteles de vainilla con textura esponjosa y sabor excepcional.",
        longDescription: "La Base Concentrada para Pastel de Vainilla de Adai es la opción preferida de reposteros profesionales. Su fórmula exclusiva garantiza pasteles con una miga esponjosa, húmeda y un sabor a vainilla natural que cautiva desde el primer bocado.",
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
];

export function getProductById(id: string): Product | undefined {
    return products.find(product => product.id === id);
}

export function getAllProductIds(): string[] {
    return products.map(product => product.id);
}
