// Write a “person” class to hold all the details.


function Person(firstName,lastName,emailAdd,DOB,gender,educationQualification,mobileNum,address,city,state,countryName,zipCode){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAdd = emailAdd;
    this.DOB = DOB;
    this.gender = gender;
    this.educationQualification = educationQualification;
    this.mobileNum = mobileNum;
    this.address = address;
   
    this.details = function(){
        console.log(`My Name is ${this.firstName+" "+this.lastName},`,`My Email Address is ${this.emailAdd},`,`I Just Born On ${this.DOB},`,`My Gender is ${this.gender},`,`I have Completed My Bachelor Degree ${this.educationQualification},`,
        `My Mobile Number is ${this.mobileNum},`,`My Native Address is : ${this.address}.`);
    }
}

let personDetails = new Person("Maya","Yadhav", "mayayadhav@gmail.com","17 May 1990","Female","Computer Science and Engineering","9876543210", "111, Park Street, Melbourne, Victoria, Australia, 44001");
personDetails.details();


