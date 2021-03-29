/* eslint-disable */

const styles = [
  {
    type: 'sheet',
    body: '.af-view{color:#fff;font-family:verdana}.af-view{scroll-behavior:smooth}.af-view p{padding-bottom:10px}.af-view .af-class-bottom{position:fixed;bottom:0}.af-view a{font-family:verdana}.af-view img{display:block;margin-left:auto;margin-right:auto}.af-view .af-class-button1{background-color:#fff;border-radius:12px;color:#fff;padding:5px;text-align:center;text-decoration:none;color:#000;display:inline-block;width:150px;height:40px;font-size:16px;margin:1px 1px;cursor:pointer}div.rcorners1{border-radius:15px;border:2px solid #000;padding:20px;width:300px;height:520px}div.rcorners2{border-radius:15px;background-color:#e8e8e8;padding:15px;width:250px;height:60px}#column1{width:50%}div.transbox{margin:30px;background-color:grey;border:1px solid transparent;opacity:.9}div.transbox p{margin:4%;color:#fff;opacity:1}div.transbox h1{margin:4%;color:#fff;opacity:1}.modalContract{display:none;position:fixed;z-index:1;padding-top:384px;padding-left:170px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.0001)}.modalContract-content{border-radius:15px;border:2px solid #000;background-color:#fefefe;margin:auto;padding:20px;width:500px;height:300px}.modalContract-Detail-content{border-radius:15px;border:2px solid #000;background-color:#fefefe;padding:20px;width:300px;height:150px}.modal{display:none;position:fixed;z-index:1;padding-top:179px;padding-right:370px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.0001)}.af-view .af-class-modal-content{border-radius:15px;border:2px solid #000;background-color:#fefefe;margin:auto;padding:20px;width:1100px;height:520px}.af-view .af-class-close{color:#aaa;float:right;font-size:28px;font-weight:700}.af-view .af-class-close:focus,.af-view .af-class-close:hover{color:#000;text-decoration:none;cursor:pointer}',
  },
]

const loadingStyles = styles.map((style) => {
  let styleEl
  let loading

  if (style.type == 'href') {
    styleEl = document.createElement('link')

    loading = new Promise((resolve, reject) => {
      styleEl.onload = resolve
      styleEl.onerror = reject
    })

    styleEl.rel = 'stylesheet'
    styleEl.type = 'text/css'
    styleEl.href = style.body
  }
  else {
    styleEl = document.createElement('style')
    styleEl.type = 'text/css'
    styleEl.innerHTML = style.body

    loading = Promise.resolve()
  }

  document.head.appendChild(styleEl)

  return loading
})

export default Promise.all(loadingStyles).then(() => {
  const styleSheets = Array.from(document.styleSheets).filter((styleSheet) => {
    return styleSheet.href && styles.some((style) => {
      return style.type == 'href' && styleSheet.href.match(style.body)
    })
  })
  styleSheets.forEach((styleSheet) => {
    Array.from(styleSheet.rules).forEach((rule) => {
      if (rule.selectorText) {
        rule.selectorText = rule.selectorText
          .replace(/\.([\w_-]+)/g, '.af-class-$1')
          .replace(/\[class(.?)="( ?)([^"]+)( ?)"\]/g, '[class$1="$2af-class-$3$4"]')
          .replace(/([^\s][^,]*)(\s*,?)/g, '.af-view $1$2')
          .replace(/\.af-view html/g, '.af-view')
          .replace(/\.af-view body/g, '.af-view')
          .replace(/af-class-w-/g, 'w-')
          .replace(/af-class-anima-/g, 'anima-')
          .replace(/af-class-([\w_-]+)an-animation([\w_-]+)/g, '$1an-animation$2')
      }
    })
  })
})

/* eslint-enable */