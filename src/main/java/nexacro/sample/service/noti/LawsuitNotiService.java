package nexacro.sample.service.noti;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;
import nexacro.sample.vo.noti.LawsuitNotiVO;

public interface LawsuitNotiService {
	
	//소송고지 내용 가져오기
	List<LawsuitNotiVO> getLawsuitNotiList(LawsuitNotiVO lawsuitNotiVO);
	
	// 소송고지 등록, 수정, 삭제
	String insertLawsuitNoti(List<LawsuitNotiVO> lawsuitNotiVO);

	//소송고지 명세
		List lawsuitNotiStatement(Map<String, Object> selectMap) throws Exception;
}
