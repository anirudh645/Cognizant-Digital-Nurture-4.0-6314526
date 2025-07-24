import React from 'react';

const Cart = (props) => {
  return (
    <div style={{ textAlign: 'center',border:'black 1px solid', margin: '20px auto', width: '16%' }}>
      <table style={{ border: '3px green', borderCollapse: 'collapse', margin: '20px auto' }}>
        <thead>
          <tr>
            <th style={{ padding: '5px', border: '5px double green', color: 'green' }}>Name</th>
            <th style={{ padding: '5px', border: '5px double green', color: 'green' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.item.map((item, index) => {
            return (
              <tr key={index}>
                <td style={{ padding: '5px', border: '5px double green', color: 'green' }}>{item.itemname}</td>
                <td style={{ padding: '5px', border: '5px double green', color: 'green' }}>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;