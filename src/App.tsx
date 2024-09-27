import './App.css';
import meatImage from './assets/meat.svg';
import cheeseImage from './assets/cheese.svg';
import lettuceImage from './assets/lettuce.svg';
import baconImage from './assets/bacon.svg';
import {useState} from "react";

const App = () => {
    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    type IIngredient = {
        name: string;
        price: number;
        src: string;
    }

    const INGREDIENTS = [
        {name: 'Meat', price: 80, image: meatImage},
        {name: 'Cheese', price: 50, image: cheeseImage},
        {name: 'Salad', price: 10, image: lettuceImage},
        {name: 'Bacon', price: 60, image: baconImage}
    ]

    const changeCount = (ingredientName: IIngredient['name']) => {
        setIngredients((prevIngredients) =>
            prevIngredients.map((ingredient) =>
            ingredient.name === ingredientName
                ? {...ingredient, count: ingredient.count + 1}
                : ingredient
            )

        );
    };

    const deleteIngredient = (ingredientName: IIngredient['name']) => {
        setIngredients((prevIngredients) =>
            prevIngredients.map((ingredient) =>
                ingredient.name === ingredientName && ingredient.count > 0
                    ? {...ingredient, count: ingredient.count - 1}
                    : ingredient
            )
        );
    };

    const totalSumCount = () => {
         return ingredients.reduce((acc, ingredient) => {
            const ingredientInfo = INGREDIENTS.find(i => i.name === ingredient.name);
            if (ingredientInfo) {
                return acc + (ingredient.count * ingredientInfo.price);
            }
            return acc;
        }, 30)
    };

  return (
      <div className="container">
          <div>
              Ingredients:
              <hr/>
              <div className="ingredients_container">
                  {INGREDIENTS.map((ingredient, index) => (
                  <div className="ingredients">
                          <button key={index} type="button" onClick={() => changeCount(ingredient.name)}>
                              <img src={ingredient.image} alt={ingredient.image} width="30px" height="30px"/>
                              {ingredient.name}:
                              {ingredient.price} SOM
                          </button>
                      <span>
                          Count: {ingredients.find(i => i.name === ingredient.name)?.count}
                      </span>
                      <button type="button" onClick={() => deleteIngredient(ingredient.name)}>X</button>
                  </div>
                  ))}
                  <hr/>
                  <span>
                      <strong>Total: {totalSumCount()} SOM</strong>
                  </span>
              </div>

          </div>
          <div>
          Burger:
              <hr/>
              <div className="Burger">
                  <div className="BreadTop">
                      <div className="Seeds1"></div>
                      <div className="Seeds2"></div>
                  </div>
                  {ingredients.map((ingredient) => (
                      Array(ingredient.count).fill(null).map((_, i) => (
                              <div key={`${ingredient.name}-${i}`} className={ingredient.name}></div>
                          ))
                      ))}
                  <div className="BreadBottom"></div>
              </div>
          </div>

      </div>

  )
};

export default App
