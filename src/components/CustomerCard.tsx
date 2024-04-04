import React, { useEffect } from "react";

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface Props {
  customer: Customer;
  onSelect: () => void;
  isSelected: boolean;
}

const CustomerCard: React.FC<Props> = ({ customer, onSelect, isSelected }) => {
  

  return (
    <div
      className={`CustomerCard ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
