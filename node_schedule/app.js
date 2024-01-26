const schedule = require('node-schedule')

//* at a particular date and time
// const someDate = new Date('2023-12-25T19:57:00.000+5:30')
// schedule.scheduleJob(someDate, () => {[
//     console.log('Job ran @', new Date().toString())
// ]})

//* at recurrent intervals
// schedule.scheduleJob('*/2 * * * * *', () => {
//     console.log('job running ....')
// })

//* cancelling jobs
//method 1
// schedule.scheduleJob('m-job', '*/2 * * * * *', () => {
//     console.log('job running ....')
//     schedule.cancelJob('m-job')
// })

//method 2
const mJob = schedule.scheduleJob('m-job', '*/2 * * * * *', () => {
    console.log('job running ....')
    mJob.cancel()
})