package nexacro.sample.service.impl.comp;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import nexacro.sample.service.comp.CompService;
import nexacro.sample.service.dao.ibatis.comp.CompDao;
import nexacro.sample.vo.comp.LawsuitCompVO;

@Service("compService")
public class CompServiceImpl implements CompService {
	@Resource(name = "compDao")
	private CompDao compDao;

	@Override
	public List<LawsuitCompVO> selectDsComp(Map<String, Object> objMap) {
		// TODO Auto-generated method stub
		return (List<LawsuitCompVO>)compDao.selectDsComp(objMap);
	}
}
