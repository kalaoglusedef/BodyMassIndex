const hesapla = (kg, boy) => {
  return kg / ((boy / 100) * (boy / 100));
};

$("#btn").click(function () {
  var kg = parseInt($("#weight").val());
  var boy = parseInt($("#height").val());
  const conclusion = hesapla(kg, boy);

  if (isNaN(kg) || isNaN(boy)) {
    alert(
      "Lütfen kilo ve boy değerlerinizi doğru giriniz. Örneğin: 50/160 gibi."
    );
  } else {
    $("#conclusion").slideDown();
    if (conclusion < 18.5) {
      $("#conclusion").text("Zayıfsınız.").addClass("alert alert-success");
    } else if (conclusion > 18.5 && conclusion < 24.9) {
      $("#conclusion").text("Kilonuz ideal. ").addClass("alert alert-success");
    } else if (conclusion > 25 && conclusion < 29.9) {
      $("#conclusion")
        .text("Fazla kilolusunuz.")
        .addClass("alert alert-warning");
    } else if (conclusion > 30 && conclusion < 39.9) {
      $("#conclusion").text("Obez.").addClass("alert alert-danger");
    } else {
      $("#conclusion")
        .text("İleri derecede obez (morbid obez).")
        .addClass("alert alert-danger");
    }
  }
});

$("#reset").click(function () {
  $("#weight").val(" ");
  $("#height").val(" ");
  $("#conclusion").slideUp();
});
