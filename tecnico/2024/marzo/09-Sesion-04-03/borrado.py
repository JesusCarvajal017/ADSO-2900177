msgError = "Error, dato no válida."
try: 
    numero = float(input("Digite el numero a evaluar: "))
    if (numero >= 50 and numero<=200):
        print("El numero", numero, "se encuentra entre el rango")
    else : 
        print("El numero", numero, "se encuentra fuera del rango")
except: 
    print(msgError)