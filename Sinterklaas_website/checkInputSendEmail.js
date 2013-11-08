function check(form) {
	//Getting all the variables
	var x = 10; 							//var fouten = document.getElementById("fouten");	fouten.innerHTML="";//Used to see if all the conditions are true
	var Firstname = form.firstname.value;	var err1 = document.getElementById("err1");		err1.innerHTML="";
	var Lastname = form.lastname.value;		var err2 = document.getElementById("err2");		err2.innerHTML="";
	var Telnr = form.telnr.value;			var err3 = document.getElementById("err3");		err3.innerHTML="";		var length_tel = Telnr.length;
	var Gsmnr = form.gsmnr.value;			var err4 = document.getElementById("err4");		err4.innerHTML="";		var length_gsm = Gsmnr.length;
	var Email = form.email.value;			var err5 = document.getElementById("err5");		err5.innerHTML="";
	var Adress = form.adress.value;			var err6 = document.getElementById("err6");		err6.innerHTML="";
	var Adress_2 = form.adress_2.value;		var err7 = document.getElementById("err7");		err7.innerHTML="";
	var Nr = form.number.value;				var err8 = document.getElementById("err8");		err8.innerHTML="";
	var City = form.city.value;				var err9 = document.getElementById("err9");		err9.innerHTML="";
	var Zipcode = form.zipcode.value;		var err10 = document.getElementById("err10");	err10.innerHTML="";
//	var Kinderen = form.aantalkinderen.value;var err11 = document.getElementById("err11");	err11.innerHTML="";
	var LT = document.getElementById("leeftijd");
	var Leeftijd = LT.options[LT.selectedIndex].value; var err12 = document.getElementById("err12");	err12.innerHTML="";
	
	//Getting the place where to put the options
	var option_1 = document.getElementById("option_1");		option_1.innerHTML="";
	
	//Testing the variables for errors
	if (! /^[a-zA-Z ]+$/.test(Firstname))	{err1.innerHTML="ERROR: Gelieve enkel tekst in te geven."								; x = x - 1};
	if (! /^[a-zA-Z ]+$/.test(Lastname))	{err2.innerHTML="ERROR: Gelieve dit veld in te vullen."									; x = x - 1};
	if (isNaN(Telnr)) 						{err3.innerHTML="ERROR: Gelieve enkel nummers in te vullen."							; x = x - 1};
	if (length_tel!==9)						{err3.innerHTML="ERROR: Gelieve 9 cijfers in te vullen."								; x = x - 1};
	if (Gsmnr!=="")							{	
		if (isNaN(Gsmnr))						{err4.innerHTML="ERROR: Gelieve enkel nummers in te vullen"							; x = x - 1};
		if (length_gsm!==10)					{err4.innerHTML="ERROR: Gelieve 10 cijfers in te vullen"							; x = x - 1};
											};
	if (Email!=="")							{
		var atpos=Email.indexOf("@");
		var dotpos=Email.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=Email.length){err5.innerHTML="Error: Gelieve en geldig email adress in te vullen"; x = x - 1;}
											};
	if (! /^[a-zA-Z ]+$/.test(Adress))		{err6.innerHTML="ERROR: Gelieve enkel tekst in te geven."								; x = x - 1};
	if (Adress_2!=="")						{
		if (! /^[a-zA-Z]+$/.test(Adress_2))	{err7.innerHTML="ERROR: Gelieve enkel tekst in te geven."								; x = x - 1};
											};
	if (isNaN(Nr))							{err8.innerHTML="ERROR: Gelieve enkel nummers in te vullen"								; x = x - 1};
	if (! /^[a-zA-Z]+$/.test(City))			{err9.innerHTML="ERROR: Gelieve enkel tekst in te geven."								; x = x - 1};
	if (isNaN(Zipcode))						{err10.innerHTML="ERROR: Gelieve enkel nummers in te vullen"							; x = x - 1};
	if (Leeftijd=="blank")					{err12.innerHTML="ERROR: Gelieve de leeftijd van u kind te selecteren"					; x = x - 1};

	//Getting number kids
//	if (isNaN(Kinderen))					{err11.innerHTML="ERROR: Gelieve enkel nummers in te vullen"};
//	if (Kinderen>11)						{err11.innerHTML="ERROR: Gelieve niet meer als 10 kinderen inscrijven"};
//	if (Kinderen<1)							{err11.innerHTML="ERROR: Gelieve minstens 1 kind inschrijven."};
	
//	fouten.innerHTML=10-x; //Used for testing

	//Sending email if there are no ERRORS
	if (x==10) {
	}
}

function showPresents(val){
	//Expendable pick present
	var maand0 = document.getElementById("0-6maand");
	var maand6 = document.getElementById("6-12maand");
	var jaar1 = document.getElementById("1-2jaar");
	var jaar2 = document.getElementById("2-3jaar");
	var jaar3 = document.getElementById("3-6jaar");
	if (val=="0-6maand")	{maand0.style.display = 'block';
								maand6.style.display = 'none';
								jaar1.style.display = 'none';
								jaar2.style.display = 'none';
								jaar3.style.display = 'none';
							};
	if (val=="6-12maand")	{maand0.style.display = 'none';
								maand6.style.display = 'block';
								jaar1.style.display = 'none';
								jaar2.style.display = 'none';
								jaar3.style.display = 'none';
							};
	if (val=="1-2jaar")		{maand0.style.display = 'none';
								maand6.style.display = 'none';
								jaar1.style.display = 'block';
								jaar2.style.display = 'none';
								jaar3.style.display = 'none';
							};
	if (val=="2-3jaar")		{maand0.style.display = 'none';
								maand6.style.display = 'none';
								jaar1.style.display = 'none';
								jaar2.style.display = 'block';
								jaar3.style.display = 'none';
							};
	if (val=="3-6jaar")		{maand0.style.display = 'none';
								maand6.style.display = 'none';
								jaar1.style.display = 'none';
								jaar2.style.display = 'none';
								jaar3.style.display = 'block';
							};
	
}