import React from 'react';
import CustomerCard from './CustomerCard';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface Props {
  customers: Customer[];
  onSelectCustomer: (customerId: number) => void;
  selectedCustomerId: number | null;
}

const CustomerList: React.FC<Props> = ({ customers, onSelectCustomer, selectedCustomerId }) => {
  return (
    <div className="CustomerList">
     
      <div className="customer-cards">
        {customers.map(customer => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            onSelect={() => onSelectCustomer(customer.id)}
            isSelected={selectedCustomerId === customer.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
