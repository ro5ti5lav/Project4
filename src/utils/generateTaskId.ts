export function generateTaskId(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const getRandomLetter = () => letters[Math.floor(Math.random() * letters.length)];
    const getRandomNumber = () => Math.floor(Math.random() * 9) + 1;

    return `${getRandomLetter()}${getRandomLetter()}-${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`;
}
