# HTML 파일에 JS 파일 작성 방법

## HTML 파일과 JS 파일을 분리해 작성

- `<head>` 또는 `<body>`의 `<script>`에 JS 파일 작성
- defer 속성 작성
- HTML과 JS 분리

```html
<head>
    <script src="hello.js" defer></script>
</head>
<body>
    <script src="hello.js" defer></body>
</body>
```

#

## HTML 파일에 JS 코드 직정 작성

- `<script>`에 아래 처럼 JS 코드를 직접 작성`</script>`
- 웹 페이지에 한정할 때 사용한다.

```html
<script>
  var hello = "안녕하세요?";
</script>
```
