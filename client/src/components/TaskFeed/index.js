// import React from 'react';
// import TaskCard from '../TaskCard';

// function TaskFeed() {
//   const tasks = [
//     {
//       id: 1,
//       title: 'Task 1',
//       description: 'Description of task 1'
//     },
//     {
//       id: 2,
//       title: 'Task 2',
//       description: 'Description of task 2'
//     },
//     {
//       id: 3,
//       title: 'Task 3',
//       description: 'Description of task 3'
//     }
//   ];

//   return (
//     <div>
//        <h1>Available Tasks</h1>
//        {tasks.map(task => (
//         <TaskCard key={task.id} task={task} />
//       ))}
//     </div>
//   );
// }

// export default TaskFeed;

import React from 'react';
import TaskCard from '../TaskCard';
import '../../styles/TaskFeed.css';

function TaskFeed() {
  const tasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description of task 1',
      currentFunding: 100
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description of task 2',
      currentFunding: 200
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description of task 3',
      currentFunding: 300
    }
  ];

  return (
    <div className="task-feed-container">
      <h1 className="task-feed-title">Task Feed</h1>
      <div className="task-cards-container">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskFeed;
