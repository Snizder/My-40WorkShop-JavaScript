const data=[ 
    "Python",
    "React",
    "Java",
    "TypeScript",
    "JavaScript",
    "Vs Code",
    "Next.js"
]
    

const search = document.getElementById('search');
const output = document.getElementById('output');


search.onkeyup=function(){
    let words =search.value;
    let results =[];
    if(words.length){
        results = data.filter((value)=>{
            return value.toLowerCase().includes(words.toLowerCase());
        });
    }
    if(results.length>0){
        const contents = results.map((value)=>{
            return "<li onclick=selectChoice(this)>"+value+"</li>"
        });
        output.innerHTML="<ul>"+contents.join("")+"</ul>"
    }else{
        output.innerHTML="";
    }
}

function selectChoice(word){
    search.value = word.innerHTML;
}