import 'moment/locale/en-au';
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
import { useState } from 'react';

function DatePickerWithRcDatePicker() {
    const [date , setDate] = useState(new Date());

    const onChange = (jsDate, dateString) => {
        setDate(jsDate);
      }

    return (
        <div>
            <DatePickerInput
                onChange={onChange}
                value={date}
                className='my-react-datepicker'
                showOnInputClick
                
            />

            <DatePicker 
                locale="en"
                onChange={onChange} 
                value={date} 
            />
        </div>
    );
}

export default DatePickerWithRcDatePicker;
