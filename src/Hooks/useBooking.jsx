import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useSeller = (_id) => {
  const [isBooking, setIsBooking] = useState(false);
  const [isBookingLoading, setIsBookingLoading] = useState(true);

  useEffect(() => {
    if (_id) {
      fetch(`http://localhost:5000/bookings/${_id}`)
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
