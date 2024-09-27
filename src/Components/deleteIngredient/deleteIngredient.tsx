export const deleteIngredient = (
    ingredientName: string,
    ingredients: {name: string; count: number} [],
    setIngredients: (ingredients: { name: string; count: number}[]) => void
) => {
    setIngredients(
        ingredients.map((ingredient) =>
            ingredient.name === ingredientName
                ? {...ingredient, count: ingredient.count - 1}
                : ingredient
        )
    );
};