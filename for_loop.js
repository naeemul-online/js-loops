/* 
1. Create fro loop:
for(Expression 1; Expression 2; Expression 3;){
    //code block will execute here
}
------------------------------------

2. Using for loop print 1 -10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
----------------------------------

3. Print even number between 1 to 10
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}
--------------------------------------

4. Print odd number 
Way 1:
for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }

}

Way 2:
for (let i = 1; i <= 10; i += 2) {
   console.log(i)
}

*/
for (let i = 1; i <= 10; i += 2) {
   console.log(i)
}