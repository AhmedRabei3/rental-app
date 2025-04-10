import React, { useState, useEffect } from "react";
import "./ItemBooking.css";

const ItemBooking = ({ item }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [rentalType, setRentalType] = useState(item?.rentalType || "daily");
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffMs = end - start;

      let price = 0;
      if (rentalType === "daily") {
        const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        price = days * item.price;
      } else {
        const hours = Math.ceil(diffMs / (1000 * 60 * 60));
        price = hours * item.price;
      }

      setTotalPrice(price > 0 ? price : 0);
    }
  }, [startDate, endDate, rentalType, item.price]);

  const handleBooking = () => {
    if (!startDate || !endDate) return alert("يرجى تحديد فترة الحجز");
    setShowPayment(true);
  };

  return (
    <div className="booking-box">
      <h2>الحجز</h2>
      <label>من:</label>
      <input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      
      <label>إلى:</label>
      <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

      <div className="price-summary">
        <span>نوع الإيجار: {rentalType === "daily" ? "يومي" : "بالساعة"}</span>
        <span>السعر الكلي: {totalPrice} ل.س</span>
      </div>

      <button className="btn-book" onClick={handleBooking}>احجز الآن</button>

      {showPayment && (
        <div className="payment-modal">
          <h4>اختر طريقة الدفع</h4>
          <select>
            <option value="shamcash">شام كاش</option>
            <option value="payeer">Payeer</option>
            <option value="cash">نقدًا عند الاستلام</option>
          </select>
          <button className="btn-confirm">تأكيد الحجز</button>
        </div>
      )}
    </div>
  );
};

export default ItemBooking;
