package nexacro.sample.service.impl.out.legal.advrq;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.legal.advrq.OutLegalAdvDAO;
import nexacro.sample.service.out.legal.advrq.OutLegalAdvService;
import nexacro.sample.vo.out.legal.advrq.OutLegalAdvVO;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("outLegalAdvService")
public class OutLegalAdvServiceImpl extends AbstractServiceImpl implements OutLegalAdvService {

	@Resource(name="outLegalAdvDAO")
	private OutLegalAdvDAO outLegalAdvDAO;
	
	public List<Map> selectOutLegalAdvList(Map<String, Object> map) {
		return outLegalAdvDAO.selectOutLegalAdvList(map);
	}

}
