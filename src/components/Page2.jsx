import React from 'react'

const Page2 = () => {

        function submit (){
            var names = document.getElementById('name')
            var age = document.getElementById('age')
            var country = document.getElementById('country')
            var skill = document.getElementById('skill')

            var itnsa = document.getElementById('itnsa')
            var wt = document.getElementById('wt')
            var itssb = document.getElementById('itssb')
            var gdt = document.getElementById('gdt')

            if(skill.value == 'IT Network System Administration'){

                itnsa.appendChild(generatetable())
            }else if(skill.value == 'Graphic Design Technology'){
               gdt.appendChild(generatetable())
            }else if(skill.value == 'Web Technology'){
                wt.appendChild(generatetable())
            }else{
               itssb.appendChild(generatetable())
            }

            function generatetable(){
                var tr = document.createElement('tr')
                var td1 = document.createElement('td')
                td1.innerHTML = names.value
                var td2 = document.createElement('td')
                td2.innerHTML = age.value
                var td3 = document.createElement('td')
                td3.innerHTML = country.value

                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)

                return tr
            }

        }
  return (
    <>
     <main>
        <div className="container">
           <div className="row mt-5">
                <div className="col-md-12">
                    <h1>World Skills Registration</h1>
                    <hr/>
                    <p>On this page, participants are required to register their applications for the World Skills Competition as competitors. You need to organize and categorize them based on their selected skills area.</p>

                </div>
                <div className="col-md-12 ">
                    <div className="border p-3 rounded bg-dark text-white">
                        <h2>Registration Form</h2>
                        <hr/>
                        <div className="mt-2">
                            <label for="name">Name</label>
                            <input type="text" id="name" className="form-control"/>
                        </div>
                        <div className="mt-2">
                            <label for="age">Age</label>
                            <input type="number" id="age" className="form-control"/>
                        </div>
                        <div className="mt-2">
                            <label for="country">Country</label>
                            <input type="number" id="country" className="form-control"/>
                        </div>
                        <div className="mt-2">
                            <label for="skill">Skill Area</label>
                            <select id="skill" className="form-control">
                                <option value="IT Network System Administration">IT Network System Administration</option>
                                <option value="Graphic Design Technology">Graphic Design Technology</option>
                                <option value="Web Technology">Web Technology</option>
                                <option value="IT Software Solution for Business">IT Software Solution for Business</option>
                            </select>
                        </div>
                        <div className="mt-2">
                            <button onClick={submit} className="btn btn-warning" id="submit">Submit</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-5">
                   <div className="border rounded p-3">
                        <h3>IT Network System Administration</h3>
                        <hr/>
                        <table className="table table-bordered table-stripe">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody id="itnsa">

                            </tbody>
                        </table>
                   </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="border rounded p-3">
                         <h3>Graphic Design Technology</h3>
                         <hr/>
                         <table className="table table-bordered table-stripe">
                             <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Country</th>
                                </tr>
                             </thead>
                             <tbody id="gdt">

                             </tbody>
                         </table>
                    </div>
                 </div>
                 <div className="col-md-6 mt-5">
                    <div className="border rounded p-3">
                         <h3>Web Technology</h3>
                         <hr/>
                         <table className="table table-bordered table-stripe">
                             <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Country</th>
                                </tr>
                             </thead>
                             <tbody id="wt">

                             </tbody>
                         </table>
                    </div>
                 </div>
                 <div className="col-md-6 mt-5">
                    <div className="border rounded p-3">
                         <h3>IT Software Solution for Business</h3>
                         <hr/>
                         <table className="table table-bordered table-stripe">
                             <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Country</th>
                                </tr>
                             </thead>
                             <tbody id="itssb">

                             </tbody>
                         </table>
                    </div>
                 </div>
           </div>
        </div>
    </main>
    </>
  )
}

export default Page2
