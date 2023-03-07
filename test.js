function outsideTheContinent(){
    // let paysOutsideTheContinent = [];
    Object.values(all_countries).forEach(country =>{
        country.borders.forEach(unPaysFrontalier => {
            if (unPaysFrontalier.region != country.region){
                // paysOutsideTheContinent.push(country);
                console.log(country.toString());
            }
        });
    })
    // console.log(paysOutsideTheContinent);
}

console.log('\noutsideTheContinent');
outsideTheContinent();

function moreNeighbors() {
    let max = Object.keys(all_countries)[0];
    let same = [];

    Object.values(all_countries).forEach(country => {
        if (country.borders.length > all_countries[max].borders.length) {
            max = country.codeAlpha3;
            same = [country];
        }
        else if (country.borders.length === all_countries[max].borders.length) {
            same.push(country);
        }
    });

    same.forEach((value) => {
        console.log(value.toString());
    });
}

console.log('\nmoreNeighbors');
moreNeighbors();

function neighborless(){
    // let noNeighbors = [];
    Object.values(all_countries).forEach(country =>{
        if (country.borders.length == 0){
            // noNeighbors.push(country);
            console.log(country.toString());
        }
    })
    // console.log(noNeighbors);
}

console.log('\nneighborless');
neighborless();

function moreLanguages() {
    let max = Object.keys(all_countries)[0];
    let same = [];

    Object.values(all_countries).forEach(country => {
        if (country.languages.length > all_countries[max].languages.length) {
            max = country.codeAlpha3;
            same = [country];
        }
        else if (country.languages.length === all_countries[max].languages.length) {
            same.push(country);
        }
    });

    same.forEach((value) => {
        value.languages.forEach((language) => {
            console.log(language.toString());
        });
    });
}

console.log('\nmoreLanguages');
moreLanguages();

// function with