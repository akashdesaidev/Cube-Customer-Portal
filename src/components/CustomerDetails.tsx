import React from "react";
import { useEffect, useState } from "react";
import { customers, Customer } from "../lib/data";
import Photos from "./Photos";
interface Props {
  customerId: number | null;
}

interface CustomerDetails {
  id: number;
  name: string;
  title: string;
}


const CustomerDetails: React.FC<Props> = ({ customerId }) => {
  const [details, setDetails] = useState<CustomerDetails | null>(null);

  const getData = async () => {
    try {
      const data = customers.find((customer) => customer.id === customerId);
      if (data) {
        setDetails(data);
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };
 

  useEffect(() => {
    if (customerId !== null) {
      getData();
    }
  }, [customerId]);



  return (
    <div className="CustomerDetails">
      {details ? (
        <div className="details">
          <h2>{details.name} Details</h2>
          <p>{details.title}</p>

          <div className="photo-grid">
           <Photos customerId={customerId}/>
          </div>
        </div>
      ) : (
        <p>Select a customer to view details</p>
      )}
    </div>
  );
};

export default CustomerDetails;
