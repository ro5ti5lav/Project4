import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Sprint {
    id: string;
    name: string;
    goal: string;
    duration: number;
    startDate: string;
    endDate: string;
    participants: string[];
}

interface SprintContextType {
    sprints: Sprint[];
    addSprint: (sprint: Sprint) => void;
}

const SprintContext = createContext<SprintContextType | undefined>(undefined);

export const useSprints = () => {
    const context = useContext(SprintContext);
    if (!context) {
        throw new Error('useSprints must be used within a SprintProvider');
    }
    return context;
};

export const SprintProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sprints, setSprints] = useState<Sprint[]>([]);

    const addSprint = (sprint: Sprint) => {
        setSprints([...sprints, sprint]);
    };

    return (
        <SprintContext.Provider value={{ sprints, addSprint }}>
            {children}
        </SprintContext.Provider>
    );
};
