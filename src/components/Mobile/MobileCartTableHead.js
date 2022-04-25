import React from "react";

const MobileCartTableHead = () => {
  return (
    <thead>
      <tr
        style={{
          color: "#103178",
        }}
      >
        <th className="align-middle text-center" colSpan={2}>
          Product
        </th>
        <th className="align-middle text-center">Price</th>
        <th className="align-middle text-center">Qty</th>
        <th className="align-middle text-center">Subtotal</th>
        <th className="align-middle text-center" />
      </tr>
    </thead>
  );
};

export default MobileCartTableHead;
