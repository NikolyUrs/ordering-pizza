const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const getAllPizza = arr => {
    const items = Object.values(arr).map(obj => obj.items);
    return [].concat.apply([], items)
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_CART": {

            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPriceItem: getTotalPrice(currentPizzaItems)
                }
            };

            const allPizzas = getAllPizza(newItems);
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        }
        case 'CLEAR_CART':
            return {
                items: [],
                totalCount: 0,
                totalPrice: 0
            }

        case 'REMOVE_CART': {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPriceItem;
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount - currentTotalCount,
                totalPrice: state.totalPrice - currentTotalPrice
            }
        }
        case 'MINUS_PIZZA': {
            const oldItems = state.items[action.payload].items;
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                 ...state.items,
                    [action.payload]: {
                        items: newObjItems,
                        totalPriceItem: getTotalPrice(newObjItems)
                }
            }
            const allPizzas = getAllPizza(newItems)
            const totalPrice = getTotalPrice(allPizzas)
            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount: allPizzas.length

            }
        }


        default:
            return state;
    }
}

export default cart;