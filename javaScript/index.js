function showAns(id,arrowNum,quesNo) {
    var e = document.getElementById(id);
    var ar = document.getElementById(arrowNum);
    var ques=document.getElementById(quesNo);
    if(e.style.display == 'none')
    {
        e.style.display = 'block';
        ar.classList.add("arrow-focus");
        ques.classList.add("question-in-focus");
    }

    else{
        e.style.display = 'none';
        ar.classList.remove("arrow-focus");
        ques.classList.remove("question-in-focus");
    }
    
}
