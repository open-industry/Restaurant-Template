import React from 'react';

function CartEntry({ cartItem }) {
  return (
    <tr>
      <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>{cartItem.qty}</td>
      <td>
        <h1 className="title is-4">{cartItem.item.name}</h1>
        <h2 className="subtitle is-6">{`₳ ${cartItem.item.price.toFixed(2)}`}</h2>
      </td>
      <td className="has-text-right" style={{ verticalAlign: 'middle' }}>{`₳ ${(cartItem.item.price * cartItem.qty).toFixed(2)}`}</td>
    </tr>
  );
}

export default CartEntry;
