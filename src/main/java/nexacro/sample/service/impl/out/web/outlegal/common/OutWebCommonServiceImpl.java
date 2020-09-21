package nexacro.sample.service.impl.out.web.outlegal.common;


import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.web.outlegal.common.OutWebCommonDAO;
import nexacro.sample.service.out.web.outlegal.common.OutWebCommonService;
import nexacro.sample.vo.out.web.outlegal.common.OutWebCommonVO;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("outWebCommonService")
public class OutWebCommonServiceImpl extends AbstractServiceImpl implements OutWebCommonService{
	
	@Resource(name="outWebCommonDAO")
	private OutWebCommonDAO outWebCommonDAO;

	public List selectOutCommonCode(OutWebCommonVO outWebCommonVO) {
		return outWebCommonDAO.selectOutCommonCode(outWebCommonVO);
	}

}
