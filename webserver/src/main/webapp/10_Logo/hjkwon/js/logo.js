var xpos = [];

function ResetWorldMap(index) {
    xpos[index] = 0;
}

function MoveWorldMap(index) {
    if ( xpos[index] == null ) {
        xpos[index] = 0;
    }
    xpos[index] -= 0.25;
    var WorldMap = document.getElementsByClassName("LogoBox");
    WorldMap[index].style['background-position'] = xpos[index] + "px";
    setTimeout( function() { MoveWorldMap(index) }, 25 );
}

function Noise( index ) {
    var NoiseBox = document.getElementsByClassName("NoiseBox");
    if ( index >= 0 && index <= 2 ) {
        NoiseBox[index].style['animation'] = "Noise 250ms 1";
        index++;
    }
    else {
        index = 0;
        for ( var i = 0; i < NoiseBox.length ; i++ ) {
            NoiseBox[i].style['animation'] = "";
        }
    }
    setTimeout( function() { Noise(index) }, 1000 );
}

function AddTextStrings( ClassName, value ) {
    for (var i = 0; i < value.length; i++) {
        document.write("<span class=" + ClassName + ">" + value.charAt(i) + "</span>");
    }
}

function RainbowWave( ClassName, Grow, index, duration, tick ) {
    var AddedStrings = document.getElementsByClassName(ClassName);
    if ( index >= 0 && index < AddedStrings.length ) {
        if ( Grow ) {
            AddedStrings[index].style['animation'] = "TextBox1Grow " + duration + "ms 1";
        }
        else {
            AddedStrings[index].style['animation'] = "TextBox1 " + duration + "ms 1";
        }
        index++;
    }
    else if ( index < AddedStrings.length + ( duration / tick ) ) {
        index++;
    }
    else {
        index = 0;
        for ( var i = 0; i < AddedStrings.length ; i++ ) {
            AddedStrings[i].style['animation'] = "";
        }
    }
    setTimeout( function() { RainbowWave(ClassName, Grow, index, duration, tick) }, tick );
}