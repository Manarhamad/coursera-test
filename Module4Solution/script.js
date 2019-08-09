
/*
My Solution 4 assignment :
Expected output:
Hello Manar
Good Bye Jacob
Good Bye Jane
Good Bye John
Hello Yaakov
Hello Lora
Hello Arnold
Hello Clodia
Hello Lauren
Good Bye Jackie
*/


(function() {
    var names = ["Manar", "Jacob", "Jane", "John", "Yaakov", "Lora", "Arnold", "Clodia", "Lauren", "Jackie"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();