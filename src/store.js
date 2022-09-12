import {createStore} from 'vuex'
const store = createStore({

    state() {
        return {
            // 컴포넌트에서 접근가능
            todos: [],
            name:''
        }
    },
    mutations: {
        // state 변수는 외부 컴포넌트에서 수정 불가능하므로
        // mutation 내 정의된 함수를 이용해야 상태의 변경 가능하다
        addTodo(state, content) {
            state.todos.push(content)
        },
        delTodo(state, idx){
            state.todos.splice(idx,1)
        },
        addName(state, name){
          state.name = name
        },
        changeCheck(state,obj){
            state.todos[obj.idx].completed = obj.data;
        },
        editContent(state,obj){
            state.todos[obj.idx].content = obj.context;
        },
        initData(state){
            state.todos = [];
        }
    }
})

export default store