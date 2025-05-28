PrimeFirstLoop: for (let outerNumber=2; outerNumber<=100; outerNumber++) {
   for (let innerNUmber = 2; innerNUmber<outerNumber; innerNUmber++) {
    if (outerNumber% innerNUmber==0) {
        continue PrimeFirstLoop
    }
   }
   console.log(outerNumber +" " + "is a Prime number.");
}
