package nexacro.sample.service.apprline;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.apprline.ApprInsaVO;
import nexacro.sample.vo.apprline.ApprLineVO;
import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;
import nexacro.sample.vo.noti.LawsuitNotiVO;

public interface ApprLineService {

	// 결재라인조회
	List getApprovalLineList() throws Exception;

	// 결재라인조회 코드조회
	List getApprovalLineListCode(ApprLineVO apprLineVo) throws Exception;

	// 결재라인상세조회
	List getApprLineDetailList(ApprLineVO apprLineVo) throws Exception;

	// 사원 조회
	List getApprovalList(Map<String, Object> param) throws Exception;
	
	//결재라인삭제
			void DeleteAppr(Map<String, Object> param) throws Exception;
	//결재라인등록
		void InsertAppr(List<ApprLineVO> apprLineVO) throws Exception;
}
