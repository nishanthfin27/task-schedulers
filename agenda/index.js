const Agenda = require('agenda');

const connectionString = 'mongodb://localhost:27017/agenda_demo';

const agenda = new Agenda({
    db: { address: connectionString, collection: 'ourScheduleCollectionName' },
    processEvery: '30 seconds'
});

agenda.define('send email report', { priority: 'high', concurrency: 10 }, (job, done) => {
    const { to } = job.attrs.data;
    emailClient.send({
        to,
        from: 'nishanthfin27@gmail.com',
        subject: 'Email Report',
        body: '...'
    }, done);
});

//For one-time jobs:

(async function () {
    await agenda.start();
    await agenda.schedule('in 20 minutes', 'send email report', { to: 'nishanth@simpragma.com' });
})();


//For periodic jobs that run at intervals:

/*
(async function() {
const weeklyReport = agenda.create('send email report', {to: 'example@example.com'});
await agenda.start();
await weeklyReport.repeatEvery('1 week').save();
})();
*/