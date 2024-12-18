//1
const students = [
   { name: 'Павел', age: 20 },
   { name: 'Иван', age: 20 },
   { name: 'Эдем', age: 20 },
   { name: 'Денис', age: 20 },
   { name: 'Виктория', age: 20 },
   { age: 40 }, 
];
  
const result = pickPropArray(students, 'name');
console.log(result);

function pickPropArray(array, property)
{
    const result = [];

    array.forEach(element => 
    {
        if(element.hasOwnProperty(property))
        {
            result.push(element[property])
        }
    });
    return result;
}

//2
const counter1 = createCounter();
counter1(); // 1
counter1(); // 2
  
const counter2 = createCounter();
counter2(); // 1
counter2(); // 2

function createCounter()
{
    let count = 0;
    return function () 
    {
        count++;
        console.log(count);
    };
}

//3  
const result1 = spinWords("Привет от Legacy");
console.log(result1); // тевирП от ycageL
  
const result2 = spinWords("This is a test");
console.log(result2); // This is a test


function spinWords(str) 
{
    const words = str.split(' ');
  
    const result = [];
  
    words.forEach(word => 
    {
      if (word.length >= 5) 
      {
        result.push(word.split('').reverse().join(''));
      } 
      
      else 
      {
        result.push(word);
      }
    });
  
    return result.join(' ');
}

  
//4

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));

const nums1 = [4, 5, 7, 10];
const target1 = 15;
console.log(twoSum(nums1, target1));

function twoSum(nums, target) 
{
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) 
    {
      const complement = target - nums[i];
  
      if (numMap.has(complement)) 
      {
        return [numMap.get(complement), i];
      }
  
      numMap.set(nums[i], i);
    }
}

//5

console.log(findLongestCommonPrefix(["цветок", "поток", "хлопок"])); 
console.log(findLongestCommonPrefix(["собака", "гоночная машина", "машина"])); 
console.log(findLongestCommonPrefix(["машина", "максимум", "маршрут"])); 
console.log(findLongestCommonPrefix(["дом", "дома", "домашний"])); 

function findLongestCommonPrefix(strs) 
{
    if (strs.length == 0) return "";
  
    let reference = strs[0];
    let maxPrefix = "";
  
    for (let i = 0; i < reference.length; i++) 
    {
      for (let j = i + 2; j <= reference.length; j++) 
      {
        const prefix = reference.slice(i, j);
  
        if (strs.every(str => str.includes(prefix))) 
        {
          if (prefix.length > maxPrefix.length)
          {
            maxPrefix = prefix;
          }
        }
      }
    }
    return maxPrefix;
}
  