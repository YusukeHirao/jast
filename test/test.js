var should = require('should');
var jaco = require('../lib/jaco.js');

describe('jaco', function () {
	it('半角を全角カタカナに変換', function () {
		jaco.katakanize('ｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞ').should.equal('ガガガガガガガガ');
	});
	it('ひらがなをカタカナに変換', function () {
		var test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join('');
		var mean = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ'
		].join('');
		jaco.katakanize(test).should.equal(mean);
	});
	it('カタカナをひらがなに変換', function () {
		var test = [
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ'
		].join('');
		var mean = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゛ゐ゛ゔゑ゛を゛'
		].join('');
		jaco.hiraganize(test).should.equal(mean);
	});
	it('カタカナをひらがなに変換(濁点・半濁点を結合文字に変換)', function () {
		var test = [
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ'
		].join('');
		var mean = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゙ゐ゙ゔゑ゙を゙'
		].join('');
		jaco.hiraganize(test, true).should.equal(mean);
	});
	it('カタカナをひらがなに変換', function () {
		jaco.hiraganize('ガガガガガガガガ').should.equal('がががががががが');
	});
	it('カタカナをひらがなに変換', function () {
		jaco.hiraganize('ガガガガガガガガ').should.equal('がががががががが');
	});
});