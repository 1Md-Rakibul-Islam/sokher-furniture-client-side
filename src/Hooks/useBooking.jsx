import { useEffect, useState } from "react";

const useSeller = (_id) => {
  const [isBooking, setIsBooking] = useState(false);
  const [isBookingLoading, setIsBookingLoading] = useState(true);

  useEffect(() => {
    if (_id) {
      fetch(
        `https://sokher-furniture-1md-rakibul-islam.vercel.app/bookings/${_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setIsBooking(data.isBooking);
            setIsBookingLoading(false);
            // refetch();
          }
        });
    }
  }, [_id]);
  return [isBooking, isBookingLoading];
};

export default useSeller;
