package nexacro.sample.service.out;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.out.Law_fix_InfoVO;
import nexacro.sample.vo.out.OutLawNoSearchVO;
import nexacro.sample.vo.out.fixInfoInstanceVO;

public interface OutLawsuitListService {
	//소송리스트 조회
	List<OutLawNoSearchVO> selectLawsuitList(Map<String, Object> ListMap);
	
	//소송기본사항 조회
	List<Law_fix_InfoVO> getLawsuitRecSelect(Law_fix_InfoVO searchVo);
	
	//소송기본사항 조회
	List<fixInfoInstanceVO> getInstanceList(fixInfoInstanceVO searchVo);
	
	//소송기일정보 및 기일상세정보 조회
	List<Law_fix_InfoVO> getLawFixinfoSelect(Law_fix_InfoVO searchVo);
	
	//기일정보 저장, 수정, 삭제
	void getLawFixinfoCud(List<Law_fix_InfoVO> searchVo);
	void getLawFixinfoCud2(List<Law_fix_InfoVO> searchVo);
}
