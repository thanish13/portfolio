
# SOLID Principles in Java

The SOLID principles are five design principles intended to make software designs more understandable, flexible, and maintainable. These principles are especially useful in object-oriented programming and are widely used in Java development.

---

## 1. **Single Responsibility Principle (SRP)**

**Definition**: A class should have only one reason to change, meaning it should have only one job or responsibility.

**Java Example**:
```java
// Violates SRP
public class User {
    public void getUserDetails() {}
    public void saveToDatabase() {}
}

// Follows SRP
public class User {
    public void getUserDetails() {}
}

public class UserRepository {
    public void saveToDatabase(User user) {}
}
```

---

## 2. **Open/Closed Principle (OCP)**

**Definition**: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

**Java Example**:
```java
// Violates OCP
public class Payment {
    public void pay(String type) {
        if (type.equals("credit")) {
            // pay by credit
        } else if (type.equals("debit")) {
            // pay by debit
        }
    }
}

// Follows OCP
public interface Payment {
    void pay();
}

public class CreditCardPayment implements Payment {
    public void pay() {
        // pay by credit
    }
}

public class DebitCardPayment implements Payment {
    public void pay() {
        // pay by debit
    }
}
```

---

## 3. **Liskov Substitution Principle (LSP)**

**Definition**: Subtypes must be substitutable for their base types without altering the correctness of the program.

**Java Example**:
```java
// Violates LSP
public class Bird {
    public void fly() {}
}

public class Ostrich extends Bird {
    public void fly() {
        throw new UnsupportedOperationException();
    }
}

// Follows LSP
public abstract class Bird {}

public interface FlyingBird {
    void fly();
}

public class Sparrow extends Bird implements FlyingBird {
    public void fly() {}
}

public class Ostrich extends Bird {}
```

---

## 4. **Interface Segregation Principle (ISP)**

**Definition**: No client should be forced to depend on methods it does not use.

**Java Example**:
```java
// Violates ISP
public interface Worker {
    void work();
    void eat();
}

// Follows ISP
public interface Workable {
    void work();
}

public interface Eatable {
    void eat();
}
```

---

## 5. **Dependency Inversion Principle (DIP)**

**Definition**: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details.

**Java Example**:
```java
// Violates DIP
public class LightBulb {
    public void turnOn() {}
    public void turnOff() {}
}

public class Switch {
    private LightBulb bulb = new LightBulb();

    public void operate() {
        bulb.turnOn();
    }
}

// Follows DIP
public interface Switchable {
    void turnOn();
    void turnOff();
}

public class LightBulb implements Switchable {
    public void turnOn() {}
    public void turnOff() {}
}

public class Switch {
    private Switchable device;

    public Switch(Switchable device) {
        this.device = device;
    }

    public void operate() {
        device.turnOn();
    }
}
```

---

By following SOLID principles, Java developers can create more robust, scalable, and maintainable applications.
