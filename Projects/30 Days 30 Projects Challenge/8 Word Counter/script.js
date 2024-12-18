function countwords(sentence){
  let wordcount = 0;

  sentence = sentence.trim();

  for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === " " && sentence[i - 1] !== " "){
      wordcount++;
    }
  }

  return sentence.length > 0 ? wordcount + 1 : 0;

}

let submit = document.querySelector('#submit-button');
submit.addEventListener('click', function(){

 let wordValue = document.getElementById("input-display").value;
  let totalWords = countwords(wordValue);

  let output = document.querySelector('.output-container');

  output.textContent = `WORDS : ${totalWords}`;
  console.log(output);
 });

