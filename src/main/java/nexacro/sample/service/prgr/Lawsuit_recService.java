package nexacro.sample.service.prgr;

import java.util.List;

import nexacro.sample.vo.prgr.Lawsuit_recVO;



public interface Lawsuit_recService {

	
	// 기본 사항 조회 ( 심급 )
	List<Lawsuit_recVO> getLawsuitRecSelect(Lawsuit_recVO searchVO);
		
	// 기본 사항 조회 ( 원피고 )
	List<Lawsuit_recVO> getLawsuitRecPladefSelect(Lawsuit_recVO searchVO);
	
	// 재판외화해 상세 조회
	List<Lawsuit_recVO> getLawsuitRecDetailSelect(Lawsuit_recVO searchVO);
	

	//샘플 저장, 수정 , 삭제

	void createReconcil(List<Lawsuit_recVO> searchVO);

	void createReconcil2(Lawsuit_recVO vo);
	
	
	
	
}
