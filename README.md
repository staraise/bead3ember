# Dokumentáció

##Követelmény analizis
###Funkcionális követelmények
- Lehessen a tantárgyakat megtekinteni --> Összes tantárgy
- Lehessen új tantárgyakat létrehozni és törölni --> Összes tantárgy
- Lehessen megtekinteni a tantárgyhoz tartozó oktatót. --> Összes tantárgy
- Lehessen az oktatókat megtekinteni --> Összes tanár
- Lehessen új oktatókat létrehozni, szerkeszteni és törölni --> Összes tanár
- Lehessen megtekinteni a tantárgyhoz tartozó oktatót. --> Összes tanár
- A főoldalon az alkalmazás ismertetése jelenik meg.

###Nem funkcionális követelmények
- Felhasználóbarát, ergonomikus elrendezés és kinézet.
- Gyors működés.

###Szerepkörök

- vendég: a főoldal tartalmához fér hozzá és tud új tanárokat és tantárgyakat létrehozni.

![Kép felirata](docs/images/elsokep.PNG)

###Folyamatok
![Kép felirata](docs/images/masodikkep.PNG)

A fenti ábrán látható egy folyamat. A felhasználó megérkezik a főoldalra. Ezután átlép az összes tantárgy oldalra és létrehoz egy új tantárgyat.

![Kép felirata](docs/images/harmadikkep.PNG)

A fenti ábrán látható egy másik folyamat. A felhasználó megérkezik a főoldalra, majd átlép az összes tanár oldalára és ott szerkeszt egy tanárt.

##Tervezés

###Oldaltérkép
Publikus:

- Főoldal
- Összes tantárgy
- Összes tanár

![Kép felirata](docs/images/negyedikkep.PNG)

###Végpontok

- GET /: főoldal
- GET /subjects: bejelentkezes utani oldal
- GET /teachers: bejelentkező oldal
- POST /login: bejelentkezési adatok felküldése
- GET /login/signup : regisztrációs oldal
- POST /login/signup : regisztrációs adatok felküldése
- GET /student/mysubjects: felvett tárgyak
- GET /student/registrate: összes tantárgy listázása
- POST /student/registrate: tantárgy jelentkezés
- GET /teacher/all: összes tantárgy
- POST /teacher/all: tantárgy szerkesztés törlés
- GET /teacher/new: új tantárgy felvétele
- POST /teacher/new: új tantárgy felküldése
- GET /logout: kijelentkezes

###Adatbázisterv

![Kép felirata](docs/images/otodikkep.PNG)

A fenti kép ábrázolja az adatbázis tervet. Az adatbázis 2 táblából áll.
- Subject
- Teacher

A subject tábla tartalma:
- id : Elsődleges kulcs.
- subjectname : A tantárgy neve.
- description : Tantárgy leírása.
- credit : Tantárgy kreditértéke.

A teacher tábla tartalma:
- id : Elsődleges kulcs.
- firstname : A felhasználó keresztneve.
- lastname: A felhasználó vezetékneve.
- emailaddress : A felhasználó email címe.
- phonenumber : A felhasználó telefonszáma.

##Tesztelés
A teszteléshez a mocha, chai modulokat használtam. És ezek segitségével teszteltem.

A user model egységtesztelésénél teszteltem hogy létretudunk-e hozni új felhasználót ezt updatelni és törölni.
Próbátlam egy adott usert megkeresni, és hogy a jelszava jól kódolható/dekódolható.

A funkcionális teszteléshez zombie.js-t használtam.
Ezenbelül teszteltem hogy az index jelenik meg amikor a felhasználó elösször meglátogatja az oldalt,
majd pedig teszteltem hogyha olyan oldalra próbál a felhasználó menni ahova nincs joga akkor a login page-re dobja.
És hogy itt sikeresen bejelentkezik-e a megadott paraméterekkel.

##Felhasználói dokumentáció

###A futtatáshoz ajánlott hardver-, szoftver konfiguráció
A futtatáshoz ajánlott hardver: bármi amin elfut egy böngésző.
Ajánlott szoftver: Google Chrome

###Telepítés lépései
A felhasználó először meglátogatja a https://nodejs.org/en/#download oldalt és telepíti a node.js egy verzióját.

Ezekután a https://github.com/staraise/beadando oldalról letölti a projektet. 
![Kép felirata](docs/images/hetedik.JPG)

A letöltés után az adott zip-et ki kell tömöríteni egy erre alkalmas szoftverrel. Miután a nodejs telepítése befejeződött és a kitömörítés sikeres.

Ezekután a kitömöritett mappába el kell navigálni parancssorból. Ezután fel kell telepíteni a megfelelő modulokat:
Modulok:
 - bcryptjs
 - body-parser
 - connect-flash
 - express
 - express-session
 - express-validator
 - hbs
 - passport
 - passport-local
 - sails-disk
 - sails-memory
 - waterline
Egy modult úgy lehet feltelepíteni hogy: npm install <modulnév>. Miután végeztünk az összes modul telepítésével akkor futtatjuk a szervert a node server.js parancssal. Ezekután az oldal elérhető a http://localhost:3000/ címen.

###Program használata
A programot mint diákok vagy tanárok is használhatják.
Ha tanárként akarunk bejelentkezni akkor használjuk az admin felhasználó nevet admin jelszóval.
Ha diákként akkor vagy regisztrálunk egy újat vagy pedig wtcscq/asd.

Miután meglátogattuk az oldalt az üdvözlőkép fogad minket itt választhatunk hogy vagy bámuljuk és nem csinálunk semmit vagy pedig megpróbálunk belépni. Ha az adott látogató még nem regisztrált felhasználó akkor ezt megteheti ha a login képernyőre navigál és itt a registration gombra kattint.
![Kép felirata](docs/images/10.JPG)
Ha a neptun kód még nem foglalt akkor a regisztráció sikeres és átirányít a bejelentkezett felhasználókat üdvözlő képernyőre.

#### Diákként

Ha a bejelentkezett felhasználó diák akkor két lehetőség közül választhat a menüben. Vagy regisztrál meghirdetett tantárgyakra vagy pedig megnézi hogy milyen tárgyakat vett már fel.
![Kép felirata](docs/images/11.JPG)
![Kép felirata](docs/images/12.JPG)

#### Tanárként

Ha a bejelentkezett felhasználó tanár akkor két lehetőség közül választhat a menüben. Vagy létrehoz egy új tantárgyat vagy pedig az összes eddigi tantárgyat szerkeszti/megnézi.

![Kép felirata](docs/images/13.JPG)
![Kép felirata](docs/images/14.JPG)


