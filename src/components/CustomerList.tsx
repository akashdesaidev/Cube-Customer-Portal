import React, { useEffect, useRef, useState } from "react";
import CustomerCard from "./CustomerCard";
import { getCostumers } from "../lib/data";

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface Props {
  onSelectCustomer: (customerId: number) => void;
  selectedCustomerId: number | null;
}

const CustomerList: React.FC<Props> = ({
  onSelectCustomer,
  selectedCustomerId,
}) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [page, setPage] = useState(1);

  const divRef = useRef<HTMLDivElement>(null);
  const handleScroll = (div: HTMLDivElement) => {
    // console.log("ScrollHeight", div.scrollHeight);
    // console.log("Inner", div.clientHeight);
    // console.log("scrollTop", div.scrollTop);
    if (div.scrollTop + div.clientHeight + 1 > div.scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const divElement = divRef.current;
    if (divElement) {
      divElement.addEventListener("scroll", () => handleScroll(divElement));
    }
    return () => {
      if (divElement) {
        divElement.removeEventListener("scroll", () =>
          handleScroll(divElement)
        );
      }
    };
  }, []);

  useEffect(() => {
    const data = getCostumers(page);
    setCustomers((prev) => [...prev, ...data]);
  }, [page]);

  return (
    <div className="CustomerList">
      <div className="customer-cards" ref={divRef}>
        {!!customers &&
          customers.map((customer) => (
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
