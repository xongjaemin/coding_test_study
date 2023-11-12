function solution(users, emoticons) {
    const discounted = [];
    let joinCount = 0;
    let purchased = 0;
    const discountRates = [10,20,30,40];

    function getAllCases(arr, length) {
        const cases = [];

        function recursiveFunc(currentCase) {
            if (currentCase.length === length) {
                cases.push(currentCase);
                return;
            }

            for (let i = 0; i < arr.length; i++) {
                recursiveFunc([...currentCase, arr[i]]);
            }
        }

        recursiveFunc([]);

        return cases;
    }

    const arr2 = getAllCases(discountRates, emoticons.length);
    const arr3 = arr2.map((e) => {
        return e.map((e1,i1)=>[e1,emoticons[i1] * 0.01 * (100 - e1)])
    })

    for(let i=0;i<arr3.length;i++){

        let caseJoinCount = 0;
        let casePurchased = 0;
        for(let j=0;j<users.length;j++){
            let thisTimePruchased = 0;
            for(let h=0;h<arr3[0].length;h++){
                if(users[j][0] <= arr3[i][h][0]){
                    thisTimePruchased += arr3[i][h][1]
                }
            }
            if(thisTimePruchased >= users[j][1]){
                caseJoinCount++
            } else {
                casePurchased += thisTimePruchased
            }
        }
        if(caseJoinCount > joinCount || (caseJoinCount === joinCount && casePurchased > purchased)) {
            joinCount = caseJoinCount
            purchased = casePurchased
        }
    }

    return [joinCount,purchased]
}
