import {createStore} from 'vuex'
const store = createStore({

    state() {
        return {
            // 컴포넌트에서 접근가능
            todos: [],
            name:'',
            deleted:{}
        }
    },
    mutations: {
        // state 변수는 외부 컴포넌트에서 수정 불가능하므로
        // mutation 내 정의된 함수를 이용해야 상태의 변경 가능하다
        addTodo(state, content) {
            state.todos.push(content)
        },
        delTodo(state, idx){
            state.deleted = state.todos[idx] //삭제된 항목 보관
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
        },
        restore(state){
            state.todos.push(state.deleted)
        },
        sortItem(state,selectedSort){
            if (selectedSort.value === "date-desc") {
                const todos = state.todos
                todos.sort(function(a, b) {
                    return b.time - a.time;
                })
                state.todos = todos
            } else if (selectedSort.value === "date-asc") {
                const todos = state.todos
                todos.sort(function(a, b) {
                    return a.time - b.time;
                })
                state.todos = todos
            }

        }
    }
})

export default store