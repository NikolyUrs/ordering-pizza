import { Categories, PizzaBlock, SortPopup, PizzaLoadingBlock } from "../componenrs";
import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect } from "react";
import { setCategory, setSortBy } from "../redux/action/filters";
import { fetchPizzas } from "../redux/action/pizzas";
import { addPizzaCart } from "../redux/action/cart";


const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortNames = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "name" }];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters)

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy]);

    const onSelectCategories = useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    const onSelectSort = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const clickAddPizzaCart = (obj) => {
        dispatch(addPizzaCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickItem={onSelectCategories}
                    item={categoryNames} />
                <SortPopup
                    activeSortType={sortBy}
                    onClickItem={onSelectSort}
                    item={sortNames} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map((pizza) => (
                    <PizzaBlock
                        addPizzaCart={clickAddPizzaCart}
                        key={pizza.id}
                        count={cartItems[pizza.id] && cartItems[pizza.id].items.length}
                        {...pizza}
                    />
                )) : Array(10).fill(0).map((_, index) => (
                    <PizzaLoadingBlock
                        key={index} />))}
            </div>
        </div>
    )
}
export default Home;
