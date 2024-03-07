### 1. INVERSIONES

```
    msgError = "Error, su inversión no es válida."
    msgOk = "Su Inversión fue registrada con éxito."
    msgInput = "Digite la inversión de la persona"
    msgOutput = "El porcentaje de inversión de la persona"

    try:
        # entreda 1
        p1 = float(input(msgInput + "1: "))
        # validacion 1
        if p1 > 0:
            print(msgOk)
            p2 = float(input(msgInput + "2: "))
            # validacion 2
            if p2 > 0:
                print(msgOk)
                p3 = float(input(msgInput + "3: "))
                # validacion 3
                if p3 > 0:
                    print(msgOk)
                    it = p1 + p2 + p3
                    pp1 = (p1/it)*100
                    pp2 = (p2/it)*100
                    pp3 = (p3/it)*100
                    
                    print(msgOutput + "1 es: " + str(pp1)+"%")
                    print(msgOutput + "2 es: " + str(pp2)+"%")
                    print(msgOutput + "3 es: " + str(pp3)+"%")
                else: 
                    print(msgError)
            else: 
                print(msgError)
        else: 
            print(msgError)
    except:
        print(msgError)

```

### 2. nota 

```
    msgError = "Error, dato no válida."
    msgOk = "dato correcto, ok."
    msgInput = "Digite la nota de la Evaluacion: "
    msgInputT = "Digite la nota de la Tarea"
    msgOutput = "El promedio de: "

    #funcion de validación
    def validar_nota(msg):
        try:
            nota = float(input(msg))
            if nota >= 0.0 and nota<= 5.0:
                return nota
            else:
                print(msgError)
        except ValueError:
            print(msgError)
            return
            
    print("================ NOTAS MATEMATICA ================\n")
    # NOTAS MATEMATICAS
    exM= validar_nota(msgInput)
    if(exM):
        task_M1 = validar_nota(msgInputT + "1: ")
        task_M2 = validar_nota(msgInputT + "2: ")
        task_M3 = validar_nota(msgInputT + "3: ")

        # NOTAS FISICA
        print("\n================ Notas area: FÍSICA ================\n")
        exF = validar_nota(msgInput)
        task_F1 = validar_nota(msgInputT + "1: ")
        task_F2 = validar_nota(msgInputT + "2: ")

        # NOTAS QUIMICA
        print("\n================ Notas area: QUÍMICA ================\n")
        exQ = validar_nota(msgInput)
        task_Q1 = validar_nota(msgInputT + "1: ")
        task_Q2 = validar_nota(msgInputT + "2: ")
        task_Q3 = validar_nota(msgInputT + "3: ")

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

### 3. Negativo o positivo

```
    msgError = "Error, dato no válida."
    try: 
        numero = float(input("Digite el numero a evaluar: "))
        if numero < 0:
            print("El numero", numero, "es negativo")
        else : 
            print("El numero", numero, "es positivo")
    except: 
        print(msgError)

```

### 4. Mayor a 200

```
    msgError = "Error, dato no válida."
    try: 
        numero = float(input("Digite el numero a evaluar: "))
        if numero > 200:
            print("El numero", numero, "es mayor a 200 ")
        else : 
            print("El numero", numero, "es menor o igual a 200")
    except: 
        print(msgError)

```

### 5. Rango 50-100

```
    # ¿rango 50-100? 
    msgError = "Error, dato no válida."
    try: 
        numero = float(input("Digite el numero a evaluar: "))
        if (numero >= 50 and numero<=200):
            print("El numero", numero, "se encuentra entre el rango")
        else : 
            print("El numero", numero, "se encuentra fuera del rango")
    except: 
        print(msgError)
        
```
