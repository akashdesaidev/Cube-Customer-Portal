import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import './App.css';
import {customers} from "./lib/data"

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(1);

  const handleSelectCustomer = (customerId: number) => {
    setSelectedCustomerId(customerId);
  };


  return (
    <div className="App">
      <CustomerList customers={customers} onSelectCustomer={handleSelectCustomer} selectedCustomerId={selectedCustomerId} />
      <CustomerDetails customerId={selectedCustomerId} />
    </div>
  );
};

export default App;


