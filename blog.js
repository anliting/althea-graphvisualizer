module.scriptByPath('https://cdn.rawgit.com/anliting/graphvisualizer/9f7c4b53cf2d24e1362dc609b63816238ac2fa88/visualizer.js').then(()=>{
    blog.addEventListener('pageContentLoad',div=>{
        graphvisualize_all(div)
    })
})
module.styleByPath('https://cdn.rawgit.com/anliting/graphvisualizer/9f7c4b53cf2d24e1362dc609b63816238ac2fa88/visualizer.css')
