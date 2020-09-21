package nexacro.sample.service.rais;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.rais.RaisDefVO;
import nexacro.sample.vo.rais.RaisVO;
import nexacro.sample.vo.rais.RaisreqVO;

public interface RaisService {
	//소제기 목록
	
	//소제기 현황
	public List<RaisreqVO> getRaisreqDetailList(Map<String, Object> param);

	//일반 검색
	public List<RaisVO> getRaisreqList(Map<String, Object> raisMap);
	
	//회신전용 검색
	public List<Map> getRaisreqView(Map<String, Object> raisMap);
	
	 //피고 리스트 조회RaisVO
	public List<RaisVO> getRaisreqDefList(Map<String, Object> raisMap);
	
	//피고 리스트 조회
	public List<RaisDefVO> getRaisreqDefList1(Map<String, String> raisMap);
	
	//피고 상세 조회 
	public List<Map> getRaisreqDefSelectList(String raisreqNo); 
	
	 // 소제기 수정
	public void procAllRaisreq(List<Map> params);
	
	// 회신등록수정
	public void updateRaisereqRep(List<Map> params); 
	
	 // 피고등록수정삭제
	public void saveDefAll(List<Map> params);
	
	 //소제기 등록
	public String insertRaisreq(Map<String, Object> selectMap);
	
	//소제기 의뢰자 검색
	public List<Map> getRaisMenList(Map<String, Object> ListMap); 
	
	//피고 검색 후 목록 출력
	public List<Map> getRaisreqDefSearch(List<Map> searchParams); 
	
	
	//삭제
	public void deleteDefAll(String string);
	public void deleteRaisReq(String string);

	//삽입
	public String insertRaisReq(Map<String, Object> raisMap);
	public void insertDefAll(List<Map> defParams);
	
	//수정
	public void updateRaisReq(Map<String, Object> raisMap);
	public void updateDefAll(List<Map> defParams);

	
	// 소제기 현황(다시 한  부분)
	List<RaisVO> getRaisList(Map<String, Object> raisMap);

	
	
}
