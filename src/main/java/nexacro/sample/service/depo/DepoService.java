package nexacro.sample.service.depo;

import java.util.List;

import nexacro.sample.vo.depo.DepoVO;
import nexacro.sample.vo.depo.SawonVO;

public interface DepoService {

	//공탁관리번호 조회
	List<DepoVO> selectDepoVoList(DepoVO searchVO);
	
	//공탁담당자 조회
	List<DepoVO> selectCharList(SawonVO searchVO);
	
	//공탁정보 조회
	List<DepoVO> selectDepoVOView(DepoVO searchVO);
	
	//공탁정보 및 담당자 저장, 수정, 삭제
	String dbAccessDepo(List<DepoVO> depoVO);
}
