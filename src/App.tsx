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
        {name: 'Lettuce', count: 0},
        {name: 'Bacon', count: 0},
    ])

    type IIngredient = {
        title: string;
        price: number;
        src: string;
    }

    const INGREDIENTS: Ingredient[] = [
        {name: 'Meat', price: 80, image: meatImage},
        {name: 'Cheese', price: 50, image: cheeseImage},
        {name: 'Lettuce', price: 10, image: lettuceImage},
        {name: 'Bacon', price: 60, image: baconImage}
    ]

    const changeCount = (ingredientName) => {
        setIngredients((prevIngredients) =>
            prevIngredients.map((ingredient) =>
            ingredient.name === ingredientName
                ? {...ingredient, count: ingredient.count + 1}
                : ingredient
            )
        );
    };

  return (
      <div className="container">
          <div>
              Ingredients:
              <hr/>
              <div className="ingredients_container">
                  <div className="ingredients">
                      {INGREDIENTS.map((ingredient, index) => (
                          <button key={index} type="button" onClick={() => changeCount(ingredient.name)}>
                              <img src={ingredient.image} alt={ingredient.image} width="30px" height="30px"/> -
                              {ingredient.name}:
                              {ingredient.price} SOM
                              <span>
                                  Count: {ingredients.find(i => i.name === ingredient.name)?.count}
                              </span>
                              <button type="button">X</button>
                          </button>
                      ))}
                  </div>
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
                  <div className="Salad"></div>
                  <div className="Cheese"></div>
                  <div className="Meat"></div>
                  <div className="BreadBottom"></div>
              </div>
          </div>

      </div>

  )
};

export default App
