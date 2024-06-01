/*import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Task {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    assignee: string;
    time: string;
    description: string;
    status: string;
}

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
};

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};*/


import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    assignee: string;
    time: string;
    description: string;
    status: string;
}

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
};
