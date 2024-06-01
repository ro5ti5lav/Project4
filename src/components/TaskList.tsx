import React from 'react';

interface Task {
    id: string;
    title: string;
    completed: boolean;
    assignee: string;
}

interface TaskListProps {
    tasks: Task[];
    filterAssignee?: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, filterAssignee }) => {
    const filteredTasks = filterAssignee
        ? tasks.filter(task => task.assignee === filterAssignee)
        : tasks;

    return (
        <div>
            <h2>Список задач</h2>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        <span>{task.title}</span>
                        <span>{task.completed ? '✔️' : '❌'}</span>
                        <span>{task.assignee}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
