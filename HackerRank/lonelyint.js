function lonelyinteger(a) {
    let holder = []
    let dups = []
    for(let i=0;i<a.length;i++){
        if(!holder.includes(a[i]) && !dups.includes(a[i])){
            holder.push(a[i])
        }
        else if(holder.includes(a[i])){
            dups.push(a[i])
        }
    }
    let final =0;
    for(let i=0;i<holder.length;i++){
        if(!dups.includes(holder[i])){
            final = holder[i]
        }
    }
    return final
}

arr=[1,2,3,4,3,2,1]
console.log(lonelyinteger(arr))
console.log(lonelyinteger(arr))