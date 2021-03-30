//*****exer 1 ****/
function permut(x, y){
    let ch;
    ch=x;
    x=y;
    y=ch;
 return "valeur de x " + x + " valeur de y " + y
}
console.log(permut(2,3))
//********exr 3 */

//********exr 4 */
function addition( a,b){
    let sm;
    sm=a+b;
    return "somme de "+a+" + "+b+" = "+sm
}
console.log(addition(-2,-4))
//**********exr5 */
function mintosec(min){
    let sec;
    sec=min*60
    return +min+" minute = "+sec+" seconde"
}
console.log(mintosec(5))
//**********exr6 */ 
function increment (z){
    let x
    x=z++
    return "increme "+x+" = "+z
}
console.log(increment (2))