msgError = "Error, inversión no válida."
msgOk = "Inversión correcta, ok."
msgInput = "Favor, indique la inversión de la persona "
msgOutput = "Porcentaje de inversión de la persona  "

# Función para validar la entrada de datos
def validar_inversion(msg):
    while True:
        try:
            inversion = float(input(msg))
            if inversion >= 0:
                return inversion
            else:
                print(msgError)
        except ValueError:
            print(msgError)

# Solicitar las inversiones
p1 = validar_inversion(msgInput + "1: ")
print(msgOk)
p2 = validar_inversion(msgInput + "2: ")
print(msgOk)
p3 = validar_inversion(msgInput + "3: ")

# Calcular el total de inversiones
it = p1 + p2 + p3

# Calcular los porcentajes de inversión
pp1 = (p1 / it) * 100
pp2 = (p2 / it) * 100
pp3 = (p3 / it) * 100

# Salida 
print(msgOutput + "1: " + str(pp1) + "%")
print(msgOutput + "2: " + str(pp2) + "%")
print(msgOutput + "3: " + str(pp3) + "%")
    