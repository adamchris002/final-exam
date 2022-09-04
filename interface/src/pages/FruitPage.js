import React, { useState, useEffect } from "react";
import { getFruits } from "../axios/fruitPageAxios";

const FruitPage = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    getFruits((result) => setFruits(result));
  });
  return (
    <>
      <div>
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          imperdiet ex. Nunc massa diam, aliquet iaculis nibh non, blandit
          pulvinar orci. Donec maximus tellus odio. In hac habitasse platea
          dictumst. Aenean ut dui quis ipsum iaculis pretium et et diam. Donec
          et tempus purus. Mauris sollicitudin fringilla elementum. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nullam libero quam,
          lacinia eget mollis ac, vestibulum eu ex. Duis sodales ornare cursus.
          Morbi blandit id felis vitae elementum. Curabitur dui arcu, mollis
          semper venenatis a, efficitur ultrices mi. In ante magna, tempor
          elementum urna nec, dignissim dapibus diam. Nam interdum felis in nisl
          maximus aliquet. Nulla vitae gravida diam, id gravida justo. In hac
          habitasse platea dictumst. Pellentesque quis eros vel sem ornare
          porta. Mauris nec lacinia mi. Etiam luctus in metus sed tristique.
          Integer pulvinar rutrum lectus, id venenatis nisi. In vitae malesuada
          metus. Sed tempor nunc non sapien egestas, nec euismod velit
          tristique. Nunc maximus elementum justo, ac volutpat purus laoreet id.
        </p>
      </div>
      <div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>1. ID</th>
              <th>2. Name</th>
              <th>3. Image</th>
              <th>4. Price</th>
              <th>5. Stock</th>
              <th>6. CategoryID</th>
              <th>7. BrandID</th>
              <th>8. Actions</th>
            </tr>
          </thead>
          <tbody>
            {fruits.map((fruit) => {
              const { id, name, image, price, stock, categoryId, brandId } =
                fruit;
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{image}</td>
                  <td>{price}</td>
                  <td>{stock}</td>
                  <td>{categoryId}</td>
                  <td>{brandId}</td>
                  <td>
                    <a href="/fruits/update/{id}" className="col m-2 btn btn-primary">
                      Update
                    </a>
                    <a href="/fruits/delete/{id}" className="col m-2 btn btn-danger">
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FruitPage;
