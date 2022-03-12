import React from 'react';

function CartEntry({ cartItem }) {
  return (
    <tr>
      <td>{cartItem.qty}</td>
      <td>{cartItem.item.name}</td>
      <td className="has-text-right">{(cartItem.item.price * cartItem.qty).toFixed(2)}</td>
    </tr>
  );
}

export default CartEntry;
