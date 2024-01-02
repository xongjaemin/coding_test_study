function solution(phone_book) {
    phone_book.sort();

    const isPrefix = phone_book.some((book,idx)=>{
        return phone_book[idx+1]?.indexOf(book) === 0;
    })

    return !isPrefix;
}

console.log(solution(["119", "97674223", "1195524421"])) // should return false
console.log(solution(["123","456","789"])) // should return true
console.log(solution(["12","123","1235","567","88"])) // should return false