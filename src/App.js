import './App.css';

function App() {
  return (
            < div class='registration'>
            <h1>Registration Form</h1>
            <div class="mb-3 registration">
            <label for="formGroupExampleInput" class="form-label">First Name</label>
            <input type="text" class="form-control w-25 " id="formGroupExampleInput" placeholder="Enter First Name" />
           </div>
           <div class="mb-3">
           <label for="formGroupExampleInput" class="form-label ">Last Name</label>
          <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Enter Last Name" />
          </div>
          <div class="mb-3">
           <label for="formGroupExampleInput" class="form-label ">Father Name</label>
          <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Enter Father Name" />
          </div>
          <div class="mb-3">
           <label for="formGroupExampleInput" class="form-label ">Mother Name</label>
          <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Enter Mother Name" />
          </div>
          <div class="mb-3">
           <label for="formGroupExampleInput" class="form-label ">Mobile No.</label>
          <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Enter Mobile No." />
          </div>
          <div class="mb-3">
           <label for="formGroupExampleInput" class="form-label ">Email Id</label>
          <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Email address" />
          </div>
          <div>
          <div>
           <label for="formGroupExampleInput" class="form-label ">Gender</label>
          <input type="radio" name='gender'id="formGroupExampleInput"/>Male
          <input type="radio" name='gender' id="formGroupExampleInput"/>FeMale
          <input type="radio" name='gender'id="formGroupExampleInput"/>Others
          </div>
           </div>
           <div class="mb-3">
           <label for="formGroupExampleInput" class="form-label ">College Name</label>
          <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Enter College Name" />
          </div>
          <div class="mb-3">
           <label for="formGroupExampleInput" class="form-label ">Branch</label>
          <input type="text" class="form-control w-25" id="formGroupExampleInput" placeholder="Enter Branch" />
          <div></div>
          <button class='submit'>submit</button>
          <button class='signup'>signUp</button>
          <button class='login'>Login</button>
        </div>
    </div>
  );
}
export default App;
