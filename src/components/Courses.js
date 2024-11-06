import React, { useState } from 'react';

const Side = () => {
  return (
    <aside className="w-64 bg-white border-r h-screen p-4" style={{background:"#EFF5FF"}}>
      <nav>
        {['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'].map((chapter, index) => (
          <div
            key={index}
            className={`p-4 cursor-pointer rounded-lg ${
              index === 0 ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
            }`}
          >
            {chapter}
          </div>
        ))}
      </nav>
    </aside>
  );
};

const Part = ({ title, completed, time, level, resources }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4" style={{background:"#EFF5FF"}}>
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        style={{gap:"10px"}}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="font-semibold">{title}</h3>
          <div className="text-sm text-gray-500">{completed}% Completed</div>
        </div>
        <div className="flex items-center space-x-4" >
          <span className="text-gray-500">{time}</span>
          <span className="text-gray-500">{level}</span>
          <span className={`transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
        </div>
        
      </div>
      <div class="h-2 rounded-full bg-gray-200">
      <div class="h-full w-1/2 bg-black rounded-full" style={{height:"0.38rem"}}></div>
    </div>
      {isOpen && (
        <div className="p-4 space-y-4 border-t bg-gray-50">
          {resources.map((resource, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{resource.type}</span>
              <span>{resource.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Content = () => {
  const parts = [
    {
      title: 'Part 1 - Lorem Ipsum Dolor Sit Amet',
      completed: 45,
      time: '02:00:00',
      level: 'Medium',
      resources: [
        { type: 'Video 1', time: '10:00' },
        { type: 'Article 1', time: '10:00' },
        { type: 'Quiz 1', time: '10:00' },
        { type: 'Coding Exercise 1', time: '10:00' },
        { type: 'Combined Resource 1', time: '10:00' },
      ],
    },
    {
        title: 'Part 2 - Lorem Ipsum Dolor Sit Amet',
        completed: 45,
        time: '02:00:00',
        level: 'Medium',
      },
      {
        title: 'Part 3 - Lorem Ipsum Dolor Sit Amet',
        completed: 45,
        time: '02:00:00',
        level: 'Medium',
      }
    // Add more parts as needed
  ];

  return (
    <div className="flex-1 p-6">
      <div className="flex space-x-4 mb-4">
        <button className="flex items-center px-4 py-2 bg-white border rounded-lg text-black" style={{gap:"5px"}}><svg width="20" height="20" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 9.83333V4.5M21.3334 9.83333V4.5M9.33336 15.1667H22.6667M6.6667 28.5H25.3334C26.0406 28.5 26.7189 28.219 27.219 27.719C27.7191 27.2189 28 26.5406 28 25.8333V9.83333C28 9.12609 27.7191 8.44781 27.219 7.94772C26.7189 7.44762 26.0406 7.16667 25.3334 7.16667H6.6667C5.95945 7.16667 5.28118 7.44762 4.78108 7.94772C4.28098 8.44781 4.00003 9.12609 4.00003 9.83333V25.8333C4.00003 26.5406 4.28098 27.2189 4.78108 27.719C5.28118 28.219 5.95945 28.5 6.6667 28.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Mentor Sessions</button>
        {/* <button className="py-2 px-4 rounded-lg bg-blue-600 text-white">Learning Material</button> */}
        <button class="flex items-center px-4 py-2 bg-white border rounded-lg shadow-md hover:shadow-lg text-black" style={{gap:"5px"}}>
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 18.1734C24.1873 19.715 20.1126 20.505 16 20.5C11.756 20.5 7.7067 19.6734 4.00003 18.1734M21.3334 8.50002V5.83335C21.3334 5.12611 21.0524 4.44783 20.5523 3.94774C20.0522 3.44764 19.3739 3.16669 18.6667 3.16669H13.3334C12.6261 3.16669 11.9478 3.44764 11.4477 3.94774C10.9476 4.44783 10.6667 5.12611 10.6667 5.83335V8.50002M16 16.5H16.0134M6.6667 27.1667H25.3334C26.0406 27.1667 26.7189 26.8857 27.219 26.3856C27.7191 25.8855 28 25.2073 28 24.5V11.1667C28 10.4594 27.7191 9.78117 27.219 9.28107C26.7189 8.78097 26.0406 8.50002 25.3334 8.50002H6.6667C5.95945 8.50002 5.28118 8.78097 4.78108 9.28107C4.28098 9.78117 4.00003 10.4594 4.00003 11.1667V24.5C4.00003 25.2073 4.28098 25.8855 4.78108 26.3856C5.28118 26.8857 5.95945 27.1667 6.6667 27.1667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  Learning Material
</button>

      </div>
      <div>
        {parts.map((part, index) => (
          <Part
            key={index}
            title={part.title}
            completed={part.completed}
            time={part.time}
            level={part.level}
            resources={part.resources}
          />
        ))}
       
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="flex h-screen">
      <Side />
      <Content />
    </div>
  );
};

export default Courses;
