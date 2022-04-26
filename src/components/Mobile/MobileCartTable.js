import React from "react";

const MobileCartTable = () => {
  return (
    <tbody>
      <tr>
        <td colSpan={2} className="align-middle text-center">
          <a
            href="product1.html"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                height: "3rem",
                width: "3rem",
                marginRight: "1rem",
              }}
              src="img/products/001.jpg"
              alt=""
            />
            Digital Thermometer X30-Pro
          </a>
        </td>
        <td className="align-middle text-center">
          {" "}
          <span>$77.65</span>
        </td>
        <td className="align-middle text-center">
          <div>
            <input
              style={{ width: "2rem" }}
              min={0}
              name="quantity"
              defaultValue={1}
              type="number"
            />
          </div>
        </td>
        <td style={{ color: "#fd8d27" }} className="align-middle text-center">
          $77.65
        </td>
        <td className="align-middle text-center">
          {" "}
          <a href="#/">
            <i className="icon-cross" />
          </a>
        </td>
      </tr>
    </tbody>
  );
};

export default MobileCartTable;
