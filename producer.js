const Kafka = require("kafkajs").Kafka;

const msg = process.argv[2];
run().catch(console.error);

async function run() {
	try {
		const kafka = new Kafka({
			clientId: "my-app",
			brokers: ["Nisarg:9092"],
		});

		const producer = kafka.producer();
		console.log("Connecting...");
		await producer.connect();
		console.log("Connected!");
		// A-M 0, N-Z 1
		const partition = msg[0] < "N" ? 0 : 1;

		const result = await producer.send({
			topic: "Users",
			messages: [{ value: msg, partition: partition }],
		});

		console.log(`Send Successfully! ${JSON.stringify(result)}`);

		await producer.disconnect();
		console.log("Disconnected!");
	} catch (ex) {
		console.error(`Something bad happened ${ex}`);
	} finally {
		process.exit(0);
	}
}
