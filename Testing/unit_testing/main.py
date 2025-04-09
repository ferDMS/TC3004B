import math
def calcular_raices(a, b, c):
    if a == 0:
        raise ValueError("El coeficiente 'a' no puede ser cero.")
    discriminante = b**2 - 4*a*c
    if discriminante >= 0:
        raiz_discriminante = math.sqrt(discriminante)
        x1 = (-b + raiz_discriminante) / (2*a)
        x2 = (-b - raiz_discriminante) / (2*a)
        return x1, x2
    else:
        parte_real = -b / (2*a)
        parte_imaginaria = math.sqrt(abs(discriminante)) / (2*a)
        return parte_real, parte_imaginaria, -parte_imaginaria

def main():
    print("Este programa resuelve ecuaciones cuadráticas de la forma ax^2 + bx + c = 0")
    a = float(input("Ingrese el coeficiente a: "))
    b = float(input("Ingrese el coeficiente b: "))
    c = float(input("Ingrese el coeficiente c: "))

    if a == 0:
        print("El coeficiente 'a' no puede ser cero. La ecuación no es cuadrática.")
        return

    try:
        raices = calcular_raices(a, b, c)
    except ValueError as e:
        print(e)
        return

    print("\nLas raíces de la ecuación son:")
    if raices is not None:
        for raiz in raices:
            print(raiz)
    else:
        print("No es una ecuación cuadrática.")

if __name__ == "__main__":
    main()