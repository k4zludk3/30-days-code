/*
Choosing between inheritance, abstract classes, and interfaces depends on the specific needs of your software design. 
Here’s a brief guideline on when and why to use each, along with some sample code in Java to illustrate the concepts.
*/

/*
### 1. **Inheritance**
**When to use:** Use inheritance when you want to create a relationship where one class is a specialized form of another class, sharing some of its properties or methods but also adding new features or overriding existing ones.

**Why use it:** It promotes code reusability and establishes a natural hierarchy between classes.

**Example code:**
*/

class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();  // Inherited method
        myDog.bark(); // Additional method
    }
}

/*
### 2. **Abstract Classes**
**When to use:** Use abstract classes when you want to define a template for a group of subclasses. This is especially useful when you have a base class that should not be instantiated on its own but should contain some shared code.

**Why use it:** Abstract classes allow you to outline a common structure and share code among related classes while ensuring certain methods are tailored in subclasses to fit their specific needs.

**Example code:**
 */

abstract class Shape {
    abstract double calculateArea(); // Abstract method

    public void display() {
        System.out.println("Area: " + calculateArea());
    }
}

class Circle extends Shape {
    private double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape myCircle = new Circle(5.0);
        myCircle.display(); // Uses abstract and concrete methods
    }
}

/*
### 3. **Interfaces**
**When to use:** Use interfaces when you want to define a contract for what a class can do, without dictating how it does it. Interfaces are great when different classes share a common behavior but do not share a logical inheritance relationship.

**Why use it:** Interfaces enhance flexibility and modularity in your design and can be used to implement multiple behaviors in classes.

**Example code:**
 */

interface Flyable {
    void fly();
}

class Bird implements Flyable {
    public void fly() {
        System.out.println("The bird flaps its wings to fly.");
    }
}

class Airplane implements Flyable {
    public void fly() {
        System.out.println("The airplane turns on engines to fly.");
    }
}

public class Main {
    public static void main(String[] args) {
        Flyable myBird = new Bird();
        Flyable myPlane = new Airplane();
        myBird.fly();
        myPlane.fly();
    }
}

/* 
### Summary
- **Inheritance** is for extending functionality and maintaining a hierarchical relationship.
- **Abstract classes** are used to define a template for future detailed classes, ensuring some common functionality.
- **Interfaces** are used to ensure certain behaviors across different classes, providing flexibility in method implementation without enforcing a common ancestor.

These elements help organize and structure your code with clarity, maintainability, and scalability in mind.
*/