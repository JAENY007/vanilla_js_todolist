# 바닐라 자바스크립트로 만드는 To Do List

## 기술 스펙 (Tech Stacks)

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/Html5-E34F26?style=flat-square&logo=Html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/Sass_(SCSS)-CC6699?style=flat-square&logo=Sass&logoColor=white" /> <img src="https://img.shields.io/badge/Git_Hub-000?style=flat-square&logo=GitHub&logoColor=white"/>

---
## 구현 설명
`Vanilla JavaScipt`와 `HTML`, `Sass`로 만드는 To Do List 웹 애플리케이션



### 실행하기

- 페이지가 정상적으로 실행이 되지 않는다면,
`git clone` 명령어를 통해 repository를 local에 다운받아 주세요!

- 다운이 정상적으로 되었다면 `npm start` 명령어를 통해 실행

1. 입력창에 아무 텍스트나 입력 후 키보드의 `Enter` 버튼이나 `입력` 버튼 클릭
2. ToDoList가 정상적으로 출력되는지 확인 후 `삭제` 버튼을 이용해 삭제 혹은
앞의 `CheckBox`를 체크 및 해제하여 할 일의 수행여부를 체크 가능합니다
1. Data의 송수신은 `SessionStorage`를 통해 동작하므로,
브라우저를 새로고침해도 기록은 남습니다.
하지만 브라우저를 완전히 종료했다가 접속하면 기록이 초기화 됩니다

### 시연 영상

- [x] **`메인화면`**
<img src="">
<br>

- [x] **`할 일 추가`**
<img src="">
<br>

- [x] **`완료체크`**
<img src="">
<br>

- [x] **`할 일 삭제`**
<img src="">
<br>

- [x] **`새로고침 시 반응`**
<img src="">
<br>

---

### 패키지(라이브러리 등) 사용 근거

    
- **`prettier`**
    
    코드의 가독성을 보다 높이기 위해 사용

- **`lite-server`**
    
    로컬에서 개발 중 실시간 변동사항을 확인하기 위한 서버 라이브러리

- **`sass`**
    
    css를 좀 더 쉽게 작성하기 위해 사용

- **`gh-pages`**
    
    정적 페이지 배포를 위해 사용

---

### 코딩 컨벤션 적용

**폴더 구조**

```
root
  │  README.md
  │  package.json
  │  package-lock.json
  │  bs-config.json
  │  .prettierrc
  │  .gitignore
  │
  │
  └─ src
      index.css
      index.html
      index.scss
      ToDoList.js
```

**네이밍 컨벤션**

- 상수 : `PascalCase`
- 함수, 변수 : `camelCase`
- CSS Class : `kebab-case`

---
## 회고

**배운 점**

- HTML5를 이용한 semantic 마크업
- SCSS(SASS)를 이용한 CSS 작성
- Vanilla JavaScript를 통해 DOM을 조작하는 법(기초)
- EventListener를 통해 click 및 submit 이벤트 처리
- SessionStorage를 이용하여 새로고침 했을때 데이터가 날아가지 않도록 처리하는 방법


**고치고 싶은 점**

- JavaScript 코드를 좀 더 간결하게 작성할 수 있을지 고민해보고 적용해보고 싶다
- 반응형 스타일 작성이 아직 미숙한듯 하다


**공부해야 한다고 생각하는 것**

- CSS 관련 지식 조각모음하기
- Web API 관련 지식 조각모음하기
- JavaScript 내장함수 지식 조각모음하기
- JavaScript를 통해 더 많은 프로젝트 진행해보기