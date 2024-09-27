import {IIngredient} from "../Types/Types.tsx";

export const totalSumCount = (
    ingredients: {name: string; count: number }[],
    INGREDIENTS: IIngredient[]
) => {
    return ingredients.reduce((acc, ingredient) => {
        const ingredientInfo = INGREDIENTS.find(i => i.name === ingredient.name);
        if (ingredientInfo) {
            return acc + (ingredient.count * ingredientInfo.price);
        }
        return acc;
    }, 30)
};