import { useState } from 'react';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import '../CSS/Worksheet.css'; // Import the CSS file
import axios from 'axios';


function TaskCircle({ completedTasks, incompleteTasks }) {
  const completedCount = completedTasks.length;
  const incompleteCount = incompleteTasks.length;

  return (
    <>
      {incompleteCount > 0 && (
        <Tooltip
          title={
            <Box className="tooltip-box">
              {incompleteTasks.map((task, index) => (
                <div key={index} className="tooltip-box">
                  {`Incomplete Task ${index + 1}: ${task}`}
                </div>
              ))}
            </Box>
          }
          arrow
        >
          <div className="tooltip-circle incomplete">
            {incompleteCount}
          </div>
        </Tooltip>
      )}
      {completedCount > 0 && (
        <Tooltip
          title={
            <Box className="tooltip-box">
              {completedTasks.map((task, index) => (
                <div key={index} className="tooltip-box">
                  {`Completed Task ${index + 1}: ${task}`}
                </div>
              ))}
            </Box>
          }
          arrow
        >
          <div className="tooltip-circle completed">
            {completedCount}
          </div>
        </Tooltip>
      )}
    </>
  );
}



const StyledTable = () => {


// Replace with your backend URL
const BASE_URL = 'http://localhost:5000/api';

// Fetch tasks for a specific date
const fetchTasks = async (date) => {
  try {
    const response = await axios.get(`${BASE_URL}/tasks`, {
      params: { date }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

// Create a new task
const createTask = async (description, date, status = 'incomplete') => {
  try {
    const response = await axios.post(`${BASE_URL}/tasks`, {
      description,
      date,
      status
    });
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
  }
};  




  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskDate, setTaskDate] = useState(null);
  const [task, setTask] = useState("");

  const selectedMonth = selectedDate.month();
  const selectedYear = selectedDate.year();

  const firstDayOfMonth = dayjs().year(selectedYear).month(selectedMonth).date(1).day();
  const daysInMonth = selectedDate.daysInMonth();

  const calendarDays = Array(firstDayOfMonth).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, index) => index + 1)
  );

  const handleAddTaskClick = (day) => {
    setTaskDate(day);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Task for ${taskDate}: ${task}`);
    setTask("");
    setIsFormOpen(false);
  };

  const completedTasks = ['Submit report', 'Team meeting'];
  const incompleteTasks = ['Buy groceries', 'Call client'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Rajesh');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="container">
      <div className="datecontainer">
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedOption}
          <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
        </div>
        {isOpen && (
          <div className="dropdown-list">
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          views={['year', 'month']}
          renderInput={(params) => (
            <input {...params} className="date-picker-input" />
          )}
        />
      </LocalizationProvider>
      <h1 className='workhour'>Working Hours 11am - 5pm </h1>
    </div>
      <table className="table">
        <thead>
          <tr>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <th key={day} className="cell">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 7 }, (_, colIndex) => {
                const dayIndex = rowIndex * 7 + colIndex;
                const day = calendarDays[dayIndex];

                const isWeekend = day && (
                  dayjs(new Date(selectedYear, selectedMonth, day)).day() === 0 ||
                  dayjs(new Date(selectedYear, selectedMonth, day)).day() === 6
                );

                return (
                  <td key={colIndex} className="cell">
                    {day ? (
                      <>
                        <button
                          className="button"
                          onClick={() => handleAddTaskClick(day)}
                        >
                          +
                        </button>
                        {isWeekend && (
                          <div className="weekend">
                            😊 Week Off
                          </div>
                        )}
                        <div className="task-circle">
                          {!isWeekend && (
                            <TaskCircle completedTasks={completedTasks} incompleteTasks={incompleteTasks} />
                          )}
                        </div>
                        <span className="date">{day}</span>
                      </>
                    ) : (
                      <span className="date" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {isFormOpen && (
        <div className="form-container">
          <form onSubmit={handleFormSubmit}>
            <h3>Add Task for {dayjs().year(selectedYear).month(selectedMonth).date(taskDate).format('MMMM DD, YYYY')}</h3>
            <input 
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="form-input"
              placeholder="Enter your task"
            />
            <div style={{ marginTop: '10px' }}>
              <button type="submit" className="form-button">Save</button>
              <button 
                type="button" 
                onClick={() => setIsFormOpen(false)} 
                className="form-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default StyledTable;





