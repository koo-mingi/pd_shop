package nexacro.sample.service.impl.out.web.login;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.web.login.OutWebLoginDAO;
import nexacro.sample.service.out.web.login.OutWebLoginService;
import nexacro.sample.vo.out.web.login.OutWebLoginVO;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("outWebLoginService")
public class OutWebLoginServiceImpl extends AbstractServiceImpl implements OutWebLoginService {

	@Resource(name="outWebLoginDAO")
	private OutWebLoginDAO outWebLoginDAO;
	
	/*public List selectOutWebLoginCheck(OutWebLoginVO outWebLoginVO) {
		return outWebLoginDAO.selectOutWebLoginCheck(outWebLoginVO);
	}*/

	@Override
	public List selectOutWebLoginCheck(Map outWebLoginMap) {
		return outWebLoginDAO.selectOutWebLoginCheck(outWebLoginMap);
	}

}
