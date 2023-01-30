const Kafka = require("kafkajs").Kafka;

run().catch(console.error);

async function run() {
	try {
		const kafka = new Kafka({
			clientId: "my-app",
			brokers: ["Nisarg:9092"],
		});

		const consumer = kafka.consumer({ groupId: "test-group" });
		console.log("Connecting...");
		await consumer.connect();
		console.log("Connected!");

		await consumer.subscribe({ topic: "Users", fromBeginning: true });

		await consumer.run({
			eachMessage: async (result) => {
				console.log(
					`Received message ${result.message.value} on partition ${result.partition}`
				);
			},
		});
	} catch (ex) {
		console.error(`Something bad happened ${ex}`);
	}
}
