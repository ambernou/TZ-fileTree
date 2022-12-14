import { createStore } from 'vuex'

const store = createStore({
    state: {
        fileTree: [
            {
                id: 1,
                name: 'Dir 1',
                type: 'dir',
                children: [
                    {
                        id: 2,
                        name: 'Dir 1-1',
                        type: 'dir',
                        children: [
                            {
                                id: 3,
                                name: 'File 1-1-1',
                                type: 'file'
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: 'File 1-2',
                        type: 'file'
                    }
                ]
            }, 
            {
                id: 5,
                name: 'Dir 2',
                type: 'dir',
                children: [
                    {
                        id: 6,
                        name: 'Dir 2-1',
                        type: 'dir'
                    },
                    {
                        id: 7,
                        name: 'File 2-2',
                        type: 'file'
                    }
                ]
            },
            {
                id: 8,
                name: 'File 2',
                type: 'file'
            }
        ]
    },
    mutations: {
        deleteElement(state, payload) {
            const files = state.fileTree
            const id = payload
            function filterDelete(data, id) {
                const arr = data.filter(el => {
                    if (el.children) {
                        el.children = filterDelete(el.children, id)
                    }
                    return el.id != id
                })
                return arr
            }
            state.fileTree = filterDelete(files, id);
        },
        editElement(state, payload) {
            const files = state.fileTree
            const newName = payload.name
            const id = payload.id
            function find(data, id) {
                const arr = data.map(el => {
                    if (el.children) {
                        el.children = find(el.children, id)
                    }
                    if (el.id == id) {
                        el.name = newName
                    }
                    return el
                })
                return arr
            }
            state.fileTreeArr = find(files, id);
        }
    },
    getters: {
        getFileTree: state => state.fileTree
    }
})

export default store