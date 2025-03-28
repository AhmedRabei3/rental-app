import axios from "axios";

// إنشاء instance من Axios مع الإعدادات الافتراضية
const api = axios.create({
  baseURL: process.env.RENTAL_APP_URL || "http://localhost:8000/api", // عنوان السيرفر
  timeout: 10000, // مهلة الطلبات (10 ثوانٍ)
  headers: {
    "Content-Type": "application/json",
  },
});

// إضافة توكين المصادقة تلقائيًا إذا كان موجودًا
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// التعامل مع الأخطاء العامة
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    if (error.response) {
      if (error.response.status === 401) {
        console.warn("Unauthorized! Redirecting to login...");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
