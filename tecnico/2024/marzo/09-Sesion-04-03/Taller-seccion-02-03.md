# Solución Pseudocódigo
**1.** Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.

```
  Inicio
    Definir p1,p2,p3,operacion como Real
    prs1 = 0.0
    prs2 = 0.0
    prs3 = 0.0
    operacion =  0.0
  
    Escribir "Digite la cantidad que invirtió la primera persona " ;
    Leer prs1;
    Escribir "Digite la cantidad que invirtió la segunda persona ";
    Leer prs2;
    Escribir "Digite la cantidad que invirtió la tercera persona ";
    Leer prs3;
  
    operacion = prs1 + prs2 +prs3;
  
    prs1  = (prs1*100)/ope;
    prs2  = (prs2*100)/ope;
    prs3  = (psr3*100)/ope;
  
    Escribir = "EL porcentaje que invirtio la primera persona es ", prs1
    Escribir = "EL porcentaje que invirtio la segunda persona es ", prs2
    Escribir = "EL porcentaje que invirtio la tercera persona es ", prs3
  
  Fin

```


**2.** Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas.
   Estas materias se evalúan como se muestra a continuación:

  * La calificación de Matemáticas se obtiene de la siguiente manera: `Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas.`
  
  * La calificación de Física se obtiene de la siguiente manera: `Examen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas.`
  
  * La calificación de Química se obtiene de la siguiente manera: `Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas.`


```
Inicio

  Definir a,b,c,d,f,g,h,i,j,k,l,m,n,o,p,q Con Real

  a=0.0
  b=0.0
  c=0.0
  d=0.0
  e=0.0
  f=0.0
  g=0.0
  h=0.0
  i=0.0
  j=0.0
  k=0.0
  l=0.0
  m=0.0
  n=0.0
  o=0.0
  p=0.0
  q=0.0

  Escribir "La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas. ";

  Escribir "Ingrese la nota de la evaluacion de Matemáticas ";
  leer a;

  Escribir "Ingrese la nota de su primera tarea ";
  leer b;

  Escribir "Ingrese la nota de su segunda tarea ";
  leer c;

  Escribir "Ingrese la nota de su tercera tarea ";
  leer d;

  e = (b+c+d)/3
  f = (a*0.9)+(e*0.1)
  Escribir "El promedio de Matemáticas es: ", f;

  Escribir "La calificación de Física se obtiene de la siguiente manera: Examen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas."

  Escribir "Ingrese la nota de la evaluacion de Física ";
  leer g;

  Escribir "Ingrese la nota de su primera tarea ";
  leer h;

  Escribir "Ingrese la nota de su segunda tarea ";
  leer i;
  j= (h+i)/2
  k=(g*0,8)+(j*0,2)
  Escribir "El promedio de Física es; ", k;
  
  Escribir "La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas.";

  Escribir "Ingrese la nota de la evaluacion de Química";
  leer = l
  Escribir "Ingrese la nota de su primera tarea ";
  leer m;

  Escribir "Ingrese la nota de su segunda tarea ";
  leer n;

  Escribir "Ingrese la nota de su tercera tarea ";
  leer q;

  o=(m+n+q);
  p= ((l*0.85)+(o * 0.15))/2;

  Escribir "E promedio de Química es: ", p;
  

Fin
```
**3.** Leer un real e imprimir si el número es positivo o negativo.

```
Inicio
  Definir num Como Real;
  num = "";
  Escribir "Digite un número para ser evaluado: ";
  Leer num
  si num > 0 Entonces
    Escribir num," Es positivo";
  Sino
    Escribir num, " Es negativo";

Fin 
```
**4.** Leer un real e imprimir si el número es mayor a 200 o no.
```
Inicio
  Definir num Como Real;
  num = "";

  Escribir "Digite un número";
  Leer num;
  Si num > 200 ENTONCES
    Escribir num, " Es mayor que 200";
  Sino
    Escribir num, " Es menor que 200"
Fin
```
**5.** Leer un real e imprimir si el número está en el rango de 50 y 100

```
Inicio
  Definir num Como Real;
  num = "";

  Escribir "Digite un número";
  Leer num;
  Si num >= 50 AND num <=100 ENTONCES
    Escribir num, " Su número se encuentra en el rango de 50 a 100";
  Sino
    Escribir num, " Su número no se encuentra en el rango de 50 a 100 ";
Fin
```
