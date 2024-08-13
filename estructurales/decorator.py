class Component():
    """
    The base Component interface defines operations that can be altered by 
    decorators.
    """
    def operation(self) -> str:
        pass


class ConcreteComponent(Component):
    """
    Concrete Components provide default implementations of the operations. There
    might be several variations of these classes.
    """

    def operation(self) -> str:
        return "ConcreteComponent"


class Decorator(Component):
    """
    The base decorator class follows the same interface as the other components.
    The primary purpose of this class is to define the wrapping interface for 
    all concrete decorators. The default implementation of the wrapping code
    might include a field for storing a wrapped component and the means to 
    initialize it.
    """

    _component: Component = None

    def __init__(self, component: Component) -> None:
        self._component = component

    @property
    def component(self) -> Component:
        """
        The decorator delegates all the work to the wrapped component.
        """

        return self._component

    def operation(self) -> str:
        return self._component.operation()


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
    def operation(self) -> str:
        return f"ConcreteDecoratorB({self.component.operation()})"


def client_code(component: Component) -> None:
    """
    The client code works with all objects using the Component interface. 
    This way it can stay independent of the concrete classes of components it works with.
    """

    # ...

    print(f"RESULT: {component.operation()}")
    
    # ...


if __name__ == "__main__":
    # This way the client code can support both simple components...
    simple = ConcreteComponent()
    print("Client: I've got a simple component:")
    client_code(simple)
    print("")

    # ...as well as decorator ones.
    #
    # Note how decorators can wrap not only simple components but other
    # decorators as well.
    decorator1 = ConcreteDecoratorA(simple)
    decorator2 = ConcreteDecoratorB(decorator1)
    print("Client: Now I've got a decorated component:")
    client_code(decorator1)
    client_code(decorator2)