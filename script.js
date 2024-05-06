// 227006072 faiza naifa fadhilah
// Fungsi untuk Enkripsi
function encrypt() {
  var inputText = document.getElementById("inputText").value;
  var key = parseInt(document.getElementById("key").value) || 0;
  var outputText = "";
  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);
    outputText += String.fromCharCode(charCode + key); // menggeser kode karakter sebesar nilai kunci menggunakan operasi penambahan
  }
  document.getElementById("outputText").value = outputText;
}

// Fungsi untuk Dekripsi
function decrypt() {
  var inputText = document.getElementById("inputText").value;
  var key = parseInt(document.getElementById("key").value) || 0;
  var outputText = "";
  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);
    outputText += String.fromCharCode(charCode - key); // menggeser kode karakter ke belakang sebesar nilai kunci menggunakan operasi pengurangan
  }
  document.getElementById("outputText").value = outputText;
}
