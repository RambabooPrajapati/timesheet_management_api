import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, addMonths, subMonths } from 'date-fns';
import moment from 'moment-timezone'; 
import Select from 'react-select';
import './Timeline.css';
import TablePagination from '@mui/material/TablePagination';

const CombinedComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeZone, setTimeZone] = useState('Asia/Kolkata');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    const tasks = [
        { task: 'TRAINING ON MERN', startTime: '10AM', endTime: '12PM', workingHours: '2 h', status: 'Task Done' },
        { task: 'ERP MANAGEMENT', startTime: '1AM', endTime: '2PM', workingHours: '1 h', status: 'Task Done' },
        { task: 'BUG DISCOVER', startTime: '2PM', endTime: '4PM', workingHours: '2 h', status: 'Task Done' },
        { task: 'ERP MANAGEMENT', startTime: '4:15PM', endTime: '5PM', workingHours: '1 h', status: 'Task Done' },
        { task: 'TESTING', startTime: '4:15PM', endTime: '5PM', workingHours: '1 h', status: 'Task Done' },
        // Additional tasks...
    ];

    const timeZones = moment.tz.names().map((tz) => ({
        value: tz,
        label: `${tz} (${moment().tz(tz).format('Z')})`,
    }));

    // Pagination handlers
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const value = parseInt(event.target.value, 10);
        setRowsPerPage(value === 1 ? tasks.length : value);
        setPage(0);
    };

    // Filter tasks based on search query
    const filteredTasks = tasks.filter((task) =>
        task.task.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Paginate tasks
    const paginatedTasks = filteredTasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleNextMonth = () => {
        setSelectedDate((prevDate) => addMonths(prevDate, 1));
    };

    const handlePreviousMonth = () => {
        setSelectedDate((prevDate) => subMonths(prevDate, 1));
    };

    return (
      <div>
        <div className="combined-component">
            {/* Date Picker Section */}
          
                    <div className="Date">
                    {selectedDate && (
                        <h2>{format(selectedDate, 'dd-MMMM-yyyy')}</h2>
                      )}
                        </div>
                
          

            {/* Search Section */}
           <div className='left-container'>
            <div className="search-section">
                <div className="search-bar-container">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        className="search-bar"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Time Zone Selection Section */}
            <div className="timezone-section">
                <div className="timezone-container">
                    <span className="timezone-icon">🌐</span>
                    <Select
                        options={timeZones}
                        value={timeZones.find((tz) => tz.value === timeZone)}
                        onChange={(selectedOption) => setTimeZone(selectedOption.value)}
                        placeholder="Select Time Zone"
                    />
                </div>
            </div>
           </div>
         </div>
            {/* Task Table Section */}
            <div className="task-table-container">
            <div className="date-picker-section">
                <button onClick={handlePreviousMonth}>⇦</button>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MMMM-yyyy" // Format to display
                    placeholderText="Select a date"
                />
                <button onClick={handleNextMonth}>⇨</button>
                
            </div>
            <div  className='working'>
              <h4>Working Hour 10am - 6pm</h4>
              </div>
        
                <div className="task-section">
                    <div className="task-table-header">
                        <div className="task-column">Task</div>
                        <div className="task-column">Start Time</div>
                        <div className="task-column">End Time</div>
                        <div className="task-column">Working Hours</div>
                        <div className="task-column">Status</div>
                    </div>
                    {paginatedTasks.map((task, index) => (
                        <div key={index} className="task-item">
                            <div className="task-column">{task.task}</div>
                            <div className="task-column">{task.startTime}</div>
                            <div className="task-column">{task.endTime}</div>
                            <div className="task-column">{task.workingHours}</div>
                            <div className="task-column">{task.status}</div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <TablePagination
                    component="div"
                    count={filteredTasks.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 15, { value: 1, label: 'All' }]}
                />
            </div>
        </div>
    );
};

export default CombinedComponent;
