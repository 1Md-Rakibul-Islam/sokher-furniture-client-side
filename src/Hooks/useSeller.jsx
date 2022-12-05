import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setIsSeller(data.isSeller);
            setIsSellerLoading(false);
          }
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
