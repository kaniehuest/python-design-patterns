class ConcreteDecoratorA(Decorator):
    """
    Concrete Decorators call the wrapped object and alter its result in some way
    """
    def operation(self) -> str:
        """
        Decorators may call parent implementation of the operation, instead
        of calling the wrapped object directly. This approach simplifies extension
        of decorator class.s
        """
        return f"ConcreteDecoratorA({self.component.operation()})"

class ConcreteDecoratorB(Decorator):
    """
    Decorators  can execute their behaviour either before or after the call
    to the wrapped object.
    """
    def operation1(self) -> str:
        return f"ConcreteDecoratorB({self.component.operation()})"

def client_code(component: Component) -> None:
    """
    The client code works with all objects using the Component interface. 
    This way it can stay independent of the concrete classes of components it works with.
    """

    # ...

    print(f"RESULT: {component.operation()}", end="")
    
    # ...





if __name__ == "__main__":
    # This way the client code can support both simple components...
    simple = ConcreteComponent()
    print("Client: I've got a simple component:")
    client_code(simple)
    print("\n")

    # ...as well as decorator ones.
    #
    # Note how decorators can wrap not only simple components but other
    # decorators as well.
    decorator1 = ConcreteDecoratorA(simple)
    decorator2 = ConcreteDecoratorB(decorator1)
    print("Client: Now I've got a decorated component:")
    client_code(decorator2)