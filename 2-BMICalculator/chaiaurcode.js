const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    // ** IMP : height and weight ko form ke bahar nahi likhna hai, nahi to empty values aayengi variables main, cause page khulte hi ye code run ho jata hai 
    // and since form me kuch nahi fill kia to empty values variable m chale jayegi

    if(height === '' || isNaN(height) || height <= 0){
        results.innerHTML = `Please provide a valid height! ${height}`;
    }else if(weight === '' || isNaN(weight) || weight <= 0){
        results.innerHTML = `Please provide a valid weight! ${weight}`;
    }else{
        // calculate BMI
       const bmi = (weight / ((height * height)/10000)).toFixed(2); // height in cm, so divide by 10000
        // now showing results
        results.innerHTML = `<span>BMI : ${bmi}</span>`;

        const bmi_guideline = document.createElement('p');
        if(bmi < 18.6){
            bmi_guideline.innerHTML = `You are underweight.`;
        }else if (bmi > 24.9){
            bmi_guideline.innerHTML = `You are overweight.`;
        }else{
            bmi_guideline.innerHTML = `You have a healthy weight.`;
        }
        console.log(bmi_guideline);
        document.getElementById('results').appendChild(bmi_guideline);
    }

    // in else part you could even write simply:
    /*
        else{
            const bmi = (weight / ((height * height)/10000)).toFixed(2); // height in cm, so divide by 10000
            if(bmi <18.6){
                results.innerHTML = `<span>BMI : ${bmi}</span> <p>You are underweight.</p>`;
            } ese hi ........... baki dono ka ...... 
        }
    */

});











