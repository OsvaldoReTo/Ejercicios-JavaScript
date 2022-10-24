/**
 * Clase person que representa  a una persona y su información
 */
class person{
    name = "";
    email = "";
    age = 15;
    resume = "";
    id = 0;
    static total = 0;
    constructor (name, email, age, resume) {
        this.name = name.toUpperCase();
        this.email =  email.toLowerCase();
        this.age = (age<18)?18:age;
        this.resume = resume;
        person.total++;
        this.id = person.total;
    }//constructor

    printInfo (div){
       // console.log(this.name, this.email,this.age, this.resume);
       div.innerHTML += `<div class="card text-black bg-light mb-3" id ="card_${this.id}" style="max-width: 18rem;">
       <div class="card-header">${this.id}.-${this.name}</div>
       <div class="card-body">
         <h5 class="card-title">${this.email}</h5>
         <p class="card-text">${this.resume}</p>
         <p class="card-text"><em>${this.age}</em></p>
       </div>
     </div>`;
    } //método printInfo

    static printTotal = function (div){
        // Crear el método printTotal que debe de escribir un alert de 
        // Bootstrap con el número total de personas al final de los cards
        div.innerHTML += `<div class="alert alert-success" role="alert">
        El número de personas registradas es: ${person.total}
      </div>`
    }

} //class person

class employee extends person{
    department = "";
    salary = 0.0;
    constructor(name, email, age, resume, department, salary){
        super(name, email, age, resume)
        this.department = department;
        this.salary = salary;
    } //constructor

    printInfo(div){
        super.printInfo(div);
        let cardbody =  document.getElementById(`card_${this.id}`)
        cardbody.getElementsByClassName("card-body")[0];
        cardbody.insertAdjacentHTML("beforeend", `<div class="card-body"><p class="card-text"> ${this.department}</p></div>`)
        cardbody.insertAdjacentHTML("beforeend",`<div class="card-body"><p class="card-text"><strong>$ ${this.calculateSalary()}</strong></p></div>`)

    }
    calculateSalary(){
        return ((this.salary*21)*1.16).toFixed(2);
    }
}; //class employee


 class manager extends employee{
    numberOfEmployees = 0;
    bonus = 0.0 ;
    constructor (name, email, age, resume, department, salary, numberOfEmployees, bonus){
        super(name, email, age, resume, department, salary)
        this.numberOfEmployees = numberOfEmployees;
        this.bonus = bonus;
    }

    printInfo(div){
        super.printInfo(div);
        let cardbody =  document.getElementById(`card_${this.id}`)
        cardbody.getElementsByClassName("card-body")[0];
        cardbody.insertAdjacentHTML("beforeend", `<div class="card-body"><p class="card-text"> ${this.numberOfEmployees}</p></div>`)
        cardbody.insertAdjacentHTML("beforeend",`<div class="card-body"><p class="card-text"><strong>$ ${this.bonus}</strong></p></div>`)
    }
    calculateSalary(){
        return (parseFloat(super.calculateSalary())+
        (this.numberOfEmployees*this.bonus)).toFixed(2);
    }
} 

let divCard = document.getElementById("divCard")
let divAlert = document.getElementById("divAlert")
let payroll = []
/* console.log(person.total); */

payroll.push(new employee("Alam", "ALAM@hotmail.com", 23, "Alam undefined","Soporte", 350.25))
payroll.push(new employee("Mafer", "Mafer@Yahoo.com.mx", 15, "Mafer","Developer", 550))
payroll.push(new employee("Nohemí", "nohemi@gmail.com", 20, "Nohemí Full Stack Development", "Development",460))
payroll.push(new employee("Gustavo", "gus@gmail.com", 25, "Gus Developer", "Soporte", 420))
payroll.push(new manager("Bryan", "bryan@hotmail.com", 20, "CEO", "ALL", 2500, 25, 1500)) 
/* console.log(alam.name, alam.email,alam.age);
console.log(mafer.name, mafer.email,mafer.age); */
/* alam.printInfo(divCard);
mafer.printInfo(divCard);
nohemi.printInfo(divCard);
gustavo.printInfo(divCard) */
payroll.forEach(element => {
    element.printInfo(divCard);
});
person.printTotal(divAlert);
console.log(person.total); 