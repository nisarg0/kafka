const Kafka = require("kafkajs").Kafka;

run().catch(console.error);

async function run() {
	try {
		const kafka = new Kafka({
			clientId: "my-app",
			brokers: ["Nisarg:9092"],
		});

		const admin = kafka.admin();
		console.log("Connecting...");
		await admin.connect();
		console.log("Connected!");
		// A-M and N-Z
		await admin.createTopics({
			topics: [
				{
					topic: "Users",
					numPartitions: 2,
				},
			],
		});
		console.log("Created Successfully!");
		await admin.disconnect();
	} catch (ex) {
		console.error(`Something bad happened ${ex}`);
	} finally {
		process.exit(0);
	}
}
