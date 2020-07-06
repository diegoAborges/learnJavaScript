const schedule = require('node-schedule')

/*seg /reptição(seg) min hora dia-mes mes dia-seman*/
const tarefa1 = schedule.scheduleJob('*/5 * 20 4 * *', function() {
    console.log("Executando tarefa 1", new Date().getSeconds())
}) 

setTimeout(function () {
    tarefa1.cancel()
    console.log("Tarefa 1 encerrada")
}, 60000)

const regra = new schedule.RecurrenceRule()
regra.hour = 20
regra.second = 30

const tarefa2 =schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2', new Date().getSeconds())
})
