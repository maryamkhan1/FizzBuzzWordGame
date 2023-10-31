function runFizzBuzz(){
    const word = document.getElementById('word').value;
    const wordLength = word.length;


    let imagePath = '';

    if (wordLength % 3 == 0 && wordLength % 5 == 0){
        imagePath = 'FizzBuzz.jpg';
    } else if (wordLength % 3 == 0){
        imagePath = 'Fizz.jpg';
    } else if (wordLength % 5 == 0){
        imagePath = 'Buzz.jpg';
    }

    let resultElement;

    if (imagePath) {
        const image = document.createElement('img');
        image.src = imagePath;
        resultElement = image;
    } else{
        const message = document.createElement('p');
        message.textContext = `"${word}"`;
        resultElement = message;
    }

    const resultSection = document.getElementById('results');
    resultSection.innerHTML = '';
    resultSection.appendChild(resultElement);

}