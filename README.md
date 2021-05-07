# express-test
Simple test for express (for SPARCS)

/users/ : "hello users" 출력
/users/id/[id] : "[id] page" 출력
/users/id/[id]/login : GET query로 [password]를 받아 "you logged in as ID:[id], PW:[password]" 출력
*아래 요청들은 GET query로 'qwer1234' 라는 password를 보내야 접근 가능, 맞는 password가 아니거나 password를 보내지 않았을 경우 'Access denied' 출력
/board/ : "hello board" 출력
/board/write : "hello board write" 출력
/sparcs/ : "hello sparcs" 출력
/sparcs/like : "hello sparcs like" 출력
/sparcs/hololo : "hello sparcs hololo" 출력
