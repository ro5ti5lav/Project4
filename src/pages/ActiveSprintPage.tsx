import React, { useState } from 'react';
import { useSprints } from '../components/SprintContext';
import { useParticipants } from '../components/ParticipantContext';
import '../styles/ActiveSprintPage.scss';

const ActiveSprintPage: React.FC = () => {
    const { sprints } = useSprints();
    const { participants } = useParticipants();
    const [selectedParticipant, setSelectedParticipant] = useState<string>('all');

    const filteredSprints = sprints.filter(sprint =>
        selectedParticipant === 'all' ? true : sprint.participants.includes(selectedParticipant)
    );

    return (
        <div className="active-sprint-page">
            <h1>Активные Спринты</h1>

            <div className="participant-filter">
                <label htmlFor="participant-select">Выбрать участника:</label>
                <select
                    id="participant-select"
                    value={selectedParticipant}
                    onChange={(e) => setSelectedParticipant(e.target.value)}
                >
                    <option value="all">Вся команда</option>
                    {participants.map(participant => (
                        <option key={participant.id} value={participant.name}>
                            {participant.name}
                        </option>
                    ))}
                </select>
            </div>

            <h2>Список Спринтов</h2>
            <ul className="sprint-list">
                {filteredSprints.map(sprint => (
                    <li key={sprint.id} className="sprint-item">
                        <h3>{sprint.name}</h3>
                        <p><strong>Цель:</strong> {sprint.goal}</p>
                        <p><strong>Длительность:</strong> {sprint.duration} дней</p>
                        <p><strong>Дата начала:</strong> {sprint.startDate}</p>
                        <p><strong>Дата окончания:</strong> {sprint.endDate}</p>
                        <p><strong>Участники:</strong> {sprint.participants.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActiveSprintPage;
