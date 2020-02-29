function BoldText() {
    var txt = document.getElementById('TextArea1');
    if (txt.style.fontWeight != 'bold') {
        txt.style.fontWeight = 'bold';
    } else {
        txt.style.fontWeight = 'normal';
    }
}

function ItalicText() {
    var txt = document.getElementById('TextArea1');
    if (txt.style.fontStyle != 'italic') {
        txt.style.fontStyle = 'italic';
    } else {
        txt.style.fontStyle = 'normal';
    }
}

function UnderlineText() {
    var txt = document.getElementById('TextArea1');
    if (txt.style.textDecoration != 'underline') {
        txt.style.textDecoration = 'underline';
    } else {
        txt.style.textDecoration = 'none';
    }
}

function TextSize() {
    var txt = document.getElementById('TextArea1');
    if (document.getElementById('20').selected == true) {
        txt.style.fontSize = "20px";
    } else if (document.getElementById('30').selected == true) {
        txt.style.fontSize = "30px";
    } else if (document.getElementById('40').selected == true) {
        txt.style.fontSize = "40px";
    }
}

function TextFont() {
    var txt = document.getElementById('TextArea1');
    if (document.getElementById('Ari').selected == true) {
        txt.style.fontFamily = "arial";
    } else if (document.getElementById('Cal').selected == true) {
        txt.style.fontFamily = "calibri";
    } else if (document.getElementById('Tim').selected == true) {
        txt.style.fontFamily = "timesnewroman";
    }
}


$("#Img01").mouseenter(function() {
    $("#btn01").css("display", "block");
});
$("#Img01").mouseleave(function() {
    $("#btn01").css("display", "none");
});

$("#Img02").mouseenter(function() {
    $("#btn02").css("display", "block");
});
$("#Img02").mouseleave(function() {
    $("#btn02").css("display", "none");
});

$("#Img03").mouseenter(function() {
    $("#btn03").css("display", "block");
});
$("#Img03").mouseleave(function() {
    $("#btn03").css("display", "none");
});

$("#Img04").mouseenter(function() {
    $("#btn04").css("display", "block");
});
$("#Img04").mouseleave(function() {
    $("#btn04").css("display", "none");
});

$("#Img05").mouseenter(function() {
    $("#btn05").css("display", "block");
});
$("#Img05").mouseleave(function() {
    $("#btn05").css("display", "none");
});

$("#Img06").mouseenter(function() {
    $("#btn06").css("display", "block");
});
$("#Img06").mouseleave(function() {
    $("#btn06").css("display", "none");
});

$("#Img07").mouseenter(function() {
    $("#btn07").css("display", "block");
});
$("#Img07").mouseleave(function() {
    $("#btn07").css("display", "none");
});

$("#Img08").mouseenter(function() {
    $("#btn08").css("display", "block");
});
$("#Img08").mouseleave(function() {
    $("#btn08").css("display", "none");
});

$("#Img09").mouseenter(function() {
    $("#btn09").css("display", "block");
});
$("#Img09").mouseleave(function() {
    $("#btn09").css("display", "none");
});

$("#btn01").click(function() {
    $('.modal-content-01').modal()
})

$("#btn02").click(function() {
    $('.modal-content-02').modal()
})

$("#btn03").click(function() {
    $('.modal-content-03').modal()
})
$("#btn04").click(function() {
    $('.modal-content-04').modal()
})
$("#btn05").click(function() {
    $('.modal-content-05').modal()
})
$("#btn06").click(function() {
    $('.modal-content-06').modal()
})
$("#btn07").click(function() {
    $('.modal-content-07').modal()
})
$("#btn08").click(function() {
    $('.modal-content-08').modal()
})
$("#btn09").click(function() {
    $('.modal-content-09').modal()
})