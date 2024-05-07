Algoritmo Reservar_Corte_Pelo_Barberia
	
    Definir nombre, barbero Como Cadena
    Definir hora Como Entero
    Definir valido Como Logico
    Definir precioCombo1, precioCombo2, precioCombo3, precioTotal Como Real
    
    precioCombo1 = 15000
    precioCombo2 = 20000
    precioCombo3 = 25000
    
    Escribir "Bienvenido a la Barbería SOLO MACHOS"
    
    valido = Falso
    Mientras no valido Hacer
        Escribir "Por favor, ingrese su nombre:"
        Leer nombre
        Si longitud(nombre) > 0 Entonces
            valido = Verdadero
        Sino
            Escribir "El nombre no puede estar vacío. Inténtelo nuevamente."
        FinSi
    FinMientras
    
    Escribir "Estos son nuestros barberos disponibles y sus precios:"
    Escribir "1. Barbero Arnold(Basico) - $", precioCombo1
    Escribir "2. Barbero Jhoan(Especializado) - $", precioCombo2
    Escribir "3. Barbero Manuel(profecional) - $", precioCombo3
    
    valido = Falso
    Mientras no valido Hacer
        Escribir "Por favor, seleccione el barbero (1, 2 o 3):"
        Leer barbero
        Si barbero = "1" o barbero = "2" o barbero = "3" Entonces
            valido = Verdadero
        Sino
            Escribir "Opción no válida. Seleccione 1, 2 o 3."
        FinSi
    FinMientras
    
    valido = Falso
    Mientras no valido Hacer
        Escribir "Por favor, ingrese la hora de la reserva (en formato militar/ De 8 a 19 horas):"
        Leer hora
        Si hora >= 8 y hora <= 19 Entonces
            valido = Verdadero
        Sino
            Escribir "La barbería está cerrada en ese horario. Por favor, ingrese una hora válida."
        FinSi
    FinMientras
	
    Si barbero = "1" Entonces
        precioTotal = precioCombo1
    Sino Si barbero = "2" Entonces
			precioTotal = precioCombo2
		Sino
			precioTotal = precioCombo3
		FinSi
	FinSi
    
    Escribir "Reserva realizada con éxito."
    Escribir "Cliente:", nombre
    Escribir "Barbero seleccionado:", barbero
    Escribir "Hora de la reserva:", hora, " horas."
	Escribir "Precio a pagar: $", precioTotal 
	Escribir NL
	Escribir "¡Te esperamos!"
	
FinAlgoritmo


