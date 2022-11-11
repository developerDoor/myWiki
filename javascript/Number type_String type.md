# 데이터 타입 분류
- 언어 타입과 스펙 타입
- 언어 타입
    - JS 프로그램에서 사용할 수 있는 타입
    - Undefined, Null, Boolean, String, Number, Object
- 스펙(문서) 타입
    - 언어 알고리즘을 위한 타입으로 JS 프로그램에서 사용 불가
    - Reference, List, Completion, Property Descriptor, Data Blockm, Lexical Environment, Lexical Record 등

## Number 타입
- 부호를 가진 값
- 숫자 값 범위
  - 18,437,736,874,454,810,627(2의 64승 - 2의 53승 + 3)
- Number 타입의 특수한 3개 값
  - NaN : Not-a-Number
  - Infinity : 양수 무한대
  - -Infinity : 음수 무한대
    
## String 타입
- 문자 타입
  - 값을 "" 또는 '' 사이에 작성한다.
  - 최대 문자 수 : 2의 53승 -1
- 큰 따옴표와 작은 따옴표를 같이 사용할 때
  - "책, '123'"
- 따옴표에 숫자를 작성하면 문자 타입이 된다.

## Undefined 타입
- Undefined(대문자) 스펙에서 사용하는   타입
  - 값 : undefined(소문자)
- 변수의 디폴트 값
  - let point;
  - 변수를 선언만 한 것으로 undefined가 초기값으로 설정된다
  - 변쉐 값을 할당하지 않은 것을 나타내는 시맨틱
- 변수에 undefined 할당 가능

## Null(대문자) 타입
  - 값 : null(소문자)
  - 