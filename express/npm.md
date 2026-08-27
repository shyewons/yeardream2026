# npm
package.json → 프로젝트 관련 정보 담긴 파일(이름, 버전, 설명, 의존성, 실행 스크립트)
package-lock.json → 의존성 버전과 정보에 대한 상세 내용과 버전 고정

- `npm install [package]`            : 최신버전을 다운 받음
- `npm install [package] @~1.13.0`   : 1.13.x 버전
- `npm install [package] @^1.13.0`   : 1.x.x 버전
- `npm install [package] @1.13.0`    : 1.13.0 버전

- `npm install -D [package]`         : devDependencies
- `npm install --save-dev [package]` : devDependencies

- `npm install --production`         : dependencies
- `npm install --production [package]` : 특정한 package를 dependencies에 설치
- `npm install [package] --global`   : 모든 프로젝트에서 사용하도록 설치
- `npm install [package] -global`

- `npm remove [package]`             : package 삭제
- `npm run [script-name]`            : npm run dev 같은 것

---

# npx 
> npm으로 패키지 설치 없이 사용하게 해주는 도구

- `npm install [package]` → 설치시 node_modules에 다운로드 되어 저장
- `npx install [package]` → 설치시 사용 후 삭제, 1회성 라이브러리에 사용