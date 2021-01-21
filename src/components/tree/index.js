import Tree from './Tree.vue'

Tree.install = function (vue) {
    vue.component(Tree.name, Tree)
}

export default Tree