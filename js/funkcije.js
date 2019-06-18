

function ucitajRestorane(){
if(localStorage.getItem('restorani') === null){	
	var restorani = {	
				"Zvezdara" :
						new Array(	
						{
						"ime":"Orašac",
						"imeEng":"Orašac",
						"tipHrane":"Domaća",
						"tipHraneEng":"Traditional",
						"lokacija":"Bulevar kralja Aleksandra 122",
						"lokacijaEng":"King Aleksandar Boulevard 122",
						"ocena":5.00,
						"brojGlasova":1,
						"stranica":"orasac.html",
						"stranicaEng":"orasacEng.html",
						"stranicaDostava":"hranaOrasac.html",
						"stranicaDostavaEng":"hranaOrasacEng.html",
						"hrana" : 
							new Array( 
							{
								"naziv" : "Karađorđeva šnicla",
								"nazivEng" : "Karadjordje's Steak",
								"cena" : 770,
								"slika" : "karadjordjeva_snicla.jpg"	
							},
							{
								"naziv" : "Dimljena vešalica",
								"nazivEng" : "Smoked Pork",
								"cena" : 890,
								"slika" : "dimljena_vesalica.jpg"	
							},
							{
								"naziv" : "Leskovački uštipci",
								"nazivEng" : "Ushtipci from Leskovac",
								"cena" : 690,
								"slika" : "leskovacki_ustipci.jpg"	
							}							
							)
						},
						{
						"ime":"Zlatni opanak",
						"imeEng":"Golden opanak",
						"tipHrane":"Domaća",
						"tipHraneEng":"Traditional",
						"lokacija":"Bulevar kralja Aleksandra 119",
						"lokacijaEng":"King Aleksandar Boulevard 119",
						"ocena":4.60,
						"brojGlasova":1,
						"stranica":"opanak.html",
						"stranicaEng":"opanakEng.html",
						"stranicaDostava":"hranaOpanak.html",
						"stranicaDostavaEng":"hranaOpanakEng.html",
						"hrana" : 
							new Array( 
							{
								"naziv" : "Karađorđeva šnicla",
								"nazivEng" : "Karadjordje's Steak",
								"cena" : 680,
								"slika" : "karadjordjeva_snicla.jpg"	
							},
							{
								"naziv" : "Ćevapi",
								"nazivEng" : "Chevaps",
								"cena" : 550,
								"slika" : "cevapi.jpg"	
							},
							{
								"naziv" : "Pljeskavica",
								"nazivEng" : "Beefburger",
								"cena" : 600,
								"slika" : "pljeskavica.jpg"	
							}							
							)
						}						
						
						),
				
				"Novi Beograd" :
						new Array(
						{
						"ime" : "So i Biber",
						"imeEng" : "Salt and Pepper",
						"tipHrane" : "Domaća",
						"tipHraneEng" : "Traditional",
						"lokacija" : "Staro sajmište 19",
						"lokacijaEng" : "Old Fairground 19",
						"ocena" : 4.50,
						"brojGlasova": 1,
						"stranica" : "soibiber.html",
						"stranicaEng" : "soibiberEng.html",
						"stranicaDostava":"hranaSoIBiber.html",
						"stranicaDostavaEng":"hranaSoIBiberEng.html",
						"hrana" : 
							new Array(
							{
								"naziv" : "Omlet sa šunkom",
								"nazivEng" : "Omelette with Ham",
								"cena"  : 210,
								"slika" : "omletsasunkom.jpg"			
							},
							{
								"naziv" : "Teleća čorba",
								"nazivEng":"Veal Soup",
								"cena"  : 170,
								"slika" : "telecacorba.jpg"			
							},
							{
								"naziv" : "Jagnjeća Kapama",
								"nazivEng":"Lamb Caps",
								"cena"  : 380,
								"slika" : "jagnjecakapama.jpg"			
							}
							
							)
						},
						{
						"ime" : "Durmitor",
						"imeEng" : "Durmitor",
						"tipHrane" : "Domaća",
						"tipHraneEng" : "Traditional",
						"lokacija" : "Omladinskih brigada 16",
						"lokacijaEng":"Youth Brigades 16",
						"ocena" : 4.80,
						"brojGlasova": 1,
						"stranicaDostava":"hranaDurmitor.html",
						"stranicaDostavaEng":"hranaDurmitorEng.html",
						"stranica" : "durmitor.html",
						"stranicaEng" : "durmitorEng.html",
						"hrana" : 
							new Array(
							{
								"naziv" : "Ljuta Kobasica",
								"nazivEng":"Hot Sausage",
								"cena"  : 240,
								"slika" : "ljutakobasica.jpg"			
							},
							{
								"naziv" : "Dimljena vešalica",
								"nazivEng":"Smoked Pork",
								"cena"  : 320,
								"slika" : "dimljenavesalica.jpg"			
							},
							{
								"naziv" : "Gurmanska Pljeskavica",
								"nazivEng":"Gourmand's Hamburger",
								"cena"  : 280,
								"slika" : "Pljeskavica.jpg"			
							}
							
							)
						},
						{
						"ime" : "Novak",
						"imeEng":"Novak",
						"tipHrane" : "Internacionalna",
						"tipHraneEng" : "International",
						"lokacija" : "Bulevar Arsenija Čarnojevića 54A",
						"lokacijaEng" : "Arsenije Čarnojević Boulevard 54A",
						"ocena" : 5.00,
						"brojGlasova": 1,
						"stranica" : "novak.html",
						"stranicaEng" : "novakEng.html",
						"stranicaDostava":"hranaNovak.html",
						"stranicaDostavaEng":"hranaNovakEng.html",
						"hrana" : 
							new Array(
							{
								"naziv" : "Teleća čorba",
								"nazivEng" : "Veal Soup",
								"cena"  : 280,
								"slika" : "telecacorbica.jpg"			
							},
							{
								"naziv" : "Bela Vešalica",
								"nazivEng" : "White Pork",
								"cena"  : 680,
								"slika" : "belavesalica.jpg"			
							},
							{
								"naziv" : "Ćevapi",
								"nazivEng" : "Chevaps",
								"cena"  : 780,
								"slika" : "cevapi.jpg"			
							}
							
							)
						}
						),
				"Lion" :
					new Array(
					{
					"ime" : "Zvezdara Teatar",
					"imeEng" : "Zvezdara Theatre",
					"tipHraneEng":"International",
					"tipHrane" : "Internacionalna",
					"lokacija" : "Milana Rakića 38",
					"lokacijaEng":"The Street of Milan Rakić 38",
					"ocena" : 4.57,
					"brojGlasova": 1,
					"stranica" : "zvezdarateatar.html",
					"stranicaEng" : "zvezdarateatarEng.html",
					"stranicaDostava":"hranaTeatar.html",
					"stranicaDostavaEng":"hranaTeatarEng.html",
					"hrana" : 
						new Array(
						{
							"naziv" : "Francuski doručak",
							"nazivEng" :"French breakfast",
							"cena"  : 560,
							"slika" : "francuskidorucak.jpg"			
						},
						{
							"naziv" : "Piletina u Bechamel sosu",
							"nazivEng" :"Chicken in Bechamel sauce",
							"cena"  : 1080,
							"slika" : "piletinaubechamelsosu.jpg"			
						},
						{
							"naziv" : "Proja",
							"nazivEng":"Corn Bread",
							"cena"  : 180,
							"slika" : "proja.jpg"			
						}
						
						)
					},
					{
					"ime" : "Cuoco",
					"imeEng" : "Cuoco",
					"tipHrane" : "Italijanska",
					"tipHraneEng" : "Italian",
					"lokacija" : "Bulevar Kralja Aleksandra 250",
					"lokacijaEng":"King Aleksandar Boulevard 250",					
					"ocena" : 4.67,
					"brojGlasova": 1,
					"stranica" : "cuoco.html",
					"stranicaEng" : "cuocoEng.html",
					"stranicaDostava":"hranaCuoco.html",
					"stranicaDostavaEng":"hranaCuocoEng.html",
					"hrana" : 
						new Array(
						{
							"naziv" : "Pica Kaprićoza",
							"nazivEng": "Pizza Capricciosa",
							"cena"  : 710,
							"slika" : "pizza-capricciosa.jpg"			
						},
						{
							"naziv" : "Pica Napoli",
							"nazivEng": "Pizza Napoli",
							"cena"  : 640,
							"slika" : "pizza-napoli.jpg"			
						},
						{
							"naziv" : "Pica sa mortadelom",
							"nazivEng": "Pizza with Mortadela",
							"cena"  : 770,
							"slika" : "pizza-mortadela.jpg"			
						}
						
						)
					},
					{
					"ime" : "Klopka",
					"imeEng" : "Trap",					
					"tipHrane" : "Domaća",
					"tipHraneEng" : "Traditional",					
					"lokacija" : "Batutova 13",
					"lokacijaEng" : "Batutova 13",					
					"ocena" : 4.20,
					"brojGlasova": 1,
					"stranica" : "klopka.html",
					"stranicaEng" : "klopkaEng.html",
					"stranicaDostava":"hranaKlopka.html",
					"stranicaDostavaEng":"hranaKlopkaEng.html",
					"hrana" : 
						new Array(
						{
							"naziv" : "Ćevapi",
							"nazivEng" : "Chevaps",							
							"cena"  : 560,
							"slika" : "cevapii.jpg"			
						},
						{
							"naziv" : "Robinja",
							"nazivEng" : "Slave",							
							"cena"  : 800,
							"slika" : "robinja.jpg"			
						},
						{
							"naziv" : "Mešano meso",
							"nazivEng":"Mixed meat",
							"cena"  : 1480,
							"slika" : "mesanomeso.jpg"			
						}
						
						)
					},
					
					),

				"Palilula" :
					new Array(
					{
					"ime" : "Zlatar",
					"imeEng":"Goldsmith",
					"tipHrane" : "Domaća",
					"tipHraneEng":"Traditional",
					"lokacija" : "Preradovićeva 9a",
					"lokacijaEng" : "Preradovićeva 9a",
					"ocena" : 4.80,
					"brojGlasova": 1,
					"stranica" : "zlatar.html",
					"stranicaEng" : "zlatarEng.html",
					"stranicaDostava":"hranaZlatar.html",
					"stranicaDostavaEng":"hranaZlatarEng.html",
					"hrana" : 
						new Array(
						{
							"naziv" : "Pohovani kačkavalj",
							"nazivEng":"Fried Cheese",
							"cena"  : 450,
							"slika" : "pohovani.jpg"			
						},
						{
							"naziv" : "Kačamak smočani",
							"nazivEng":"Polenta",
							"cena"  : 1200,
							"slika" : "kacamak.jpg"			
						},
						{
							"naziv" : "Prebranac",
							"nazivEng":"Baked Beans",
							"cena"  : 320,
							"slika" : "prebranac.jpg"			
						}
						
						)
					},
					{
					"ime" : "Lorenzo & Kakalamba",
					"imeEng" : "Lorenzo & Kakalamba",
					"tipHrane" : "Italijanska",
					"tipHraneEng" : "Italian",
					"lokacija" : "Cvijićeva 110",
					"lokacijaEng" : "Cvijićeva 110",
					"ocena" : 4.90,
					"brojGlasova": 1,
					"stranica" : "lorenzo.html",
					"stranicaEng" : "lorenzoEng.html",
					"stranicaDostava":"hranaLorenzo.html",
					"stranicaDostavaEng":"hranaLorenzoEng.html",
					"hrana" : 
						new Array(
						{
							"naziv" : "Pate od guščije džigerice",
							"nazivEng":"Pate made of Goose liver",
							"cena"  : 1400,
							"slika" : "pate.jpg"			
						},
						{
							"naziv" : "Peglana Kobasica",
							"nazivEng" : "Roasted Sausage",
							"cena"  : 1300,
							"slika" : "peglanakobasica.jpg"			
						},
						{
							"naziv" : "Šušpe",
							"nazivEng":"Stuffed Peppers",
							"cena"  : 900,
							"slika" : "suspe.jpg"			
						}
						
						)
					},
					{
					"ime" : "Mala Kolubara",
					"imeEng":"Little Kolubara",
					"tipHrane" : "Domaća",
					"tipHraneEng":"Traditional",
					"lokacija" : "Savski nasip 9a",
					"lokacijaEng" : "Mound of Sava 9a",					
					"ocena" : 4.70,
					"brojGlasova": 1,
					"stranica" : "malakolubara.html",
					"stranicaEng" : "malakolubaraEng.html",
					"stranicaDostava":"hranaMalaKolubara.html",
					"stranicaDostavaEng":"hranaMalaKolubaraEng.html",
					"hrana" : 
						new Array(
						{
							"naziv" : "Praseće pečenje",
							"nazivEng":"Roasted pork",
							"cena"  : 1500,
							"slika" : "pecenje.jpg"			
						},
						{
							"naziv" : "Punjene Lignje",
							"nazivEng":"Stuffed Squids",
							"cena"  : 1700,
							"slika" : "lignje.jpg"			
						},
						{
							"naziv" : "Teletina ispod sača",
							"nazivEng":"Beal under the Sac",
							"cena"  : 1650,
							"slika" : "teletetinaispodsaca.jpg"			
						}
						
						)
					},
					
					)		
						
						};
				
	var restoraniJSON = JSON.stringify(restorani);
	localStorage.setItem("restorani",restoraniJSON);

}	
	loadBest();
}

function loadBest(){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	var restoraniBest = new Array();
	restoraniBest = restoraniBest.concat(restorani.Zvezdara);
	restoraniBest = restoraniBest.concat(restorani['Novi Beograd']);
	restoraniBest = restoraniBest.concat(restorani.Lion);
	restoraniBest = restoraniBest.concat(restorani.Palilula);
	restoraniBest.sort(function f(a,b){if(a["ocena"]<b["ocena"]) return 1; else if (a["ocena"]>b["ocena"]) return -1; else return 0;})
	var str="";
	for(var i = 0;i<3;i++){
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restoraniBest[i]["stranica"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Naziv restorana: </b>" + restoraniBest[i].ime +"</div>";
	str+="<div class=\"card-text\"><b>Tip hrane: </b>" + restoraniBest[i].tipHrane +"</div>"; 
	str+="<div class=\"card-text\"><b>Lokacija: </b>" + restoraniBest[i].lokacija +"</div>"; 
	str+="<div class=\"card-text\"><b>Ocena: </b>" + restoraniBest[i].ocena.toFixed(2) +"</div></div></div>";
	}
	document.getElementById("best").innerHTML = str;
}
function restoraniOpstina(opstina) {
var restorani = JSON.parse(localStorage.getItem('restorani'));
var str="";
for (var i = 0; i < restorani[opstina].length;i++){
	
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restorani[opstina][i]["stranica"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Naziv restorana: </b>" + restorani[opstina][i].ime +"</div>";
	str+="<div class=\"card-text\"><b>Tip hrane: </b>" + restorani[opstina][i].tipHrane +"</div>"; 
	str+="<div class=\"card-text\"><b>Lokacija: </b>" + restorani[opstina][i].lokacija +"</div>"; 
	str+="<div class=\"card-text\"><b>Ocena: </b>" + restorani[opstina][i].ocena.toFixed(2) +"</div></div></div>";
}
document.getElementById("restorani").innerHTML = str;
}

function sortirajRestorane(opstina){
	let sortBy=[];
if(document.getElementById('ime').checked){
	sortBy.push({prop:"ime",direction:1});
}
if(document.getElementById('lokacija').checked){
	sortBy.push({prop:"lokacija",direction:1});
}
if(document.getElementById('ocena').checked){
	sortBy.push({prop:"ocena",direction:-1});
}
var restorani = JSON.parse(localStorage.getItem('restorani'));
var str="";
restorani[opstina].sort(function(a,b){
  let i = 0, result = 0;
  while(i < sortBy.length && result === 0) {
    result = sortBy[i].direction*(a[ sortBy[i].prop ].toString() < b[ sortBy[i].prop ].toString() ? -1 : (a[ sortBy[i].prop ].toString() > b[ sortBy[i].prop ].toString() ? 1 : 0));
    i++;
  }
  return result;
});
for (var i = 0; i < restorani[opstina].length;i++){
	
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restorani[opstina][i]["stranica"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Naziv restorana: </b>" + restorani[opstina][i].ime +"</div>";
	str+="<div class=\"card-text\"><b>Tip hrane: </b>" + restorani[opstina][i].tipHrane +"</div>"; 
	str+="<div class=\"card-text\"><b>Lokacija: </b>" + restorani[opstina][i].lokacija +"</div>"; 
	str+="<div class=\"card-text\"><b>Ocena: </b>" + restorani[opstina][i].ocena.toFixed(2) +"</div></div></div>";
}
document.getElementById("restorani").innerHTML = str;
}

function ucitajDostava(){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	var restoraniBest = new Array();
	restoraniBest = restoraniBest.concat(restorani.Zvezdara);
	restoraniBest = restoraniBest.concat(restorani['Novi Beograd']);
	restoraniBest = restoraniBest.concat(restorani.Lion);
	restoraniBest = restoraniBest.concat(restorani.Palilula);
	var str="";
	for(var i = 0;i<restoraniBest.length;i++){
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restoraniBest[i]["stranicaDostava"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Naziv restorana: </b>" + restoraniBest[i].ime +"</div>";
	str+="<div class=\"card-text\"><b>Tip hrane: </b>" + restoraniBest[i].tipHrane +"</div>"; 
	str+="<div class=\"card-text\"><b>Lokacija: </b>" + restoraniBest[i].lokacija +"</div>"; 
	str+="<div class=\"card-text\"><b>Ocena: </b>" + restoraniBest[i].ocena.toFixed(2) +"</div></div></div>";
	}
	document.getElementById("dostava").innerHTML = str;	
}
function filtrirajPoTipuHrane(){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	var restoraniBest = new Array();
	restoraniBest = restoraniBest.concat(restorani.Zvezdara);
	restoraniBest = restoraniBest.concat(restorani['Novi Beograd']);
	restoraniBest = restoraniBest.concat(restorani.Lion);
	restoraniBest = restoraniBest.concat(restorani.Palilula);
	var str="";
	for(var i = 0;i<restoraniBest.length;i++){
	if(!document.getElementById(restoraniBest[i]["tipHrane"]).checked) continue;	
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restoraniBest[i]["stranicaDostava"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Naziv restorana: </b>" + restoraniBest[i].ime +"</div>";
	str+="<div class=\"card-text\"><b>Tip hrane: </b>" + restoraniBest[i].tipHrane +"</div>"; 
	str+="<div class=\"card-text\"><b>Lokacija: </b>" + restoraniBest[i].lokacija +"</div>"; 
	str+="<div class=\"card-text\"><b>Ocena: </b>" + restoraniBest[i].ocena.toFixed(2) +"</div></div></div>";
	}	
	document.getElementById("dostava").innerHTML = str;	
}

function ucitajHranu(opstina,restoran){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	var hrana = restorani[opstina][restoran]["hrana"];
	var str="";
	for(var i = 0;i<hrana.length;i++){
	str+="<div class=\"card mt-3\"><div class=\"row no-gutters\"><div class=\"col-auto\"> <img src=\"images/"+hrana[i].slika + "\"  width=200 height=200></div>";
	str+="<div class=\"col\"><div class=\"card-block px-2\"><p class=\"card-text\"><b>Naziv jela: </b>" +hrana[i].naziv +"</p>";
	str+="<p class=\"card-text\"><b>Cena: </b>" +hrana[i].cena +" dinara</p>";
	str+="<input  type='number' class='form-control' id='"+hrana[i].naziv+"' placeholder='Izaberite količinu hrane...' min=0>"
	str+="</div></div></div></div>"
	}
	str+="<div class='row mt-2'><div class='col text-center'><button type='button' onclick=\"naruciHranu('"+opstina+"','"+restoran+"')\" class='btn btn-outline-primary'>Naručite</button></div></div>"
	document.getElementById("hranaRes").innerHTML = str;	 
}

function naruciHranu(opstina,restoran){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	var hrana = restorani[opstina][restoran]["hrana"];
	var nazivRestorana = restorani[opstina][restoran].ime;
	var nazivRestoranaEng = restorani[opstina][restoran].imeEng;
	var cena = 0;
	for(var i = 0; i<hrana.length;i++){
		cena+=hrana[i].cena*document.getElementById(hrana[i].naziv).value;
	}
	if(cena==0) {alert('Niste naručili ništa!');return;}
	var d = new Date();
	var datum = d.getDate()+"-"+(d.getMonth() + 1)+"-"+d.getFullYear();
	narudzbina={"naziv":nazivRestorana,"nazivEng":nazivRestoranaEng,"cena":cena,"datum":datum};
	
	var narudzbineJSON = JSON.stringify(narudzbina);
	sessionStorage.setItem('narudzbina',narudzbineJSON);
	window.location.href="podaci.html";
}

function proveraPodataka(){
	if(document.formaUnos.ime.value!=""){
					if(document.formaUnos.prezime.value!=""){
						if(document.formaUnos.email.value!=""){
							var regex = /^\w+([\.-]\w+)?@\w+(\.\w{2,3})$/;
							if(regex.test(document.formaUnos.email.value)){
								if(document.formaUnos.telefon.value!=""){
									var regex = /^\d{3}\/\d{3}-\d{2}-\d{2}$/;
									if(regex.test(document.formaUnos.telefon.value)){
										if(document.formaUnos.adresa.value!=""){
										var narudzbine = JSON.parse(sessionStorage.getItem('narudzbine'));
										var narudzbina = JSON.parse(sessionStorage.getItem('narudzbina'));

										if(narudzbine ===null){
											narudzbine = new Array();
										}
										
											narudzbine.push(narudzbina);
										
										var narudzbineJSON = JSON.stringify(narudzbine);
										sessionStorage.setItem('narudzbine',narudzbineJSON);
										sessionStorage.removeItem('narudzbina');
										
											alert("Ukupna cena vaše narudžbine je: "+narudzbina.cena+" dinara.");
											window.location.href="index.html";
										}
										else{
											alert("Morate uneti adresu");
										}
									}
									else{
										alert("Telefon nije u dobrom formatu");
									}
								}
								else{
									alert("Morate uneti telefon");
								}
							}
							else{
								alert("Mejl nije u dobrom formatu");
							}
						}
						else{
							alert("Morate uneti mejl");
						}
					}
					else{
						alert("Morate uneti prezime");
					}
				}
				else{
					alert("Morate uneti ime");
				}
}

function loadNarudzbine(){
	var narudzbine = JSON.parse(sessionStorage.getItem('narudzbine'));
	var str="";
	if(sessionStorage.getItem('narudzbine')!==null){
	for(var i = 0;i<narudzbine.length;i++){
	str+="<div class=\"card mt-3 mb-3\" \"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Naziv restorana: </b>" + narudzbine[i].naziv +"</div>";
	str+="<div class=\"card-text\"><b>Cena: </b>" + narudzbine[i].cena +" dinara</div>";  
	str+="<div class=\"card-text\"><b>Datum: </b>" + narudzbine[i].datum +"</div>";
	str+="<div class=\"card-text mt-1\"><button type='button' onclick=\"savePDF('"+narudzbine[i].naziv+"',"+narudzbine[i].cena+",'"+narudzbine[i].datum+"')\"class='btn btn-primary'>Sačuvaj kao PDF</button></div></div></div>";
	}
	}
	else {str = "<div class=\"mt-3\" style=\"text-align:center;\">Nemate narudžbina za sada!</div>"}
	document.getElementById("narudzbine").innerHTML = str;
}

function savePDF(naziv,cena,datum){
	var doc = new jsPDF();
	doc.text(20,20,"Naziv: "+naziv+"\nCena: "+cena+"\nDatum: "+datum);
	doc.save('naruzdbina.pdf')
}

function pretrazi(){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	let sortBy=[];
	var restoraniBest=new Array();
	if(document.getElementById('Zvezdara').checked)
	restoraniBest = restoraniBest.concat(restorani.Zvezdara);
	if(document.getElementById('Novi Beograd').checked)
	restoraniBest = restoraniBest.concat(restorani['Novi Beograd']);
	if(document.getElementById('Lion').checked)
	restoraniBest = restoraniBest.concat(restorani.Lion);
	if(document.getElementById('Palilula').checked)
	restoraniBest = restoraniBest.concat(restorani.Palilula);	
if(document.getElementById('ime').checked){
	sortBy.push({prop:"ime",direction:1});
}
if(document.getElementById('lokacija').checked){
	sortBy.push({prop:"lokacija",direction:1});
}
if(document.getElementById('ocena').checked){
	sortBy.push({prop:"ocena",direction:-1});
}

var str="";

restoraniBest.sort(function(a,b){
  let i = 0, result = 0;
  while(i < sortBy.length && result === 0) {
    result = sortBy[i].direction*(a[ sortBy[i].prop ].toString() < b[ sortBy[i].prop ].toString() ? -1 : (a[ sortBy[i].prop ].toString() > b[ sortBy[i].prop ].toString() ? 1 : 0));
    i++;
  }
  return result;
});
for (var i = 0; i < restoraniBest.length;i++){
	if(document.getElementById(restoraniBest[i].tipHrane).checked){
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restoraniBest[i]["stranica"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Naziv restorana: </b>" + restoraniBest[i].ime +"</div>";
	str+="<div class=\"card-text\"><b>Tip hrane: </b>" + restoraniBest[i].tipHrane +"</div>"; 
	str+="<div class=\"card-text\"><b>Lokacija: </b>" + restoraniBest[i].lokacija +"</div>"; 
	str+="<div class=\"card-text\"><b>Ocena: </b>" + restoraniBest[i].ocena.toFixed(2) +"</div></div></div>";
	}
}
document.getElementById("dostava").innerHTML = str;
}

//--------------ENG VERZIJE--------
function loadBestEng(){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	var restoraniBest = new Array();
	restoraniBest = restoraniBest.concat(restorani.Zvezdara);
	restoraniBest = restoraniBest.concat(restorani['Novi Beograd']);
	restoraniBest = restoraniBest.concat(restorani.Lion);
	restoraniBest = restoraniBest.concat(restorani.Palilula);
	restoraniBest.sort(function f(a,b){if(a["ocena"]<b["ocena"]) return 1; else if (a["ocena"]>b["ocena"]) return -1; else return 0;})
	var str="";
	for(var i = 0;i<3;i++){
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restoraniBest[i]["stranicaEng"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Name of Restaurant: </b>" + restoraniBest[i].imeEng +"</div>";
	str+="<div class=\"card-text\"><b>Type of Food: </b>" + restoraniBest[i].tipHraneEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Location: </b>" + restoraniBest[i].lokacijaEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Rating: </b>" + restoraniBest[i].ocena.toFixed(2) +"</div></div></div>";
	}
	document.getElementById("best").innerHTML = str;
}
function restoraniOpstinaEng(opstina) {
var restorani = JSON.parse(localStorage.getItem('restorani'));
var str="";
for (var i = 0; i < restorani[opstina].length;i++){
	
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restorani[opstina][i]["stranicaEng"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Name of Restaurant: </b>" + restorani[opstina][i].imeEng +"</div>";
	str+="<div class=\"card-text\"><b>Type of Food: </b>" + restorani[opstina][i].tipHraneEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Location: </b>" + restorani[opstina][i].lokacijaEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Rating: </b>" + restorani[opstina][i].ocena.toFixed(2) +"</div></div></div>";
}
document.getElementById("restorani").innerHTML = str;
}

function sortirajRestoraneEng(opstina){
	let sortBy=[];
if(document.getElementById('ime').checked){
	sortBy.push({prop:"imeEng",direction:1});
}
if(document.getElementById('lokacija').checked){
	sortBy.push({prop:"lokacijaEng",direction:1});
}
if(document.getElementById('ocena').checked){
	sortBy.push({prop:"ocena",direction:-1});
}
var restorani = JSON.parse(localStorage.getItem('restorani'));
var str="";
restorani[opstina].sort(function(a,b){
  let i = 0, result = 0;
  while(i < sortBy.length && result === 0) {
    result = sortBy[i].direction*(a[ sortBy[i].prop ].toString() < b[ sortBy[i].prop ].toString() ? -1 : (a[ sortBy[i].prop ].toString() > b[ sortBy[i].prop ].toString() ? 1 : 0));
    i++;
  }
  return result;
});
for (var i = 0; i < restorani[opstina].length;i++){
	
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href='"+restorani[opstina][i].stranicaEng+"'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Name of Restaurant: </b>" + restorani[opstina][i].imeEng +"</div>";
	str+="<div class=\"card-text\"><b>Type of Food: </b>" + restorani[opstina][i].tipHraneEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Location: </b>" + restorani[opstina][i].lokacijaEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Rating: </b>" + restorani[opstina][i].ocena.toFixed(2) +"</div></div></div>";
}
document.getElementById("restorani").innerHTML = str;
}

function ucitajDostavaEng(){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	var restoraniBest = new Array();
	restoraniBest = restoraniBest.concat(restorani.Zvezdara);
	restoraniBest = restoraniBest.concat(restorani['Novi Beograd']);
	restoraniBest = restoraniBest.concat(restorani.Lion);
	restoraniBest = restoraniBest.concat(restorani.Palilula);
	var str="";
	for(var i = 0;i<restoraniBest.length;i++){
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restoraniBest[i]["stranicaDostavaEng"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Name of Restaurant: </b>" + restoraniBest[i].imeEng +"</div>";
	str+="<div class=\"card-text\"><b>Type of Food: </b>" + restoraniBest[i].tipHraneEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Location: </b>" + restoraniBest[i].lokacijaEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Rating: </b>" + restoraniBest[i].ocena.toFixed(2) +"</div></div></div>";
	}
	document.getElementById("dostava").innerHTML = str;	
}
function filtrirajPoTipuHraneEng(){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	var restoraniBest = new Array();
	restoraniBest = restoraniBest.concat(restorani.Zvezdara);
	restoraniBest = restoraniBest.concat(restorani['Novi Beograd']);
	restoraniBest = restoraniBest.concat(restorani.Lion);
	restoraniBest = restoraniBest.concat(restorani.Palilula);
	var str="";
	for(var i = 0;i<restoraniBest.length;i++){
	if(!document.getElementById(restoraniBest[i]["tipHrane"]).checked) continue;	
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restoraniBest[i]["stranicaDostavaEng"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Name of Restaurant: </b>" + restoraniBest[i].imeEng +"</div>";
	str+="<div class=\"card-text\"><b>Type of Food: </b>" + restoraniBest[i].tipHraneEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Location: </b>" + restoraniBest[i].lokacijaEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Rating: </b>" + restoraniBest[i].ocena.toFixed(2) +"</div></div></div>";
	}	
	document.getElementById("dostava").innerHTML = str;	
}

function ucitajHranuEng(opstina,restoran){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	var hrana = restorani[opstina][restoran]["hrana"];
	var str="";
	for(var i = 0;i<hrana.length;i++){
	str+="<div class=\"card mt-3\"><div class=\"row no-gutters\"><div class=\"col-auto\"> <img src=\"images/"+hrana[i].slika + "\"  width=200 height=200></div>";
	str+="<div class=\"col\"><div class=\"card-block px-2\"><p class=\"card-text\"><b>Name of Food: </b>" +hrana[i].nazivEng +"</p>";
	str+="<p class=\"card-text\"><b>Price: </b>" +hrana[i].cena +" dinars</p>";
	str+="<input  type='number' class='form-control' id='"+hrana[i].naziv+"' placeholder='Choose the ammount of food...' min=0>"
	str+="</div></div></div></div>"
	}
	str+="<div class='row mt-2'><div class='col text-center'><button type='button' onclick=\"naruciHranuEng('"+opstina+"','"+restoran+"')\" class='btn btn-outline-primary'>Order</button></div></div>"
	document.getElementById("hranaRes").innerHTML = str;	 
}

function naruciHranuEng(opstina,restoran){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	var hrana = restorani[opstina][restoran]["hrana"];
	var nazivRestorana = restorani[opstina][restoran].ime;
	var nazivRestoranaEng = restorani[opstina][restoran].imeEng;
	var cena = 0;
	for(var i = 0; i<hrana.length;i++){
		cena+=hrana[i].cena*document.getElementById(hrana[i].naziv).value;
	}
	if(cena==0) {alert('You haven\'t ordered any food!');return;}
	var d = new Date();
	var datum = d.getDate()+"-"+(d.getMonth() + 1)+"-"+d.getFullYear();
	narudzbina={"naziv":nazivRestorana,"nazivEng":nazivRestoranaEng,"cena":cena,"datum":datum};
	
	var narudzbineJSON = JSON.stringify(narudzbina);
	sessionStorage.setItem('narudzbina',narudzbineJSON);

	window.location.href="podaciEng.html";
}

function proveraPodatakaEng(){
	if(document.formaUnos.ime.value!=""){
					if(document.formaUnos.prezime.value!=""){
						if(document.formaUnos.email.value!=""){
							var regex = /^\w+([\.-]\w+)?@\w+(\.\w{2,3})$/;
							if(regex.test(document.formaUnos.email.value)){
								if(document.formaUnos.telefon.value!=""){
									var regex = /^\d{3}\/\d{3}-\d{2}-\d{2}$/;
									if(regex.test(document.formaUnos.telefon.value)){
										if(document.formaUnos.adresa.value!=""){
										var narudzbine = JSON.parse(sessionStorage.getItem('narudzbine'));
										var narudzbina = JSON.parse(sessionStorage.getItem('narudzbina'));

										if(narudzbine ===null){
											narudzbine = new Array();
										}
										
											narudzbine.push(narudzbina);
										
										var narudzbineJSON = JSON.stringify(narudzbine);
										sessionStorage.setItem('narudzbine',narudzbineJSON);
										sessionStorage.removeItem('narudzbina');
											alert("The price of your order is: "+narudzbina.cena+" dinars.");
											window.location.href="indexEng.html";
										}
										else{
											alert("You have to enter your adress.");
										}
									}
									else{
										alert("The phone number is not in the right format.");
									}
								}
								else{
									alert("You have to enter your phone number.");
								}
							}
							else{
								alert("The e-mail is not in the right format.");
							}
						}
						else{
							alert("You have to enter your e-mail.");
						}
					}
					else{
						alert("You have to enter your surname.");
					}
				}
				else{
					alert("You have to enter your name.");
				}
}

function loadNarudzbineEng(){
	var narudzbine = JSON.parse(sessionStorage.getItem('narudzbine'));
	var str="";
	if(sessionStorage.getItem('narudzbine')!==null){
	for(var i = 0;i<narudzbine.length;i++){
	str+="<div class=\"card mt-3 mb-3\" \"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Name of Restaurant: </b>" + narudzbine[i].nazivEng +"</div>";
	str+="<div class=\"card-text\"><b>Price: </b>" + narudzbine[i].cena +" dinara</div>";  
	str+="<div class=\"card-text\"><b>Date: </b>" + narudzbine[i].datum +"</div>";
	str+="<div class=\"card-text mt-1\"><button type='button' onclick=\"savePDFEng('"+narudzbine[i].nazivEng+"',"+narudzbine[i].cena+",'"+narudzbine[i].datum+"')\"class='btn btn-primary'>Save as PDF</button></div></div></div>";
	}
	}
	else {str = "<div class=\"mt-3\" style=\"text-align:center;\">You don't have any orders currently!</div>"}
	document.getElementById("narudzbine").innerHTML = str;
}

function savePDFEng(naziv,cena,datum){
	var doc = new jsPDF();
	doc.text(20,20,"Name: "+naziv+"\nPrice: "+cena+"\nDate: "+datum);
	doc.save('order.pdf')
}
function pretraziEng(){
	var restorani = JSON.parse(localStorage.getItem('restorani'));
	let sortBy=[];
	var restoraniBest=new Array();
	if(document.getElementById('Zvezdara').checked)
	restoraniBest = restoraniBest.concat(restorani.Zvezdara);
	if(document.getElementById('Novi Beograd').checked)
	restoraniBest = restoraniBest.concat(restorani['Novi Beograd']);
	if(document.getElementById('Lion').checked)
	restoraniBest = restoraniBest.concat(restorani.Lion);
	if(document.getElementById('Palilula').checked)
	restoraniBest = restoraniBest.concat(restorani.Palilula);	
if(document.getElementById('ime').checked){
	sortBy.push({prop:"ime",direction:1});
}
if(document.getElementById('lokacija').checked){
	sortBy.push({prop:"lokacija",direction:1});
}
if(document.getElementById('ocena').checked){
	sortBy.push({prop:"ocena",direction:-1});
}

var str="";

restoraniBest.sort(function(a,b){
  let i = 0, result = 0;
  while(i < sortBy.length && result === 0) {
    result = sortBy[i].direction*(a[ sortBy[i].prop ].toString() < b[ sortBy[i].prop ].toString() ? -1 : (a[ sortBy[i].prop ].toString() > b[ sortBy[i].prop ].toString() ? 1 : 0));
    i++;
  }
  return result;
});
for (var i = 0; i < restoraniBest.length;i++){
	if(document.getElementById(restoraniBest[i].tipHrane).checked){
	str+="<div class=\"card mt-3 mb-3\" style=\"width:25rem\" onclick=\"window.location.href=\'"+restoraniBest[i]["stranicaEng"]+"\'\"><div class=\"card-body\">";
	str+="<div class=\"card-text\"><b>Naziv restorana: </b>" + restoraniBest[i].imeEng +"</div>";
	str+="<div class=\"card-text\"><b>Tip hrane: </b>" + restoraniBest[i].tipHraneEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Lokacija: </b>" + restoraniBest[i].lokacijaEng +"</div>"; 
	str+="<div class=\"card-text\"><b>Ocena: </b>" + restoraniBest[i].ocena.toFixed(2) +"</div></div></div>";
	}
}
document.getElementById("dostava").innerHTML = str;
}