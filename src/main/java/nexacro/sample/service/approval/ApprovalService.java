package nexacro.sample.service.approval;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import nexacro.sample.vo.approval.ApprovalAllVo;
import nexacro.sample.vo.approval.ApprovalTotalVO;
import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;
import nexacro.sample.vo.noti.LawsuitNotiVO;
import nexacro.sample.vo.approval.ApprovalDefVO;
import nexacro.sample.vo.approval.ApprovalProgVO;
import nexacro.sample.vo.approval.ApprovalTotalVO;


public interface ApprovalService {
	
		
		//전체결재진행 조회
		List<ApprovalAllVo> getApprovalAllList(Map<String, Object> param);

		//전체결재진행 조회
				List<ApprovalAllVo> getApprovalAllListPOP(Map<String, Object> param);
		//결재전체조회
	    List<ApprovalTotalVO> getApprovalStats(ApprovalTotalVO approvalTotalVO);
	    
	  //결재리스트 전체조회
		List<ApprovalTotalVO> getApprovalTotalList(ApprovalTotalVO approvalTotalVO);


		List<ApprovalProgVO> getApprovalWriter(String sabun);

		void createProg(List<ApprovalDefVO> voObject, String rowType) throws SQLException;
		
		public List<ApprovalTotalVO> getApprovalPigList(ApprovalTotalVO approvalTotalVO);

		public List<ApprovalTotalVO> getApprovalLineList(ApprovalTotalVO approvalTotalVO);


		List<ApprovalTotalVO> getAprvInsertList(ApprovalTotalVO approvalTotalVO);


		void updateComment(List<ApprovalTotalVO> voLists) throws Exception;


		void rejectComment(List<ApprovalTotalVO> voList);


		void approvalDeleteComment(ApprovalTotalVO approvalTotalVO) throws Exception;


		void createComment(List<ApprovalTotalVO> voList) throws Exception;


		void approvalDeleteComment4(ApprovalTotalVO approvalTotalVO) throws Exception;

	
}
