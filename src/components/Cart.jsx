import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
	const { cart, emptyCart } = useContext(CartContext)
	
	const totalPrice = cart.reduce((sum, product)=> sum + product.amount * product.price, 0)


	return (
		<div style={{border: '5px solid hotpink', margin: '1em', padding: '1em'}}>
			<h3>Cart</h3>

			<p>Items in cart: {cart.length}</p>
			<p>Total price: {totalPrice}</p>

			<ul>
				{cart.map(product => (
					<li key={product.id}>
					{product.amount} * {product.name}
				</li>))}
			</ul>

			<button onClick={( )=> emptyCart()}>Vyprázdnit košík</button>
		</div>
	);
}

export default Cart;