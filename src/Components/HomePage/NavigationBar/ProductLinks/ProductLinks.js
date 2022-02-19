import React from 'react';
import './ProductLinks.css';
import { Link } from 'react-router-dom';
import { items } from '../../../../data/productsList';

function ProductLinks() {
  return (
    <div className="flex items-center products">
      {items.map((item) => {
        return (
          <p className="px-4">
            <Link key={item.href} to={item.href}>
              {item.title}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default ProductLinks;
