import React from 'react';
import CONSTANTS from '../../data/constants';
// import minimum and maximum quantity values from constants
const { MINQTY, MAXQTY } = CONSTANTS;

// CartEntry component expects four props:
// invoiceItem: object, increment: function, decrement: function, handleEntryOnChange: function
function CartEntry({ invoiceItem, increment, decrement, handleEntryOnChange }) {
  return (
    <tr>
      <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
        <div className="is-flex is-flex-direction-row">
          <div className="control">
            <input
              className="input p-0 has-text-centered"
              style={{ width: '4ch', textAlign: 'end', borderRadius: '3px 0 0 3px' }}
              type="number"
              min={MINQTY}
              max={MAXQTY}
              value={Number(invoiceItem.qty).toString()}
              onChange={handleEntryOnChange}
              aria-label="quantity"
            />
          </div>
          <div className="control is-flex is-flex-direction-column">
            {/* increment spin button */}
            <button className="spin-button is-clickable" type="button" onClick={increment} role="spinbutton" aria-label={`increment ${invoiceItem.item.name} quantity`}>˄</button>
            {/* decrement spin button */}
            <button className="spin-button is-clickable" type="button" onClick={decrement} role="spinbutton" aria-label={`decrement ${invoiceItem.item.name} quantity`}>˅</button>
          </div>
        </div>
      </td>
      <td>
        <h1 className="title is-5" style={{ color: '#4a4a4a' }}>{invoiceItem.item.name}</h1>
        <h2 className="subtitle is-6 has-text-warning-dark">{`₳ ${invoiceItem.item.price.toFixed(2)}`}</h2>
      </td>
      <td className="has-text-right" style={{ verticalAlign: 'middle' }}>{`₳ ${(invoiceItem.subtotal).toFixed(2)}`}</td>
    </tr>
  );
}

export default CartEntry;
