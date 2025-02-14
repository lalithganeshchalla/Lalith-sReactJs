const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');
const decrementBtn = document.getElementById('decrement');

//comment
let counter = 0;

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', resetCounter);

function incrementCounter() {
    counter++;
    updatecounter();
}

function decrementCounter() {
    if(counter > 0)   
    counter--;
    updatecounter();
}

function resetCounter() {
    if(counter==0){
        alert("Counter is already zero");
        return;
    }


    counter = 0;
    updatecounter();
}

function updatecounter() {
    const counterValue = document.getElementById('count');
    counterValue.textContent = counter;
    if (counter > 10 && counter < 20 ) { 
        document.body.style.backgroundColor = "green"; 
    } else if (counter >= 20) { 
        document.body.style.backgroundColor = "rgb(169, 18, 224)"; 
        updatecounter(); // Call updatecounter again to update the displayed value 
        } else { 
            document.body.style.backgroundColor = "rgb(169, 18, 224)"; 
        }
    }

