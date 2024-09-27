import './App.css';
import meatImage from './assets/meat.svg';
import cheeseImage from './assets/cheese.svg';
import lettuceImage from './assets/lettuce.svg';
import baconImage from './assets/bacon.svg';
import {useState} from "react";
import {changeCount} from "./Components/ChangeCount/ChangeCount.tsx";
import {deleteIngredient} from "./Components/deleteIngredient/deleteIngredient.tsx";
import {totalSumCount} from "./Components/totalSumCount/totalSumCount.tsx";

const App = () => {
    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    const INGREDIENTS = [
        {name: 'Meat', price: 80, image: meatImage},
        {name: 'Cheese', price: 50, image: cheeseImage},
        {name: 'Salad', price: 10, image: lettuceImage},
        {name: 'Bacon', price: 60, image: baconImage}
    ]

  return (
      <div className="container">
          <div>
              Ingredients:
              <hr/>
              <div className="ingredients_container">
                  {INGREDIENTS.map((ingredient, index) => (
                  <div className="ingredients">
                          <button key={index} type="button"
                                  onClick={() => changeCount(ingredient.name, ingredients, setIngredients)}>
                              <img src={ingredient.image} alt={ingredient.image} width="30px" height="30px"/>
                              {ingredient.name}:
                              {ingredient.price} SOM
                          </button>
                      <span>
                          Count: {ingredients.find(i => i.name === ingredient.name)?.count}
                      </span>
                      <button type="button"
                              onClick={() => deleteIngredient(ingredient.name, ingredients, setIngredients)}>X</button>
                  </div>
                  ))}
                  <hr/>
                  <span>
                      <strong>Total: {totalSumCount(ingredients, INGREDIENTS)} SOM</strong>
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
