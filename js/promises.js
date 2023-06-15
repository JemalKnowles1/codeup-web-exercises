'use strict';



function getLastCommitDate(username) {
    const token = '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';
    const apiUrl = `https://api.github.com/users/${username}/events/public`;

    return new Promise((resolve, reject) => {
        fetch(apiUrl, {
            headers: {
                'Authorization': `token ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Unable to fetch data from GitHub API');
                }
                return response.json();
            })
            .then(data => {
                const lastCommitEvent = data.find(event => event.type === 'PushEvent');
                if (!lastCommitEvent) {
                    throw new Error('No commit events found for the user');
                }
                const lastCommitDate = new Date(lastCommitEvent.created_at);
                resolve(lastCommitDate.toDateString());
            })
            .catch(error => reject(error));
    });
}

getLastCommitDate('JemalKnowles1')
    .then(lastCommitDate => {
        console.log(`Last commit date: ${lastCommitDate}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });



// function wait(num){
//     return new Promise(resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//
//         }, num)
//     })
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
