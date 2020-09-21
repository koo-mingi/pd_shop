package nexacro.sample.service.out.web.login;


import java.util.List;
import java.util.Map;

import nexacro.sample.vo.out.web.login.OutWebLoginVO;

public interface OutWebLoginService {

	List selectOutWebLoginCheck(Map outWebLoginMap);
	
}
