# Digramas de flujo complejo

Se documentarán cinco ejercicios de diagramas de flujo, cada uno será descrito de manera que resulte en un producto aplicable.

### Esquema de documentacion :

-----------------------------------------------------------------------------------------

#### Planteamiento del problema
* El problema
* El objetivo
* Solución 

>[!IMPORTANT]
> Los diagramas representan simplemente un esbozo de la idea principal, ya que para desarrollarla de manera más completa, es necesario trasladarla a un lenguaje de programación que nos proporcione las herramientas adecuadas.

## 1. Plataforma de registro personal :: (Ejercicio complementario)

#### Descripción y planteamiento

------------------------------------------------------------------------------------------


1. Problematica: 

Una de las principales dificultades que enfrentan las grandes y medianas empresas radica en la `organización y gestión` de la información relacionada con sus empleados, nóminas e inventario. Hasta ahora, estos procesos han sido llevados a cabo de manera manual, basándose en documentos escritos y algunos programas en Excel. Sin embargo, esta metodología resulta altamente ineficiente para las empresas.

2. Objetivo

El objetivo de mi sistema es gestionar de forma exhaustiva y ordenada la información de los empleados que trabajan en una empresa. Esta información permite clasificar los salarios en función de la participación. Además, el sistema es capaz de organizar y mantener un registro de las ganancias y pérdidas que puedan surgir en la empresa, centrándose especialmente en las mayores ganancias.

3. Solucion

- nombre del la plataforma: DataForge

## Diagrama de flujo


>[!NOTE]
> Dado el tamaño del diagrama, la visualización puede resultar incómoda. Por lo tanto, se recomienda copiar el pseudocódigo en PSeInt para una mejor apreciación.

![Ver imagen](/tecnico/2024/abril/01-diagramas-complejos/img/digrama_registro.png)

* pseudocódigo: 

```
    Funcion validar(a)
        Imprimir "¿Quiere volver al menu principal? 1 para Si, 2 para No"
        //Definir validacion Como Caracter
        leer validacion
        Segun validacion Hacer
            1:
                estado = 0
                Limpiar Pantalla
            2:
                estado = 2
            De Otro Modo:
                Limpiar Pantalla
        Fin Segun
    Fin Funcion

    Algoritmo matrizl
        Definir opciones, columnas, estado Como Entero
        columnas = 3

        //menu principal
        Repetir
            Imprimir "________________________________________________"
            Imprimir "      Sistema de registro personal              "
            Imprimir "________________________________________________"
            
            Imprimir "1. registro personas"
            Imprimir "2. consulta personas"
            Imprimir "3. actualizar datos persona"
            Imprimir "4. limpiar pantalla"
            Imprimir "0. salir"
            
            Imprimir "Digite la opciones disponibles: "
            Repetir
                leer opciones
            Hasta Que opciones >= 0 Y opciones < 5
            
                Segun opciones Hacer
                    1: 
                        Imprimir "Ingrese la cantidad de personas: "
                        
                        Repetir
                            leer renglones
                        Hasta Que renglones > 0	
                        Dimension matriz[renglones,columnas]
                        
                        Imprimir ".................Registro de personas................."
                    
                        Para i = 0 Hasta renglones - 1 Con Paso 1 Hacer
                            Imprimir "Datos de la persona N° ", i + 1
                            Para m = 0 Hasta columnas -1 Con Paso 1 Hacer
                                Segun m Hacer
                                    0:
                                        Imprimir "Nombre de la persona: "
                                        leer nombre
                                        matriz[i,m] = nombre
                                    1:
                                        Imprimir "Telefono Persona: "
                                        leer nombre
                                        matriz[i,m] = nombre
                                    2:
                                        Imprimir "Email: "
                                        leer nombre
                                        matriz[i,m] = nombre
                                    De Otro Modo:
                                        Imprimir "Fin registro persona N° ", i + 1
                                Fin Segun
                            Fin Para
                        Fin Para
                        
                        //Estado de registros existentes
                        estado = 1
                        validar(a)
                        
                    2: 
                        Si estado == 0 Entonces
                            Imprimir "---------- ¡No hay personas registradas por el momento! -------------"
                            
                        SiNo
                            Imprimir "================ Datos de personas =================="
                            Imprimir "Numero de personas registradas: ", renglones 
                            Para i = 0 Hasta renglones - 1 Con Paso 1 Hacer
                                
                                Imprimir "......................................................"
                                Imprimir "La persona N° ", i + 1, " esta registrada con lo siguientes datos: "
                                Para m = 0 Hasta columnas - 1 Con Paso 1 Hacer
                                    Segun m Hacer
                                        0:
                                            Imprimir "Nombre de la persona: ", matriz[i,m] 
                                        1:
                                            Imprimir "Telefono Persona: ", matriz[i,m] 
                                        2:
                                            Imprimir "Email: ", matriz[i,m] 
                                        De Otro Modo:
                                            Imprimir "......................................"
                                    Fin Segun
                                Fin Para
                            Fin Para
                        FinSi
                        validar(a)
                    3: 
                        Imprimir "Numero de la persona a la cual quiere hacer el cambio: "
                        Repetir
                            leer personas
                        Hasta Que personas > 0 Y personas <= renglones
                        
                        Para i = 0 Hasta renglones - 1 Con Paso 1 Hacer
                            si i == (personas - 1) Entonces
                                Imprimir "......................................................"
                                Para m = 0 Hasta columnas - 1 Con Paso 1 Hacer
                                    Segun m Hacer
                                        0:
                                            Imprimir "Nombre de la persona: ", matriz[i,m] 
                                            leer nombrel
                                            si nombrel == "" Entonces
                                                matriz[i,m] = matriz[i,m]
                                                
                                            SiNo
                                                matriz[i,m]  = nombrel
                                            FinSi
                                    
                                        1:
                                            Imprimir "Telefono Persona: ", matriz[i,m] 
                                            leer telefonol
                                            si telefonol == "" Entonces
                                                matriz[i,m] = matriz[i,m]
                                                
                                            SiNo
                                                matriz[i,m]  = telefonol
                                            FinSi

                                        2:
                                            Imprimir "Email: ", matriz[i,m]
                                            leer emaill
                                            si emaill == "" Entonces
                                                matriz[i,m] = matriz[i,m]
                                                
                                            SiNo
                                                matriz[i,m]  = emaill
                                            FinSi
                                        De Otro Modo:
                                            Imprimir "......................................"
                                    Fin Segun
                                Fin Para
                            FinSi
            
                        Fin Para
                        
                        validar(a)
                    4: 
                        Limpiar Pantalla
                    0:
                        Imprimir "Un gusto en ayudarte, vuelve pronto :)"
                        //Estado de salida definitiva
                        estado = 2
                    De Otro Modo:
                        Imprimir "Reinicie el programa, opcion fuera de contexto"
                Fin Segun
                
        Hasta Que estado == 2
        
    FinAlgoritmo

```

## 2. Memoriza las tablas de multiplicar

#### Descripción y planteamiento

------------------------------------------------------------------------------------------


1. Problematica: 

Muchas veces olvidamos las tablas de multiplicar, por lo que la mejor manera de recordarlas es practicando repetidamente. Este olvido puede afectar a personas de todas las edades, desde niños hasta adultos

2. Objetivo

La aplicación permitirá al usuario generar tablas de multiplicar según su preferencia. Podrá practicarlas y luego avanzar hacia otras tablas de mayor dificultad para su aprendizaje

3. Solucion

- nombre del la plataforma: memoriMult

## Diagrama de flujo


>[!NOTE]
> Dado el tamaño del diagrama, la visualización puede resultar incómoda. Por lo tanto, se recomienda copiar el pseudocódigo en PSeInt para una mejor apreciación.

![Ver imagen](/tecnico/2024/abril/01-diagramas-complejos/img/memoritabla.png)

* pseudocódigo: 

```
    Algoritmo tablas_multiplicar
        Definir tabla, multiplicador, count, resultado Como Real
        
        
        
        Repetir
            Imprimir "==============================================="
            Imprimir "      Aprende las tablas de multiplicar        "
            Imprimir "==============================================="
            
            
            si estado == 4 Entonces
                Imprimir "Respuesta no valida, intente de nuevo"
            FinSi
            
            Imprimir "1. aprender"
            Imprimir "2. Limpiar"
            Imprimir "0. salir"
            Repetir
                leer option
            Hasta Que option > 0
            
            Segun option Hacer
                1:
                    Imprimir "Ingresa la tabla que quieres aprender: "
                    leer tabla
                    count = 0
                    
                    Imprimir ".............................."
                    Mientras count < 10 Hacer
                        count = count + 1
                        resultado = count * tabla
                        Imprimir "       ", tabla " X ", count, " = ", resultado
                    Fin Mientras
                    Imprimir ".............................."
                    
                    Imprimir "¿Desea volver a inicio? 1/0"
                    leer siino
                    Segun siino Hacer
                        1:
                            estado = 1
                            Limpiar Pantalla
                        0:
                            estado = 0
                            estado = 1
                        De Otro Modo:
                            estado = 4
                            Limpiar Pantalla
                    Fin Segun
                2:
                    Limpiar Pantalla
                0:
                    estado = 0
                De Otro Modo:
                    Imprimir "Error de seleccion"
                    estado = 4
                    Limpiar Pantalla
                    
            Fin Segun
            
        Hasta Que estado == 0
        
        
    FinAlgoritmo

```


## 3. Control financiero

#### Descripción y planteamiento

------------------------------------------------------------------------------------------

1. Problematica: 

Es una realidad ampliamente compartida que la gestión eficiente de los gastos no es precisamente una habilidad innata en la mayoría de las personas. Nos vemos enfrentados a menudo a la situación de llegar al último tramo del mes con un presupuesto insuficiente para cubrir nuestras necesidades básicas


2. Objetivo
Nuestro objetivo principal con la solución propuesta es implementar un sistema que ofrezca una visión clara de nuestro presupuesto mensual. Esto garantizará que no haya un excedente que complique la situación financiera mensual de cada individuo


3. Solucion

- nombre del la plataforma: CUNFINAN

## Diagrama de flujo


>[!NOTE]
> Dado el tamaño del diagrama, la visualización puede resultar incómoda. Por lo tanto, se recomienda copiar el pseudocódigo en PSeInt para una mejor apreciación.

![Ver imagen](/tecnico/2024/abril/01-diagramas-complejos/img/calculadoraFinanciera.png)

* pseudocódigo: 

```
    Algoritmo controlFinanciero
        Definir sueldo, sumGastos,difGastos Como Real
        Definir nombre Como Cadena

        Imprimir "Bienvenido a la app para administra tu sueldo"
        Imprimir "............................................."
        Imprimir "¿Cual es tu nombre?"
        leer nombre
        Imprimir "¿Cuanto ganas al mes ", nombre, "?"
        leer sueldo
        Imprimir "............................................."
        Imprimir "Cuales son sus gasto (numero de gastos)"
        leer nOblig
        Dimension obligaciones[nOblig, 3]
        Imprimir "..............................................."
        Para i = 0 Hasta nOblig - 1 Con Paso 1 Hacer
            Imprimir "Gasto numero N°", i + 1, ":"
            Para m = 0 Hasta 2 - 1 Con Paso 1 Hacer
                Segun m Hacer
                    0:
                        Imprimir "¿Cual es el gasto?"
                        leer obligaciones[i,m] 
                    1:
                        Imprimir "¿Cual el monto?"
                        leer obligaciones[i,m] 
                    De Otro Modo:
                        Imprimir " "
                Fin Segun
            Fin Para
        Fin Para
        Imprimir "..............................................."
        sumGastos = 0;
        
        Para i = 0 Hasta nOblig - 1 Con Paso 1 Hacer
            sumGastos = ConvertirANumero(obligaciones[i,1]) + sumGastos
        Fin Para
        difGastos = sueldo - sumGastos
        
        si difGastos < 0 Entonces
            Imprimir "Su sueldo es insuficiente, para cubrir sus gastos"
            Imprimir "El dinero faltante es de: $" (difGastos * (-1))
            
        SiNo
            Imprimir "Su sueldo si es suficiente para cubrir sus gastos"
            Imprimir "Saldo: $", difGastos
        FinSi	
    FinAlgoritmo

```
## 4. Calculador Notas 

#### Descripción y planteamiento

------------------------------------------------------------------------------------------


1. Problematica: 
En el ámbito estudiantil, es común preguntarse si nuestras calificaciones serán suficientes para aprobar el semestre o trimestre escolar. Sin embargo, esta información solo está disponible durante la entrega de preinformes o en el informe final


2. Objetivo
El objetivo de esta plataforma es ayudar a lois estudiante a comprovar si sus notas fuero suficientes para aprobar la etapa educativa en la que se encuentre

3. Solucion

- nombre del la plataforma: notaFacil

## Diagrama de flujo

>[!NOTE]
> Para mejor visualización puede desplegar el diagrama en el programa pseint con el respectivo codigo

![Ver imagen](/tecnico/2024/abril/01-diagramas-complejos/img/calculadorNotas.png)

* pseudocódigo: 

```
    Algoritmo sysNotas
        Definir evaluacion,tarea,quiz,comportamiento,autoEval,notaFinish Como Real
        Definir materia Como Cadena
        
        Imprimir "Informacion de sistema calificativo"
        Imprimir "     Sistema de calificacion       "
        Imprimir "..................................."
        Imprimir "MATERIA"
        Imprimir "Tarea = 20%"
        Imprimir "Evaluacion Escrita = 40%"
        Imprimir "Quiz = 15%"
        Imprimir "Comportamiento = 15%"
        Imprimir "Autoevaluación = 10%"
        Imprimir "..................................."
        Imprimir "Nombre de la materia: "
        Leer materia
        Imprimir "..................................."
        Imprimir "Nota de Evaluacion escrita: "
        Leer evaluacion
        Imprimir "..................................."
        Imprimir "Nota de tarea: "
        Leer tarea
        Imprimir "..................................."
        Imprimir "Nota de Quiz: "
        Leer quiz
        Imprimir "..................................."
        Imprimir "Nota de comportamiento: "
        Leer comportamiento
        Imprimir "..................................."
        Imprimir "Nota de autoEvaluación: "
        Leer autoEval
        
        porEvalua = evaluacion * 0.4
        porTarea = tarea * 0.2
        porQuiz = quiz * 0.15
        porComport = comportamiento * 0.15
        porAuto = autoEval * 0.1

        notaFinish = porEvalua + porTarea + porQuiz + porComport + porAuto 
        Imprimir "...................................."
        Imprimir "Nombre de la materia: ", materia
        Imprimir "Nota final: ", notaFinish 
        
    FinAlgoritmo

```


## 5.  Areas Figuras

#### Descripción y planteamiento

------------------------------------------------------------------------------------------

1. Problematica: 
Saber calcular el área de una figura es bastante sencillo, por lo que ¿por qué complicarse con tantos cálculos? Las áreas especiales o básicas incluyen las del cuadrado, triángulo, rectángulo y cilindro.

2. Objetivo
Con este fin, se ha creado un sistema que calcula las áreas de las figuras especificadas mediante selecciones realizadas por el usuario, garantizando así resultados precisos y confiables.

3. Solucion

- nombre del la plataforma: arFin

## Diagrama de flujo


>[!NOTE]
> Para mejor visualización puede desplegar el diagrama en el programa pseint con el respectivo codigo

![Ver imagen](/tecnico/2024/abril/01-diagramas-complejos/img/calculadorArea.png)

* pseudocódigo: 

```
    Algoritmo areasFiguras
        Definir cuadrado, triangulo, rectangulo, cilindro,lado, base, altura,radio Como Real
        Definir figura Como Entero
        
        Imprimir "            Calculador de areas             "
        Imprimir "............................................"
        Imprimir "Las siguiente figuras se puede calcular: "
        Imprimir "1. Cuadrado"
        Imprimir "2. Triangulo"
        Imprimir "3. Rectangulo"
        Imprimir "4. Cilindro"
        Imprimir "0. Salir" 
        Imprimir "................................................"
        Imprimir "¿Cual es la figura que quieres saber el area? "
        Repetir
            leer figura
            Segun figura Hacer
                1:
                    Imprimir "AREA DE UN CUADRADO: "
                    Imprimir "Digite la medida del lado (m): "
                    leer lado
                    cuadrado = lado * lado
                    Imprimir "La area del cuadrado es de: ", cuadrado, "m^2"
                    estado = 0
                2:
                    Imprimir "AREA DE UN TRIANGULO: "
                    Imprimir "Digite la medida del la base (m): "
                    leer base
                    Imprimir "Digite la medida de la altura (m)"
                    Leer altura
                    triangulo = (base * altura)/2
                    Imprimir "La area del triangulo es de: ", triangulo, "m^2"
                    estado = 0
                3:
                    Imprimir "AREA DE UN RECTANGULO: "
                    Imprimir "Digite la medida del la base (m): "
                    leer base
                    Imprimir "Digite la medida de la altura (m)"
                    Leer altura
                    rectangulo = (base * altura)
                    Imprimir "La area del rectangulo es de: ", rectangulo, "m^2"
                    estado = 0
                4:
                    Imprimir "AREA DE UN CILINDRO: "
                    Imprimir "Digite la medida del la altura (m): "
                    leer altura
                    Imprimir "Digite la medida del radio (m)"
                    Leer radio
                    cilindro = 2 * PI * radio * ( radio  + altura)
                    Imprimir "La area del cilindro es de: ", cilindro, "m^2"
                    estado = 0
                0:
                    estado = 2
                De Otro Modo:
                    Imprimir "Opcion no valida, intente de nuevo"
            Fin Segun
            Si estado == 0 Entonces
                Esperar 3 Segundos
                Limpiar Pantalla
            FinSi
        Hasta Que estado > 1
        
    FinAlgoritmo

```

## 6. Bingo 

#### Descripción y planteamiento

------------------------------------------------------------------------------------------


1. Problematica: 
Para muchos programadores, trabajar con matrices puede resultar complicado debido a la naturaleza abstracta de estas estructuras de datos. Especialmente para aquellos que están comenzando en el mundo de la programación, entender cómo interactuar con matrices puede ser un desafío. Una de las maneras más efectivas de abordar este problema es proporcionar herramientas que faciliten la comprensión y la práctica de los conceptos relacionados con las matrices.

2. Objetivo
El propósito de este ejercicio es utilizar la generación de un tablero de bingo interactivo como una herramienta para que el usuario practique las tablas de multiplicar. Mediante la introducción de un dígito por parte del usuario, este se relacionará con una tabla de multiplicar específica. Luego, estas tablas se utilizarán para crear las filas y columnas del tablero de bingo.

3. Solucion

- nombre del la plataforma: bingoCode

## Diagrama de flujo


>[!NOTE]
> Para mejor visualización puede desplegar el diagrama en el programa pseint con el respectivo codigo

![Ver imagen](/tecnico/2024/abril/01-diagramas-complejos/img/bingo.png)

* pseudocódigo: 

```
    Algoritmo bingoflujo
        Definir tabla, result Como Entero
        contador = 0
        conTa = 0
        Imprimir "Binvenido al generador de bingos con las tablas de multiplicar"
        Imprimir "..............................................................."
        Imprimir "Digite la tabla que con la que desea general el bingo: "
        leer tabla
        
        //generamos las tablas y las guardamos
        Dimension bingo[5,5]
        Dimension tablaMul[25]
        Para i = 0 Hasta 25 - 1 Con Paso 1 Hacer
            result = tabla * (i + 1)
            tablaMul[i] = result
        Fin Para
        
        Para i = 0 Hasta 5 - 1 con paso 1 Hacer
            Para in = 0 Hasta 5 - 1 Con Paso 1 Hacer
                bingo[i,in] = tablaMul[conTa] 
                conTa = conTa + 1
            Fin Para
        Fin Para
        
        Imprimir "B     I     N      G      O"    
        Para i = 0 Hasta 5 - 1 Con Paso 1 Hacer
            Para in = 0 Hasta 0 Con Paso 1 Hacer
                Imprimir  bingo[i,0],"     ", bingo[i,1],"     ",bingo[i,2],"   ", bingo[i,3], "   ",bingo[i,4]
            Fin Para
        Fin Para
    FinAlgoritmo

```


## n. nombre del proyecto

#### Descripción y planteamiento

------------------------------------------------------------------------------------------


1. Problematica: 



2. Objetivo


3. Solucion

- nombre del la plataforma: notaFacil

## Diagrama de flujo


>[!NOTE]
> Para mejor visualización puede desplegar el diagrama en el programa pseint con el respectivo codigo

![Ver imagen](/imaginedeldiagrama)

* pseudocódigo: 

```
    codigo

```

