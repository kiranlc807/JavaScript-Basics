// import amqp from "amqplib/callback_api"
const amqp = require("amqplib/callback_api")

amqp.connect((err,connection)=>{
    if(err){
        throw err;
    }
    connection.createChannel((err,channel)=>{
        if(err){
            throw err;
        }
        let queueName = "queue1";
        let msg = "sending msg to first Queue";
        channel.assertQueue(queueName,{
            durable:false
        });

        channel.sendToQueue(queueName,Buffer.from(msg));
        setTimeout(()=>{
            connection.close();
        },1000)
        
    })

    connection.createChannel((err,channel)=>{
        if(err){
            throw err;
        }
        let queueName = "queue2";
        let msg = "sending msg to second Queue";
        channel.assertQueue(queueName,{
            durable:false
        });
        channel.sendToQueue(queueName,Buffer.from(msg));
        setTimeout(()=>{
            connection.close();
        },1000)
        
    })
})