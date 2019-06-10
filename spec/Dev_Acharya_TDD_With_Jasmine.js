//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
function sum1toN(num) { 

    var sum = 0;
    for (var i = 0; i <= num; i++) {  
        sum = sum + i;
    }
    return sum;        
}
y=sum1toN(255);
console.log(y);   

//return the sum of the first number in the array and the last number in the array
function sumFirstLast(arr){

    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum=arr[0]+(arr[arr.length-1]);
    }
    return sum;
}
x=sumFirstLast([10,20,40]);
console.log(x);

//return largest number in the array
function largestNumber(arr){
    var largeNo=[];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>largeNo){
            largeNo=arr[i];
        }
    }
    return largeNo;
}
a=largestNumber([4,2,65,30,40,7]);
console.log(a);
    
describe("sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});

describe("largestNumber", function(){
    it("should return 21 when we pass [5, 21,7] as an argument", function(){
        expect(largestNumber([5,21,7])).toEqual(21);
    });
    it("should return 68 when we pass [31, 25, 68, 12] as an argument", function(){
        expect(largestNumber([31, 25, 68, 12])).toEqual(68);
    });
});
