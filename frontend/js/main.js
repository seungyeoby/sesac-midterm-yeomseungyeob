// - 입력값이 비어 있으면, 로그인 시도를 막고 오류 메시지를 출력해야 한다.
// 예시) “모든 항목을 입력해주세요.”
// - 이메일, 비밀번호가 모두 입력되었는지 확인하고, 등록된 사용자 정보와 일치 여부 확인
// - 사용자 검증 로직을 작성하시오
// - 로그인 성공 시 localStorage에 사용자 정보를 저장하시오.
// - 부트스트랩을 활용하여 시각적으로 보기 좋은 만들어주세요.

import { users } from "./data";

const form = document.querySelector('form');
const ul = document.getElementById('messageList');


form.addEventListener("submit" ,  (e) => {
  e.preventDefault()
const userEmail = document.getElementById('email').value;
const password = document.getElementById('password').value;
// const list = document.createElement("li");
// list.classList.add("list-group-item")
// const li = document.querySelectorAll(".list-group-item");
// console.log(li.length)

 if(!userEmail) {
    alert("이메일을 입력해 주세요")
    return
  }else if(!password) {
    alert("비밀번호를 입력해 주세요")
    return
  }


 
})

