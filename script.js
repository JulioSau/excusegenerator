window.onload= function() {wordrandom()};


function numberRandom(){
    return Math.floor((Math.random() * 5) + 0);
};

function wordrandom(){
    var excuse ="";

    let who =["Goku","Einstein","Mi loro","Papa Noel","El bebé"];
    let action =["se fumó","compró","destruyó","robó","regaló"];
    let what =["mis pastillas","el orégano","mis calcetines","mi alegría","mis sueños"];
    let when =["cuando más lo necesitaba","en el confinamiento","anoche","cuando dormía","cuando nadie miraba"];

    var palabra1 = who[numberRandom()];
    var palabra2 = action[numberRandom()];
    var palabra3 = what[numberRandom()];
    var palabra4 = when[numberRandom()];

    document.write(excuse.concat(palabra1," ",palabra2," ",palabra3," ",palabra4));
}


