
# Introduction to JAX-RS

JAX-RS (Java API for RESTful Web Services) is a set of APIs to create REST web services in Java. It is part of the Java EE (Jakarta EE) platform and provides annotations and interfaces to build web services that conform to the REST architectural style.

---

## Key Features of JAX-RS

- Annotation-based configuration
- Supports HTTP methods like GET, POST, PUT, DELETE
- Automatic content negotiation (JSON, XML)
- Integration with frameworks like Jersey, RESTEasy, Apache CXF
- Support for URI matching and parameter extraction

---

## Core Annotations

- `@Path`: Specifies the URI path for a resource class or method.
- `@GET`, `@POST`, `@PUT`, `@DELETE`: Maps HTTP methods to resource methods.
- `@Produces`: Specifies the response media type (e.g., `application/json`).
- `@Consumes`: Specifies the accepted request media type.
- `@PathParam`, `@QueryParam`, `@HeaderParam`, `@FormParam`: Extract values from the request.

---

## Example: Basic JAX-RS Application

### Resource Class

```java
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/hello")
public class HelloResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from JAX-RS!";
    }

    @GET
    @Path("/{name}")
    @Produces(MediaType.TEXT_PLAIN)
    public String helloName(@PathParam("name") String name) {
        return "Hello, " + name;
    }
}
```

---

## Setting Up with Jersey (Reference Implementation)

### 1. **Maven Dependencies**

```xml
<dependency>
    <groupId>org.glassfish.jersey.containers</groupId>
    <artifactId>jersey-container-servlet</artifactId>
    <version>3.0.0</version>
</dependency>
```

### 2. **Configuration**

```java
@ApplicationPath("/api")
public class MyApplication extends Application {
    // Automatically discovers annotated resource classes
}
```

---

## Content Negotiation

JAX-RS automatically supports multiple representations of resources:

```java
@GET
@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
public MyData getData() {
    return new MyData();
}
```

---

## Exception Handling

Use `ExceptionMapper` to handle errors:

```java
@Provider
public class NotFoundExceptionMapper implements ExceptionMapper<NotFoundException> {
    public Response toResponse(NotFoundException ex) {
        return Response.status(Response.Status.NOT_FOUND)
                       .entity("Resource not found")
                       .build();
    }
}
```

---

## Advantages of JAX-RS

- Clean and concise code using annotations
- Easily integrates with containers like Tomcat, Jetty
- Pluggable providers and filters
- Built-in support for REST principles
- Compatible with Jakarta EE and MicroProfile

---

JAX-RS simplifies the creation of RESTful web services in Java, enabling scalable and maintainable APIs using standard annotations and practices.
