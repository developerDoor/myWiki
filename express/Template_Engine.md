# Template Engine
템플릿 엔진은 HTML의 정적인 단점을 개선한다.
- 반복문, 조건문, 변수 등을 사용할 수 있다.
- 동적인 페이지 작성이 가능하다.
- PHP, JSP와 유사하다.

## PUG(구 Jade)
문법이 Ruby와 비슷해 코드 양이 많이 줄어든다.
- HTML과 많이 달라 호불호가 갈림
- 익스프레스에 app.set으로 퍼그 연결

```
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```

![pug.png](./image/pug.png)
![pug2.png](./image/pug2.png)
![pug3.png](./image/pug3.png)
![pug4.png](./image/pug4.png)
![pug5.png](./image/pug5.png)
![pug6.png](./image/pug6.png)
![pug7.png](./image/pug7.png)
![pug8.png](./image/pug8.png)

## Nunjucks
- 확장자는 html 또는 njk

```
 const nunjucks = require('nunjucks');
 ...
 ...
 app.set('view engine', 'html');

 nunjucks.configure('views', {
  express: app,
  watch: true,
 });
```
![nunjucks1.png](./image/nunjucks1.png)
![nunjucks2.png](./image/nunjucks2.png)
![nunjucks3.png](./image/nunjucks3.png)
![nunjucks4.png](./image/nunjucks4.png)
![nunjucks5.png](./image/nunjucks5.png)
