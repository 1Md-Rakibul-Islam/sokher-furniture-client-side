import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(
        `https://sokher-furniture-1md-rakibul-islam.vercel.app/users/buyer/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setIsBuyer(data.isBuyer);
            setIsBuyerLoading(false);
          }
        });
    }
  }, [email]);
  return [isBuyer, isBuyerLoading];
};

export default useBuyer;
