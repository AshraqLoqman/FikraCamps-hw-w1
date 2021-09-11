/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

function BestProfit(arr) {
    let Max=arr[0];
    let Min=arr[0];
    for(let i=1;i<=arr.length;i++)
    {
      if(arr[i]>Max)
        Max=arr[i]
      if(arr[i]<Min)
        Min=arr[i]
    }
    return (Max-Min)
}
console.log(BestProfit([150, 146, 142, 143, 145, 144]));

/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

function CheckOverlap(t1Start, t1End, t2Start, t2End) {
  return (t1End<t2Start) ? 'no overlap':'overlap'
}
console.log(
  CheckOverlap(
    "13/5/2021 13:00",
    "14/5/2021 13:00",
    "14/5/2021 13:00",
    "16/5/2021 13:00"
  )
);

/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */

function HowManyPairs(shoes) {
  let R=0
  let L=0
  for (var i = 0; i < shoes.length; i++) {
    if(shoes[i]==='R')
      R++
    else L++
  }
  let sum=((R>L)? R-L:L-R)
  return ((sum==0)?R:sum)
}
console.log(HowManyPairs("RLRLRRLL"));

/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */

function HowManyLetters(word) {
  var arr = {};
  for (var i = 0; i < word.length; i++)
  {
    var Character = word.charAt(i);
    
    if (arr[Character]) arr[Character]++;
    else arr[Character] = 1;
    
  }
  return arr;
}
console.log(HowManyLetters("kkssffoos"));


/** Q5
  * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
 
 Examples
 sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
 
 sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
 
 sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
 Notes
 The arrays can contain either positive or negative elements.
 The arrays will only contain integers.
 The arrays won't contain duplicate numbers.
 This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
  */

function  sortArray(arr)
{
    for(let i=0 ; i<arr.length ; i++)
    {
        for(let j=i ; j<arr.length ; j++)
        {
            if(arr[j]<arr[i])
            {
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}

console.log(sortArray([2, -5, 1, 4, 7, 8]));
console.log(sortArray([23, 15, 34, 17, -28]));
console.log(sortArray([38, 57, 45, 18, 47, 39]));


/** Q6
  * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 
 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 
 minMax([2334454, 5]) ➞ [5, 2334454]
 
 minMax([1]) ➞ [1, 1]
  */

function  minMax(arr)
{
    let x=[arr[0],arr[0]]
    for(let i=0 ; i<arr.length ; i++)
    {
        if(arr[i]<x[0])
            x[0]=arr[i]
        else if(arr[i]>x[1])
            x[1]=arr[i]
    }
    return x
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));


/** Q7
  * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
 
 Examples
 missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 
 missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 
 missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 Notes
 The array of numbers will be unsorted (not in order).
 Only one number will be missing.
  */

function  missingNum(arr)
{
    let sum1=0
    for(let i=0;i<10;i++)
        sum1+=i+1
        
    let sum2=0
    arr.forEach(element =>
         sum2+=element
         );
    
    return sum1-sum2
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));


/** Q8
  * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
 
 Examples
 numToEng(0) ➞ "zero"
 
 numToEng(18) ➞ "eighteen"
 
 numToEng(126) ➞ "one hundred twenty six"
 
 numToEng(909) ➞ "nine hundred nine"
 Notes
 There are no hyphens used (e.g. "thirty five" not "thirty-five").
 The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
  */

var single = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
var tens = ['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function NumToWord(num)
{
    let Word="";
    if(num<20)
        Word= single[num]

    else if(num<100)
    {
        if(num%10==0)
            Word= tens[num/10]
        else
            Word= tens[Math.floor(num/10)]+" "+single[num%10]
    }

    else if(num<1000)
    {
        if(num%100>=0 && num%100<20)
            Word=  single[Math.floor(num/100)]+" hundred "+( (num%100==0) ? "" : single[num%100])
        else
            Word = single[Math.floor(num/100)]+" hundred "+( (tens[Math.floor((num%100)/10)]==0) ? "" : tens[Math.floor((num%100)/10)]+" ")+single[num%10]
    }
    return num+" => "+ Word;
}

console.log(NumToWord(0))
console.log(NumToWord(18))
console.log(NumToWord(815))
console.log(NumToWord(909))
