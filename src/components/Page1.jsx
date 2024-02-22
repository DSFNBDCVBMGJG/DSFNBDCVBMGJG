import React from 'react'

const Page1 = () => {

    function calculate(){
        var weight = document.querySelector("#weightval")
        var height = document.querySelector("#heightval")
        var bmi = document.querySelector("#bmi")
        var bmicategory = document.querySelector("#bmicategory")
        var statusBMI = document.querySelector("#status")
        var weightdisplay = document.querySelector("#weight")
        var heightdisplay = document.querySelector("#height")

        weightdisplay.innerHTML = weight.value
        heightdisplay.innerHTML = height.value

        var x = +weight.value
        var y = +height.value
        var result = x / (y * y)
        bmi.innerHTML = result


        if (result < 18.5){ 
            bmicategory.innerHTML = "Underweight";
            statusBMI.innerHTML = "Not-Qualified";    
        }else if((result >= 18.5) && (result <= 24.99)){
            bmicategory.innerHTML = "Normal Weight";
            statusBMI.innerHTML = "Qualified"; 
        }else if((result >= 25) && (result <= 29.99)){
            bmicategory.innerHTML = "Overweight";
            statusBMI.innerHTML = "Qualified"; 
        }else if(result >= 30){
            bmicategory.innerHTML = "Obese";
            statusBMI.innerHTML = "Not-Qualified"; 
        }
    }

  return (
    <>
    <main>
    <div className="container">
           <div className="row mt-5">
                <div className="col-md-12">
                    <h1>Instructions</h1>
                    <hr/>
                    <p>On this World Skills competitor page, individuals can determine their BMI for competition eligibility by inputting their height and weight. Calculate the BMI using the provided formula and then create a script to categorize the BMI into the respective types. Additionally, the script should determine if the competitor meets the qualification criteria. Refer to the formula and representations below. </p>
                    <h3>BMI Categories:</h3>
                    <hr/>
                    <p>Underweight =&lt; 18.5 <span className="text-danger">Not-Qualified</span></p>
                    <p>Normal weight = 18.5–24.9 <span className="text-success">Qualified</span></p>
                    <p>Overweight = 25–29.9 <span className="text-warning">Qualified</span></p>
                    <p>Obesity = BMI of 30 or greater <span className="text-danger">Not-Qualified</span></p>

                    <h3>Formula</h3>
                    <hr/>
                    <p>BMI = weight(Kg) / height(m) * height(m)</p>
                    <hr/>
                </div>
                <div className="col-md-6 ">
                    <div className="border p-3 rounded bg-warning">
                        <h2>BMI Calculator</h2>
                        <hr/>

                        <div className="mt-2">
                            <label for="weight">Weight</label>
                            <input type="number" id="weightval" className="form-control"/>
                        </div>
                        <div className="mt-2">
                            <label for="height">Height</label>
                            <input type="number" id="heightval" className="form-control"/>
                        </div>
                        <div className="mt-2">
                            <button onClick={calculate} className="btn btn-success" id="calculate">Calculate</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                   <div className="border rounded p-3 bg-success text-white">
                        <h3>Calculation</h3>
                        <hr/>
                        <p className="text-warning">BMI = <span id="weight">0</span> Kg / <span id="height">0</span> m<sup>2</sup></p>

                        <h4>BMI = <span id="bmi">0.0</span></h4>
                        <h4>BMI Category = <span className="text-info" id="bmicategory">Unknown</span></h4>
                        <h4>Status = <span className="text-info" id="status">Unknown</span></h4>
                   </div>
                </div>
           </div>
        </div>
    </main>
    </>
  )
}

export default Page1