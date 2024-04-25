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

## 1. Plataforma de registro personal

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

## 1. Memoriza las tablas de multiplicar

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