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
    technicalSheet?: {
        subtitle?: string;
        composition?: string;
        characteristics?: string;
        shelfLife?: string;
        sanitaryRegistration?: string;
        recipe?: { item: string; pounds?: string; ounces?: string }[];
        preparation?: string[];
        allergens?: { allergen: string; present: boolean; description?: string }[];
        approvals?: {
            preparedBy: string;
            verifiedBy: string;
        };
    };
}

const standardShelfLife = "6 meses si se mantienen las condiciones correctas de almacenamiento: cerrar el empaque después de cada uso y conservar en un lugar limpio, fresco y seco.";

const standardAllergens = [
    { allergen: "Crustáceos", present: false },
    { allergen: "Gluten (trigo, centeno, cebada, avena, espelta)", present: true, description: "Harina de trigo" },
    { allergen: "Huevos", present: false },
    { allergen: "Leche / lactosa", present: true, description: "Suero de Leche" },
    { allergen: "Maní", present: false },
    { allergen: "Nueces", present: false },
    { allergen: "Pescado", present: false },
    { allergen: "Soya", present: true, description: "Trazas" },
    { allergen: "Sulfitos en concentración 10mg/kg o más", present: false },
];

const standardApprovals = {
    preparedBy: "Alina Báez H., Gerente General",
    verifiedBy: "Josefina Báez H., Gerente Administrativo",
};

export const products: Product[] = [
    {
        id: "cupcake",
        name: "Adai Cupcake Vainilla",
        category: "Reposterías",
        image: "/images/products/cupcake-bolsas-actualizada.png",
        description: "Premezcla para cupcake de vainilla diseñada para prolongar la vida de anaquel, ahorrar huevos y componentes grasos.",
        longDescription: "La premezcla para cupcake de vainilla está diseñada para prolongar la vida de anaquel, ahorrar adición de huevos y componentes grasos. Está elaborada con materias primas de calidad para desarrollar un producto de sabor exquisito, miga suave y esponjosa.",
        features: [
            "Fácil preparación",
            "Sabor a vainilla natural",
            "Textura esponjosa y suave",
            "Resultados consistentes",
            "Reduce tiempo de elaboración"
        ],
        usage: "Batir huevos, adicionar aceite, agregar Cupcake Vainilla Adai, incorporar agua, mezclar, verter en moldes y hornear a 165°C/330°F por 20 minutos aproximados.",
        presentation: "Fundas de 5 lb y 50 lb",
        technicalSheet: {
            composition: "Harina de Trigo, Azúcar, Suero de Leche, Sal, Goma Xantán, Pirofosfato de Sodio, Bicarbonato de Sodio, Almidón de Maíz, Mono y Diglicéridos de Ácidos Grasos, Almidón de Maíz Modificado, Sabor Natural de Vainilla y Fosfato Monocálcico Monohidratado.",
            characteristics: "Polvo suelto de granulometría fina, de olor y sabor a vainilla, sabor dulce.",
            shelfLife: standardShelfLife,
            sanitaryRegistration: "42881",
            recipe: [
                { item: "Cupcake Vainilla Adai", pounds: "5" },
                { item: "Huevos Líquidos", pounds: "1.5" },
                { item: "Aceite Vegetal", pounds: "1.3" },
                { item: "Agua", pounds: "1" },
            ],
            preparation: [
                "Batir los huevos hasta hacer ligera espuma y adicionar el aceite despacio, batiendo durante 2 minutos.",
                "Agregar Cupcake Vainilla Adai y continuar mezclando por 3 minutos.",
                "Agregar el agua despacio mezclando por 1 minuto.",
                "Retirar con espátula la mezcla adherida a los bordes.",
                "Mezclar por 3 minutos.",
                "Verter en moldes previamente engrasados.",
                "Llevar a horno por 20 minutos aproximados a 165°C/330°F.",
            ],
            allergens: standardAllergens,
            approvals: standardApprovals,
        }
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
        presentation: "Fundas de 5 lb y 50 lb",
        technicalSheet: {
            composition: "Harina de Trigo fortificada, Almidón de Maíz, Harina de Soya, Vitamina C, Enzimas Alfa y Beta Amilasa.",
            characteristics: "Polvo suelto de granulometría fina, de color crema, con olor ligero a soya.",
            shelfLife: standardShelfLife,
            sanitaryRegistration: "42880",
            recipe: [
                { item: "Adai Mejorante de Pan", pounds: "0.25% a 0.50% del peso de la harina" },
            ],
            preparation: [
                "Dosificar desde 0.25% a 0.50% del peso de la harina.",
                "Mezclar junto con los ingredientes secos antes de amasar.",
                "No exceder la dosis por ser un producto superconcentrado.",
            ],
            allergens: [
                { allergen: "Crustáceos", present: false },
                { allergen: "Gluten (trigo, centeno, cebada, avena, espelta)", present: true, description: "Harina de trigo" },
                { allergen: "Huevos", present: false },
                { allergen: "Leche / lactosa", present: false, description: "Trazas de Suero de Leche" },
                { allergen: "Maní", present: false },
                { allergen: "Nueces", present: false },
                { allergen: "Pescado", present: false },
                { allergen: "Soya", present: true, description: "Harina de Soya" },
                { allergen: "Sulfitos en concentración 10mg/kg o más", present: false },
            ],
            approvals: standardApprovals,
        }
    },
    {
        id: "base-pan-integral",
        name: "Adai Base para Pan Integral",
        category: "Panaderías",
        image: "/images/products/base-bolsas-actualizada.png",
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
        presentation: "25 lb (11.26 kg)",
        technicalSheet: {
            subtitle: "Base para Pan Integral ADAI",
            characteristics: "Base para panes integrales de sabor ligeramente dulce, miga de color marrón natural y olor característico. Fórmula balanceada en sabor dulce-salado-vainilla.",
            shelfLife: standardShelfLife,
            recipe: [
                { item: "Adai Base para Pan Integral", pounds: "10 a 30 lb por saco de harina de 120 lb" },
            ],
            preparation: [
                "Agregar 10% a 30% del peso total de la harina.",
                "Mezclar con los ingredientes secos antes de incorporar líquidos.",
                "Amasar, fermentar y hornear según el proceso habitual de pan integral.",
            ],
            approvals: standardApprovals,
        }
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
        usage: "Mezclar con harina panadera, margarina sin sal, levadura instantánea y agua helada hasta lograr una masa homogénea. Reposar, laminar, formar, fermentar, freír y decorar al gusto.",
        presentation: "Fundas de 5 lb y 50 lb",
        technicalSheet: {
            composition: "Azúcar, Suero de Leche, Harina de Soya, Sal, Mono y Diglicéridos de Ácidos Grasos, Pirofosfato de Sodio, Sabor natural de Vainilla, Bicarbonato de Sodio, Almidón de Maíz y Fosfato Monocálcico Monohidratado.",
            characteristics: "Polvo suelto de granulometría fina, de color crema, olor y sabor a vainilla ligeramente dulce.",
            shelfLife: standardShelfLife,
            sanitaryRegistration: "42882",
            recipe: [
                { item: "Adai Donut", pounds: "1" },
                { item: "Harina Panadera", pounds: "4" },
                { item: "Margarina sin sal", ounces: "5" },
                { item: "Levadura instantánea", ounces: "2" },
                { item: "Agua helada", pounds: "2" },
            ],
            preparation: [
                "Mezclar todos los ingredientes hasta lograr masa homogénea.",
                "Dar 5-10 minutos de reposo a la masa.",
                "Extender la masa hasta 1 cm de grosor aproximado.",
                "Formar las donas con troquel o maquinaria.",
                "Dejar actuar la levadura hasta el tamaño deseado.",
                "Freír en aceite o manteca vegetal.",
                "Escurrir, dejar enfriar y espolvorear azúcar o decorar al gusto.",
            ],
            allergens: standardAllergens,
            approvals: standardApprovals,
        }
    },
    {
        id: "vainilla",
        name: "Adai Base Concentrada Pastel Vainilla",
        category: "Pastelerías",
        image: "/images/products/base-bolsas-actualizada.png",
        description: "Base concentrada sabor vainilla para pasteles, orientada a sabor exquisito, miga suave y vida útil prolongada.",
        longDescription: "La Base Concentrada sabor Vainilla para Pasteles proporciona al producto sabor exquisito, miga suave y esponjosa. Tiene como objetivo alargar la vida útil del producto, ahorrando huevos y componentes grasos.",
        features: [
            "Sabor premium a vainilla natural",
            "Miga húmeda y esponjosa",
            "Fácil preparación",
            "Ideal para decoración",
            "Resultados consistentes"
        ],
        usage: "Batir huevos, adicionar aceite, incorporar ingredientes secos con Adai Base Concentrada Pastel Vainilla, agregar agua, mezclar, verter en moldes y hornear a 165°C/330°F.",
        presentation: "Fundas de 5 lb y 50 lb",
        technicalSheet: {
            composition: "Azúcar, Suero de Leche, Sal, Harina de Trigo, Almidón de Maíz Modificado, Mono y Diglicéridos de Ácidos Grasos, Almidón de Maíz, Goma Xantán y Sabor Natural de Vainilla.",
            characteristics: "Polvo semi-granulado de olor intenso a vainilla, de sabor ligeramente salado-dulce.",
            shelfLife: standardShelfLife,
            sanitaryRegistration: "42884",
            recipe: [
                { item: "Adai Base Concentrada Pastel Vainilla", pounds: "1" },
                { item: "Harina de Repostería", pounds: "10" },
                { item: "Azúcar", pounds: "8" },
                { item: "Huevos", pounds: "7.5" },
                { item: "Aceite Vegetal", pounds: "4" },
                { item: "Agua", pounds: "4" },
                { item: "Adai Polvo de Hornear", ounces: "6" },
            ],
            preparation: [
                "Batir los huevos hasta hacer ligera espuma y adicionar el aceite despacio batiendo durante 2 minutos.",
                "Adicionar ingredientes secos: azúcar, harina, Adai Polvo de Hornear, Adai Base Concentrada Pastel Vainilla y continuar mezclando por 3 minutos.",
                "Agregar el agua despacio mezclando por 1 minuto.",
                "Retirar con espátula la mezcla adherida a los bordes.",
                "Mezclar por 3 minutos.",
                "Verter en moldes previamente engrasados.",
                "Llevar a horno por 25 minutos aproximados a 165°C/330°F y desmoldar para enfriar.",
            ],
            allergens: standardAllergens,
            approvals: standardApprovals,
        }
    },
    {
        id: "pastel-maiz",
        name: "Adai Base Pastel de Maíz",
        category: "Pastelerías",
        image: "/images/products/base-bolsas-actualizada.png",
        description: "Base concentrada 1:10 de harina para pasteles de maíz, diseñada para ahorrar huevos y componentes grasos.",
        longDescription: "Base Concentrada (1:10 de harina) para Pasteles de Maíz, diseñada para ahorrar adición de huevos y componentes grasos, para desarrollar un producto de sabor exquisito.",
        features: [
            "Sabor tradicional a maíz",
            "Textura suave",
            "Fácil preparación",
            "Resultados uniformes"
        ],
        usage: "Mezclar con los ingredientes líquidos indicados, batir hasta integrar y hornear según el tamaño del molde.",
        presentation: "Consultar disponibilidad",
        technicalSheet: {
            subtitle: "Adai Base Pastel de Maíz",
            characteristics: "Base concentrada (1:10 de harina) para Pasteles de Maíz, diseñada para ahorrar adición de huevos y componentes grasos, para desarrollar un producto de sabor exquisito.",
            shelfLife: standardShelfLife,
            recipe: [
                { item: "Adai Base Pastel de Maíz", pounds: "1" },
                { item: "Harina de Repostería", pounds: "10" },
            ],
            preparation: [
                "Mezclar con los ingredientes líquidos indicados.",
                "Batir hasta integrar y lograr una mezcla homogénea.",
                "Hornear según el tamaño del molde y el proceso establecido.",
            ],
            approvals: standardApprovals,
        }
    },
    {
        id: "cupcake-chocolate",
        name: "Adai Cupcake Chocolate",
        category: "Reposterías",
        image: "/images/products/cupcake-bolsas-actualizada.png",
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
        presentation: "Fundas de 5 lb y 50 lb",
        technicalSheet: {
            subtitle: "ADAI Cupcake Chocolate",
            characteristics: "Premezcla para cupcake de Chocolate diseñada para prolongar la vida de anaquel, ahorrar adición de huevos y componentes grasos. Aporta sabor exquisito del Cacao Dominicano.",
            shelfLife: standardShelfLife,
            recipe: [
                { item: "Adai Cupcake Chocolate", pounds: "5" },
                { item: "Huevos Líquidos", pounds: "1.5" },
                { item: "Aceite Vegetal", pounds: "1.3" },
                { item: "Agua", pounds: "1" },
            ],
            preparation: [
                "Batir los huevos hasta hacer ligera espuma y adicionar el aceite despacio, batiendo durante 2 minutos.",
                "Agregar Adai Cupcake Chocolate y continuar mezclando por 3 minutos.",
                "Agregar el agua despacio mezclando por 1 minuto.",
                "Retirar con espátula la mezcla adherida a los bordes.",
                "Mezclar por 3 minutos.",
                "Verter en moldes previamente engrasados.",
                "Llevar a horno por 20 minutos aproximados a 165°C/330°F.",
            ],
            approvals: standardApprovals,
        }
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
        presentation: "Consultar disponibilidad",
        technicalSheet: {
            subtitle: "Polvo de Hornear Doble Acción ADAI",
            characteristics: "Libera gas al mezclarse con líquidos y nuevamente con el calor del horno, lo que ayuda a obtener una mejor textura y esponjosidad.",
            shelfLife: standardShelfLife,
            recipe: [
                { item: "Galletas", pounds: "0.5-1%" },
                { item: "Donas", pounds: "1.5-2%" },
                { item: "Pasteles y tortas", pounds: "2-3%" },
            ],
            preparation: [
                "Dosificar según el tipo de producto.",
                "Mezclar con los ingredientes secos.",
                "Dejar la mezcla en reposo por 30-60 minutos antes de entrar al horno.",
            ],
            approvals: standardApprovals,
        }
    },
];

export function getProductById(id: string): Product | undefined {
    return products.find(product => product.id === id);
}

export function getAllProductIds(): string[] {
    return products.map(product => product.id);
}
