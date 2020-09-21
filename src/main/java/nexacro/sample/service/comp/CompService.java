package nexacro.sample.service.comp;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.comp.LawsuitCompVO;

public interface CompService {
	List<LawsuitCompVO> selectDsComp(Map<String, Object> objMap);	
}
