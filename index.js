import DirectoryTree from './src/components/directoryTree/DirectoryTree'
import Tree from './src/components/tree/Tree'

const components = [
    DirectoryTree,
    Tree
]

const install = vue => {
    components.map(cmp => {
        vue.component(cmp.name, cmp)
    })
}
if(window && window.Vue) install(window.Vue)

export default {
    install,
    DirectoryTree,
    Tree
}