const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const usersWithThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log(usersWithThreeLanguages);

const userEmails = users.map(user => user.email);
console.log(userEmails);

const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
const averageYearsOfExperience = totalYearsOfExperience / users.length;
console.log(totalYearsOfExperience);  // Output: 35
console.log(averageYearsOfExperience);  // Output: 7

const longestEmail = users.reduce((longest, user) => (user.email.length > longest.length ? user.email : longest), '');
console.log(longestEmail);

const userNames = users.reduce((names, user) => names === '' ? user.name : `${names}, ${user.name}`, '');
const resultString = `Your instructors are: ${userNames}.`;
console.log(resultString);




