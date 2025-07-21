
# Introduction to Spring Boot

Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade Spring-based applications with minimal configuration.

---

## Key Features of Spring Boot

### 1. **Auto-Configuration**
Automatically configures Spring application based on the dependencies present in the classpath.

### 2. **Standalone Applications**
Creates independent Spring applications with embedded servers like Tomcat or Jetty, eliminating the need for external server deployment.

### 3. **Opinionated Defaults**
Provides a set of default configurations to reduce boilerplate code and speed up development.

### 4. **Spring Boot Starter Dependencies**
Simplifies dependency management by grouping commonly used dependencies into starter packages (e.g., `spring-boot-starter-web`, `spring-boot-starter-data-jpa`).

### 5. **Embedded Web Servers**
Spring Boot applications can run using embedded web servers like Tomcat, Jetty, or Undertow.

### 6. **Actuator**
Provides built-in endpoints to monitor and manage your application (e.g., health, metrics, info).

---

## Benefits of Spring Boot

- Rapid application development
- Simplified configuration
- Easy integration with Spring ecosystem
- Embedded servers for simpler deployment
- Production-ready features (metrics, health checks)

---

## Spring Boot Project Structure

```
my-springboot-app/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/demo/
│       │       └── DemoApplication.java
│       └── resources/
│           ├── application.properties
│           └── static/
├── pom.xml
```

---

## Creating a Simple Spring Boot Application

### 1. **Main Application Class**

```java
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

### 2. **Rest Controller Example**

```java
@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}
```

---

## Configuration with `application.properties`

```properties
server.port=8081
spring.application.name=demo-application
```

Spring Boot simplifies the process of building modern Java web applications by eliminating the complexity of configuration and allowing developers to focus on business logic.
