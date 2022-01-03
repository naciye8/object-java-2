/*
let model = "disaridan model"
let araba = {
    marka: "jaguar",
    model: "XS",
    modelYili: [2020, 2022],
    benzin: 10,
    info: function (params) {
        console.log(`markasi:${this.marka},modeli:${this.model} sahibi:${params}`)
    },
    setFuel(params) {
        this.benzin += params
    },
    getFuel(params) {
        console.log(params)
        araba.km = params;
        let result = araba.km * this.benzin
        console.log(this.benzin)
        return result
    },
}
console.log(araba.benzin)//10
console.log(araba["benzin"])//10
araba.info("mustafa")
araba.setFuel(15);
console.log(araba.benzin)
araba.getFuel(1000)
//console.log(araba.getFuel(1000));
console.log(araba)

let student = {
    name: "ali",
    surname: "turco",
    age: 25,
    get fullname() {
        if (this._name && this._model) {
            return `${this.name} ${this.surname}`;

        } else {
            return 'Missing name or surname';
        }
    },
    set ageUpdate(num) {
        if (this.age > 24) {
            this.age += num;
            return this.age += num
        } else {
            console.log("he is young")
        }
    }

}
document.write(student.fullname)
student.ageUpdate = 4;
console.log(student.age)
*/

//destructuring ve spreading
//spread

let a =[5,3,6];
let b =[...a,7]//...a adaki elmanlari b'ye ekler yani b=[5,3,6,7]
console.log(b)

let student={
    name:"ali",
    surname:"turco",
    age:25,
}
/*let newStu={...student,surname:"deli",ders:"math"}
console.log(newStu)
newStu.name="mehmet"
console.log(student)

let copyStu=student;
copyStu.surname="yeni";
console.log(student)*/

//destruct
const first=a[0];
console.log(first)
const [ilk,ikinci,ucuncu]=a
console.log(ilk,ikinci,ucuncu)
const[x, , ,y]=b
console.log(x, y)

//klasik yol
let ilkisim=student.name;
console.log(ilkisim)
console.log(student.name)

const{name,surname,age}=student
console.log(name,surname,age)

const rectangle={
    width:20,
    height:10,
}
//isim degistirmek istenrse
const{width:w,height:h}=rectangle
console.log(w,h)
console.log(rectangle.width,rectangle.height)

function areaCalculation(obj){
    console.log(obj.width*obj.height)
}
areaCalculation(rectangle)

const rectangle2={
    width:30,
    height:8,
}
areaCalculation(rectangle2)

//fonksiyonicinde destruct

function areaCalc({width,height}){
    console.log(width*height)
}
areaCalc(rectangle2)
