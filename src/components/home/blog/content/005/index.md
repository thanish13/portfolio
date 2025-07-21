
# Introduction to Spring MVC

Spring MVC (Model-View-Controller) is a web framework under the Spring Framework that is designed to build web applications. It separates application logic into three interconnected components, allowing for more organized and scalable code.

---

## Core Components of Spring MVC

### 1. **Model**
Represents the application data and business logic.

### 2. **View**
Responsible for rendering the UI (typically HTML). Can use JSP, Thymeleaf, etc.

### 3. **Controller**
Handles user input and interacts with the model to process data and return a view.

---

## Spring MVC Architecture

```
Client --> DispatcherServlet --> Controller --> Service --> DAO --> Database
                                       |
                                     ViewResolver
                                       |
                                     View (JSP/HTML)
```

- **DispatcherServlet**: Front controller that handles all HTTP requests.
- **Controller**: Annotated with `@Controller`, handles business logic.
- **Service**: Contains business logic (optional layer).
- **DAO**: Handles database interaction.
- **ViewResolver**: Maps view names to actual views.

---

## Annotations in Spring MVC

- `@Controller`: Marks a class as a Spring MVC controller.
- `@RequestMapping`: Maps HTTP requests to handler methods.
- `@GetMapping`, `@PostMapping`: Specialized annotations for specific request types.
- `@ModelAttribute`: Binds method parameters or return values to a model attribute.
- `@PathVariable`, `@RequestParam`: Extract values from the request URL or parameters.

---

## Example: Basic Spring MVC Controller

```java
@Controller
public class HelloController {

    @GetMapping("/hello")
    public String sayHello(Model model) {
        model.addAttribute("message", "Hello from Spring MVC!");
        return "hello"; // Refers to hello.jsp or hello.html
    }
}
```

---

## Configuration

### XML-based

```xml
<web-app>
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
</web-app>
```

### Java-based (Using `@EnableWebMvc`)

```java
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.example")
public class WebConfig implements WebMvcConfigurer {
    // Configure view resolvers, resources, etc.
}
```

---

## View Technologies

- **JSP (Java Server Pages)**
- **Thymeleaf**
- **FreeMarker**

Example view using Thymeleaf:

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head><title>Hello</title></head>
<body>
    <h1 th:text="${message}"></h1>
</body>
</html>
```

---

## Advantages of Spring MVC

- Clear separation of concerns
- Powerful data binding and validation
- Flexible configuration (XML or Java-based)
- Integration with Spring’s other features (Security, Data, etc.)

---

Spring MVC is a powerful and extensible framework for building web applications, offering flexibility and integration with the broader Spring ecosystem.
