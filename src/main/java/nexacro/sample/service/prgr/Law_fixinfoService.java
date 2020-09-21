package nexacro.sample.service.prgr;

import java.util.List;

import nexacro.sample.vo.prgr.Law_fixinfoVO;
import nexacro.sample.vo.prgr.Lawsuit_recVO;



public interface Law_fixinfoService {

	
	// 소송기본사항 조회
	List<Law_fixinfoVO> getLawsuitRecSelect(Law_fixinfoVO searchVO);
	
	// 소송기일정보 및 기일상세정보 조회
	List<Law_fixinfoVO> getLawFixinfoSelect(Law_fixinfoVO searchVO);
		
	
	
	// 저장, 수정 , 삭제

		void getLawFixinfoCud(List<Law_fixinfoVO> searchVO);
	
}
