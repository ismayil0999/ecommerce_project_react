import React from "react";
import { Carts, CartItem, CartInfo, CartTitle, CartImg, CartContainer, CartHead, CartButtons,EmptyFavorite } from "../styled";
import { useProductContext } from "../providers/Context";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { NavLink } from "react-router-dom";
export default function Card() {
  const { cart, setshowCart, removeToCart, decrement, increment } = useProductContext();
  return (
    <CartContainer >
      <CartHead>
        <h3 style={{ paddingLeft: "10px", color: "white" }}>My basket</h3>
        <DisabledByDefaultIcon fontSize="large" style={{ marginRight: "10px", color: "white" }} onClick={() => {
          setshowCart(false)
        }} />
      </CartHead>
      <Carts >
        {cart.length>0 ?cart.map(carts => {
          return ( <CartItem>
            <NavLink
            key={carts.id}
            style={{ textDecoration: "none",display:"flex",alignItems:"center" }}
            to={`/buyproduct/${carts.id}`}>
              <CartImg src={carts.img}></CartImg>
              <CartInfo>
                <CartTitle>{carts.title}</CartTitle>
                <p style={{ marginTop: "-15px", textAlign: "start",display:"flex",alignItems:"center" }}>{carts.price } <AttachMoneyIcon/></p>
              </CartInfo>
              <h3>{carts.qty}</h3>
              </NavLink>
              <CartButtons>
                <AddIcon onClick={() => increment(carts)} />
                <RemoveIcon onClick={() => decrement(carts)} />
              </CartButtons>
              <CancelPresentationIcon onClick={() => removeToCart(carts)} />
            </CartItem>
          )
        }) : <EmptyFavorite>
          <RemoveShoppingCartIcon className="empty"/>
          <h4>Your basket is empty</h4>
  
        </EmptyFavorite> }
      </Carts>
    </CartContainer>
  );
}
