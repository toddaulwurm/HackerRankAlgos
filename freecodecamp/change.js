function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let totalDrawer = 0;
    let converter = [.01,.05,.1,.25,1,5,10,20,100]
    let changeFinal = []
    for(let i=0; i<cid.length; i++){
        totalDrawer += (cid[i][1])
    }
    totalDrawer = totalDrawer.toFixed(2)
    console.log(change)
    console.log(totalDrawer)
    if(change>totalDrawer){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    else if(change==totalDrawer){
        return {status: "CLOSED", change: cid}
    }
    else{
        for(let i=cid.length-1; i>=0; i--){
            while(change.toFixed(2)>=converter[i] && cid[i][1]>=converter[i]){
                change -= converter[i]
                cid[i][1] -= converter[i]
                if(!changeFinal[changeFinal.length-1] || changeFinal[changeFinal.length-1][0]!=cid[i][0]){
                    changeFinal.push([cid[i][0], converter[i]])
                }
                else{
                    changeFinal[changeFinal.length-1][1] = changeFinal[changeFinal.length-1][1] + converter[i]
                }
            }
        }
        if(change.toFixed(2) == 0){
            return {status: "OPEN", change: changeFinal}
        }
    }
    return {status: "INSUFFICIENT_FUNDS", change: []};
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));