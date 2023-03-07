# Kafka tutorial

Apache Kafka is a distributed publish-subscribe messaging system and a robust queue that can handle a high volume of data and enables you to pass messages from one end-point to another. Kafka is suitable for both offline and online message consumption. Kafka messages are persisted on the disk and replicated within the cluster to prevent data loss. Kafka is built on top of the ZooKeeper synchronization service. It integrates very well with Apache Storm and Spark for real-time streaming data analysis.

`Package used: kafkajs`

We have created 2 partitions based upon 1st charcter of user name :

-   A-M -> 0
-   N-Z -> 1

Pre-requisits:

-   Run docker in background
    Run zookeeper

```
docker run --name zookeeper -p 2181:2181 zookeeper
```

Run kafka

```
docker run --name kafka -p 9092:9092  -e KAFKA_ZOOKEEPER_CONNECT=Nisarg:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://Nisarg:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka
```

Commands to run the code:

```
npm install

node producer.js abc
node producer.js prq

node consumer.js (we can run 2 consumer based upon use case)
```

Use:
1. This can help us create a standby machine which can act when the main machine fails.
ex. In a database server, the data will be replicated across multiple database servers. But, what if main server(master node) fails? Here we can create a replica server where the metadata will be subscibed and hence a copy will be maintained.


Ref:

1. https://www.youtube.com/watch?v=R873BlNVUB4 - pros and cons refer from 1:03
2. https://www.tutorialspoint.com/apache_kafka/apache_kafka_introduction.htm

