/**
 * 한글만 입력되게 하는 js
 */

function CheckHangul(sabun) {
	var f = document.person;
	strarr = new Array(f.sabun.value.length);
	schar = new Array('/', '.', '>', '<', ',', '?', '}', '{', ' ', '\\', '|',
			'(', ')', '+', '=');
	for (i = 0; i < f.sabun.value.length; i++) {
		for (j = 0; j < schar.length; j++) {
			if (schar[j] == f.sabun.value.charAt(i)) {
				alert("이름은 한글입력만 가능합니다.");
				f.sabun.focus();
				f.sabun.select();
				return false;
			} else
				continue;
		}
		strarr[i] = f.sabun.value.charAt(i)
		if ((strarr[i] >= 0) && (strarr[i] <= 9)) {
			alert("이름에 숫자가 있습니다. 이름은 한글입력만 가능합니다.");
			f.sabun.focus();
			f.sabun.select();
			return false;
		} else if ((strarr[i] >= 'a') && (strarr[i] <= 'z')) {
			alert("이름에 알파벳이 있습니다. 이름은 한글입력만 가능합니다.");
			f.sabun.focus();
			f.sabun.select();
			return false;
		} else if ((strarr[i] >= 'A') && (strarr[i] <= 'Z')) {
			alert("이름에 알파벳이 있습니다. 이름은 한글입력만 가능합니다.");
			f.sabun.focus();
			f.sabun.select();
			return false;
		} else if ((escape(strarr[i]) > '%60') && (escape(strarr[i]) < '%80')) {
			alert("이름에 특수문자가 있습니다. 이름은 한글입력만 가능합니다.");
			f.sabun.focus();
			f.sabun.select();
			return false;
		} else {
			continue;
		}
	}
	return true;
}

function checkform() {
	var f = document.person;
	if (!CheckHangul(f.sabun))
		return false;

	if (f.sabun.value == "") {
		alert("이름을 입력하십시오.");
		f.sabun.focus();
		f.sabun.select();
		return false;
	}

	if ((f.sabun.value.length < 2) || (f.sabun.value.length > 4)) {
		alert("이름은 최소 2자 이상 4자 이하로 입력 하십시오");
		f.sabun.focus();
		f.sabun.select();
		return false;
	}

}
