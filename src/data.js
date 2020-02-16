//Restaurant tipleri arttirilarak ona göre filtreleme degisecek
//google bewertungen alinabilir mi
import medal1 from "./assets/images/essenundtrinken/RestaurantMedaillon/1.jpg";
import medal2 from "./assets/images/essenundtrinken/RestaurantMedaillon/2.jpg";
import medal3 from "./assets/images/essenundtrinken/RestaurantMedaillon/3.jpg";
import medal4 from "./assets/images/essenundtrinken/RestaurantMedaillon/4.jpg";
import crotia1 from "./assets/images/essenundtrinken/RestaurantCrotia/1.jpg";
import crotia2 from "./assets/images/essenundtrinken/RestaurantCrotia/2.jpg";
import crotia3 from "./assets/images/essenundtrinken/RestaurantCrotia/3.jpg";
import crotia4 from "./assets/images/essenundtrinken/RestaurantCrotia/4.jpg";
import brauhaus1 from "./assets/images/essenundtrinken/AltesBrauhaus/1.jpg";
import brauhaus2 from "./assets/images/essenundtrinken/AltesBrauhaus/2.jpg";
import brauhaus3 from "./assets/images/essenundtrinken/AltesBrauhaus/3.jpg";
import brauhaus4 from "./assets/images/essenundtrinken/AltesBrauhaus/4.jpg";
import ratskeller1 from "./assets/images/essenundtrinken/Stadthalle-Ratskeller/1.jpg";
import ratskeller2 from "./assets/images/essenundtrinken/Stadthalle-Ratskeller/2.jpg";
import ratskeller3 from "./assets/images/essenundtrinken/Stadthalle-Ratskeller/3.jpg";
import ratskeller4 from "./assets/images/essenundtrinken/Stadthalle-Ratskeller/4.jpg";
import elgreco1 from "./assets/images/essenundtrinken/ElGreco/1.jpg";
import elgreco2 from "./assets/images/essenundtrinken/ElGreco/2.jpg";
import elgreco3 from "./assets/images/essenundtrinken/ElGreco/3.jpg";
import elgreco4 from "./assets/images/essenundtrinken/ElGreco/4.jpg";
import heinsburger1 from "./assets/images/essenundtrinken/Heinsburger/1.png";
import heinsburger2 from "./assets/images/essenundtrinken/Heinsburger/2.jpg";
import heinsburger3 from "./assets/images/essenundtrinken/Heinsburger/3.jpg";
import heinsburger4 from "./assets/images/essenundtrinken/Heinsburger/4.jpg";
import china1 from "./assets/images/essenundtrinken/ChinaGarten/1.jpg";
import china2 from "./assets/images/essenundtrinken/ChinaGarten/2.jpg";
import china3 from "./assets/images/essenundtrinken/ChinaGarten/3.jpg";
import china4 from "./assets/images/essenundtrinken/ChinaGarten/4.jpg";
import lagrotta1 from "./assets/images/essenundtrinken/LaGrotta/1.jpg";
import lagrotta2 from "./assets/images/essenundtrinken/LaGrotta/2.jpg";
import lagrotta3 from "./assets/images/essenundtrinken/LaGrotta/3.jpg";
import lagrotta4 from "./assets/images/essenundtrinken/LaGrotta/4.jpg";
import begashaus1 from "./assets/images/freizeitunderholung/BegasHaus/1.jpeg";
import begashaus2 from "./assets/images/freizeitunderholung/BegasHaus/2.jpg";
import begashaus3 from "./assets/images/freizeitunderholung/BegasHaus/3.jpeg";
import begashaus4 from "./assets/images/freizeitunderholung/BegasHaus/4.jpg";
import stgangolf1 from "./assets/images/freizeitunderholung/StGangolf/1.jpeg";
import stgangolf2 from "./assets/images/freizeitunderholung/StGangolf/2.jpg";
import stgangolf3 from "./assets/images/freizeitunderholung/StGangolf/3.jpg";
import stgangolf4 from "./assets/images/freizeitunderholung/StGangolf/4.jpg";
import fliegen1 from "./assets/images/freizeitunderholung/Ultraleichtfliegen/1.jpg";
import fliegen2 from "./assets/images/freizeitunderholung/Ultraleichtfliegen/2.jpg";
import fliegen3 from "./assets/images/freizeitunderholung/Ultraleichtfliegen/3.jpg";
import fliegen4 from "./assets/images/freizeitunderholung/Ultraleichtfliegen/4.jpg";

export const data = {
  loading: false,
  sorted: {
    freizeitunderholung: [],
    essenundtrinken: [],
    uebernachten: [],
    veranstaltungen: []
  },
  essenundtrinken: [
    {
      id: 1,
      name: "Restaurant Medaillon",
      preise: "$$",
      googlebewertungen: 4.5,
      type: "deutsche", //German, European, Croatian, Central European
      slug: "restaurantmedaillon",
      website: "http://medaillonheinsberg.de/",
      details:
        "“Dobro dosli” Vor mehr als 30 Jahren hat der Inhaber Zdravko Lasic seinen Heimatort als Meisterkoch verlassen und ist in die Welt raus.1996 erfüllte sich der Traum vom eigenen Restaurantund zwar natürlich in Heinsberg. Nun sind wir seit 20 Jahren ein Familienbetrieb im Herzen von Heinsberg mit einem gut eingespielten Team und vielen Stammgästen von Nah und Fern.Sie können uns über den Markt in Heinsberg erreichen, unser Restaurant ist auf dem Markt und befindet sich direkt über einen Parkplatz",
      anschrift: "Markt 16, 52525 Heinsberg",
      phone: "02452 3207",
      image: medal1,
      otherimages: [medal2, medal3, medal4]
    },
    {
      id: 2,
      name: "Restaurant Crotia",
      preise: "$$",
      googlebewertungen: 4.6,
      type: "kroatisch", //Croatian, European
      slug: "restaurantcrotia",
      website: "http://croatia-heinsberg.de/",
      details:
        "“Unser Restaurant Croatia bietet ausgewählte Speisen kroatischer und internationaler Küche in Heinsberg-Unterbruch. In mediterranem Ambiente und familiärer Atmosphäre bietet es sich geradezu an, zu schlemmen und die Seele baumeln zu lassen.",
      anschrift: "Wassenberger Str. 84, 52525 Heinsberg",
      phone: "02452 62216",
      image: crotia1,
      otherimages: [crotia2, crotia3, crotia4]
    },
    {
      id: 3,
      name: "Altes Brauhaus",
      preise: "$$$$",
      googlebewertungen: 4.3,
      type: "deutsche", //international, italienisch,französisch
      slug: "altesbrauhaus",
      website: "https://www.altesbrauhaus-heinsberg.de/",
      details:
        "Unsere mediterrane Küche mit italienischen und französischen Einflüssen, ist stets darauf bedacht, auch den individuellen Wünschen unserer Gäste nachzukommen. Unsere Tageskarte  mit saisonalen Spezialitäten, und einem vegetarischen Angebot, stellen wir nach Tageseinkauf zusammen.Hier gibt es immer Neuigkeiten.",
      anschrift: "Wurmstraße 4, 52525 Heinsberg/Unterbruch",
      phone: "02452 61035",
      image: brauhaus1,
      otherimages: [brauhaus2, brauhaus3, brauhaus4]
    },
    {
      id: 4,
      name: "Stadthalle-Ratskeller",
      preise: "$$$$",
      googlebewertungen: 4.6,
      type: "deutsche",
      slug: "stadthalleheinsberg",
      website: "https://www.stadthalle-heinsberg.de/",
      details:
        "Unsere Speisenangebote werden regelmäßig neu zusammengestellt. Dadurch können wir Ihnen abwechslungsreiche, kulinarische Freuden anbieten, die saisonal abgestimmt sind.Falls Sie dennoch einen anderen Wunsch haben sollten, fragen Sie uns.",
      anschrift: "Apfelstraße 60, 52525 Heinsberg",
      phone: "02452 5020",
      image: ratskeller1,
      otherimages: [ratskeller2, ratskeller3, ratskeller4]
    },
    {
      id: 5,
      name: "El Greco",
      preise: "$$",
      googlebewertungen: 4.3,
      type: "griechisch",
      slug: "elgreco",
      website: "https://elgreco.rest/",
      details:
        "Das Küchen-Team kocht mit Liebe und Leidenschaft jeder unserer einmaligen Spezialitäten. Das freundliche Service-Team von “El Greco” serviert Ihnen diese Köstlichkeiten mit viel Aufmerksamkeit und Sorgfalt.",
      anschrift: "Kempener Str. 110, 52525 Heinsberg",
      phone: "02452 9783777",
      image: elgreco1,
      otherimages: [elgreco2, elgreco3, elgreco4]
    },
    {
      id: 6,
      name: "Heinsburger",
      preise: "$",
      googlebewertungen: 4.6,
      type: "amerikanische",
      slug: "heinsburger",
      website: "https://www.heinsburger.de/",
      details:
        "Für einen guten Gastronom ist es wünschenswert, dass sich seine Gäste wohlfühlen, durch Mund-zu-Mund-Propaganda sein Betrieb einen hohen Bekanntheitsgrad erlangt und dass sein Team ihn zu jeder Tages- und Nachtzeit gebührend vertritt. Selbstverständlich wünschen auch wir uns all das.Bei der Speisenauswahl legt Heinsburger seinen Fokus auf innovative, regionale und exotisch angehauchte Kreationen, die dem Begriff 'Fast Food' eine neue Bedeutung geben. Da jeder unserer Burger frisch aus 100%igen Rindfleisch-Scheiben und mit Liebe zum Detail hergestellt wird, dauert die Zubereitung in der Regel 7 - 12 Minuten - wenn viel los ist, auch mal länger.",
      anschrift: "Hochstraße 177, 52525 Heinsberg",
      phone: "02452 9671225",
      image: heinsburger1,
      otherimages: [heinsburger2, heinsburger3, heinsburger4]
    },
    {
      id: 7,
      name: "China Garten",
      preise: "$",
      googlebewertungen: 4.7,
      type: "chinesische",
      slug: "chinagarten",
      website: "http://www.chinagarten-heinsberg.de/",
      details:
        "Genießen Sie in unserem Restaurant ein unvergessliches kulinarisches Erlebnis.Wir führen Ihre Bestellung nach Eingang aus und bereiten alles ganz frisch für Sie zu… Genießen Sie Spezialitäten vom Meisterkoch die direkt vor Ihnen zubereitet werden.",
      anschrift: "Ostpromenade 103, 52525 Heinsberg",
      phone: "02452 1809780",
      image: china1,
      otherimages: [china2, china3, china4]
    },
    {
      id: 8,
      name: "La Grotta",
      preise: "$$",
      googlebewertungen: 4.3,
      type: "italienisch",
      slug: "lagrotta",
      website: "http://www.la-grotta.eu/",
      details:
        "Ein offener, herzlicher Ort, an dem man so sein kann, wie man ist und sich wie zu Hause fühlt …",
      anschrift: "Kempener Str. 57, 52525 Heinsberg",
      phone: "02452 22040",
      image: lagrotta1,
      otherimages: [lagrotta2, lagrotta3, lagrotta4]
    }
  ],
  freizeitunderholung: [
    {
      id: 9,
      name: "BEGAS HAUS - Museum",
      popularität: "****",
      googlebewertungen: 4.2,
      type: "sehenswertes",
      slug: "begashaus",
      details:
        "Das Begas Haus ist das Museum für Kunst und Regionalgeschichte in Heinsberg. Es erhielt seinen Namen nach der über vier Generationen wirkenden Künstlerfamilie Begas, deren Stammvater Carl Joseph Begas 1794 in Heinsberg geboren wurde.An das Museum angegliedert ist außerdem ein von der Lebenshilfe geführtes Café, in dem gelegentlich unter dem Motto „Kultur ohne Barrieren“ auch Kunst ausgestellt wird. In direkter Nähe befinden sich außerdem die Heinsberger Propsteikirche St. Gangolf sowie die Burg Heinsberg.",
      website: "https://begas-haus.de/",
      anschrift: "Hochstraße 21 52525 Heinsberg",
      phone: "02452 977690",
      image: begashaus1,
      otherimages: [begashaus2, begashaus3, begashaus4]
    },
    {
      id: 10,
      name: "St.Gangolf",
      popularität: "***",
      googlebewertungen: 4.4,
      type: "sehenswertes",
      slug: "derselfkantdom",
      website: "",
      anschrift: "Kirchberg 8, 52525 Heinsberg",
      phone: "",
      details:
        "St. Gangolf ist eine römisch-katholische Propsteikirche und ehemalige Stiftskirche in der rheinischen Stadt Heinsberg. Sie steht als Baudenkmal unter Denkmalschutz. Pfarrpatron ist der heilige Gangolf, ein burgundischer Ritter und Märtyrer des 8. Jahrhunderts. Die Kirche steht erhöht über der Stadt auf dem sogenannten Kirchberg, dem als Vorburg der Burg Heinsberg dienenden Teil der Heinsberger Motte. Die Pfarrgemeinde von St. Gangolf gehört zum Bistum Aachen.",
      image: stgangolf1,
      otherimages: [stgangolf2, stgangolf3, stgangolf4]
    },
    {
      id: 11,
      name: "Ultraleichtfliegen",
      popularität: "****",
      googlebewertungen: "-",
      type: "sport",
      slug: "ultraleichtfliegen",
      website: "https://www.ul-hs.de/",
      details:
        "Der Ultraleicht-Flugclub Heinsberg-Selfkant e.V. besteht zur Zeit (Stand Dezember 2017) aus 184 Mitgliedern, davon 79 aktive Mitglieder, 103 Förder- und 2 Ehrenmitglieder.",
      anschrift: "Am Vossenweg 35, 52525 Heinsberg",
      phone: "02452 180206",
      image: fliegen1,
      otherimages: [fliegen2, fliegen3, fliegen4]
    },
    {
      id: 12,
      name: "Ballonfahren",
      popularität: "*****",
      googlebewertungen: 4.8,
      type: "sport",
      slug: "ballonfahren",
      website: "https://skytravel24.de/ballonfahrten-heinsberg.html",
      details:
        "Die Buchungsabwicklung übernehmen wir. Steigen Sie ein zu einer nicht alltäglichen Reise. Lassen Sie sich bezaubern von der Stille und dem herrlichen Panorama, das Ihnen nur eine Ballonfahrt in Heinsberg oder Umgebung bieten kann und lassen den Alltag am Boden zurück! Sie steigen in den Korb ein, der Pilot löst die Leinen und schon schweben Sie davon. Sie fahren bis zu 90 Minuten über die Landschaft bevor Sie wieder landen. Nachdem Sie wieder festen Boden unter den Füssen haben, erfolgt die Ballontaufe mit Sekt.",
      anschrift: "Melatenstraße, 52525 Waldfeucht",
      phone: "0241 7018924",
      image:
        "https://www.skytravel24.de/images/produkte/google-ballonfahrt-400-400.png",
      otherimages: [
        "http://www.ac-ballonteam.de/images/Bild-Startseite.jpg",
        "https://www.heinsbergerdeal.de/bilder/deals/oecherdeal-ballonfahrt-3.jpg",
        "http://www.ac-ballonteam.de/images/Startplaetze/Start-Alsdorf.jpg"
      ]
    },
    {
      id: 13,
      name: "Bodyflying",
      popularität: "***",
      googlebewertungen: 3.8,
      type: "sport",
      slug: "bodyflying",
      website: "http://www.air-power-arena.de/",
      details:
        "Bodyflying ist aber auch eine Sportart für Jedermann. Jung oder alt, klein oder groß, leicht oder schwer, jeder kann das Gefühl der Schwerelosigkeit, das Schweben im Luftstrom erleben. Für Betriebsfeste, Incentives, Firmen-Events, individuellen Freizeitsport oder Funsport in der Gruppe, wir bieten für alle Interessenten das geeignete Programm in der Air Power Arena.",
      anschrift: "Rheinstrasse 6a 41836 Hückelhoven",
      phone: "02433 938655",
      image:
        "http://www.air-power-arena.de/bilder/arena/airpowerarena_outside.jpg",
      otherimages: [
        "http://www.air-power-arena.de/bilder/arena/P0172620.jpg",
        "http://www.air-power-arena.de/bilder/leiste/leiste_04.jpg",
        "http://www.air-power-arena.de/bilder/leiste/leiste_05.jpg"
      ]
    },
    {
      id: 14,
      name: "Kreisverband Heinsberg",
      popularität: "***",
      googlebewertungen: "-",
      type: "sport",
      slug: "kreisverbandheinsberg",
      website: "https://www.pferdesport-heinsberg.de/",
      details:
        "Der Kreisverband der Reit- und Fahrvereine Heinsberg , auch KRF-Heinsberg genannt, hat 17 Mitgliedsvereine. Aufgabe des Verbandes ist die Interessenvertretung der ihm angeschlossenen Vereine, sowie die Ausbildung und Förderung der Reiter/innen.",
      anschrift: "Rodebachstraße 23, 52538 Gangelt",
      phone: "02454 8777",
      image:
        "https://www.kreis-heinsberg.de/img/nl/pferd_mit_reiter_Homepage_Kreis_klein.jpg",
      otherimages: [
        "https://www.wassenberg.de/assets/2017/02/paard_09321-687x1030.jpg",
        "https://www.wassenberg.de/assets/2017/02/Kringshof-Pferde-1-1030x773.jpg",
        "https://www.wassenberg.de/assets/2017/02/Kringshof-Pferde-1030x773.jpg"
      ]
    },
    {
      id: 15,
      name: "Die Windmühle",
      popularität: "**",
      googlebewertungen: 4,
      type: "sehenswertes",
      slug: "windmuehle",
      details:
        "Eine historische Windmühle, die Lümbacher Windmühle 'Clarissa' aus dem 18./19. Jahrhundert befindet sich in Heinsberg-Kirchhoven, Zur Kornmühle 7.  Die Mühle ist in einem funktionsbereitem Zustand und kann nach Absprache besichtigt werden.",
      website: "http://www.muehlenverein-selfkant.de/",
      anschrift: "Zur Kornmühle 7, 52525 Heinsberg",
      phone: "",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/da/Heinsberg-Kirchhoven_Denkmal-Nr._40%2C_Zur_Kornm%C3%BChle_%284178%29.jpg",
      otherimages: [
        "http://www.heinsberg.de/kultur/luembacher_windmuehle_kirchhoven.jpg",
        "https://www.aachener-zeitung.de/imgs/48/3/0/9/5/0/7/0/5/tok_91be2f6327f66d25f7f623c23957effc/w900_h498_x470_y290_cdb40cafe6969ad4.jpg",
        "https://www.aachener-nachrichten.de/imgs/41/5/5/6/9/0/9/6/5/tok_96443b99736b1ca3eb1a4221fc303772/w950_h526_x599_y417_ZVA_55342801_1258853351_RGB_190_1_1_4f1db0025387bea7d29cbafebedd0394_1559556660_1258853351_f52fa591e3-73612e963ebb5b7e.jpg"
      ]
    },
    {
      id: 16,
      name: "Der Marktplatz",
      popularität: "****",
      googlebewertungen: "-",
      type: "sehenswertes",
      slug: "marktplatz",
      details:
        "Sehens- und erlebenswert: auch der Heinsberger Marktplatz mit zahlreichen Gastronomieangeboten und der angrenzenden Hochstraße mit attraktiven Geschäften.",
      website: "http://www.heinsberg.de/",
      anschrift: "Markt52525 Heinsberg",
      phone: "",
      image: "http://www.heinsberg.de/bilder_veranstaltungen/p1010806.jpg",
      otherimages: [
        "https://www.niederrhein.de/images/Stadt/Heinsberg/Niederrhein_de_Heinsberg.jpg",
        "http://gv-heinsberg.de/wp-content/uploads/cache/images/2020/02/web-DSC_00122/1117143056.jpg",
        "http://gv-heinsberg.de/wp-content/uploads/2014/10/web-Abendeinkauf2.jpg"
      ]
    }
  ],
  uebernachten: [
    {
      id: 18,
      name: "BEGAS HAUS - Museum",
      popularität: "****",
      googlebewertungen: 4.2,
      type: "sehenswertes",
      slug: "begashaus",
      details:
        "Das Begas Haus ist das Museum für Kunst und Regionalgeschichte in Heinsberg. Es erhielt seinen Namen nach der über vier Generationen wirkenden Künstlerfamilie Begas, deren Stammvater Carl Joseph Begas 1794 in Heinsberg geboren wurde.An das Museum angegliedert ist außerdem ein von der Lebenshilfe geführtes Café, in dem gelegentlich unter dem Motto „Kultur ohne Barrieren“ auch Kunst ausgestellt wird. In direkter Nähe befinden sich außerdem die Heinsberger Propsteikirche St. Gangolf sowie die Burg Heinsberg.",
      website: "https://begas-haus.de/",
      anschrift: "Hochstraße 21 52525 Heinsberg",
      phone: "02452 977690",
      image:
        "https://www.heinsberg.de/website/var/tmp/thumb_102__auto_1740e1f92ebab1592a49f096678aae02.jpeg",
      otherimages: [
        "https://niederrhein-tourismus.de/wp-content/uploads/2018/10/begas_haus_2018_001-1024x684.jpg",
        "https://www.heinsberg.de/website/var/tmp/thumb_1755__auto_a0e301e00452ca6abc7bbc1c98e803af.jpeg",
        "https://rp-online.de/imgs/32/2/2/7/6/2/9/5/5/tok_5f8a2a936ff736ddbe1b4da252272f27/w940_h528_x470_y264_6daf61be8908a9d2.jpg"
      ]
    }
  ],
  veranstaltungen: [
    {
      id: 17,
      name: "BEGAS HAUS - Museum",
      popularität: "****",
      googlebewertungen: 4.2,
      type: "sehenswertes",
      slug: "begashaus",
      details:
        "Das Begas Haus ist das Museum für Kunst und Regionalgeschichte in Heinsberg. Es erhielt seinen Namen nach der über vier Generationen wirkenden Künstlerfamilie Begas, deren Stammvater Carl Joseph Begas 1794 in Heinsberg geboren wurde.An das Museum angegliedert ist außerdem ein von der Lebenshilfe geführtes Café, in dem gelegentlich unter dem Motto „Kultur ohne Barrieren“ auch Kunst ausgestellt wird. In direkter Nähe befinden sich außerdem die Heinsberger Propsteikirche St. Gangolf sowie die Burg Heinsberg.",
      website: "https://begas-haus.de/",
      anschrift: "Hochstraße 21 52525 Heinsberg",
      phone: "02452 977690",
      image:
        "https://www.heinsberg.de/website/var/tmp/thumb_102__auto_1740e1f92ebab1592a49f096678aae02.jpeg",
      otherimages: [
        "https://niederrhein-tourismus.de/wp-content/uploads/2018/10/begas_haus_2018_001-1024x684.jpg",
        "https://www.heinsberg.de/website/var/tmp/thumb_1755__auto_a0e301e00452ca6abc7bbc1c98e803af.jpeg",
        "https://rp-online.de/imgs/32/2/2/7/6/2/9/5/5/tok_5f8a2a936ff736ddbe1b4da252272f27/w940_h528_x470_y264_6daf61be8908a9d2.jpg"
      ]
    }
  ]
};
