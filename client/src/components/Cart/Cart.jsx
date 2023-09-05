import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
// import { makeRequest } from "../../makeRequest";
// import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    // const stripePromise = loadStripe(
    //     "pk_test_eOTMlr8usx1ctymXqrik0ls700lQCsX2UB"
    // );
    // const handlePayment = async () => {
    //     try {
    //         const stripe = await stripePromise;
    //         const res = await makeRequest.post("/orders", {
    //             products,
    //         });
    //         await stripe.redirectToCheckout({
    //             sessionId: res.data.stripeSession.id,
    //         });

    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // const data = [
    //     {
    //         id: 1, img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600", title: "hat", oldPrice: 19,
    //         price: 14,
    //         isNew: true,
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos quos ea ex similique commodi fuga quibusdam necessitat"

    //     },
    //     {
    //         id: 2, img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600", title: "hat", oldPrice: 19,
    //         price: 14,
    //         isNew: true,
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos quos ea ex similique commodi fuga quibusdam necessitat"
    //     },
    // ]
    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={`${import.meta.env.VITE_UPLOAD_URL}${item.img}`}
                        alt=""

                    />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon
                        className="delete"
                        onClick={() => dispatch(removeItem(item.id))}
                    />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
    );
};

export default Cart;
