// JavaScript source code for Jets Experiment
const DENSITY = 1 / 10; // As other units are in cm, so converting 10 mm to cm
const GRAVITY = 914;

//radius
function getRadius() {
    var formDiameter = document.getElementById('radius').value;
    return Number(formDiameter) / 2;
}
//area of jet
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
//discharge from jet
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
//force exerted on the jet
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
//partial force 
function forcee_jet() {
    var mass = Number(document.getElementById('mass').value);
    var forcee = mass * GRAVITY;
    return forcee;
}

function displayResult() {
    try {
        var force = force_jet();
        var forcee = forcee_jet();
        var error = error_jet(force, forcee);
        alert('Force of JET = '+ force + ' ' + 'Partial Force of JET= ' + forcee + ' Error Percentage= ' + error);
    } catch(error) {
        alert(error);
    }
}

// Error Percentage
function error_jet(jet_force, partial_force) {
    return (partial_force - jet_force)/100;
}


//force exerted on the jet
function force_jet_hemisphere() {
    try {
        var discharge = calculate_discharge();
        var area = calculate_area_jet();
        var velocity = discharge / area;
        force = 2 *  DENSITY * discharge * velocity;
        return force;
    } catch(error) {
        throw error;
    }
    
}

//for hemisphere result
function displayResultForHemisphere() {
    try {
        var force = force_jet_hemisphere();
        var forcee = forcee_jet();
        var error = error_jet(force, forcee);
        alert('Force of JET = '+ force + ' ' + 'Partial Force of JET= ' + forcee + ' Error Percentage= ' + error);
    } catch(error) {
        alert(error);
    }
}







