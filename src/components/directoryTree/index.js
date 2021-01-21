import DirectoryTree from './DirectoryTree.vue'

DirectoryTree.install = function (vue) {
    vue.component(DirectoryTree.name, DirectoryTree)
}

export default DirectoryTree