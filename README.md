# movieQL

Movie API with GraphQL

graphQL을 사용했을 때 해결 가능한 부분

Over-fetching

- 요청한 영역의 정보보다 훨씬 더 많은 정보를 받는 것
- 필요한 데이터 이상을 받는 것.
- REST API의 경우, 데이터 테이블을 요청할 때 모든 필드를 받아 옴
- 예) user의 username만 필요하더라도 profile, email, etc. 를 모두 꺼내서 response로 보냄

Under-fetching

- 필요한 데이터를 받기 위해 1개 이상의 request를 보냄 (이러한 요청을 1개의 query로 요청할 수 있다.)
- REST API의 경우 나뉘어진 테이블 만큼의 request를 보내고 각각의 response를 받음
- 예) 앱 실행 시, feed 데이터, user데이터, notification데이터 etc. 모두 각각의 request를 보냄

`npm install graphql-yoga`

`npm install babel-node`

```
import { GraphQLServer } from "graphql-yoga";

SyntaxError: Cannot use import statement outside a module
```

> package.json 파일에 "type": "module"를 추가해준다.
