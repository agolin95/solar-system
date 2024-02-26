const planets = {
    "Sun": {
        "radius": 695508,
        "orbit": 0,
        "color": "#fda835"

    },
    "Mercury": {
        "radius": 2439.7,
        "orbit": 0.3871,
        "color": "#ad8a6c"

    },
    "Venus": {
        "radius": 6051.8,
        "orbit": 0.7233,
        "color": "#ca6b16"

    },
    "Earth": {
        "radius": 6371,
        "orbit": 1,
        "color": "#38569a"

    },
    "Mars": {
        "radius": 3389.5,
        "orbit": 1.5273,
        "color": "#b92e1a"

    },
    "Jupiter": {
        "radius": 69911,
        "orbit": 5.2028,
        "color": "#bc6328"

    },
    "Saturn": {
        "radius": 58232,
        "orbit": 9.5388,
        "color": "#fdca95"

    },
    "Uranus": {
        "radius": 25362,
        "orbit": 19.1914,
        "color": "#87d7de"

    },
    "Neptune": {
        "radius": 24622,
        "orbit": 30.07,
        "color": "#446afc"
    }
}


const dwarves = {
    "Ceres": {
        "radius": 469.7,
        "orbit": 2.76596
    },
    "Orcus": {
        "radius": 917,
        "orbit": 39.174
    },
    "Pluto": {
        "radius": 1151,
        "orbit": 39.5294
    },
    "Salacia": {
        "radius": 854,
        "orbit": 42.184
    },
    "Varuna": {
        "radius": 668,
        "orbit": 42.718
    },
    "Haumea": {
        "radius": 780,
        "orbit": 43.335
    },
    "Quaoar": {
        "radius": 543,
        "orbit": 43.694
    },
    "Makemake": {
        "radius": 715,
        "orbit": 45.791
    },
    "Gonggong": {
        "radius": 615,
        "orbit": 67.5
    },
    "Eris": {
        "radius": 1163,
        "orbit": 67.6681
    },
    // "Sedna": {
    //     "radius": 995,
    //     "orbit": 506
    // }
}


const moons = {
    "Earth": {
        "Luna": {
            "radius": 1737.5,
            "semi-major-axis": 384748
        },
    },
    "Mars": {
        "Phobos": {
            "radius": 11.1,
            "semi-major-axis": 9377
        },
        "Deimos": {
            "radius": 6.3,
            "semi-major-axis": 23460
        },
    },
    "Jupiter": {
        "Io": {
            "radius": 1821.6,
            "semi-major-axis": 421800
        },
        "Europa": {
            "radius": 1560.8,
            "semi-major-axis": 671100
        },
        "Ganymede": {
            "radius": 2634.1,
            "semi-major-axis": 1070400
        },
        "Callisto": {
            "radius": 2410.3,
            "semi-major-axis": 1882700
        },
    },
    "Saturn": {
        "Titan": {
            "planet": "Saturn",
            "radius": 2574.73,
            "semi-major-axis": 1221900
        },
        "Rhea": {
            "planet": "Saturn",
            "radius": 763.8,
            "semi-major-axis": 527200
        },
        "Iapetus": {
            "planet": "Saturn",
            "radius": 734.3,
            "semi-major-axis": 3561700
        },
        "Dione": {
            "planet": "Saturn",
            "radius": 561.4,
            "semi-major-axis": 377700
        },
        "Tethys": {
            "planet": "Saturn",
            "radius": 531.1,
            "semi-major-axis": 295000
        },
        "Enceladus": {
            "planet": "Saturn",
            "radius": 252.1,
            "semi-major-axis": 238400
        },
        "Mimas": {
            "planet": "Saturn",
            "radius": 198.2,
            "semi-major-axis": 186000
        },
    },
    "Uranus": {
        "Titania": {
            "planet": "Uranus",
            "radius": 788.4,
            "semi-major-axis": 435910
        },
        "Oberon": {
            "planet": "Uranus",
            "radius": 761.4,
            "semi-major-axis": 583520
        },
        "Umbriel": {
            "planet": "Uranus",
            "radius": 584.7,
            "semi-major-axis": 266300
        },
        "Ariel": {
            "planet": "Uranus",
            "radius": 578.9,
            "semi-major-axis": 191020
        },
        "Miranda": {
            "planet": "Uranus",
            "radius": 235.8,
            "semi-major-axis": 129390
        },
    },
    "Neptune": {
        "Triton": {
            "planet": "Neptune",
            "radius": 1352.6,
            "semi-major-axis": 354759
        },
    },
    "Pluto": {
        "Charon": {
            "planet": "Pluto",
            "radius": 606,
            "semi-major-axis": 17536
        },
    },
}


const boundaries = {
    "Asteroid-Belt-Start": {
        "orbit": 2.1
    },
    "Asteroid-Belt-End": {
        "orbit": 3.3
    },
    "Kuiper-Belt-Start": {
        "orbit": 30
    },
    "Kuiper-Belt-End": {
        "orbit": 50
    },
    "Heliosheath": {
        "orbit": 90
    },
    // "Heliopause": {
    //     "orbit": 150
    // },
    // "Bow-Shock": {
    //     "orbit": 250
    // },
}


const saturnRingColor = "#a07535";
const saturnOuterColor = "rgba(255,255,255,0.08)";
const gapColor = "black";
const rings = {
    "Saturn": {
        "Ring-E": {
            "radius": 480000,
            "color": saturnOuterColor
        },
        "Huygens-Gap": {
            "radius": 173500,
            "color": gapColor
        },
        "Ring-G": {
            "radius": 167500,
            "color": saturnOuterColor
        },
        "Maxwell-Gap": {
            "radius": 141100,
            "color": gapColor
        },
        "Ring-F": {
            "radius": 140180,
            "color": saturnOuterColor
        },
        "Colombo-Gap": {
            "radius": 139840,
            "color": gapColor
        },
        "Colombo-Filler": {
            "radius": 139330,
            "color": saturnRingColor
        },
        "Keeler-Gap": {
            "radius": 137300,
            "color": gapColor
        },
        "Ring-A": {
            "radius": 136500,
            "color": saturnRingColor
        },
        "Encke-Gap": {
            "radius": 133780,
            "color": gapColor
        },
        "Encke-Filler": {
            "radius": 133600,
            "color": saturnRingColor
        },
        "Cassini-Division": {
            "radius": 122200,
            "color": gapColor
        },
        "Ring-B": {
            "radius": 117500,
            "color": saturnRingColor
        },
        "Ring-C": {
            "radius": 92000,
            "color": saturnRingColor
        },
        "Ring-D": {
            "radius": 74500,
            "color": saturnRingColor
        },
        "Ring-Gap": {
            "radius": 66900,
            "color": gapColor
        },

    }

}
