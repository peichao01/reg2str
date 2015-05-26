// chrome & iojs(v1.7.1, v2.0.2 ...)
//      new RegExp('/').toString() ==> "/\//"
//      a ＝ '\\' 的字符串表示：'\'
//      a.length => 1
// nodjs(v0.10.0, v0.11.1, v0.12.3 ...)
//      new RegExp('/').toString() ==> "///"
//      a ＝ '\\' 的字符串表示：'\\'
//      a.length => 1

// nodejs 对所有的需要转义的字符都做了特殊处理，使之在书写字符串字面量的时候更方面，不需要写一堆堆的反斜线，而且对 String.length 等属性做了特殊处理
// 使之表现一致，
// 但在正则中可以看出 nodejs 跟 iojs、chrome 表现不一致

var likeNodejs, likeIOjs
var lenOfReg = new RegExp('/').toString().length
if(lenOfReg === 4){
	likeIOjs = true
}
else if(lenOfReg == 3){
	likeNodejs = true
}
else{
	console.error('WHAT THE FUCK?')
}

function reg2str(reg){
	var strReg = reg.toString()
	if(likeIOjs) return strReg
	else {
		strReg = '/' + strReg.substr(1, strReg.length - 2).replace(/([^\\])\//g, '$1\\/') + '/'
		return strReg
	}
}

module.exports = reg2str
