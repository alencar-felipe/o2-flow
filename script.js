function notNumber(n){
    n = parseInt(n);
    return ! (typeof n == 'number' && !isNaN(n) && isFinite(n));
 }

function onLoad() {
    fio2 = $("#fio2")[0];
    totalFlow = $("#totalFlow")[0];

    fio2.addEventListener('change', calc);
    fio2.addEventListener('keyup', calc);
    fio2.addEventListener('input', calc);
    
    fio2.addEventListener('change', calc);
    totalFlow.addEventListener('keyup', calc);
    fio2.addEventListener('input', calc);
    
    calc();
}

function calc() {
    fio2 = $("#fio2")[0];
    totalFlow = $("#totalFlow")[0];
    o2Flow = $("#o2Flow")[0];
    airFlow = $("#airFlow")[0];

    valid = true;

    fio2.value.replace(",", ".");
    totalFlow.value.replace(",", ".");

    if(fio2.value < 0.21 || fio2.value > 1 || notNumber(fio2.value)) {
        fio2.classList.add("is-invalid");
        valid = false;
    } else {
        fio2.classList.remove("is-invalid");
    }

    if(totalFlow.value < 0 || notNumber(totalFlow.value)) {
        totalFlow.classList.add("is-invalid");
        valid = false;
    } else {
        totalFlow.classList.remove("is-invalid");
    }

    if(!valid) {
        o2Flow.value = " ";
        airFlow.value = " ";
        return;
    }

    o2Flow.value = ((fio2.value - 0.21) * totalFlow.value / 0.79).toFixed(2);
    airFlow.value = (totalFlow.value - o2Flow.value).toFixed(2);
}
