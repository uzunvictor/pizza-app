import React from 'react';
import { Categories, SortPopup, PizzaBlock, Loader} from '../components';
import {  useSelector,  } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
import { useDispatch } from 'react-redux';


const categoryNames = [
    "All",
    "Meat pizzas",
    "Vegetarians",
    "Grill",
    "Spicy",
    "Closed"
];
const sortItems = ["popular", "price", "name"];

function Home() {
  const dispatch = useDispatch();
  const [items, isLoaded] = useSelector(({ pizzas }) => [pizzas.items, pizzas.isLoaded]);
  const [activeCategory, activeSortType] = useSelector(({ filters }) => [
    filters.category,
    filters.sortBy,
  ]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line
  }, []);

  // React.useEffect(() = {
  //   fetch('http://localhost:3000/db.json')
  //   .then((resp) => resp.json())
  //   .then((json) => setPizzaState(json.pizzas))
  //   }, []);

  React.useEffect(() => {
    dispatch(fetchPizzas(activeCategory, activeSortType));
    //eslint-disable-next-line
  }, [activeCategory, activeSortType]);

  function handleAddPizzaToCart(obj) {
    dispatch(addPizzaToCart(obj));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={categoryNames}
          setCategory={setCategory}
          dispatch={dispatch}
          activeCategory={activeCategory}
        />
        <SortPopup items={sortItems} activeSortType={activeSortType} />
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map((item, index) => (
                <PizzaBlock
                  key={`${index}_${item}`}
                  items={items}
                  index={index}
                  isLoading={isLoaded}
                  onClickAddPizza={handleAddPizzaToCart}
                  {...item}
                />
              ))
            : Array(20)
                .fill(0)
                .map((item, index) => <Loader key={`${item}_${index}`} />)
          //{...item}  ===  name={obj.name} src={obj.imageUrl}
        }
      </div>
    </div>
  );
}

export default Home;

