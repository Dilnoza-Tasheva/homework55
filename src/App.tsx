import './App.css';
import meatImage from './assets/meat.svg';
import cheeseImage from './assets/cheese.svg';
import lettuceImage from './assets/lettuce.svg';
import baconImage from './assets/bacon.svg';

const App = () => {
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


  return (
      <div className="container">
          <div>
              Ingredients:
              <hr/>
              <div className="ingredients_container">
                  {INGREDIENTS.map((ingredient, index) => (
                      <button key={index} type="button">
                          <img src={ingredient.image} alt={ingredient.image} width="30px" height="30px"/>  -
                          {ingredient.name}:
                          {ingredient.price}
                      </button>
                  ))}
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
