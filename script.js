const wrapper = document.querySelector(".wrapper"),
searchInput = wrapper.querySelector("input"),
// Synonyms= wrapper.querySelector(".synonyms .list"),
infoText = wrapper.querySelector(".info-text"); 

function data(result,word)
{   if(result.title)
{
    infoText.innerHTML=`Cannot find the meaning of <span>"${word}"</span> try searching again or look it up on the web`;
}
else{
    console.log(result);
    wrapper.classList.add("active");
    let definitions = result[0].meanings[0].definitions[0];
    example=result[0].meanings[1].definitions[0].example;
    synonyms = result[0].meanings[0].synonyms;
    phonetics= `${result[0].meanings[0].partOfSpeech}  ${result[0].phonetics[0].text}`;
    document.querySelector(".word p").innerText = result[0].word;
    document.querySelector(".word span").innerText = phonetics;


    document.querySelector(".meaning span").innerText = definitions.definition;
    document.querySelector(".example span").innerText = definitions.example;
    // Synonyms.innerHTML="";
    // document.querySelector(".synonyms span").innerText = definitions.;

    // document.querySelector(".synonyms span").innerText =synonyms;
    // if(definitions.synonyms[0] === undefined)
    // {
    //     Synonyms.parentElement.style.display="none";
    // }
    // else{
    //     Synonyms.parentElement.style.display="block";
    // for(let i=0;i<5;i++)
    // {
    //     let tag= `<span>${definitions.synonyms[i]},</span>`;
    //     Synonyms.insertAdjacentHTML("beforeend",tag);
        
    // }
}

}
    

function fetchApi(word){
infoText.style.color = "#000";
infoText.innerHTML=`Searching the meaning of <span>"${word}"</span>`;
let url= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
fetch(url).then(res => res.json()).then(result => data(result,word));
}





searchInput.addEventListener("keyup", e =>
{
    if(e.key=== "Enter" && e.target.value)
    fetchApi(e.target.value);

}
);
