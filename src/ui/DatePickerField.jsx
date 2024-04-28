import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ lable, date, setDate }) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700">{lable}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        onChange={(date) => setDate(date)}
        calendarPosition="bottom-center"
        format="YYYY/MM/DD"
        calendar={persian}
        value={date}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePickerField;
