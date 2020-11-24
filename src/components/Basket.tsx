import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import ChevronRight from './ChevronRight';
import Cross from './Cross';

type Basket = {
  productName: string;
  price: number;
  noInBasket: number;
};

type ChangeBasket = { productName: string; target: Basket };

const initial = [
  {
    productName: 'Mountain Dew',
    price: 1.8,
    noInBasket: Math.ceil(Math.random() * 10),
  },
  {
    productName: 'Desperados',
    price: 3,
    noInBasket: Math.ceil(Math.random() * 10),
  },
  {
    productName: 'Jack Daniels',
    price: 4,
    noInBasket: Math.ceil(Math.random() * 10),
  },
];

const BasketPage = () => {
  const [basket, setBasket] = useState<Basket[]>(initial);

  const changeBasket = ({ productName, target }: ChangeBasket) =>
    setBasket(prevBasket =>
      prevBasket.map((item, index) => {
        if (
          index !==
          prevBasket.map(basket => basket.productName).indexOf(productName)
        ) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...target,
        };
      }),
    );

  const handleChange = (productName: string) => (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const target = basket.find(
      basketItem => basketItem.productName === productName,
    );
    target!.noInBasket = parseInt(event.target.value, 10);

    changeBasket({ productName, target: target! });
  };

  const clear = (productName: string) => () => {
    const target = basket.find(
      basketItem => basketItem.productName === productName,
    );
    target!.noInBasket = 0;

    changeBasket({ productName, target: target! });
  };

  const clearAll = () =>
    setBasket(prevBasket =>
      prevBasket.map(basketItem => ({
        ...basketItem,
        noInBasket: 0,
      })),
    );

  return (
    <div className="bg-gray-300 h-screen w-screen flex justify-center items-center text-gray-800">
      <div className="bg-white border-2 border-gray-700 rounded w-96 max-w-full">
        <div className="px-4 py-2">
          {basket.map(({ productName, price, noInBasket }) => (
            <div
              className="border-dashed border-t-2 first:border-none flex justify-between items-center py-4"
              key={productName}
            >
              <span className="w-20">{productName}</span>
              <input
                type="number"
                className="border-2 border-gray-700 w-16 text-center"
                value={noInBasket}
                onChange={handleChange(productName)}
              />
              <div className="inline-flex items-center w-20">
                <span className="text-yellow-600">
                  ${(price * noInBasket).toFixed(2)}
                </span>
                <button
                  type="button"
                  className="inline-flex items-center ml-1 px-1 py-1 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 group"
                  onClick={clear(productName)}
                >
                  <Cross className="h-4 w-4 text-gray-500 group-hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t-2 w-full" />
        <div className="bg-gray-200 flex justify-between items-center px-4 py-6">
          <span className="text-lg font-semibold">
            $
            {basket
              .reduce(
                (acc, { price, noInBasket }) => acc + price * noInBasket,
                0,
              )
              .toFixed(2)}
          </span>
          <div>
            <button type="button" className="px-4 py-2 mr-1" onClick={clearAll}>
              Clear
            </button>
            <Link to="/checkout">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
              >
                Check Out
                <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
