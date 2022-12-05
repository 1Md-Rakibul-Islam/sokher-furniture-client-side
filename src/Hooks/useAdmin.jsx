import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setIsAdmin(data.isAdmin);
            setIsAdminLoading(false);
          }
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
