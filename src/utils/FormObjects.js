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
        name: "'Cravo Norte",
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
  }
  return CitysById;
}
