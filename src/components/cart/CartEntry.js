import React from 'react';
import CONSTANTS from '../../data/constants';

const { MINQTY, MAXQTY } = CONSTANTS;

function CartEntry({ invoiceItem }) {
  return (
    <tr>
      <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
        <div className="control is-flex is-flex-direction-row">
          <input
            className="input"
            style={{ width: '4ch', textAlign: 'end', borderRadius: '3px 0 0 3px' }}
            type="number"
            min={MINQTY}
            max={MAXQTY}
            value={invoiceItem.qty}
          />
          <div className="is-flex is-flex-direction-column">
            <button className="spin-button is-clickable" type="button">˄</button>
            <button className="spin-button is-clickable" type="button">˅</button>
          </div>
        </div>
      </td>
      <td>
        <h1 className="title is-5">{invoiceItem.item.name}</h1>
        <h2 className="subtitle is-6 has-text-warning-dark">{`₳ ${invoiceItem.item.price.toFixed(2)}`}</h2>
      </td>
      <td className="has-text-right" style={{ verticalAlign: 'middle' }}>{`₳ ${(invoiceItem.subtotal).toFixed(2)}`}</td>
    </tr>
  );
}

export default CartEntry;
