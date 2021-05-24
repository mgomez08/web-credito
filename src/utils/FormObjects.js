export function getIdDepartment(name, Departments) {
  for (let i = 0; i < Departments.length; i++) {
    if (Departments[i].name === name) {
      return i;
    }
  }
  return "";
}

export function Departments() {
  let Departments = [
    {
      id: 0,
      name: "Amazonas",
    },
    {
      id: 1,
      name: "Antioquia",
    },
    {
      id: 2,
      name: "Arauca",
    },
    {
      id: 3,
      name: "Atlantico",
    },
    {
      id: 4,
      name: "Bolivar",
    },
    {
      id: 5,
      name: "Boyacá",
    },
    {
      id: 6,
      name: "Caldas",
    },
    {
      id: 7,
      name: "Caquetá",
    },
    {
      id: 8,
      name: "Casanare",
    },
    {
      id: 9,
      name: "Cauca",
    },
    {
      id: 10,
      name: "Cesar",
    },
    {
      id: 11,
      name: "Chocó",
    },
    {
      id: 12,
      name: "Cordoba",
    },
    {
      id: 13,
      name: "Cundinamarca",
    },
    {
      id: 14,
      name: "Guanía",
    },
    {
      id: 15,
      name: "Guajira",
    },
    {
      id: 16,
      name: "Guaviare",
    },
    {
      id: 17,
      name: "Huila",
    },
    {
      id: 18,
      name: "Magdalena",
    },
    {
      id: 19,
      name: "Meta",
    },
    {
      id: 20,
      name: "N.santander",
    },
    {
      id: 21,
      name: "Nariño",
    },
    {
      id: 22,
      name: "Putumayo",
    },
    {
      id: 23,
      name: "Quindio",
    },
    {
      id: 24,
      name: "Risaralda",
    },
    {
      id: 25,
      name: "San andres",
    },
    {
      id: 26,
      name: "Santander",
    },
    {
      id: 27,
      name: "Sucre",
    },
    {
      id: 28,
      name: "Tolima",
    },
    {
      id: 29,
      name: "Valle del cauca",
    },
    {
      id: 30,
      name: "Vaupes",
    },
    {
      id: 31,
      name: "Vichada",
    },
  ];
  return Departments;
}
export function Citys(id) {
  let CitysById = [];
  if (id === 0) {
    CitysById = [
      {
        id: 0,
        name: "Leticia",
      },
      {
        id: 1,
        name: "El encanto",
      },
      {
        id: 2,
        name: "La chorrera",
      },
      {
        id: 3,
        name: "La pedrera",
      },
      {
        id: 4,
        name: "La victoria",
      },
      {
        id: 5,
        name: "Miriti-parana",
      },
      {
        id: 6,
        name: "Puerto alegría",
      },
      {
        id: 7,
        name: "Puerto arica",
      },
      {
        id: 8,
        name: "Puerto nariño",
      },
      {
        id: 9,
        name: "Santander",
      },
      {
        id: 10,
        name: "Tarapaca",
      },
    ];
  } else if (id === 1) {
    CitysById = [
      {
        id: 0,
        name: "Abejorral",
      },
      {
        id: 1,
        name: "Abriaqui",
      },
      {
        id: 2,
        name: "Alejandria",
      },
      {
        id: 3,
        name: "Amaga",
      },
      {
        id: 4,
        name: "Amalfi",
      },
      {
        id: 5,
        name: "Andes",
      },
      {
        id: 6,
        name: "Angelopolis",
      },
      {
        id: 7,
        name: "Angostura",
      },
      {
        id: 8,
        name: "Anori",
      },
      {
        id: 9,
        name: "Anza",
      },
      {
        id: 10,
        name: "Apartado",
      },
      {
        id: 11,
        name: "Arboletes",
      },
      {
        id: 12,
        name: "Argelia",
      },
      {
        id: 13,
        name: "Armenia",
      },
      {
        id: 14,
        name: "Barbosa",
      },
      {
        id: 15,
        name: "Bello",
      },
      {
        id: 16,
        name: "Belmira",
      },
      {
        id: 17,
        name: "Betania",
      },
      {
        id: 18,
        name: "Betulia",
      },
      {
        id: 19,
        name: "Briceno",
      },
      {
        id: 20,
        name: "Buritica",
      },
      {
        id: 21,
        name: "Caceres",
      },
      {
        id: 22,
        name: "Caicedo",
      },
      {
        id: 23,
        name: "Caldas",
      },
      {
        id: 24,
        name: "Campamento",
      },
      {
        id: 25,
        name: "Canasgordas",
      },
      {
        id: 26,
        name: "Caracoli",
      },
      {
        id: 27,
        name: "Caramanta",
      },
      {
        id: 28,
        name: "Carepa",
      },
      {
        id: 29,
        name: "Carmen de viboral",
      },
      {
        id: 30,
        name: "Carolina",
      },
      {
        id: 31,
        name: "Caucasia",
      },
      {
        id: 32,
        name: "Chigorodo",
      },
      {
        id: 33,
        name: "Cisneros",
      },
      {
        id: 34,
        name: "Ciudad bolivar",
      },
      {
        id: 35,
        name: "Cocorna",
      },
      {
        id: 36,
        name: "Concepción",
      },
      {
        id: 37,
        name: "Concordia",
      },
      {
        id: 38,
        name: "Copacabana",
      },
      {
        id: 39,
        name: "Dabeiba",
      },
      {
        id: 40,
        name: "Don matias",
      },
      {
        id: 41,
        name: "Ebejico",
      },
      {
        id: 42,
        name: "El bagre",
      },
      {
        id: 43,
        name: "Entrerios",
      },
      {
        id: 44,
        name: "Envigado",
      },
      {
        id: 45,
        name: "Fredonia",
      },
      {
        id: 46,
        name: "Frontino",
      },
      {
        id: 47,
        name: "Giraldo",
      },
      {
        id: 48,
        name: "Girardota",
      },
      {
        id: 49,
        name: "Gomez plata",
      },
      {
        id: 50,
        name: "Granada",
      },
      {
        id: 51,
        name: "Guadalupe",
      },
      {
        id: 52,
        name: "Guarne",
      },
      {
        id: 53,
        name: "Guatape",
      },
      {
        id: 54,
        name: "Heliconia",
      },
      {
        id: 55,
        name: "Hispania",
      },
      {
        id: 56,
        name: "Itagui",
      },
      {
        id: 57,
        name: "Ituango",
      },
      {
        id: 58,
        name: "Jardin",
      },
      {
        id: 59,
        name: "Jerico",
      },
      {
        id: 60,
        name: "La ceja",
      },
      {
        id: 61,
        name: "La estrella",
      },
      {
        id: 62,
        name: "La pintada",
      },
      {
        id: 63,
        name: "La unión",
      },
      {
        id: 64,
        name: "Liborina",
      },
      {
        id: 65,
        name: "Maceo",
      },
      {
        id: 66,
        name: "Marinilla",
      },
      {
        id: 67,
        name: "Medellín",
      },
      {
        id: 68,
        name: "Montebello",
      },
      {
        id: 69,
        name: "Murindo",
      },
      {
        id: 71,
        name: "Mutata",
      },
      {
        id: 72,
        name: "Nariño",
      },
      {
        id: 73,
        name: "Nechi",
      },
      {
        id: 74,
        name: "Necocli",
      },
      {
        id: 75,
        name: "Olaya",
      },
      {
        id: 76,
        name: "Penol",
      },
      {
        id: 77,
        name: "Peque",
      },
      {
        id: 78,
        name: "Pueblorrico",
      },
      {
        id: 79,
        name: "Puerto berrio",
      },
      {
        id: 80,
        name: "Puerto nare",
      },
      {
        id: 81,
        name: "Puerto triunfo",
      },
      {
        id: 82,
        name: "Remedios",
      },
      {
        id: 83,
        name: "Retiro",
      },
      {
        id: 84,
        name: "Rionegro",
      },
      {
        id: 85,
        name: "Sabanalarga",
      },
      {
        id: 86,
        name: "Sabaneta",
      },
      {
        id: 87,
        name: "Salgar",
      },
      {
        id: 88,
        name: "San andres",
      },
      {
        id: 89,
        name: "San carlos",
      },
      {
        id: 90,
        name: "San francisco",
      },
      {
        id: 91,
        name: "San jeronimo",
      },
      {
        id: 92,
        name: "San jose de la montaña",
      },
      {
        id: 93,
        name: "San juan de urabá",
      },
      {
        id: 94,
        name: "San luis",
      },
      {
        id: 95,
        name: "San pedro",
      },
      {
        id: 96,
        name: "San pedro de urabá",
      },
      {
        id: 97,
        name: "San rafael",
      },
      {
        id: 98,
        name: "San roque",
      },
      {
        id: 99,
        name: "San vicente",
      },
      {
        id: 100,
        name: "Santa barbara",
      },
      {
        id: 101,
        name: "Santa fe de antioquia",
      },
      {
        id: 102,
        name: "Santa rosas de osos",
      },
      {
        id: 103,
        name: "Santo domingo",
      },
      {
        id: 104,
        name: "Santuario",
      },
      {
        id: 105,
        name: "Segovia",
      },
      {
        id: 106,
        name: "Sonson",
      },
      {
        id: 107,
        name: "Sopetran",
      },
      {
        id: 108,
        name: "Tamesis",
      },
      {
        id: 109,
        name: "Taraza",
      },
      {
        id: 110,
        name: "Tarso",
      },
      {
        id: 111,
        name: "Titiribi",
      },
      {
        id: 112,
        name: "Toledo",
      },
      {
        id: 113,
        name: "Turbo",
      },
      {
        id: 114,
        name: "Uramita",
      },
      {
        id: 115,
        name: "Urrao",
      },
      {
        id: 116,
        name: "Valdivia",
      },
      {
        id: 117,
        name: "Valparaiso",
      },
      {
        id: 118,
        name: "Vegachi",
      },
      {
        id: 119,
        name: "Venecia",
      },
      {
        id: 120,
        name: "Vigia del fuerte",
      },
      {
        id: 121,
        name: "Yali",
      },
      {
        id: 122,
        name: "Yarumal",
      },
      {
        id: 123,
        name: "Yolombo",
      },
      {
        id: 124,
        name: "Yondo",
      },
      {
        id: 125,
        name: "Zaragoza",
      },
    ];
  } else if (id === 2) {
    CitysById = [
      {
        id: 0,
        name: "Arauca",
      },
      {
        id: 1,
        name: "Arauquita",
      },
      {
        id: 2,
        name: "Cravo Norte",
      },
      {
        id: 3,
        name: "Fortul",
      },
      {
        id: 4,
        name: "Puerto Rondon",
      },
      {
        id: 5,
        name: "Saravena",
      },
      {
        id: 6,
        name: "Tame",
      },
    ];
  } else if (id === 3) {
    return (CitysById = [
      {
        id: 0,
        name: "Baranoa",
      },
      {
        id: 1,
        name: "Barranquilla",
      },
      {
        id: 2,
        name: "Campo de la cruz",
      },
      {
        id: 3,
        name: "Candelaria",
      },
      {
        id: 4,
        name: "Galapa",
      },
      {
        id: 5,
        name: "Juan de acosta",
      },
      {
        id: 6,
        name: "Luruaco",
      },
      {
        id: 7,
        name: "Malambo",
      },
      {
        id: 8,
        name: "Manati",
      },
      {
        id: 9,
        name: "Palmar de varela",
      },
      {
        id: 10,
        name: "Piojo",
      },
      {
        id: 11,
        name: "Polonuevo",
      },
      {
        id: 12,
        name: "Ponedera",
      },

      {
        id: 13,
        name: "Puerto colombia",
      },
      {
        id: 14,
        name: "Repelon",
      },
      {
        id: 15,
        name: "Sabanagrande",
      },
      {
        id: 16,
        name: "Sabanalarga",
      },
      {
        id: 17,
        name: "Santa lucia",
      },
      {
        id: 18,
        name: "Santo tomas",
      },
      {
        id: 19,
        name: "Soledad",
      },
      {
        id: 20,
        name: "Suan",
      },
      {
        id: 21,
        name: "Tubara",
      },
      {
        id: 22,
        name: "Usiacuri",
      },
    ]);
  } else if (id === 4) {
    return (CitysById = [
      {
        id: 0,
        name: "Achi",
      },
      {
        id: 1,
        name: "Altos del rosario",
      },
      {
        id: 2,
        name: "Arenal",
      },
      {
        id: 3,
        name: "Arjona",
      },
      {
        id: 4,
        name: "Arroyohondo",
      },
      {
        id: 5,
        name: "Barranco de loba",
      },
      {
        id: 6,
        name: "Calamar",
      },
      {
        id: 7,
        name: "Cantagallo",
      },
      {
        id: 8,
        name: "Cartagena de indias",
      },
      {
        id: 9,
        name: "Cicuco",
      },
      {
        id: 10,
        name: "Clemencia",
      },
      {
        id: 11,
        name: "Cordoba",
      },
      {
        id: 12,
        name: "El carmen de bolivar",
      },
      {
        id: 13,
        name: "El guamo",
      },
      {
        id: 14,
        name: "El peñon",
      },
      {
        id: 15,
        name: "Hatillo de loba",
      },
      {
        id: 16,
        name: "Magangue",
      },
      {
        id: 17,
        name: "Mahates",
      },
      {
        id: 18,
        name: "Margarita",
      },
      {
        id: 19,
        name: "Maria la baja",
      },
      {
        id: 20,
        name: "Mompos",
      },
      {
        id: 21,
        name: "Monte cristo",
      },
      {
        id: 22,
        name: "Morales",
      },
      {
        id: 23,
        name: "Pinillos",
      },
      {
        id: 24,
        name: "Regidor",
      },
      {
        id: 25,
        name: "Rioviejo",
      },
      {
        id: 26,
        name: "San cristobal",
      },
      {
        id: 27,
        name: "San estanislao",
      },
      {
        id: 28,
        name: "San fernando",
      },
      {
        id: 29,
        name: "San jacinto",
      },
      {
        id: 30,
        name: "San jacinto del cauca",
      },
      {
        id: 31,
        name: "San juan nepomuceno",
      },
      {
        id: 32,
        name: "San martin de loba",
      },
      {
        id: 33,
        name: "San pablo",
      },
      {
        id: 34,
        name: "Santa catalina",
      },
      {
        id: 35,
        name: "Santa rosa",
      },
      {
        id: 36,
        name: "Santa rosa del sur ",
      },
      {
        id: 37,
        name: "Simiti ",
      },
      {
        id: 38,
        name: "Soplaviento",
      },
      {
        id: 39,
        name: "Talaigua nuevo",
      },
      {
        id: 40,
        name: "Tiquisio",
      },
      {
        id: 41,
        name: "Turbaco",
      },
      {
        id: 42,
        name: "Turbana",
      },
      {
        id: 43,
        name: "Villanueva",
      },
      {
        id: 44,
        name: "Zambrano",
      },
    ]);
  } else if (id === 5) {
    return (CitysById = [
      {
        id: 0,
        name: "Almeida",
      },
      {
        id: 1,
        name: "Aquitania",
      },
      {
        id: 2,
        name: "Arcabuco",
      },
      {
        id: 3,
        name: "Belen",
      },
      {
        id: 4,
        name: "Berbeo",
      },
      {
        id: 5,
        name: "Beteitiva",
      },
      {
        id: 6,
        name: "Boavita",
      },
      {
        id: 7,
        name: "Boyaca",
      },
      {
        id: 8,
        name: "Briceno",
      },
      {
        id: 9,
        name: "Buenavista",
      },
      {
        id: 10,
        name: "Busbanza",
      },
      {
        id: 11,
        name: "Caldas",
      },
      {
        id: 12,
        name: "Campohermoso",
      },
      {
        id: 13,
        name: "Cerinza",
      },
      {
        id: 14,
        name: "Chinavita",
      },
      {
        id: 15,
        name: "Chiquinquirá",
      },
      {
        id: 16,
        name: "Chiquiza",
      },
      {
        id: 17,
        name: "Chiscas",
      },
      {
        id: 18,
        name: "Chita",
      },
      {
        id: 19,
        name: "Chitaraque",
      },
      {
        id: 20,
        name: "Chivata",
      },
      {
        id: 21,
        name: "Chivor",
      },
      {
        id: 22,
        name: "Cienega",
      },
      {
        id: 23,
        name: "Combita",
      },
      {
        id: 24,
        name: "Coper",
      },
      {
        id: 25,
        name: "Corrales",
      },
      {
        id: 26,
        name: "Covarachia",
      },
      {
        id: 27,
        name: "Cubara",
      },
      {
        id: 28,
        name: "Cucaita",
      },
      {
        id: 29,
        name: "Cuitiva",
      },
      {
        id: 30,
        name: "Duitama",
      },
      {
        id: 31,
        name: "El cocuy",
      },
      {
        id: 32,
        name: "El espino",
      },
      {
        id: 33,
        name: "Firavitoba",
      },
      {
        id: 34,
        name: "Floresta",
      },
      {
        id: 35,
        name: "Gachantiva",
      },
      {
        id: 36,
        name: "Gameza",
      },
      {
        id: 37,
        name: "Garagoa",
      },
      {
        id: 38,
        name: "Guacamayas",
      },
      {
        id: 39,
        name: "Guateque",
      },
      {
        id: 40,
        name: "Guayata",
      },
      {
        id: 41,
        name: "Guican",
      },
      {
        id: 42,
        name: "Iza",
      },
      {
        id: 43,
        name: "Jenesano",
      },
      {
        id: 44,
        name: "Jerico",
      },
      {
        id: 45,
        name: "La capilla",
      },
      {
        id: 46,
        name: "La uvita",
      },
      {
        id: 47,
        name: "La victoria",
      },
      {
        id: 48,
        name: "Labranzagrande",
      },
      {
        id: 49,
        name: "Macanal",
      },
      {
        id: 50,
        name: "Maripi",
      },
      {
        id: 51,
        name: "Miraflores",
      },
      {
        id: 52,
        name: "Mongua",
      },
      {
        id: 53,
        name: "Mongui",
      },
      {
        id: 54,
        name: "Moniquira",
      },
      {
        id: 55,
        name: "Motavita",
      },
      {
        id: 56,
        name: "Muzo",
      },
      {
        id: 57,
        name: "Nobsa",
      },
      {
        id: 58,
        name: "Nuevo colon",
      },
      {
        id: 59,
        name: "Oicata",
      },
      {
        id: 60,
        name: "Otanche",
      },
      {
        id: 61,
        name: "Pachavita",
      },
      {
        id: 62,
        name: "Paez",
      },
      {
        id: 63,
        name: "Paipa",
      },
      {
        id: 64,
        name: "Pajarito",
      },
      {
        id: 65,
        name: "Panqueba",
      },
      {
        id: 66,
        name: "Pauna",
      },
      {
        id: 67,
        name: "Paya",
      },
      {
        id: 68,
        name: "Paz de rio",
      },
      {
        id: 69,
        name: "Pesca",
      },
      {
        id: 70,
        name: "Pisva",
      },
      {
        id: 71,
        name: "Puerto boyaca",
      },
      {
        id: 72,
        name: "Quipama",
      },
      {
        id: 73,
        name: "Ramiriqui",
      },
      {
        id: 74,
        name: "Raquira",
      },
      {
        id: 75,
        name: "Rondon",
      },
      {
        id: 76,
        name: "Saboya",
      },
      {
        id: 77,
        name: "Sachica",
      },
      {
        id: 78,
        name: "Samaca",
      },
      {
        id: 79,
        name: "San eduardo",
      },
      {
        id: 80,
        name: "San josede pare",
      },
      {
        id: 81,
        name: "San luis de gaceno",
      },
      {
        id: 82,
        name: "San mateo",
      },
      {
        id: 83,
        name: "San miguel de sema",
      },
      {
        id: 84,
        name: "San pablo de borbur",
      },
      {
        id: 85,
        name: "Santa maria",
      },
      {
        id: 86,
        name: "Santa rosa de viterbo",
      },
      {
        id: 87,
        name: "Santa sofia",
      },
      {
        id: 88,
        name: "Santana",
      },
      {
        id: 89,
        name: "Santivanorte",
      },
      {
        id: 90,
        name: "Santivasur",
      },
      {
        id: 91,
        name: "Siachoque",
      },
      {
        id: 92,
        name: "Soata",
      },
      {
        id: 93,
        name: "Socha",
      },
      {
        id: 94,
        name: "Socota",
      },
      {
        id: 95,
        name: "Sogamoso",
      },
      {
        id: 96,
        name: "Somondoco",
      },
      {
        id: 97,
        name: "Sora",
      },
      {
        id: 98,
        name: "Soraca",
      },
      {
        id: 99,
        name: "Sotaquira",
      },
      {
        id: 100,
        name: "Susacon",
      },
      {
        id: 101,
        name: "Sutamarchan",
      },
      {
        id: 102,
        name: "Sutatenza",
      },
      {
        id: 103,
        name: "Tasco",
      },
      {
        id: 104,
        name: "Tenza",
      },
      {
        id: 105,
        name: "Tibana",
      },
      {
        id: 106,
        name: "Tibasosa",
      },
      {
        id: 107,
        name: "Tinjaca",
      },
      {
        id: 108,
        name: "Tipacoque",
      },
      {
        id: 109,
        name: "Toca",
      },
      {
        id: 110,
        name: "Togui",
      },
      {
        id: 111,
        name: "Topaga",
      },
      {
        id: 112,
        name: "Tota",
      },
      {
        id: 113,
        name: "Tunja",
      },
      {
        id: 114,
        name: "Tunungua",
      },
      {
        id: 115,
        name: "Turmeque",
      },
      {
        id: 116,
        name: "Tuta",
      },
      {
        id: 117,
        name: "Tutaza",
      },
      {
        id: 118,
        name: "Umbita",
      },
      {
        id: 119,
        name: "Ventaquemada",
      },
      {
        id: 120,
        name: "Villa de leiva",
      },
      {
        id: 121,
        name: "Viracacha",
      },
      {
        id: 122,
        name: "Zetaquira",
      },
    ]);
  } else if (id === 6) {
    return (CitysById = [
      {
        id: 0,
        name: "Aguadas",
      },
      {
        id: 1,
        name: "Anserma",
      },
      {
        id: 2,
        name: "Aranzazu",
      },
      {
        id: 3,
        name: "Belalcazar",
      },
      {
        id: 4,
        name: "Chinchina",
      },
      {
        id: 5,
        name: "Filadelfia",
      },
      {
        id: 6,
        name: "La Dorada",
      },
      {
        id: 7,
        name: "La Merced",
      },
      {
        id: 8,
        name: "Manizales",
      },
      {
        id: 9,
        name: "Manzanares",
      },
      {
        id: 10,
        name: "Marmato",
      },
      {
        id: 11,
        name: "Marquetalia",
      },
      {
        id: 12,
        name: "Marulanda",
      },
      {
        id: 13,
        name: "Neira",
      },
      {
        id: 14,
        name: "Norcasia",
      },
      {
        id: 15,
        name: "Pacora",
      },
      {
        id: 16,
        name: "Palestina",
      },
      {
        id: 17,
        name: "Pensilvania",
      },
      {
        id: 18,
        name: "Riosucio",
      },
      {
        id: 19,
        name: "Risaralda",
      },
      {
        id: 20,
        name: "Salamina",
      },
      {
        id: 21,
        name: "Samana",
      },
      {
        id: 22,
        name: "San Jose",
      },
      {
        id: 23,
        name: "Supia",
      },
      {
        id: 24,
        name: "Victoria",
      },
      {
        id: 25,
        name: "Villamaria",
      },
      {
        id: 26,
        name: "Viterbo",
      },
    ]);
  } else if (id === 7) {
    return (CitysById = [
      {
        id: 0,
        name: "Albania",
      },
      {
        id: 1,
        name: "Belen De Los Andariques",
      },
      {
        id: 2,
        name: "Cartagena Del Chaira",
      },
      {
        id: 3,
        name: "Curillo",
      },
      {
        id: 4,
        name: "El Doncello",
      },
      {
        id: 5,
        name: "El Paujil",
      },
      {
        id: 6,
        name: "Florencia",
      },
      {
        id: 7,
        name: "Milan",
      },
      {
        id: 8,
        name: "Montanita",
      },
      {
        id: 9,
        name: "Morelia",
      },
      {
        id: 10,
        name: "Puerto Rico",
      },
      {
        id: 11,
        name: "San Jose Del Fragua",
      },
      {
        id: 12,
        name: "San Vicente Del Caguan",
      },
      {
        id: 13,
        name: "Solano",
      },
      {
        id: 14,
        name: "Solita",
      },
      {
        id: 15,
        name: "Valparaiso",
      },
    ]);
  } else if (id === 8) {
    return (CitysById = [
      {
        id: 0,
        name: "Aguazul",
      },
      {
        id: 1,
        name: "Chameza",
      },
      {
        id: 2,
        name: "Hato Corozal",
      },
      {
        id: 3,
        name: "La Salina",
      },
      {
        id: 4,
        name: "Mani",
      },
      {
        id: 5,
        name: "Monterrey",
      },
      {
        id: 6,
        name: "Nunchia",
      },
      {
        id: 7,
        name: "Orocue",
      },
      {
        id: 8,
        name: "Paz De Ariporo",
      },
      {
        id: 9,
        name: "Pore",
      },
      {
        id: 10,
        name: "Recetor",
      },
      {
        id: 11,
        name: "Sabanalarga",
      },
      {
        id: 12,
        name: "Sacama",
      },
      {
        id: 13,
        name: "San Luis De Palenque",
      },
      {
        id: 14,
        name: "Tamara",
      },
      {
        id: 15,
        name: "Tauramena",
      },
      {
        id: 16,
        name: "Trinidad",
      },
      {
        id: 17,
        name: "Villanueva",
      },
      {
        id: 18,
        name: "Yopal",
      },
      
    ]);
  } else if (id === 9) {
    return (CitysById = [
      {
        id: 0,
        name: "Almaguer",
      },
      {
        id: 1,
        name: "Argelia",
      },
      {
        id: 2,
        name: "Balboa",
      },
      {
        id: 3,
        name: "Bolivar",
      },
      {
        id: 4,
        name: "Buenos Aires",
      },
      {
        id: 5,
        name: "Cajibo",
      },
      {
        id: 6,
        name: "Caldono",
      },
      {
        id: 7,
        name: "Coloto",
      },
      {
        id: 8,
        name: "Corinto",
      },
      {
        id: 9,
        name: "El Tambo",
      },
      {
        id: 10,
        name: "Florencia",
      },
      {
        id: 11,
        name: "Guapi",
      },
      {
        id: 12,
        name: "Inza",
      },
      {
        id: 13,
        name: "Jambalo",
      },
      {
        id: 14,
        name: "La Sierra",
      },
      {
        id: 15,
        name: "La Vega",
      },
      {
        id: 16,
        name: "Lopez",
      },
      {
        id: 17,
        name: "Mercaderes",
      },
      {
        id: 18,
        name: "Miranda",
      },
      {
        id: 19,
        name: "Morales",
      },
      {
        id: 20,
        name: "Padilla",
      },
      {
        id: 21,
        name: "Paez",
      },
      {
        id: 22,
        name: "Patia",
      },
      {
        id: 23,
        name: "Piamonte",
      },
      {
        id: 24,
        name: "Piendamo",
      },
      {
        id: 25,
        name: "Popayan",
      },
      {
        id: 26,
        name: "Puerto Tejada",
      },
      {
        id: 27,
        name: "Purace",
      },
      {
        id: 28,
        name: "Rosas",
      },
      {
        id: 29,
        name: "San Sebastian",
      },
      {
        id: 30,
        name: "Santa Rosa",
      },
      {
        id: 31,
        name: "Santander De Quilichao",
      },
      {
        id: 32,
        name: "Silvia",
      },
      {
        id: 33,
        name: "Sotara",
      },
      {
        id: 34,
        name: "Suarez",
      },
      {
        id: 35,
        name: "Sucre",
      },
      {
        id: 36,
        name: "Timbio",
      },
      {
        id: 37,
        name: "Timbiqui",
      },
      {
        id: 38,
        name: "Toribio",
      },
      {
        id: 39,
        name: "Totoro",
      },
      {
        id: 40,
        name: "Villa Rica",
      },
      
    ]);
  } else if (id === 10) {
    return (CitysById = [
      {
        id: 0,
        name: "Aguachica",
      },
      {
        id: 1,
        name: "Agustin Codazzi",
      },
      {
        id: 2,
        name: "Astrea",
      },
      {
        id: 3,
        name: "Becerril",
      },
      {
        id: 4,
        name: "Bosconia",
      },
      {
        id: 5,
        name: "Chimi Hagua",
      },
      {
        id: 6,
        name: "Chiriguana",
      },
      {
        id: 7,
        name: "Curumani",
      },
      {
        id: 8,
        name: "El Copey",
      },
      {
        id: 9,
        name: "El Paso",
      },
      {
        id: 10,
        name: "Gamarra",
      },
      {
        id: 11,
        name: "Gonzalez",
      },
      {
        id: 12,
        name: "La Gloria",
      },
      {
        id: 13,
        name: "La Jagua De Ibirico",
      },
      {
        id: 14,
        name: "La Paz",
      },
      {
        id: 15,
        name: "Manaure Balcon Del Cesar",
      },
      {
        id: 16,
        name: "Pailitas",
      },
      {
        id: 17,
        name: "Pelaya",
      },
      {
        id: 18,
        name: "Pueblo Bello",
      },
      {
        id: 19,
        name: "Rio De Oro",
      },
      {
        id: 20,
        name: "San Alberto",
      },
      {
        id: 21,
        name: "San Diego",
      },
      {
        id: 22,
        name: "San Martin",
      },
      {
        id: 23,
        name: "Tamalameque",
      },
      {
        id: 24,
        name: "Valledupar",
      },
      
    ]);
  } else if (id === 11) {
    return (CitysById = [
      {
        id: 0,
        name: "Acandi",
      },
      {
        id: 1,
        name: "Alto Baudo",
      },
      {
        id: 2,
        name: "Atrato",
      },
      {
        id: 3,
        name: "Bagado",
      },
      {
        id: 4,
        name: "Bahia Solano",
      },
      {
        id: 5,
        name: "Bajo Baudo",
      },
      {
        id: 6,
        name: "Bojaya",
      },
      {
        id: 7,
        name: "Carmen Del Darien",
      },
      {
        id: 8,
        name: "Certegui",
      },
      {
        id: 9,
        name: "Condoto",
      },
      {
        id: 10,
        name: "El Canton Del San Pablo",
      },
      {
        id: 11,
        name: "El Carmen",
      },
      {
        id: 12,
        name: "El Litorial Del San Juan",
      },
      {
        id: 13,
        name: "Itsmina",
      },
      {
        id: 14,
        name: "Jurado",
      },
      {
        id: 15,
        name: "Lloro",
      },
      {
        id: 16,
        name: "Medio Atrato",
      },
      {
        id: 17,
        name: "Medio Baudo",
      },
      {
        id: 18,
        name: "Medio San Juan",
      },
      {
        id: 19,
        name: "Novita",
      },
      {
        id: 20,
        name: "Nuqui",
      },
      {
        id: 21,
        name: "Quibdo",
      },
      {
        id: 22,
        name: "Rio Iro",
      },
      {
        id: 23,
        name: "Rio Quito",
      },
      {
        id: 24,
        name: "Riosucio",
      },
      {
        id: 25,
        name: "San Jose Del Palmar",
      },
      {
        id: 26,
        name: "Sipi",
      },
      {
        id: 27,
        name: "Tado",
      },
      {
        id: 28,
        name: "Unguia",
      },
      {
        id: 29,
        name: "Union Panamericana",
      },
      
    ]);
  } else if (id === 12) {
    return (CitysById = [
      {
        id: 0,
        name: "Ayapel",
      },
      {
        id: 1,
        name: "Buenavista",
      },
      {
        id: 2,
        name: "Canalete",
      },
      {
        id: 3,
        name: "Cerete",
      },
      {
        id: 4,
        name: "Chima",
      },
      {
        id: 5,
        name: "Chinu",
      },
      {
        id: 6,
        name: "Cienaga De Oro",
      },
      {
        id: 7,
        name: "Cotorra",
      },
      {
        id: 8,
        name: "La Apartada",
      },
      {
        id: 9,
        name: "Lorica",
      },
      {
        id: 10,
        name: "Los Cordobas",
      },
      {
        id: 11,
        name: "Momil",
      },
      {
        id: 12,
        name: "Monitos",
      },
      {
        id: 13,
        name: "Montelibano",
      },
      {
        id: 14,
        name: "Monteria",
      },
      {
        id: 15,
        name: "Planeta Rica",
      },
      {
        id: 16,
        name: "Pueblo Nuevo",
      },
      {
        id: 17,
        name: "Puerto Escondido",
      },
      {
        id: 18,
        name: "Puerto Escondido",
      },
      {
        id: 19,
        name: "Purisima",
      },
      {
        id: 20,
        name: "Sahagun",
      },
      {
        id: 21,
        name: "San Andres De Sotavento",
      },
      {
        id: 22,
        name: "San Antero",
      },
      {
        id: 23,
        name: "San Bernardo Del Viento",
      },
      {
        id: 24,
        name: "San Carlos",
      },
      {
        id: 25,
        name: "San Pelayo",
      },
      {
        id: 26,
        name: "Tierralta",
      },
      {
        id: 27,
        name: "Valencia",
      },
      
    ]);
  } else if (id === 13) {
    return (CitysById = [
      {
        id: 0,
        name: "Agua De Dios",
      },
      {
        id: 1,
        name: "Alban",
      },
      {
        id: 2,
        name: "Anapoima",
      },
      {
        id: 3,
        name: "Anolaima",
      },
      {
        id: 4,
        name: "Apulo",
      },
      {
        id: 5,
        name: "Arbelaez",
      },
      {
        id: 6,
        name: "Beltran",
      },
      {
        id: 7,
        name: "Bituima",
      },
      {
        id: 8,
        name: "Bogotá D.C",
      },
      {
        id: 9,
        name: "Bojaca",
      },
      {
        id: 10,
        name: "Cabrera",
      },
      {
        id: 11,
        name: "Cachipay",
      },
      {
        id: 12,
        name: "Cajica",
      },
      {
        id: 13,
        name: "Caparrapi",
      },
      {
        id: 14,
        name: "Caqueza",
      },
      {
        id: 15,
        name: "Carmen De Carupa",
      },
      {
        id: 16,
        name: "Chaguani",
      },
      {
        id: 17,
        name: "Chia",
      },
      {
        id: 18,
        name: "Chipaque",
      },
      {
        id: 19,
        name: "Coachi",
      },
      {
        id: 20,
        name: "Choconta",
      },
      {
        id: 21,
        name: "Cogua",
      },
      {
        id: 22,
        name: "Cota",
      },
      {
        id: 23,
        name: "Cucunuba",
      },
      {
        id: 24,
        name: "El Colegio",
      },
      {
        id: 25,
        name: "El Penon",
      },
      {
        id: 26,
        name: "El Rosal",
      },
      {
        id: 27,
        name: "Facatativa",
      },
      {
        id: 28,
        name: "Fomeque",
      },
      {
        id: 29,
        name: "Fosca",
      },
      {
        id: 30,
        name: "Funza",
      },
      {
        id: 31,
        name: "Fuquene",
      },
      {
        id: 32,
        name: "Fusagasuga",
      },
      {
        id: 33,
        name: "Gachala",
      },
      {
        id: 34,
        name: "Gachancipa",
      },
      {
        id: 35,
        name: "Gacheta",
      },
      {
        id: 36,
        name: "Gama",
      },
      {
        id: 37,
        name: "Girardot",
      },
      {
        id: 38,
        name: "Granada",
      },
      {
        id: 39,
        name: "Guacheta",
      },
      {
        id: 40,
        name: "Guaduas",
      },
      {
        id: 41,
        name: "Guasca",
      },
      {
        id: 42,
        name: "Guataqui",
      },
      {
        id: 43,
        name: "Guatavita",
      },
      {
        id: 44,
        name: "Guayabal De Siquima",
      },
      {
        id: 45,
        name: "Guayabetal",
      },
      {
        id: 46,
        name: "Gutierrez",
      },
      {
        id: 47,
        name: "Jerusalen",
      },
      {
        id: 48,
        name: "Junin",
      },
      {
        id: 49,
        name: "La Calera",
      },
      {
        id: 50,
        name: "La Mesa",
      },
      {
        id: 51,
        name: "La Palma",
      },
      {
        id: 52,
        name: "La Pena",
      },
      {
        id: 53,
        name: "La Vega",
      },
      {
        id: 54,
        name: "Lenguazaque",
      },
      {
        id: 55,
        name: "Macheta",
      },
      {
        id: 56,
        name: "Madrid",
      },
      {
        id: 57,
        name: "Manta",
      },
      {
        id: 58,
        name: "Medina",
      },
      {
        id: 59,
        name: "Mosquera",
      },
      {
        id: 60,
        name: "Nariño",
      },
      {
        id: 61,
        name: "Nemocon",
      },
      {
        id: 62,
        name: "Nilo",
      },
      {
        id: 63,
        name: "Nimaima",
      },
      {
        id: 64,
        name: "Nocaima",
      },
      {
        id: 65,
        name: "Pacho",
      },
      {
        id: 66,
        name: "Paime",
      },
      {
        id: 67,
        name: "Pandi",
      },
      {
        id: 68,
        name: "Paratebueno",
      },
      {
        id: 69,
        name: "Pasca",
      },
      {
        id: 70,
        name: "Puerto Salgar",
      },
      {
        id: 71,
        name: "Puli",
      },
      {
        id: 72,
        name: "Quebradanegra",
      },
      {
        id: 73,
        name: "Quetame",
      },
      {
        id: 74,
        name: "Quipile",
      },
      {
        id: 75,
        name: "Ricaurte",
      },
      {
        id: 76,
        name: "San Antonio De Tequendama",
      },
      {
        id: 77,
        name: "San Bernardo",
      },
      {
        id: 78,
        name: "San Cayetano",
      },
      {
        id: 79,
        name: "San Fransisco",
      },
      {
        id: 80,
        name: "San Juan De Rioseco",
      },
      {
        id: 81,
        name: "Sasaima",
      },
      {
        id: 82,
        name: "Sesquile",
      },
      {
        id: 83,
        name: "Sibate",
      },
      {
        id: 84,
        name: "Silvania",
      },
      {
        id: 85,
        name: "Simijaca",
      },
      {
        id: 86,
        name: "Soacha",
      },
      {
        id: 87,
        name: "Sopo",
      },
      {
        id: 88,
        name: "Subachoque",
      },
      {
        id: 89,
        name: "Suesca",
      },
      {
        id: 90,
        name: "Supata",
      },
      {
        id: 91,
        name: "Susa",
      },
      {
        id: 92,
        name: "Sutatausa",
      },
      {
        id: 93,
        name: "Tabio",
      },
      {
        id: 94,
        name: "Tausa",
      },
      {
        id: 95,
        name: "Tena",
      },
      {
        id: 96,
        name: "Tenjo",
      },
      {
        id: 97,
        name: "Tibacuy",
      },
      {
        id: 98,
        name: "Tibirita",
      },
      {
        id: 99,
        name: "Tocaima",
      },
      {
        id: 100,
        name: "Tocancipa",
      },
      {
        id: 101,
        name: "Topaipi",
      },
      {
        id: 102,
        name: "Ubala",
      },
      {
        id: 103,
        name: "Ubaque",
      },
      {
        id: 104,
        name: "Ubate",
      },
      {
        id: 105,
        name: "Une",
      },
      {
        id: 106,
        name: "Utica",
      },
      {
        id: 107,
        name: "Venecia",
      },
      {
        id: 108,
        name: "Vergara",
      },
      {
        id: 109,
        name: "Viani",
      },
      {
        id: 110,
        name: "Villagomez",
      },
      {
        id: 111,
        name: "Villapinzon",
      },
      {
        id: 112,
        name: "Villeta",
      },
      {
        id: 113,
        name: "Viota",
      },
      {
        id: 114,
        name: "Yacopi",
      },
      {
        id: 115,
        name: "Zipacon",
      },
      {
        id: 116,
        name: "Zipaquira",
      },
      
    ]);
  } else if (id === 14) {
    return (CitysById = [
      {
        id: 0,
        name: "Barrancomina",
      },
      {
        id: 1,
        name: "Cacahual",
      },
      {
        id: 2,
        name: "Inirida",
      },
      {
        id: 3,
        name: "La Guadaluoe",
      },
      {
        id: 4,
        name: "Mapiripana",
      },
      {
        id: 5,
        name: "Morichal",
      },
      {
        id: 6,
        name: "Pana-Pana",
      },
      {
        id: 7,
        name: "Puerto Colombia",
      },
      {
        id: 8,
        name: "San Felipe",
      },
      
    ]);
  } else if (id === 15) {
    return (CitysById = [
      {
        id: 0,
        name: "Albania",
      },
      {
        id: 1,
        name: "Barrancas",
      },
      {
        id: 2,
        name: "Dibulla",
      },
      {
        id: 3,
        name: "Distraccion",
      },
      {
        id: 4,
        name: "El Molino",
      },
      {
        id: 5,
        name: "Fonseca",
      },
      {
        id: 6,
        name: "Hato Nuevo",
      },
      {
        id: 7,
        name: "La Jagua Del Pilar",
      },
      {
        id: 8,
        name: "Maicao",
      },
      {
        id: 9,
        name: "Manaure",
      },
      {
        id: 10,
        name: "Rioacha",
      },
      {
        id: 11,
        name: "San Juan Del Cesar",
      },
      {
        id: 12,
        name: "Uribia",
      },
      {
        id: 13,
        name: "Urumita",
      },
      {
        id: 14,
        name: "Villanueva",
      },
      
    ]);
  } else if (id === 16) {
    return (CitysById = [
      {
        id: 0,
        name: "Calamar",
      },
      {
        id: 1,
        name: "El Retorno",
      },
      {
        id: 2,
        name: "Miraflores",
      },
      {
        id: 3,
        name: "San Jose Del Guaviare",
      },
      
    ]);
  } else if (id === 17) {
    return (CitysById = [
      {
        id: 0,
        name: "Acevedo",
      },
      {
        id: 1,
        name: "Agrado",
      },
      {
        id: 2,
        name: "Aipe",
      },
      {
        id: 3,
        name: "Algeciras",
      },
      {
        id: 4,
        name: "Altamira",
      },
      {
        id: 5,
        name: "Baraya",
      },
      {
        id: 6,
        name: "Campoalegre",
      },
      {
        id: 7,
        name: "Colombia",
      },
      {
        id: 8,
        name: "Elias",
      },
      {
        id: 9,
        name: "Garzon",
      },
      {
        id: 10,
        name: "Gigante",
      },
      {
        id: 11,
        name: "Guadalupe",
      },
      {
        id: 12,
        name: "Hobo",
      },
      {
        id: 13,
        name: "Iquira",
      },
      {
        id: 14,
        name: "Isnos",
      },
      {
        id: 15,
        name: "La Argentina",
      },
      {
        id: 16,
        name: "La Plata",
      },
      {
        id: 17,
        name: "Nataga",
      },
      {
        id: 18,
        name: "Neiva",
      },
      {
        id: 19,
        name: "Oporapa",
      },
      {
        id: 20,
        name: "Paicol",
      },
      {
        id: 21,
        name: "Palermo",
      },
      {
        id: 22,
        name: "Palestina",
      },
      {
        id: 23,
        name: "Pital",
      },
      {
        id: 24,
        name: "Pitalito",
      },
      {
        id: 25,
        name: "Rivera",
      },
      {
        id: 26,
        name: "Saladoblanco",
      },
      {
        id: 27,
        name: "San Agustin",
      },
      {
        id: 28,
        name: "Santa Maria",
      },
      {
        id: 29,
        name: "Suaza",
      },
      {
        id: 30,
        name: "Tarqui",
      },
      {
        id: 31,
        name: "Tello",
      },
      {
        id: 32,
        name: "Teruel",
      },
      {
        id: 33,
        name: "Tesalia",
      },
      {
        id: 34,
        name: "Timana",
      },
      {
        id: 35,
        name: "Villavieja",
      },
      {
        id: 36,
        name: "Yaguara",
      },
      
    ]);
  } else if (id === 18) {
    return (CitysById = [
      {
        id: 0,
        name: "Algarrobo",
      },
      {
        id: 1,
        name: "Aracataca",
      },
      {
        id: 2,
        name: "Ariguani",
      },
      {
        id: 3,
        name: "Cerro De San Antonio",
      },
      {
        id: 4,
        name: "Chivolo",
      },
      {
        id: 5,
        name: "Cienaga",
      },
      {
        id: 6,
        name: "Concordia",
      },
      {
        id: 7,
        name: "El Banco",
      },
      {
        id: 8,
        name: "El Pinon",
      },
      {
        id: 9,
        name: "El Reten",
      },
      {
        id: 10,
        name: "Fundacion",
      },
      {
        id: 11,
        name: "Guamal"
      },
      {
        id: 12,
        name: "Nueva Granada",
      },
      {
        id: 13,
        name: "Pedraza",
      },
      {
        id: 14,
        name: "Pijino Del Carmen",
      },
      {
        id: 15,
        name: "Pivijay",
      },
      {
        id: 16,
        name: "Plato",
      },
      {
        id: 17,
        name: "Puebloviejo",
      },
      {
        id: 18,
        name: "Remolino",
      },
      {
        id: 19,
        name: "Sabanas De San Angel",
      },
      {
        id: 20,
        name: "Salamina",
      },
      {
        id: 21,
        name: "San Sebastian De Buenavista",
      },
      {
        id: 22,
        name: "San Zenon",
      },
      {
        id: 23,
        name: "Santa Ana",
      },
      {
        id: 24,
        name: "Santa Barbara De Pinto",
      },
      {
        id: 25,
        name: "Santa Marta",
      },
      {
        id: 26,
        name: "Sitionuevo",
      },
      {
        id: 27,
        name: "Tenerife",
      },
      {
        id: 28,
        name: "Zopayan",
      },
      {
        id: 29,
        name: "Zona Bananera",
      },
      
    ]);
  } else if (id === 19) {
    return (CitysById = [
      {
        id: 0,
        name: "Acacias",
      },
      {
        id: 1,
        name: "Barranca De Upia",
      },
      {
        id: 2,
        name: "Cabuyaro",
      },
      {
        id: 3,
        name: "Castilla La Nueva",
      },
      {
        id: 4,
        name: "Cubarral",
      },
      {
        id: 5,
        name: "Cumaral",
      },
      {
        id: 6,
        name: "El Calvario",
      },
      {
        id: 7,
        name: "El Castillo",
      },
      {
        id: 8,
        name: "El Dorado",
      },
      {
        id: 9,
        name: "Fuente De Oro",
      },
      {
        id: 10,
        name: "Granada",
      },
      {
        id: 11,
        name: "Guamal"
      },
      {
        id: 12,
        name: "La Macarena",
      },
      {
        id: 13,
        name: "Lejanias",
      },
      {
        id: 14,
        name: "Mapiripan",
      },
      {
        id: 15,
        name: "Mesetas",
      },
      {
        id: 16,
        name: "Puerto Concordia",
      },
      {
        id: 17,
        name: "Puerto Gaitan",
      },
      {
        id: 18,
        name: "Puerto Lleras",
      },
      {
        id: 19,
        name: "Puerto Lopez",
      },
      {
        id: 20,
        name: "Puerto Rico",
      },
      {
        id: 21,
        name: "Restrepo",
      },
      {
        id: 22,
        name: "San Carlos De Guaroa",
      },
      {
        id: 23,
        name: "San Juan De Arama",
      },
      {
        id: 24,
        name: "San Juanito",
      },
      {
        id: 25,
        name: "San Martin",
      },
      {
        id: 26,
        name: "Uribe",
      },
      {
        id: 27,
        name: "Villavicencio",
      },
      {
        id: 28,
        name: "Vistahermosa",
      },
      
    ]);
  } else if (id === 20) {
    return (CitysById = [
      {
        id: 0,
        name: "Abrego",
      },
      {
        id: 1,
        name: "Arboledas",
      },
      {
        id: 2,
        name: "Bochalema",
      },
      {
        id: 3,
        name: "Bucarasica",
      },
      {
        id: 4,
        name: "Cachira",
      },
      {
        id: 5,
        name: "Cacota",
      },
      {
        id: 6,
        name: "Chinacota",
      },
      {
        id: 7,
        name: "Chitaga",
      },
      {
        id: 8,
        name: "Convencion",
      },
      {
        id: 9,
        name: "Cucuta",
      },
      {
        id: 10,
        name: "Cucutilla",
      },
      {
        id: 11,
        name: "Durania",
      },
      {
        id: 12,
        name: "El Carmen",
      },
      {
        id: 13,
        name: "El Tarra",
      },
      {
        id: 14,
        name: "El Zulia",
      },
      {
        id: 15,
        name: "Gramalote",
      },
      {
        id: 16,
        name: "Hacari",
      },
      {
        id: 17,
        name: "Herran",
      },
      {
        id: 18,
        name: "La Esperanza",
      },
      {
        id: 19,
        name: "La Playa",
      },
      {
        id: 20,
        name: "Labateca",
      },
      {
        id: 21,
        name: "Los Patios",
      },
      {
        id: 22,
        name: "Lourdes",
      },
      {
        id: 23,
        name: "Mutiscua",
      },
      {
        id: 24,
        name: "Ocana",
      },
      {
        id: 25,
        name: "Pamplona",
      },
      {
        id: 26,
        name: "Pamplonita",
      },
      {
        id: 27,
        name: "Puerto Santander",
      },
      {
        id: 28,
        name: "Ragonvalia",
      },
      {
        id: 29,
        name: "Salazar",
      },
      {
        id: 30,
        name: "San Calixto",
      },
      {
        id: 31,
        name: "San Cayetano",
      },
      {
        id: 32,
        name: "Santiago",
      },
      {
        id: 33,
        name: "Sardinata",
      },
      {
        id: 34,
        name: "Silos",
      },
      {
        id: 35,
        name: "Teorema",
      },
      {
        id: 36,
        name: "Tibu",
      },
      {
        id: 37,
        name: "Toledo",
      },
      {
        id: 38,
        name: "Villa Caro",
      },
      {
        id: 39,
        name: "Villa Del Rosario",
      },
      
    ]);
  } else if (id === 21) {
    return (CitysById = [
      {
        id: 0,
        name: "Alban",
      },
      {
        id: 1,
        name: "Aldana",
      },
      {
        id: 2,
        name: "Ancuya",
      },
      {
        id: 3,
        name: "Arboleda",
      },
      {
        id: 4,
        name: "Barbacoas",
      },
      {
        id: 5,
        name: "Belen",
      },
      {
        id: 6,
        name: "Buesaco",
      },
      {
        id: 7,
        name: "Chachagui",
      },
      {
        id: 8,
        name: "Colon Genova",
      },
      {
        id: 9,
        name: "Consaca",
      },
      {
        id: 10,
        name: "Contadero",
      },
      {
        id: 11,
        name: "Cordoba",
      },
      {
        id: 12,
        name: "Cuaspud",
      },
      {
        id: 13,
        name: "Cumbal",
      },
      {
        id: 14,
        name: "Cumbitara",
      },
      {
        id: 15,
        name: "El Charco",
      },
      {
        id: 16,
        name: "El Penol",
      },
      {
        id: 17,
        name: "El Rosario",
      },
      {
        id: 18,
        name: "El Tablon",
      },
      {
        id: 19,
        name: "El Tambo",
      },
      {
        id: 20,
        name: "Fransisco Pizarro",
      },
      {
        id: 21,
        name: "Funes",
      },
      {
        id: 22,
        name: "Guachucal",
      },
      {
        id: 23,
        name: "Guaitarilla",
      },
      {
        id: 24,
        name: "Gualmatan",
      },
      {
        id: 25,
        name: "Iles",
      },
      {
        id: 26,
        name: "Imues",
      },
      {
        id: 27,
        name: "Ipiales",
      },
      {
        id: 28,
        name: "La Cruz",
      },
      {
        id: 29,
        name: "La Florida",
      },
      {
        id: 30,
        name: "La Llanada",
      },
      {
        id: 31,
        name: "La Tola",
      },
      {
        id: 32,
        name: "La Union",
      },
      {
        id: 33,
        name: "Leiva",
      },
      {
        id: 34,
        name: "Linares",
      },
      {
        id: 35,
        name: "Los Andes",
      },
      {
        id: 36,
        name: "Magui Payan",
      },
      {
        id: 37,
        name: "Mallama",
      },
      {
        id: 38,
        name: "Mosquera",
      },
      {
        id: 39,
        name: "Nariño",
      },
      {
        id: 40,
        name: "Olaya Herrera",
      },
      {
        id: 41,
        name: "Ospina",
      },
      {
        id: 42,
        name: "Pasto",
      },
      {
        id: 43,
        name: "Policarpa",
      },
      {
        id: 44,
        name: "Potosi",
      },
      {
        id: 45,
        name: "Providencia",
      },
      {
        id: 46,
        name: "Puerres",
      },
      {
        id: 47,
        name: "Pupiales",
      },
      {
        id: 48,
        name: "Ricaurte",
      },
      {
        id: 49,
        name: "Roberto Payan",
      },
      {
        id: 50,
        name: "Samaniego",
      },
      {
        id: 51,
        name: "San Bernardo",
      },
      {
        id: 52,
        name: "San Lorenzo",
      },
      {
        id: 53,
        name: "San Pablo",
      },
      {
        id: 54,
        name: "San Pedro De Cartago",
      },
      {
        id: 55,
        name: "Sandona",
      },
      {
        id: 56,
        name: "Santa Barbara",
      },
      {
        id: 57,
        name: "Santa Cruz",
      },
      {
        id: 58,
        name: "Sapuyes",
      },
      {
        id: 59,
        name: "Taminango",
      },
      {
        id: 60,
        name: "Tangua",
      },
      {
        id: 61,
        name: "Tumaco",
      },
      {
        id: 62,
        name: "Tuquerres",
      },
      {
        id: 63,
        name: "Yacuanquer",
      },
      
    ]);
  } else if (id === 22) {
    return (CitysById = [
      {
        id: 0,
        name: "Colon",
      },
      {
        id: 1,
        name: "Mocoa",
      },
      {
        id: 2,
        name: "Orito",
      },
      {
        id: 3,
        name: "Puerto Asis",
      },
      {
        id: 4,
        name: "Puerto Caicedo",
      },
      {
        id: 5,
        name: "Puerto Guzman",
      },
      {
        id: 6,
        name: "Puerto Leguizamo",
      },
      {
        id: 7,
        name: "San Fransisco",
      },
      {
        id: 8,
        name: "San Miguel",
      },
      {
        id: 9,
        name: "Santiago",
      },
      {
        id: 10,
        name: "Sibundoy",
      },
      {
        id: 11,
        name: "Valle Del Guamuez",
      },
      {
        id: 12,
        name: "Villagarzon",
      },
      
    ]);
  } else if (id === 23) {
    return (CitysById = [
      {
        id: 0,
        name: "Armenia",
      },
      {
        id: 1,
        name: "Buenavista",
      },
      {
        id: 2,
        name: "Calarca",
      },
      {
        id: 3,
        name: "Circasia",
      },
      {
        id: 4,
        name: "Cordoba",
      },
      {
        id: 5,
        name: "Filandia",
      },
      {
        id: 6,
        name: "Genova",
      },
      {
        id: 7,
        name: "La Tebaida",
      },
      {
        id: 8,
        name: "Montenegro",
      },
      {
        id: 9,
        name: "Pijao",
      },
      {
        id: 10,
        name: "Quimbaya",
      },
      {
        id: 11,
        name: "Salento",
      },
      
    ]);
  } else if (id === 24) {
    return (CitysById = [
      {
        id: 0,
        name: "Apia",
      },
      {
        id: 1,
        name: "Balboa",
      },
      {
        id: 2,
        name: "Belen De Umbria",
      },
      {
        id: 3,
        name: "Dosquebradas",
      },
      {
        id: 4,
        name: "Guatica",
      },
      {
        id: 5,
        name: "La Celia",
      },
      {
        id: 6,
        name: "La Virginia",
      },
      {
        id: 7,
        name: "Marsella",
      },
      {
        id: 8,
        name: "Mistrato",
      },
      {
        id: 9,
        name: "Pereira",
      },
      {
        id: 10,
        name: "Pueblo Rico",
      },
      {
        id: 11,
        name: "Quinchia",
      },
      {
        id: 12,
        name: "Santa Rosa De Cabal",
      },
      {
        id: 13,
        name: "Santuario",
      },
      
    ]);
  } else if (id === 25) {
    return (CitysById = [
      {
        id: 0,
        name: "Providencia Y Santa Catalina",
      },
      {
        id: 1,
        name: "San Andres",
      },
      
    ]);
  } else if (id === 26) {
    return (CitysById = [
      {
        id: 0,
        name: "Aguada",
      },
      {
        id: 1,
        name: "Albania",
      },
      {
        id: 2,
        name: "Aratoca",
      },
      {
        id: 3,
        name: "Barbosa",
      },
      {
        id: 4,
        name: "Barichara",
      },
      {
        id: 5,
        name: "Barrancabermeja",
      },
      {
        id: 6,
        name: "Betulia",
      },
      {
        id: 7,
        name: "Bolivar",
      },
      {
        id: 8,
        name: "Bucaramanga",
      },
      {
        id: 9,
        name: "Cabrera",
      },
      {
        id: 10,
        name: "California",
      },
      {
        id: 11,
        name: "Capitanejo",
      },
      {
        id: 12,
        name: "Carcasi",
      },
      {
        id: 13,
        name: "Cepita",
      },
      {
        id: 14,
        name: "Cerrito",
      },
      {
        id: 15,
        name: "Charala",
      },
      {
        id: 16,
        name: "Charta",
      },
      {
        id: 17,
        name: "Chima",
      },
      {
        id: 18,
        name: "Chipata",
      },
      {
        id: 19,
        name: "Cimitarra",
      },
      {
        id: 20,
        name: "Concepcion",
      },
      {
        id: 21,
        name: "Confines",
      },
      {
        id: 22,
        name: "Contratacion",
      },
      {
        id: 23,
        name: "Coromoro",
      },
      {
        id: 24,
        name: "Curiti",
      },
      {
        id: 25,
        name: "El Carmen",
      },
      {
        id: 26,
        name: "El Guacamayo",
      },
      {
        id: 27,
        name: "El Peñon",
      },
      {
        id: 28,
        name: "El Playon",
      },
      {
        id: 29,
        name: "Encino",
      },
      {
        id: 30,
        name: "Enciso",
      },
      {
        id: 31,
        name: "Florian",
      },
      {
        id: 32,
        name: "Floridablanca",
      },
      {
        id: 33,
        name: "Galan",
      },
      {
        id: 34,
        name: "Gambita",
      },
      {
        id: 35,
        name: "Giron",
      },
      {
        id: 36,
        name: "Guaca",
      },
      {
        id: 37,
        name: "Guadalupe",
      },
      {
        id: 38,
        name: "Guapota",
      },
      {
        id: 39,
        name: "Guavata",
      },
      {
        id: 40,
        name: "Guaduas",
      },
      {
        id: 41,
        name: "Guepsa",
      },
      {
        id: 42,
        name: "Hato",
      },
      {
        id: 43,
        name: "Jesus Maria",
      },
      {
        id: 44,
        name: "Jordan",
      },
      {
        id: 45,
        name: "La Belleza",
      },
      {
        id: 46,
        name: "La Paz",
      },
      {
        id: 47,
        name: "Landazuri",
      },
      {
        id: 48,
        name: "Lebrija",
      },
      {
        id: 49,
        name: "Los Santos",
      },
      {
        id: 50,
        name: "Macaravita",
      },
      {
        id: 51,
        name: "Malaga",
      },
      {
        id: 52,
        name: "Matanza",
      },
      {
        id: 53,
        name: "Mogotes",
      },
      {
        id: 54,
        name: "Ocamonte",
      },
      {
        id: 55,
        name: "Oiba",
      },
      {
        id: 56,
        name: "Onzaga",
      },
      {
        id: 57,
        name: "Palmar",
      },
      {
        id: 58,
        name: "Palmas Del Socorro",
      },
      {
        id: 59,
        name: "Paramo",
      },
      {
        id: 60,
        name: "Piedecuesta",
      },
      {
        id: 61,
        name: "Pinchote",
      },
      {
        id: 62,
        name: "Puente Nacional",
      },
      {
        id: 63,
        name: "Puerto Parra",
      },
      {
        id: 64,
        name: "Puerto Wilches",
      },
      {
        id: 65,
        name: "Rionegro",
      },
      {
        id: 66,
        name: "Sabana De Torres",
      },
      {
        id: 67,
        name: "San Andres",
      },
      {
        id: 68,
        name: "San Benito",
      },
      {
        id: 69,
        name: "San Gil",
      },
      {
        id: 70,
        name: "San Joaquin",
      },
      {
        id: 71,
        name: "San Jose De Miranda",
      },
      {
        id: 72,
        name: "San Miguel",
      },
      {
        id: 73,
        name: "San Vicente De Chucuri",
      },
      {
        id: 74,
        name: "Santa Barbara",
      },
      {
        id: 75,
        name: "Santa Helena De Opon",
      },
      {
        id: 76,
        name: "Simacota",
      },
      {
        id: 77,
        name: "Socorro",
      },
      {
        id: 78,
        name: "Suaita",
      },
      {
        id: 79,
        name: "Sucre",
      },
      {
        id: 80,
        name: "Surata",
      },
      {
        id: 81,
        name: "Tona",
      },
      {
        id: 82,
        name: "Valle De San Jose",
      },
      {
        id: 83,
        name: "Velez",
      },
      {
        id: 84,
        name: "Vetas",
      },
      {
        id: 85,
        name: "Villanueva",
      },
      {
        id: 86,
        name: "Zapatoca",
      },
      
    ]);
  } else if (id === 27) {
    return (CitysById = [
      {
        id: 0,
        name: "Buenavista",
      },
      {
        id: 1,
        name: "Caimito",
      },
      {
        id: 2,
        name: "Chalan",
      },
      {
        id: 3,
        name: "Coloso",
      },
      {
        id: 4,
        name: "Corozal",
      },
      {
        id: 5,
        name: "Covenas",
      },
      {
        id: 6,
        name: "El Roble",
      },
      {
        id: 7,
        name: "Galeras",
      },
      {
        id: 8,
        name: "Guaranda",
      },
      {
        id: 9,
        name: "La Union",
      },
      {
        id: 10,
        name: "Los Palmitos",
      },
      {
        id: 11,
        name: "Majagual",
      },
      {
        id: 12,
        name: "Morroa",
      },
      {
        id: 13,
        name: "Ovejas",
      },
      {
        id: 14,
        name: "Palmito",
      },
      {
        id: 15,
        name: "Sampues",
      },
      {
        id: 16,
        name: "San Benito Abad",
      },
      {
        id: 17,
        name: "San Juan De Betulia",
      },
      {
        id: 18,
        name: "San Marcos",
      },
      {
        id: 19,
        name: "San Onofre",
      },
      {
        id: 20,
        name: "San Pedro",
      },
      {
        id: 21,
        name: "Since",
      },
      {
        id: 22,
        name: "Sincelejo",
      },
      {
        id: 23,
        name: "Sucre",
      },
      {
        id: 24,
        name: "Tolu",
      },
      {
        id: 25,
        name: "Toluviejo",
      },
      
    ]);
  } else if (id === 28) {
    return (CitysById = [
      {
        id: 0,
        name: "Alpujarra",
      },
      {
        id: 1,
        name: "Alvarado",
      },
      {
        id: 2,
        name: "Ambalema",
      },
      {
        id: 3,
        name: "Anzoategui",
      },
      {
        id: 4,
        name: "Armero",
      },
      {
        id: 5,
        name: "Ataco",
      },
      {
        id: 6,
        name: "Cajamarca",
      },
      {
        id: 7,
        name: "Carmen De Apicala",
      },
      {
        id: 8,
        name: "Casabianca",
      },
      {
        id: 9,
        name: "Chaparral",
      },
      {
        id: 10,
        name: "Coello",
      },
      {
        id: 11,
        name: "Coyaima",
      },
      {
        id: 12,
        name: "Cunday",
      },
      {
        id: 13,
        name: "Dolores",
      },
      {
        id: 14,
        name: "Espinal",
      },
      {
        id: 15,
        name: "Falan",
      },
      {
        id: 16,
        name: "Flandes",
      },
      {
        id: 17,
        name: "Fresno",
      },
      {
        id: 18,
        name: "Guamo",
      },
      {
        id: 19,
        name: "Herveo",
      },
      {
        id: 20,
        name: "Honda",
      },
      {
        id: 21,
        name: "Ibague",
      },
      {
        id: 22,
        name: "Icononzo",
      },
      {
        id: 23,
        name: "Lerida",
      },
      {
        id: 24,
        name: "Libano",
      },
      {
        id: 25,
        name: "Mariquita",
      },
      {
        id: 26,
        name: "Melgar",
      },
      {
        id: 27,
        name: "Murillo",
      },
      {
        id: 28,
        name: "Natagaima",
      },
      {
        id: 29,
        name: "Ortega",
      },
      {
        id: 30,
        name: "Palocabildo",
      },
      {
        id: 31,
        name: "Piedras",
      },
      {
        id: 32,
        name: "Planadas",
      },
      {
        id: 33,
        name: "Prado",
      },
      {
        id: 34,
        name: "Purificacion",
      },
      {
        id: 35,
        name: "Rioblanco",
      },
      {
        id: 36,
        name: "Roncesvalles",
      },
      {
        id: 37,
        name: "Rovira",
      },
      {
        id: 38,
        name: "Saldaña",
      },
      {
        id: 39,
        name: "San Antonio",
      },
      {
        id: 40,
        name: "San Luis",
      },
      {
        id: 41,
        name: "Santa Isabel",
      },
      {
        id: 42,
        name: "Suarez",
      },
      {
        id: 43,
        name: "Valle De San Juan",
      },
      {
        id: 44,
        name: "Venadillo",
      },
      {
        id: 45,
        name: "Villahermosa",
      },
      {
        id: 46,
        name: "Villarrica",
      },
      
    ]);
  } else if (id === 29) {
    return (CitysById = [
      {
        id: 0,
        name: "Alcala",
      },
      {
        id: 1,
        name: "Andalucia",
      },
      {
        id: 2,
        name: "Ansermanuevo",
      },
      {
        id: 3,
        name: "Argelia",
      },
      {
        id: 4,
        name: "Bolivar",
      },
      {
        id: 5,
        name: "Buenaventura",
      },
      {
        id: 6,
        name: "Buga",
      },
      {
        id: 7,
        name: "Bugalagrande",
      },
      {
        id: 8,
        name: "Caicedonia",
      },
      {
        id: 9,
        name: "Cali",
      },
      {
        id: 10,
        name: "Calima",
      },
      {
        id: 11,
        name: "Candelaria",
      },
      {
        id: 12,
        name: "Cartago",
      },
      {
        id: 13,
        name: "Dagua",
      },
      {
        id: 14,
        name: "El Aguila",
      },
      {
        id: 15,
        name: "El Cairo",
      },
      {
        id: 16,
        name: "El Cerrito",
      },
      {
        id: 17,
        name: "El Dovio",
      },
      {
        id: 18,
        name: "Florida",
      },
      {
        id: 19,
        name: "Ginebra",
      },
      {
        id: 20,
        name: "Guacari",
      },
      {
        id: 21,
        name: "Jamundi",
      },
      {
        id: 22,
        name: "La Cumbre",
      },
      {
        id: 23,
        name: "La Union",
      },
      {
        id: 24,
        name: "La Victoria",
      },
      {
        id: 25,
        name: "Obando",
      },
      {
        id: 26,
        name: "Palmira",
      },
      {
        id: 27,
        name: "Pradera",
      },
      {
        id: 28,
        name: "Restrepo",
      },
      {
        id: 29,
        name: "Riofrio",
      },
      {
        id: 30,
        name: "Ronaldillo",
      },
      {
        id: 31,
        name: "San Pedro",
      },
      {
        id: 32,
        name: "Sevilla",
      },
      {
        id: 33,
        name: "Toro",
      },
      {
        id: 34,
        name: "Trujillo",
      },
      {
        id: 35,
        name: "Tulua",
      },
      {
        id: 36,
        name: "Ulloa",
      },
      {
        id: 37,
        name: "Versalles",
      },
      {
        id: 38,
        name: "Vijes",
      },
      {
        id: 39,
        name: "Yotoco",
      },
      {
        id: 40,
        name: "Yumbo",
      },
      {
        id: 41,
        name: "Zarzal",
      },
      
    ]);
  } else if (id === 30) {
    return (CitysById = [
      {
        id: 0,
        name: "Caruru",
      },
      {
        id: 1,
        name: "Mitu",
      },
      {
        id: 2,
        name: "Pacoa",
      },
      {
        id: 3,
        name: "Papunaua",
      },
      {
        id: 4,
        name: "Taraira",
      },
      {
        id: 5,
        name: "Yavarate",
      },
      
    ]);
  } else if (id === 31) {
    return (CitysById = [
      {
        id: 0,
        name: "Cumaribo",
      },
      {
        id: 1,
        name: "La Primavera",
      },
      {
        id: 2,
        name: "Puerto Carreño",
      },
      {
        id: 3,
        name: "Santa Rosalia",
      },
      
    ]);
  }
  return CitysById;
}
