// JavaScript source code for Jets Experiment
const DENSITY = 1 / 10; // As other units are in cm, so converting 10 mm to cm
const GRAVITY = 914;

function getRadius() {
    var formDiameter = document.getElementById('radius').value;
    return Number(formDiameter) / 2;
}

// function volume_jet() {
//     var volume;
//     var radius = getRadius();
//     volume = Math.PI * Math.pow(radius, 2) * h;
//     volume = volume.toFixed(4);
//     return volume_jet();
// }



function calculate_area_jet() {
    var area;
    try {
        var diameter = Number(document.getElementById('radius').value);
        diameter = Math.abs(diameter);
        area = (1 / 4) * Math.PI * diameter * diameter;
        return area;
        console.log(diameter);
    } catch (error) {
        throw error;
    }
}

function calculate_discharge() {
    try {
        var volume = Number(document.getElementById('volume').value);
        var time = Number(document.getElementById('time').value);
        var jet_discharge = volume / time;
        return jet_discharge;
    } catch (error) {
        throw (error);
    }

}

function force_jet() {
    try {
        var discharge = calculate_discharge();
        console.log(discharge);
        var area = calculate_area_jet();
        console.log('dis:: ' + discharge);
        var velocity = discharge / area;
        console.log('velocity:: ' + velocity);
        force = DENSITY * GRAVITY * velocity * velocity;
        console.log('force:: ', force);
        return force;
    } catch(error) {
        throw error;
    }
    
}

function forcee_jet() {
    var mass = Number(document.getElementById('mass').value);
    var forcee = mass * GRAVITY;
    return forcee;
}

function displayResult() {
    try {
        var force = force_jet();
        var forcee = forcee_jet();
        document.getElementById("force").innerHTML = force;
        document.getElementById("forcee").innerHTML = forcee;
        console.log('res');
        alert(force + ' ' + forcee);
    } catch(error) {
        console.log('err');
        alert(error);
    }
}

function error_jet() {
    var error = document.getElement('error').value;
    // var error=document.getElementById('
    // error= error.toFixed(4);
    document.getElementById("error").value = error;
}









