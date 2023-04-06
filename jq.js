let leutesSzam = 0;

let inputValue;

$(document).ready(function () {
    $("#divElrejto").click(function () {
        $("#div1").fadeOut()
    })
    $("#divMegjelenito").click(function () {
        $("#div1").fadeIn()
    })
    $("#textInput1").keypress(function () {
        $("#leutesSzamlalo").text(+ (++leutesSzam))
    })
    $("#inputValueToggle").click(function () {
        if ($("#textInput2").val()) {
            inputValue = $("#textInput2").val();
            $("#textInput2").val("")
        } else {
            $("#textInput2").val(inputValue)
        }
    })
    $("#numInput").change(function () {
        if ($("#numInput").val() < 0) {
            $("#halmazallapot").text("szilárd (jég)");
        } else if ($("#numInput").val() > 100) {
            $("#halmazallapot").text("légnemű (gőz)");
        } else {
            $("#halmazallapot").text("folyékony (víz)");
        }

    })
    $("#numInput").keyup(function () {
        if ($("#numInput").val() < 0) {
            $("#halmazallapot").text("szilárd (jég)");
        } else if ($("#numInput").val() > 100) {
            $("#halmazallapot").text("légnemű (gőz)");
        } else {
            $("#halmazallapot").text("folyékony (víz)");
        }

    })
})