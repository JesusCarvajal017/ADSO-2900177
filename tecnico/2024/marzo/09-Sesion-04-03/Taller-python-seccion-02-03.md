# Codigo python (`solución de los ejercicios taller`)

1. #### inversión de tres personas (%)

```
    # INVERSION

    print("===================== Calcule porcentaje inversion ==========================")
    prsonUno = float(input("-------------> Dinero a invertir persona 1: "))
    prsonDos = float(input("-------------> Dinero a invertir persona 2: "))
    prsonTres = float(input("------------> Dinero a invertir persona 3: "))

    totalInver= prsonUno + prsonDos + prsonTres

    prsonUno = (prsonUno * 100)/totalInver
    prsonDos = (prsonDos * 100)/totalInver
    prsonTres = (prsonTres * 100)/totalInver

    print("=============================================================================")
    print("------------- La inversión total fue de $",totalInver," --------------------\n")

    print("-------------> El porcentaje de la inversión de la primera persona es de: ", str(round(prsonUno))+"%")
    print("-------------> El porcentaje de la inversión de la segunda persona es de: ", str(round(prsonDos))+"%")
    print("-------------> El porcentaje de la inversión de la tercera persona es de: ", str(round(prsonTres))+"%")

    print("=============================================================================")

```

2. #### Notas...

```
    # NOTAS GENERALES: 
    print("\n========================= SISTEMA CALIFICACIÓN ==============================\n")
    # NOTAS MATEMATICAS
    print("------------------------ Notas area: MATEMATICAS ----------------------------\n")
    exM = float(input("Ingrese la nota obtenida en el examen de matemáticas: "))
    task_M1 = float(input("Ingrese la nota obtenida en la tarea 1 de matemáticas: "))
    task_M2 = float(input("Ingrese la nota obtenida en la tarea 2 de matemáticas: "))
    task_M3 = float(input("Ingrese la nota obtenida en la tarea 3 de matemáticas: "))

    # NOTAS FISICA
    print("\n------------------------ Notas area: FÍSICA ----------------------------\n")
    exF = float(input("Ingrese la nota obtenida en el examen de física: "))
    task_F1 = float(input("Ingrese la nota obtenida en la tarea 1 de física: "))
    task_F2 = float(input("Ingrese la nota obtenida en la tarea 2 de física: "))

    # NOTAS QUIMICA
    print("\n------------------------ Notas area: QUÍMICA ----------------------------\n")
    exQ = float(input("Ingrese la nota obtenida en el examen de Química: "))
    task_Q1 = float(input("Ingrese la nota obtenida en la tarea 1 de Química: "))
    task_Q2 = float(input("Ingrese la nota obtenida en la tarea 2 de Química: "))
    task_Q3 = float(input("Ingrese la nota obtenida en la tarea 3 de Química: "))

    # Operaciones de cálculo promedio
    promet_M= (task_M1+task_M2+task_M3)/3
    proFish_M = (exM*0.9)+(promet_M*0.1)

    promet_F = (task_F1+task_F2)/2
    proFish_F = (exF*0.8)+(promet_F*0.2)

    promet_Q= (task_Q1+task_Q2+task_Q3)/3
    proFish_Q = (exQ*0.85)+(promet_Q*0.15)

    promet_total = (proFish_M+proFish_F+proFish_Q)/3

    print("\nEl promedio de matemáticas es de ",proFish_M)
    print("El promedio de física es de ",proFish_F)
    print("El promedio de química es de ",proFish_Q)
    print("El promedio total de las 3 materias es de ",promet_total)

```

3. #### Negativo o positivo

```
    # ¿numero negativo o positivo? 

    numero = float(input("Digite el numero a evaluar: "))
    if numero < 0:
        print("El numero", numero, "es negativo")
    else : 
        print("El numero", numero, "es positivo")

```

4. #### Mayor a 200

```
    # ¿mayor a 200? 

    numero = float(input("Digite el numero a evaluar: "))
    if numero > 200:
        print("El numero", numero, "es mayor a 200 ")
    else : 

```

5. #### Rango 50-100

```
    # ¿rango 50-100? 

    numero = float(input("Digite el numero a evaluar: "))
    if (numero >= 50 and numero<=200):
        print("El numero", numero, "se encuentra entre el rango")
    else : 
        print("El numero", numero, "se encuentra fuera del rango")
        
```


