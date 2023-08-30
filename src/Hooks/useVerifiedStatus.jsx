import { useEffect, useState } from "react";

const useVerifiedStatus = (_id) => {
  const [isVerifiedUser, setIsVerifiedUser] = useState(false);
  const [isVerifiedUserLoading, setIsVerifiedUserLoading] = useState(true);

  useEffect(() => {
    if (_id) {
      fetch(
        `https://sokher-furniture-1md-rakibul-islam.vercel.app/verified/sellers/${_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setIsVerifiedUser(data.isVerifiedUser);
            setIsVerifiedUserLoading(false);
          }
        });
    }
  }, [_id]);
  return [isVerifiedUser, isVerifiedUserLoading];
};

export default useVerifiedStatus;
