import React from 'react';

interface StatisticsProps {
    totalTasks: number;
    completedTasks: number;
}

const Statistics: React.FC<StatisticsProps> = ({ totalTasks, completedTasks }) => {
    return (
        <div>
            <h2>Статистика</h2>
            <p>Всего задач: {totalTasks}</p>
            <p>Выполнено задач: {completedTasks}</p>
        </div>
    );
};

export default Statistics;
