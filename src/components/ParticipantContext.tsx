import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Participant {
    id: string;
    name: string;
    position: string;
    department: string;
}

interface ParticipantContextType {
    participants: Participant[];
    addParticipant: (participant: Participant) => void;
}

const ParticipantContext = createContext<ParticipantContextType | undefined>(undefined);

export const useParticipants = () => {
    const context = useContext(ParticipantContext);
    if (!context) {
        throw new Error('useParticipants must be used within a ParticipantProvider');
    }
    return context;
};

export const ParticipantProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [participants, setParticipants] = useState<Participant[]>([]);

    const addParticipant = (participant: Participant) => {
        setParticipants([...participants, participant]);
    };

    return (
        <ParticipantContext.Provider value={{ participants, addParticipant }}>
            {children}
        </ParticipantContext.Provider>
    );
};
