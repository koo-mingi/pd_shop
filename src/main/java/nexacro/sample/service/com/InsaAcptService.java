package nexacro.sample.service.com;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.com.InsaAcptVO;

public interface InsaAcptService {

	// 사원 승인 내역 조회
	List<InsaAcptVO> selectInsaAcptList(InsaAcptVO insaAcptVO);
	
	// 사원 승인 내역 정보 저장
	void saveInsaAcptList(List<InsaAcptVO> listInsaVO, String registerId);

	// 인사관리 직원 정보 저장, 삽입, 삭제
	void saveInsaList(List<InsaAcptVO> listInsaVO, String registerId);

	
}
