package nexacro.sample.service.prgr;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.prgr.MediationVO;
import nexacro.sample.vo.prgr.SimVO;

public interface MediationService {
	
	
	// 기본사항조회
	public List<MediationVO> mediationSelect(Map<String, Object> selectMap);

	// 원피고조회
	public List<MediationVO> pladefSelect(Map<String, Object> selectMap);
	
	// 최대 심급 조회
	public List<SimVO> getSimInfo (Map<String, Object> selectMap);
	
	// 조정안조회
	public List<MediationVO> bottomSearch(Map<String, Object> selectMap);
	
	// 조정안 저장 수정 삭제
	public String mediationSave(List<MediationVO> MediationVO);
	
	// 종결체크
	public String getCount(List<MediationVO> voList);
	

}
