# Para definir clases abstractas con métodos abstractos
from abc import ABC, abstractmethod

# Bebida Abstracta (con método abstracto)
class Bebida(ABC):
    def __init__(self, nombre: str, descripcion: str):
        self.nombre = nombre
        self.descripcion = descripcion
        
    @abstractmethod
    def precio(self) -> float:
        pass


# Bebidas concretas
class Espresso(Bebida):
    def __init__(self):
        # Inicializar instancia de bebida abstracta con datos
        super().__init__("Espresso", "Fuerte y amargo")
        # Usar _ para denotar atributo privado. Precio de Espresso.
        self._precio_base = 1.99
        
    def precio(self) -> float:
        return self._precio_base
    
    
class HouseBlend(Bebida):
    def __init__(self):
        super().__init__("HouseBlend", "Suave y dulce")
        self._precio_base = 0.89
        
    def precio(self) -> float:
        return self._precio_base
        
        
class DarkRoast(Bebida):
    def __init__(self):
        super().__init__("DarkRoast", "Fuerte y amargo")
        self._precio_base = 0.99
        
    def precio(self) -> float:
        return self._precio_base
        

class Decaf(Bebida):
    def __init__(self):
        super().__init__("Decaf", "Suave y sin cafeína")
        self._precio_base = 1.05
        
    def precio(self) -> float:
        return self._precio_base


# Decorador Abstracto
class DecoradorBebida(Bebida):
    def __init__(self, bebida_decorada: Bebida):
        # Inicializar instancia de bebida abstracta con datos
        super().__init__(bebida_decorada.nombre, bebida_decorada.descripcion)
        # Con _ porque se utilizará como atributo privado
        self._bebida_decorada = bebida_decorada
        
    @abstractmethod
    def precio(self) -> float:
        pass
    

# Decorador Concreto
class Mocha(DecoradorBebida):
    def __init__(self, bebida_decorada: Bebida):
        # Inicializar instancia de decorador abstracto
        # Que a su vez genera una bebida abstracta
        super().__init__(bebida_decorada)
        # Precio base de añadir Mocha
        self._precio_base = 0.75
        # Añadir descripción de decorador a bebida original
        self.descripcion = f"{self._bebida_decorada.descripcion}, con Mocha"
        
    def precio(self) -> float:
        return self._bebida_decorada.precio() + self._precio_base
    

class Crema(DecoradorBebida):
    def __init__(self, bebida_decorada: Bebida):
        super().__init__(bebida_decorada)
        self._precio_base = 0.50
        self.descripcion = f"{self._bebida_decorada.descripcion}, con Crema"
        
    def precio(self) -> float:
        return self._bebida_decorada.precio() + self._precio_base
    
    
# Decorador de Leche Abstracto
class Leche(DecoradorBebida):
    def __init__(self, bebida_decorada: Bebida):
        super().__init__(bebida_decorada)
    

# Decoradores de Leche Concretos
class Entera(Leche):
    def __init__(self, bebida_decorada: Bebida):
        super().__init__(bebida_decorada)
        self._precio_base = 0.20
        self.descripcion = f"{self._bebida_decorada.descripcion}, con Leche Entera"
        
    def precio(self) -> float:
        return self._bebida_decorada.precio() + self._precio_base
    
    
class Deslactosada(Leche):
    def __init__(self, bebida_decorada: Bebida):
        super().__init__(bebida_decorada)
        self._precio_base = 0.25
        self.descripcion = f"{self._bebida_decorada.descripcion}, con Leche Deslactosada"
        
    def precio(self) -> float:
        return self._bebida_decorada.precio() + self._precio_base
    
    
class Light(Leche):
    def __init__(self, bebida_decorada: Bebida):
        super().__init__(bebida_decorada)
        self._precio_base = 0.30
        self.descripcion = f"{self._bebida_decorada.descripcion}, con Leche Light"
        
    def precio(self) -> float:
        return self._bebida_decorada.precio() + self._precio_base
    
    
class DeslactosadaLight(Leche):
    def __init__(self, bebida_decorada: Bebida):
        super().__init__(bebida_decorada)
        self._precio_base = 0.35
        self.descripcion = f"{self._bebida_decorada.descripcion}, con Leche Deslactosada Light"
        
    def precio(self) -> float:
        return self._bebida_decorada.precio() + self._precio_base
    
    
class Soya(Leche):
    def __init__(self, bebida_decorada: Bebida):
        super().__init__(bebida_decorada)
        self._precio_base = 0.40
        self.descripcion = f"{self._bebida_decorada.descripcion}, con Leche de Soya"
        
    def precio(self) -> float:
        return self._bebida_decorada.precio() + self._precio_base


if __name__ == "__main__":
    print("\nCAFETERÍA EL PÉNDULO\n------------------------\n")
    bebida = Espresso()
    print(f"{bebida.nombre} ({bebida.descripcion}) - ${bebida.precio():.2f}")
    bebida = Mocha(bebida) # Aumentar precio por $0.75
    print(f"{bebida.nombre} ({bebida.descripcion}) - ${bebida.precio():.2f}")
    bebida = Crema(bebida) # Aumentar precio por $0.50
    print(f"{bebida.nombre} ({bebida.descripcion}) - ${bebida.precio():.2f}")
    bebida = Entera(bebida) # Aumentar precio por $0.20
    print(f"{bebida.nombre} ({bebida.descripcion}) - ${bebida.precio():.2f}")
    print("\n------------------------")
