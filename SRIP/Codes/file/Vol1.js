// JavaScript source code for Jets Experiment
const DENSITY = 1 / 10; // As other units are in cm, so converting 10 mm to cm
const GRAVITY = 914;

function getRadius() {
    var formDiameter = document.getElementById('radius').value;
    return Number(formDiameter) / 2;
}

function calculate_area_jet() {
    var area;
    try {
        var diameter = Number(document.getElementById('radius').value);
        diameter = Math.abs(diameter);
        area = (1 / 4) * Math.PI * diameter * diameter;
        return area;
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
        var area = calculate_area_jet();
        var velocity = discharge / area;
        force = DENSITY * GRAVITY * velocity * velocity;
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
        alert(force + ' ' + forcee);
    } catch(error) {
        alert(error);
    }
}

function error_jet() {
    var error = document.getElement('error').value;
    document.getElementById("error").value = error;
}









