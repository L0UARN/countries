class Country {
    constructor(raw) {
        this.codeAlpha3 = raw["alpha3Code"];
        this.superficie = raw["area"];

        if ("borders" in raw) {
            this.paysFrontaliers = raw["borders"];
        }
        else {
            this.paysFrontaliers = [];
        }

        this.capitale = raw["capital"];
        this.drapeau = raw["flags"]["svg"];
        this.nom = raw["translations"];
        this.population = raw["population"];
        this.topLevelDomain = raw["topLevelDomain"];
        this._languages = raw["languages"].map(l => l["iso639_2"]);

        if ("currencies" in raw) {
            this._currencies = raw["currencies"].map(c => c["code"]);
        }
        else {
            this._currencies = [];
        }
    
        this.region = raw["region"];
    }

    toString() {
        return `Country({codeAlpha3: ${this.codeAlpha3}})`;
    }

    get popDensity() {
        return this.population / this.area;
    }

    get borders() {
        return this.paysFrontaliers.map((value) => {
            return all_countries[value];
        });
    }

    get languages() {
        return this._languages.map((language) => {
            return all_languages[language];
        });
    }

    get currencies(){
        return this._currencies.map((currency)=>{
            return all_currencies[currency];
        });
    }
}

let all_countries = {};
let all_languages = {};
let all_currencies = {};

function fill_db() {
    COUNTRIES.forEach((value) => {
        all_countries[value["alpha3Code"]] = new Country(value);
        
        value["languages"].forEach((lang) => {
            if (!(lang["iso639_2"] in all_languages)) {
                all_languages[lang["iso639_2"]] = new Language(lang);
            }
        });

        if ("currencies" in value) {
            value["currencies"].forEach((currencies)=>{
                if (!(currencies.code in all_currencies)) {
                    all_currencies[currencies.code] = new Currency(currencies);
                } 
            });
        }
    });
}

class Currency{
    constructor(raw){
        this.code = raw["code"];
        this.name = raw["name"];
        this.symbole = raw["symbole"];
    }
    
    toString() {
        return `Currency({code: ${this.code}, name: ${this.name}, symbole: ${this.symbole}})`;
    }
}

class Language {
    constructor(raw) {
        this.code = raw["iso639_2"];
        this.nom = raw["name"];
    }
    
    toString() {
        return `Language({code: ${this.code}, nom: ${this.nom}})`;
    }
}

fill_db();