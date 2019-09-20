 playaipsum = {

  capitalize: function(string){
    return string[0].toUpperCase().toUpperCase() + string.slice(1);
  },

  getRandomNumber: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getSentence: function(paragraph, sentence){
    var terms = [];
    var numberOfTerms = this.getRandomNumber(8, 15);
    if(paragraph == 0 && sentence == 0){
      terms.push("Lorem Ipsum");
      numberOfTerms++;
    }
    while(terms.length < numberOfTerms){
      var term = glossary[this.getRandomNumber(0, glossary.length - 1)];
      if(!terms.length){
        term = this.capitalize(term);
      }
      if(terms.indexOf(term) == -1){
        terms.push(term);
      }
    }
    return terms.join(" ") + ".";
  },

  generate: function(paragraphs){
    var ipsum = [];
    paragraphs = (typeof(paragraphs) == 'number'  && paragraphs > 0 && paragraphs <= 100 ? paragraphs : 5);
    for(var i=0; i<paragraphs; i++){
      var sentences = [];
      for(var s=0; s<5; s++){
        sentences.push(this.getSentence(i, s));
      }
      ipsum.push(sentences.join("  "));
    }
    $("#ipsum").html( "<p>" + ipsum.join("</p><p>") + "</p>");
  },

  init: function(){
    var self = this;
    this.generate();
    $('#ipsum_form').submit(function(evt){
      evt.preventDefault();
      self.generate(parseInt($('#paragraphs').val()));
    });
  }
};

$(document).ready(function(){
  playaipsum.init();
});
