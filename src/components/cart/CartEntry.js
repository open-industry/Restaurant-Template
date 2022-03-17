import React from 'react';
import CONSTANTS from '../../data/constants';

const { MINQTY, MAXQTY } = CONSTANTS;

function CartEntry({ invoiceItem, increment, decrement, handleEntryOnChange }) {
  return (
    <tr>
      <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
        <div className="control is-flex is-flex-direction-row">
          <input
            className="input p-0 has-text-centered"
            style={{ width: '4ch', textAlign: 'end', borderRadius: '3px 0 0 3px' }}
            type="number"
            min={MINQTY}
            max={MAXQTY}
            value={Number(invoiceItem.qty).toString()}
            onChange={handleEntryOnChange}
          />
          <div className="is-flex is-flex-direction-column">
            <button className="spin-button is-clickable" type="button" onClick={increment} role="spinbutton">˄</button>
            <button className="spin-button is-clickable" type="button" onClick={decrement} role="spinbutton">˅</button>
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
