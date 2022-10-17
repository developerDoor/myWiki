# Array

## arr.sort()

- 배열 재정렬
- 배열 자체가 변경되니 주의해야 한다.
- 인수로 정렬 로직을 담은 함수를 받는다.

```javascript
arr = [1, 5, 4, 3, 2];

arr.sort();

console.log(arr); // [1, 2, 3, 4, 5]
```

```javascript
arr = [27, 13, 8, 5];

arr.sort();

console.log(arr); // [13, 27, 5, 8]
```

위와 같은 경우는 순서가 뒤죽박죽이 된다. 그 이유는 정렬할 때 배열안의 숫자를 **문자열로 취급**하기 때문이다.

```javascript
arr = [27, 13, 8, 5];

// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27

arr.sort((a, b) => {
  return a - b;
});

console.log(arr);
```

**로직이 어렵다.** 그래서 보통은 위와같이 함수를 만들어놓고 사용하기 보다는 _Lodash_ 같은 라이브러리를 사용한다.(https://lodash.com/)

```javascript
_.sortBy(arr); // 어떤 로직이 들어있는지 신경안써도 되고 숫자,문자, 객체를 원하는 기준으로 정렬해준다.
```

## arr.reduce()

- 인수로 함수를 받는다.
- (누적 계산 값, 현재 값) => { return 계산 값 };

```javascript
// 배열의 모든 수 합치기
let arr = [1, 2, 3, 4, 5];

// for, for of, forEach 사용해도 된다.

// let result = 0;
// arr.forEach(num => {
//     result += num;;
// })

const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);
```

```javascript
let userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

let result = userList.redduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result); // ["mike", "Jane", "Sue", "Harry", "Steve"]
```

## arr.reduceRight();

- reduce()랑 동일하다. 다만 배열 우측부터 연산을 수행하는 차이가 있다.
