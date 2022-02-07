function modifier(strings,...values) {
    const a = strings.reduce((prev,current) => {
        return prev + current + (values.length ? "Mr. " + values.shift() : "");
    },"");
    return a;
}

var player1 = "sakib";
var player2 = "mashrafee";

console.log(modifier`We have ${player1} and ${player2} in our cricket team`);