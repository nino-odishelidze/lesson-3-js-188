

davaleba (1)

let array0 = [1,2,3,4,5];

for (let i of array0.reverse()){
    console.log(i)
}

davaleba(2)

let array = [1,2,3,4,5]; 

for( let i of array){
    if( i === 5 ){
        console.log(i)
        break
    }
}

davaleba(3)

let array2 = [1, 2, 3, 7, 6, 9];

for( let i of array2){
    if( i === 7){     
        continue     
    }
    console.log(i);
}

davaleba(4)

console.log(8=="8");

რადგან ორი ტოლობა უბრალოდ მსუბუქი შედარებაა და სამი ტოლობა უფრო ზუსტია და თან სტრინგი გადაიყვანა ნამბერად
task(5)

let array3= [1, 2, 4,8, 7, 15, 25, 3, 18, 12]

for( let i of array3){
    if( i > 5){
        console.log(i);
        
    }
}


davaleba(6)

let array4 = ["nika", "mamuka", "otari", "giorgi", "lizi", "maia", "sandro"];

for(let i of array4){
    let new6array = array6.length === 7 && i[7] === "sandro" ? " 7 და ბოლო ელემენტია სანდრო" : array6.length === 5 && i[5] === "otari" ? " otari mexutea" : "error error";
    console.log(new6array);
}

davaleba(7)

let users = [
    {username: 'giorgi',age: 30},
    {username: 'levani', age: 25},
    {username: 'anna', age: 28}
]

for( let i of users){
    if( i.age > 25){
        console.log(i);
        
    }
}