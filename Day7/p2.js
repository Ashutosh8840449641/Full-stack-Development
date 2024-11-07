async function orderfood(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order for the " + name + "Prepared");
        },time);
    });
}

async function restaurent() {
    console.log("Place Order ");
    let pizza = orderfood("Pizza",2000);
    console.log(pizza);
    try{
        let burger = await orderfood("Burger",3000);
        console.log(burger);
    } catch(error){
        console.log(error);
    }
    let noodles = await orderfood("Noodles",4000);
    console.log(noodles);
    console.log("All order completed")

}