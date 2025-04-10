import { useState } from "react";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    code: "en",
    flag: "🇺🇸",
  });

  // قائمة اللغات المتاحة
  const languages = [
    { name: "English", code: "en", flag: "🇺🇸" },
    { name: "Français", code: "fr", flag: "🇫🇷" },
    { name: "Español", code: "es", flag: "🇪🇸" },
    { name: "العربية", code: "ar", flag: "🇸🇦" },
  ];

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        <i className="fa-solid fa-globe"></i> {selectedLanguage.flag}{" "}
        {selectedLanguage.name}
      </button>

      <ul className="dropdown-menu">
        {languages.map((lang) => (
          <li key={lang.code}>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setSelectedLanguage(lang)} // عند النقر، يتم تغيير اللغة المختارة
            >
              <i className="fa-solid fa-language"></i> {lang.flag} {lang.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSwitcher;
