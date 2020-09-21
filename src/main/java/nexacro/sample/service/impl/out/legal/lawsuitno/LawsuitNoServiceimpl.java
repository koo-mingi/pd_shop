package nexacro.sample.service.impl.out.legal.lawsuitno;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.legal.lawsuitno.LawsuitNoDAO;
import nexacro.sample.service.out.legal.lawsuitno.LawsuitNoService;
import nexacro.sample.vo.out.legal.lawsuitno.LawsuitNoVo;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("lawsuitnoservice")
public class LawsuitNoServiceimpl extends AbstractServiceImpl implements LawsuitNoService {
	@Resource(name="lawsuitNoDAO")
	private LawsuitNoDAO lawsuitNoDAO;

	public List<Map> selectLawsuitNo(Map<String, Object> map) {
		return lawsuitNoDAO.selectLawsuitNo(map);
	}

}
