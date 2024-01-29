// TODO: Use async functions and callbacks.

// Enums.
const ZodiacSigns = Object.freeze({ 
    ARIES: "Aries", 
    TAURO: "Tauro", 
    GEMINIS: "G%C3%A9minis", 
    CANCER: "C%C3%A1ncer", 
    LEO: "Leo", 
    VIRGO: "Virgo", 
    LIBRA: "Libra",
    ESCORPIO: "Escorpio",
    SAGITARIO: "Sagitario",
    CAPRICORNIO: "Capricornio",
    ACUARIO: "Acuario",
    PISCIS: "Piscis"
}); 

const Months = Object.freeze({ 
    JANUARY: 1, 
    FEBRUARY: 2, 
    MARCH: 3, 
    APRIL: 4, 
    MAY: 5, 
    JUNE: 6, 
    JULY: 7,
    AUGUST: 8,
    SEPTEMBER: 9,
    OCTOBER: 10,
    NOVEMBER: 11,
    DECEMBER: 12
}); 

// Returns a result string with the zodiac sign.
function BuildResultStr(sign)
{
	return "Tu signo es: " + decodeURI(sign) + '.';
}

// Global variables.
var canceledOperation = false;
var dayInt = 0;
var monthInt = 0;

// Loop until we get a valid date or the user canceled the operation.
while (true)
{
	// Get birth date.
	let birthDateStr = prompt("Por favor ingresa tu fecha de nacimiento:", "dd-mm");
  if (birthDateStr == null)
  {
    // Confirm if the user wants to exit the program and print "Deseas finalizar la operacion?".
    // We use UTF-8 encoding, because otherwise chars with tildes doesn't get saved correctly when uploaded to GES.
  	if (!confirm(decodeURI("%C2%BFDeseas%20finalizar%20la%20operaci%C3%B3n?"))) continue;
    
  	canceledOperation = true;
  	break;
  }
  
  // Check if the string might be an invalid date.
  if (birthDateStr.length != 5 || birthDateStr[2] != '-') 
  {
  	// Print "La fecha ingresada no es valida. El formato tiene que ser dd-mm.".
    // We use UTF-8 encoding, because otherwise chars with tildes doesn't get saved correctly when uploaded to GES.
   	alert(decodeURI("La%20fecha%20ingresada%20no%20es%20v%C3%A1lida.%20El%20formato%20tiene%20que%20ser%20dd-mm."));
    continue;
  }
  
  // Get the substrings and convert them to integers.
  let dayStr = birthDateStr.substring(0, 2);
	let monthStr = birthDateStr.substring(3, 5);
  dayInt = parseInt(dayStr, 10);
  monthInt = parseInt(monthStr, 10);
  
  // Check if the input are valid numbers.
  if (Number.isNaN(dayInt) || Number.isNaN(monthInt))
  {
  	// Print "La fecha tiene que estar expresada en numeros. Ej: 05-03"
    // We use UTF-8 encoding, because otherwise chars with tildes doesn't get saved correctly when uploaded to GES.
  	alert(decodeURI("La%20fecha%20tiene%20que%20estar%20expresada%20en%20n%C3%BAmeros.%20Ej:%2005-03"));
    continue;
  }
  
  // Check if the range is valid.
  if (dayInt < 1 || dayInt > 31 || monthInt < 1 || monthInt > 12)
  {
    // Print "Numero de dia y/o mes invalido."
    // We use UTF-8 encoding, because otherwise chars with tildes doesn't get saved correctly when uploaded to GES.
  	alert(decodeURI("N%C3%BAmero%20de%20d%C3%ADa%20y/o%20mes%20inv%C3%A1lido."));
    continue;
  }
  
  // We got a valid date. Break the loop.
  break;
}

// If the operation was not canceled print the result.
if (!canceledOperation)
{
	// Aries
	if (dayInt >= 21 && monthInt == Months.MARCH || dayInt <= 20 && monthInt == Months.APRIL)
  {
  	alert(BuildResultStr(ZodiacSigns.ARIES));
  }
  // Tauro
	else if (dayInt >= 21 && monthInt == Months.APRIL || dayInt <= 20 && monthInt == Months.MAY)
  {
  	alert(BuildResultStr(ZodiacSigns.TAURO));
  }
  // Geminis.
	else if (dayInt >= 21 && monthInt == Months.MAY || dayInt <= 20 && monthInt == Months.JUNE)
  {
  	alert(BuildResultStr(ZodiacSigns.GEMINIS));
  }
  // Cancer.
	else if (dayInt >= 21 && monthInt == Months.JUNE || dayInt <= 22 && monthInt == Months.JULY)
  {
  	alert(BuildResultStr(ZodiacSigns.CANCER));
  }
  // Leo.
	else if (dayInt >= 23 && monthInt == Months.JULY || dayInt <= 23 && monthInt == Months.AUGUST)
  {
  	alert(BuildResultStr(ZodiacSigns.LEO));
  }
  // Virgo.
	else if (dayInt >= 24 && monthInt == Months.AUGUST || dayInt <= 22 && monthInt == Months.SEPTEMBER)
  {
  	alert(BuildResultStr(ZodiacSigns.VIRGO));
  }
  // Libra.
	else if (dayInt >= 23 && monthInt == Months.SEPTEMBER || dayInt <= 23 && monthInt == Months.OCTOBER)
  {
  	alert(BuildResultStr(ZodiacSigns.LIBRA));
  }
  // Escorpio.
	else if (dayInt >= 24 && monthInt == Months.OCTOBER || dayInt <= 22 && monthInt == Months.NOVEMBER)
  {
  	alert(BuildResultStr(ZodiacSigns.ESCORPIO));
  }
  // Sagitario.
	else if (dayInt >= 23 && monthInt == Months.NOVEMBER || dayInt <= 21 && monthInt == Months.DECEMBER)
  {
  	alert(BuildResultStr(ZodiacSigns.SAGITARIO));
  }
  // Capricornio.
	else if (dayInt >= 22 && monthInt == Months.DECEMBER || dayInt <= 20 && monthInt == Months.JANUARY)
  {
  	alert(BuildResultStr(ZodiacSigns.CAPRICORNIO));
  }
  // Acuario.
	else if (dayInt >= 21 && monthInt == Months.JANUARY || dayInt <= 19 && monthInt == Months.FEBRUARY)
  {
  	alert(BuildResultStr(ZodiacSigns.ACUARIO));
  }
  // Piscis.
	else if (dayInt >= 20 && monthInt == Months.FEBRUARY || dayInt <= 20 && monthInt == Months.MARCH)
  {
  	alert(BuildResultStr(ZodiacSigns.PISCIS));
  }
  else alert("You ought to not be here!");
}