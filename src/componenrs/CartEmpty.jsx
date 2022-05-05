import { Link } from "react-router-dom";
import emptyCart from "../assets/img/empty-cart.png";

const CartEmpty = () => {
    return(
        <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Корзина пустая </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={emptyCart} alt="Empty cart" />
          <Link to='/' href="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    )
}

export default CartEmpty;