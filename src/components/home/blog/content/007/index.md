
# Introduction to Spring Kafka

Spring Kafka is a project within the Spring ecosystem that provides seamless integration between Apache Kafka and Spring applications. It simplifies the development of Kafka-based messaging systems using familiar Spring concepts and annotations.

---

## Key Features

- Support for Kafka producer and consumer APIs
- Listener container model for message-driven POJOs
- KafkaTemplate for sending messages
- Support for transactions
- Integration with Spring Boot and Spring Cloud Stream
- Support for error handling, retries, and dead-letter topics

---

## Maven Dependency

Add the following to your `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```

---

## Basic Configuration

```yaml
# application.yml
spring:
  kafka:
    bootstrap-servers: localhost:9092
    consumer:
      group-id: my-group
      auto-offset-reset: earliest
      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer
      value-deserializer: org.apache.kafka.common.serialization.StringDeserializer
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.apache.kafka.common.serialization.StringSerializer
```

---

## Sending Messages with KafkaTemplate

```java
@Autowired
private KafkaTemplate<String, String> kafkaTemplate;

public void sendMessage(String message) {
    kafkaTemplate.send("my-topic", message);
}
```

---

## Consuming Messages with @KafkaListener

```java
@Component
public class KafkaConsumer {

    @KafkaListener(topics = "my-topic", groupId = "my-group")
    public void listen(String message) {
        System.out.println("Received message: " + message);
    }
}
```

---

## Custom Deserialization

You can use custom deserializers for consuming complex objects:

```java
public class User {
    private String name;
    private int age;
    // Getters and Setters
}
```

Update configuration:

```yaml
spring.kafka.consumer.value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer
spring.kafka.consumer.properties.spring.json.trusted.packages: "*"
```

---

## Error Handling

You can use `SeekToCurrentErrorHandler` or `DefaultErrorHandler` for retry logic:

```java
@Bean
public DefaultErrorHandler errorHandler() {
    return new DefaultErrorHandler(new FixedBackOff(1000L, 2));
}
```

---

## Transactions in Kafka

Enable transactions for producers:

```yaml
spring.kafka.producer.transaction-id-prefix: tx-
```

```java
@Transactional
public void sendMessageWithTransaction(String message) {
    kafkaTemplate.send("topic", message);
    // Any other transactional logic
}
```

---

## Advantages of Spring Kafka

- Simplifies Kafka integration using Spring idioms
- Declarative listener support
- Built-in support for retries and error handling
- Easy integration with Spring Boot
- Customizable serialization and deserialization

---

Spring Kafka makes it easy to build robust and scalable messaging systems by leveraging the power of Apache Kafka within the Spring ecosystem.
