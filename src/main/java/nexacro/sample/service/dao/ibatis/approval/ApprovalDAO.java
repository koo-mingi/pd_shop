package nexacro.sample.service.dao.ibatis.approval;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import nexacro.sample.vo.approval.ApprovalAllVo;
import nexacro.sample.vo.approval.ApprovalDefVO;
import nexacro.sample.vo.approval.ApprovalProgVO;
import nexacro.sample.vo.approval.ApprovalTotalVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;



@Repository("approvalDAO")
public class ApprovalDAO extends NexacroIbatisAbstractDAO {
	

	//전체결재진행 조회
	public List<ApprovalAllVo> getApprovalAllList(Map<String, Object> params) {
		System.out.println("dao start");
		return (List<ApprovalAllVo>) list("approval.approvalDAO.getApprovalAllList", params);
	}
	
	//전체결재진행 조회
		@SuppressWarnings("unchecked")
		public List<ApprovalAllVo> getApprovalAllListPOP(Map<String, Object> params) {
			System.out.println("popdao start");
			return (List<ApprovalAllVo>) list("approval.approvalDAO.getApprovalAllListPOP", params);
		}
	//결재리스트 전체조회
		@SuppressWarnings("unchecked")
		public List<ApprovalTotalVO> getApprovalStats(ApprovalTotalVO approvalTotalVO) {
			return (List<ApprovalTotalVO>) list("approval.approvalDAO.getApprovalStats", approvalTotalVO);
		}
	

		//결재리스트 전체조회
		@SuppressWarnings("unchecked")
		public List<ApprovalTotalVO> getApprovalTotalList(ApprovalTotalVO approvalTotalVO) {
			return (List<ApprovalTotalVO>) list("approval.approvalDAO.getApprovalTotalList", approvalTotalVO);
		}

	//작성자 조회
	public List<ApprovalProgVO> getApprovalWriter(String sabun) {
		System.out.println("dao start");
		return (List<ApprovalProgVO>) list("approval.approvalDAO.getApprovalWriter", sabun);
	}
	
	//기안자&결재자 등록
	public void insertProg(ApprovalDefVO vo) throws SQLException{
		
		insert("approval.approvalDAO.getApprovalProgInsert", vo);
		insert("approval.approvalDAO.getApprovalProg", vo);
	}
	
	//기안자&결재자 수정
	public void updateProg(ApprovalDefVO vo) throws SQLException{
		
		update("approval.approvalDAO.getApprovalProgUpdate", vo);
		update("approval.approvalDAO.getApprovalUpdate", vo);
	}

	//결제라인 리스트 가져오기 - approvalProg
	@SuppressWarnings("unchecked")
	public List<ApprovalTotalVO> getApprovalPigList(ApprovalTotalVO approvalTotalVO) {
		return (List<ApprovalTotalVO>) list("approval.approvalDAO.getApprovalPigList", approvalTotalVO);
	}


	//결제라인 리스트 가져오기 - approval
	@SuppressWarnings("unchecked")
	public List<ApprovalTotalVO> getApprovalLineList(ApprovalTotalVO approvalTotalVO) {
//		List<EgovMap> s = (List<EgovMap>) list("approval.approvalDAO.getApprovalLineList", approvalTotalVO);
		return (List<ApprovalTotalVO>) list("approval.approvalDAO.getApprovalLineList", approvalTotalVO);
	}
	public List<ApprovalTotalVO> getAprvInsertList(ApprovalTotalVO approvalTotalVO) {
		return (List<ApprovalTotalVO>) list("approval.approvalDAO.getAprvInsertList", approvalTotalVO);
	}
	
	// 1차 Comment 수정
	public void updateComment(ApprovalTotalVO vo) {
		update("approval.approvalDAO.updateComment", vo);
	}
	
	public void rejectComment(ApprovalTotalVO vo) {
		update("approval.approvalDAO.rejectComment", vo);
	}
	public void approvalDeleteComment(ApprovalTotalVO approvalTotalVO) {
		delete("approval.approvalDAO.approvalDeleteCommen", approvalTotalVO);
	}
	public void insertComment(ApprovalTotalVO vo) {
		insert("approval.approvalDAO.insertComment", vo);		
	}
	public void approvalDeleteComment4(ApprovalTotalVO approvalTotalVO) {
		delete("approval.approvalDAO.approvalDeleteCommen4", approvalTotalVO);		
	}
	

}
