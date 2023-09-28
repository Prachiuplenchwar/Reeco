import React, { useState } from 'react';
import OrderDetails from './components/OrderDetails'; 
import Header from './components/Header';

function App() {
  // Define your product data and state here
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      brand: 'Brand A',
      price: 10.99,
      quantity: 50,
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Product 2',
      brand: 'Brand B',
      price: 19.99,
      quantity: 30,
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Product 3',
      brand: 'Brand C',
      price: 10.99,
      quantity: 50,
      status: 'Pending',
    },
    {
      id: 4,
      name: 'Product 4',
      brand: 'Brand D',
      price: 19.99,
      quantity: 30,
      status: 'Pending',
    }
  ]);

  // Function to handle product approval
  const handleApprove = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, status: 'Approved' };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // Function to handle marking a product as missing
  const handleMarkMissing = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, status: 'Missing' };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // Function to handle editing a product
  const handleEdit = (productId) => {
    // Implement logic to open an edit popup for the selected product
    // You can use a state variable to control the visibility of the edit popup
  };

  return (
    <div>
      <Header />
      <OrderDetails
        products={products}
        onApprove={handleApprove}
        onMarkMissing={handleMarkMissing}
        onEdit={handleEdit}
      />
      {/* Add any other components or UI elements here */}
    </div>
  );
}

export default App;
