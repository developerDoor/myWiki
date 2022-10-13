# Variable(변수)

**Variable은 값을 저장하는 영역이다.**

- 변수 사용 목적

  - **변수에 저장된 값의 재사용**

- 변수 선언 방법

  - 변수 선언
    ```javascript
    var book;
    ```
    1. var를 작성하고 변수 이름 작성(var 사용하지마!!!)
    2. 값을 저장할 영역만 선언한 것
    #
  - 값을 변수에 할당

    ```javascript
    var book = "책";
    ```

    1. = 오른쪽의 값을 왼쪽의 변수에 할당
    2. book 변수로 값을 사용할 수 있게 됨

    #

  - 콤마로 구분
    ```javascript
    var book = "책",
      point = 123;
    ```
    1. 콤마(,) 다음에 var를 작성하지 않음
    2. 콤마와 변수 이름 사이에 일반적으로 한 칸 띄움
    3. 세미콜론 앞까지 콤마 사용 가능
    #
  - 줄을 바꾸어 작성
    ```javascript
    var book = "책",
      point = 123;
    ```
    #
  - 변수 앞에 콤마 작성
    ```javascript
    var book = "책",
      point = 123;
    ```
    #

- 변수의 이름을 작명할 때 의미를 부여해야 한다.(Semantic)

  - 포괄적이지 않고 구체적인 것이 좋다!

- 값을 변수에 할당하는 방법
  - 나중에 할당한 값으로 바뀐다.
    ```javascript
    var point = 123,
      point = 456; // 456이 최종값
    ```
  - 같은 값 할당(권장 형태는 아님.)
    ```javascript
    var point = (amount = 123);
    ```
